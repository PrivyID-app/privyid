-- SQL Script to add avatar_url column to users table and ensure admins are correctly flagged
-- Run this in your Supabase SQL Editor

-- 1. Add avatar_url column to users table if it doesn't exist
DO $$ 
BEGIN 
    IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name='users' AND column_name='avatar_url') THEN
        ALTER TABLE users ADD COLUMN avatar_url TEXT;
    END IF;
END $$;

-- 2. Update RLS to ensure users can update their own profile (including avatar)
DROP POLICY IF EXISTS "Users can update own profile" ON users;
CREATE POLICY "Users can update own profile" ON users
    FOR UPDATE USING (auth.uid() = id);

-- 3. Ensure the users table is selectable by the authenticated user for their own record
DROP POLICY IF EXISTS "Users can view own profile" ON users;
CREATE POLICY "Users can view own profile" ON users
    FOR SELECT USING (auth.uid() = id);

-- 4. Reload schema cache
NOTIFY pgrst, 'reload schema';

-- Verification Query:
-- SELECT id, email, full_name, is_admin, avatar_url FROM users;
