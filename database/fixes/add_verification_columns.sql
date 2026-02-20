-- SQL Script to add missing columns to verifications table
-- This fixes the "Could not find column... in schema cache" and mismatch errors

-- 1. Add verification_type if it doesn't exist
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='verifications' AND column_name='verification_type') THEN
        ALTER TABLE verifications ADD COLUMN verification_type TEXT;
    END IF;
END $$;

-- 2. Ensure metadata column exists (it should be in schema.sql but may be missing in live DB)
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns 
                   WHERE table_name='verifications' AND column_name='metadata') THEN
        ALTER TABLE verifications ADD COLUMN metadata JSONB;
    END IF;
END $$;

-- 3. Notify PostgREST to reload schema cache
-- Note: This is usually automatic but running it can help in some environments
NOTIFY pgrst, 'reload schema';

COMMENT ON COLUMN verifications.verification_type IS 'Type of verification (kyc or kyb)';
COMMENT ON COLUMN verifications.metadata IS 'Flexible storage for ID numbers and extra verification data';
