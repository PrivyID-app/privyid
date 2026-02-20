-- Create Audit Logs Table for tracking system and user actions
CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id),
    user_email TEXT,
    action_type TEXT NOT NULL, -- login, logout, merchant_created, etc.
    resource_id TEXT, -- ID of the affected resource
    resource_type TEXT, -- merchant, verification, user, etc.
    ip_address TEXT,
    status TEXT DEFAULT 'success', -- success, failed
    details TEXT,
    metadata JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable RLS
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Admins can view all logs
CREATE POLICY "Admins can view all logs" ON audit_logs
    FOR SELECT USING (
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = TRUE)
    );
