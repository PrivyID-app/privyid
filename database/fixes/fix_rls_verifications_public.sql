-- SQL Script to allow public insertions into verifications table
-- This allows the Mobile Verification flow (unauthenticated users) to submit data
-- while keeping viewing/updating restricted to merchants and admins.

-- 1. Create a policy to allow ANYONE to insert into verifications
-- This is necessary because customers using a mobile link are not logged in.
DROP POLICY IF EXISTS "Public can insert verifications" ON verifications;
CREATE POLICY "Public can insert verifications" ON verifications
    FOR INSERT 
    WITH CHECK (true);

-- 2. Ensure existing policies for management are still valid
-- The table should already have "Super Admins and Merchants can manage verifications" 
-- which covers SELECT, UPDATE, DELETE based on merchant_id = auth.uid()

-- 3. Grant necessary permissions to anon and authenticated roles
-- This ensures the PostgREST API can actually execute the insert
GRANT INSERT ON verifications TO anon, authenticated;

-- 4. Reload schema cache to ensure changes take effect immediately

NOTIFY pgrst, 'reload schema';

COMMENT ON POLICY "Public can insert verifications" ON verifications IS 'Allows customers to submit identity verification data without logging in.';
