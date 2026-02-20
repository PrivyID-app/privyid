-- SQL Script to pivot foreign keys to the merchants table
-- This resolves "violates foreign key constraint verifications_merchant_id_fkey"

-- 1. Decouple merchants from strict auth link if needed (allows demo merchants)
ALTER TABLE merchants ALTER COLUMN id SET DEFAULT gen_random_uuid();

-- 2. Verifications Table Fix
ALTER TABLE verifications DROP CONSTRAINT IF EXISTS verifications_merchant_id_fkey;
ALTER TABLE verifications ADD CONSTRAINT verifications_merchant_id_fkey 
    FOREIGN KEY (merchant_id) REFERENCES merchants(id) ON DELETE CASCADE;

-- 3. Add missing Batches table infrastructure
CREATE TABLE IF NOT EXISTS batches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    merchant_id UUID REFERENCES merchants(id) NOT NULL,
    name TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'processing' CHECK (status IN ('processing', 'completed', 'failed')),
    total_records INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Ensure batch_id exists in verifications
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='verifications' AND column_name='batch_id') THEN
        ALTER TABLE verifications ADD COLUMN batch_id UUID REFERENCES batches(id) ON DELETE SET NULL;
    END IF;
END $$;

-- 4. Audit other core tables
ALTER TABLE business_details DROP CONSTRAINT IF EXISTS business_details_merchant_id_fkey;
ALTER TABLE business_details ADD CONSTRAINT business_details_merchant_id_fkey 
    FOREIGN KEY (merchant_id) REFERENCES merchants(id) ON DELETE CASCADE;

ALTER TABLE api_tokens DROP CONSTRAINT IF EXISTS api_tokens_merchant_id_fkey;
ALTER TABLE api_tokens ADD CONSTRAINT api_tokens_merchant_id_fkey 
    FOREIGN KEY (merchant_id) REFERENCES merchants(id) ON DELETE CASCADE;

ALTER TABLE tickets DROP CONSTRAINT IF EXISTS tickets_merchant_id_fkey;
ALTER TABLE tickets ADD CONSTRAINT tickets_merchant_id_fkey 
    FOREIGN KEY (merchant_id) REFERENCES merchants(id) ON DELETE CASCADE;

-- 5. RLS for Batches
ALTER TABLE batches ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Merchants can manage their own batches" ON batches;
CREATE POLICY "Merchants can manage their own batches" ON batches
    FOR ALL USING (
        merchant_id = auth.uid() OR 
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = TRUE)
    );

-- 6. Reload schema cache
NOTIFY pgrst, 'reload schema';
