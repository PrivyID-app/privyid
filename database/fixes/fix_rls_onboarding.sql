-- SQL Script to fix RLS policies for business_details
-- This allows merchants to insert/update their own business details even before full email confirmation
-- (Provided they have the correct merchant_id/Auth ID)

-- 1. Ensure RLS is enabled
ALTER TABLE business_details ENABLE ROW LEVEL SECURITY;

-- 2. Drop existing restrictive policy
DROP POLICY IF EXISTS "Merchants can manage their business details" ON business_details;

-- 3. Create more permissive policy for onboarding
-- This allows ALL operations if the merchant_id matches the auth.uid()
-- Note: If email confirmation is disabled, auth.uid() will be populated immediately.
CREATE POLICY "Merchants can manage their business details" ON business_details
    FOR ALL 
    USING (merchant_id = auth.uid())
    WITH CHECK (merchant_id = auth.uid());

-- 4. Also ensure merchants table has similar permissive access
DROP POLICY IF EXISTS "Merchants can view/update own profile" ON merchants;
CREATE POLICY "Merchants can view/update own profile" ON merchants
    FOR ALL 
    USING (id = auth.uid())
    WITH CHECK (id = auth.uid());

-- 5. Grant permissions to authenticated and anon roles (if needed for onboarding)
GRANT ALL ON business_details TO authenticated;
GRANT ALL ON merchants TO authenticated;
GRANT ALL ON business_details TO service_role;
GRANT ALL ON merchants TO service_role;
