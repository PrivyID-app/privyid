-- FINAL ORPHAN-AWARE DATABASE REPAIR SCRIPT 
-- 1. DROP ALL OLD CONSTRAINTS
DO $$ 
DECLARE 
    r RECORD;
BEGIN
    FOR r IN (
        SELECT tc.table_name, tc.constraint_name
        FROM information_schema.table_constraints tc
        JOIN information_schema.key_column_usage kcu ON tc.constraint_name = kcu.constraint_name
        WHERE tc.table_schema = 'public' 
          AND tc.constraint_type = 'FOREIGN KEY'
          AND (tc.table_name IN ('merchants', 'verifications', 'batches', 'business_details', 'api_tokens', 'tickets', 'ticket_messages', 'merchant_users'))
    ) LOOP
        EXECUTE 'ALTER TABLE ' || quote_ident(r.table_name) || ' DROP CONSTRAINT ' || quote_ident(r.constraint_name);
    END LOOP;
END $$;

-- 2. IDENTITY SYNC (Deep Clean)
-- We need to ensure every Auth User has a valid Merchant record.
-- If a merchant record exists with the same email but different ID, we update the children first.

DO $$
BEGIN
    -- Update orphans: if a merchant will be deleted/changed, point its children to the correct Auth ID first
    UPDATE verifications v SET merchant_id = u.id FROM auth.users u WHERE v.merchant_id IN (SELECT m.id FROM merchants m WHERE m.email = u.email AND m.id != u.id);
    UPDATE business_details b SET merchant_id = u.id FROM auth.users u WHERE b.merchant_id IN (SELECT m.id FROM merchants m WHERE m.email = u.email AND m.id != u.id);
    UPDATE tickets t SET merchant_id = u.id FROM auth.users u WHERE t.merchant_id IN (SELECT m.id FROM merchants m WHERE m.email = u.email AND m.id != u.id);
    
    -- Now safe to delete merchants that conflict with actual Auth Users
    DELETE FROM merchants WHERE email IN (SELECT email FROM auth.users) AND id NOT IN (SELECT id FROM auth.users);
    
    -- Insert/Update fresh records for all Auth users
    INSERT INTO merchants (id, email, business_name, service_type, onboarding_step)
    SELECT id, email, 'Account (' || email || ')', 'combined', 'completed'
    FROM auth.users
    ON CONFLICT (id) DO UPDATE SET email = EXCLUDED.email;
END $$;

-- 3. ORPHAN CLEANUP (CRITICAL)
-- Any records left that don't match a merchant MUST be removed before adding FKs
DELETE FROM verifications WHERE merchant_id NOT IN (SELECT id FROM merchants);
DELETE FROM business_details WHERE merchant_id NOT IN (SELECT id FROM merchants);
DELETE FROM api_tokens WHERE merchant_id NOT IN (SELECT id FROM merchants);
DELETE FROM tickets WHERE merchant_id NOT IN (SELECT id FROM merchants);

DO $$ 
BEGIN 
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'merchant_users') THEN
        DELETE FROM merchant_users WHERE merchant_id NOT IN (SELECT id FROM merchants);
    END IF;
END $$;

-- 4. RE-ESTABLISH ALL PIVOTED FOREIGN KEYS
ALTER TABLE verifications ADD CONSTRAINT verifications_merchant_id_fkey FOREIGN KEY (merchant_id) REFERENCES merchants(id) ON DELETE CASCADE;
ALTER TABLE business_details ADD CONSTRAINT business_details_merchant_id_fkey FOREIGN KEY (merchant_id) REFERENCES merchants(id) ON DELETE CASCADE;
ALTER TABLE api_tokens ADD CONSTRAINT api_tokens_merchant_id_fkey FOREIGN KEY (merchant_id) REFERENCES merchants(id) ON DELETE CASCADE;

DO $$ 
BEGIN 
    IF EXISTS (SELECT 1 FROM information_schema.tables WHERE table_name = 'merchant_users') THEN
        ALTER TABLE merchant_users ADD CONSTRAINT merchant_users_merchant_id_fkey FOREIGN KEY (merchant_id) REFERENCES merchants(id) ON DELETE CASCADE;
    END IF;
END $$;

ALTER TABLE tickets ADD CONSTRAINT tickets_merchant_id_fkey FOREIGN KEY (merchant_id) REFERENCES merchants(id) ON DELETE CASCADE;

-- 5. BATCH INFRASTRUCTURE
CREATE TABLE IF NOT EXISTS batches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    merchant_id UUID REFERENCES merchants(id) ON DELETE CASCADE NOT NULL,
    name TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'processing' CHECK (status IN ('processing', 'completed', 'failed')),
    total_records INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='verifications' AND column_name='batch_id') THEN
        ALTER TABLE verifications ADD COLUMN batch_id UUID REFERENCES batches(id) ON DELETE SET NULL;
    END IF;
END $$;

-- 6. SECURITY
ALTER TABLE merchants ENABLE ROW LEVEL SECURITY;
ALTER TABLE verifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE batches ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Admin/Owner Access" ON merchants;
CREATE POLICY "Admin/Owner Access" ON merchants FOR ALL USING (id = auth.uid() OR EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = TRUE));
DROP POLICY IF EXISTS "Admin/Owner Access" ON verifications;
CREATE POLICY "Admin/Owner Access" ON verifications FOR ALL USING (merchant_id = auth.uid() OR EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = TRUE));
DROP POLICY IF EXISTS "Admin/Owner Access" ON batches;
CREATE POLICY "Admin/Owner Access" ON batches FOR ALL USING (merchant_id = auth.uid() OR EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = TRUE));

-- 7. RELOAD CACHE
NOTIFY pgrst, 'reload schema';
