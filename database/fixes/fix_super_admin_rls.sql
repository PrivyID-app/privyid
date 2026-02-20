-- SQL Script to fix RLS for Super Admin access (Run this in Supabase SQL Editor)

-- 1. Ensure the modern administrative policy exists for Tickets
DROP POLICY IF EXISTS "Super Admins and Merchants can manage tickets" ON tickets;
DROP POLICY IF EXISTS "Merchants can manage their own tickets" ON tickets;
CREATE POLICY "Super Admins and Merchants can manage tickets" ON tickets
    FOR ALL USING (
        merchant_id = auth.uid() OR 
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = TRUE)
    );

-- 2. Ensure the modern administrative policy exists for Ticket Messages
DROP POLICY IF EXISTS "Super Admins and Merchants can manage ticket messages" ON ticket_messages;
DROP POLICY IF EXISTS "Merchants can view/insert messages for their tickets" ON ticket_messages;
CREATE POLICY "Super Admins and Merchants can manage ticket messages" ON ticket_messages
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM tickets 
            WHERE tickets.id = ticket_messages.ticket_id 
            AND (
                tickets.merchant_id = auth.uid() OR
                EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = TRUE)
            )
        )
    )
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM tickets 
            WHERE tickets.id = ticket_messages.ticket_id 
            AND (
                tickets.merchant_id = auth.uid() OR
                EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = TRUE)
            )
        )
    );

-- 3. Merchants RLS
DROP POLICY IF EXISTS "Super Admins and Merchants can manage merchant profiles" ON merchants;
DROP POLICY IF EXISTS "Merchants can manage their own profile" ON merchants;
DROP POLICY IF EXISTS "Merchants can view/update own profile" ON merchants;
CREATE POLICY "Super Admins and Merchants can manage merchant profiles" ON merchants
    FOR ALL USING (
        id = auth.uid() OR 
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = TRUE)
    );

-- 4. Verifications RLS
DROP POLICY IF EXISTS "Super Admins and Merchants can manage verifications" ON verifications;
DROP POLICY IF EXISTS "Merchants can manage their own verifications" ON verifications;
CREATE POLICY "Super Admins and Merchants can manage verifications" ON verifications
    FOR ALL USING (
        merchant_id = auth.uid() OR 
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = TRUE)
    );

-- IMPORTANT: Replace 'your-email@example.com' with the email you use to login as Super Admin
-- UPDATE users SET is_admin = TRUE WHERE email = 'your-email@example.com';

-- Reload schema cache
NOTIFY pgrst, 'reload schema';
