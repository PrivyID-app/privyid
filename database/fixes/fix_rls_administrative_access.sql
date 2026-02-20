-- SQL Script to enable Administrative Access via RLS
-- This allows super admins to manage data for all merchants

-- 1. Add is_admin column to users table if it doesn't exist
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='users' AND column_name='is_admin') THEN
        ALTER TABLE users ADD COLUMN is_admin BOOLEAN DEFAULT FALSE;
    END IF;
END $$;

-- 2. Update RLS Policy for Merchants
DROP POLICY IF EXISTS "Merchants can view/update own profile" ON merchants;
CREATE POLICY "Merchants can manage their own profile" ON merchants
    FOR ALL USING (
        id = auth.uid() OR 
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = TRUE)
    );

-- 3. Update RLS Policy for Business Details
DROP POLICY IF EXISTS "Merchants can manage their business details" ON business_details;
CREATE POLICY "Merchants can manage their business details" ON business_details
    FOR ALL USING (
        merchant_id = auth.uid() OR 
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = TRUE)
    );

-- 4. Update RLS Policy for Verifications
DROP POLICY IF EXISTS "Merchants can manage their own verifications" ON verifications;
CREATE POLICY "Merchants can manage their own verifications" ON verifications
    FOR ALL USING (
        merchant_id = auth.uid() OR 
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = TRUE)
    );

-- 5. Helper: Set a specific user as admin (Optional)
-- UPDATE users SET is_admin = TRUE WHERE email = 'your-admin@email.com';

-- 6. Reload schema cache
NOTIFY pgrst, 'reload schema';
