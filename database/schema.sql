-- Database Schema for PrivyID Application
-- This schema represents the future state of the database for storing user, merchant, and verification data.

-- Users Table: Stores account information for platform users
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    full_name TEXT,
    is_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Merchants Table: Stores business information for clients using the API
-- The 'id' corresponds to the Supabase Auth User ID (auth.uid())
CREATE TABLE IF NOT EXISTS merchants (
    id UUID PRIMARY KEY REFERENCES auth.users(id),
    email TEXT UNIQUE NOT NULL,
    business_name TEXT,
    slogan TEXT,
    logo_url TEXT,
    website_url TEXT,
    account_type TEXT CHECK (account_type IN ('individual', 'business')),
    company_type TEXT, -- Startup, Enterprise
    service_type TEXT CHECK (service_type IN ('kyc', 'kyb', 'combined')),
    verification_url_slug TEXT UNIQUE,
    onboarding_step TEXT DEFAULT 'verify_email',
    verification_status TEXT DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Merchant Users Table: For team management
CREATE TABLE IF NOT EXISTS merchant_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    merchant_id UUID REFERENCES auth.users(id) NOT NULL,
    user_id UUID REFERENCES auth.users(id), -- If they are already a platform user
    email TEXT NOT NULL,
    full_name TEXT,
    role TEXT NOT NULL DEFAULT 'member' CHECK (role IN ('owner', 'admin', 'member')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(merchant_id, email)
);

-- API Tokens Table: Stores API credentials for merchants
CREATE TABLE IF NOT EXISTS api_tokens (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    merchant_id UUID REFERENCES auth.users(id) NOT NULL,
    name TEXT NOT NULL,
    token TEXT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(merchant_id, name)
);

-- Business Details Table: Stores KYB information for merchants
CREATE TABLE IF NOT EXISTS business_details (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    merchant_id UUID REFERENCES auth.users(id) NOT NULL,
    business_name TEXT NOT NULL,
    registration_number TEXT NOT NULL,
    tax_id TEXT NOT NULL,
    country TEXT NOT NULL,
    business_address TEXT NOT NULL,
    supporting_documents_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(merchant_id)
);

-- Verifications Table: Tracks identity verification requests
CREATE TABLE IF NOT EXISTS verifications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    merchant_id UUID REFERENCES auth.users(id) NOT NULL,
    customer_name TEXT,
    customer_email TEXT,
    user_identifier TEXT, -- Optional, provided by merchant
    status TEXT NOT NULL DEFAULT 'initiated' CHECK (status IN ('initiated', 'pending', 'approved', 'rejected', 'failed', 'expired')),
    verification_type TEXT, -- e.g. 'kyc', 'kyb'
    type TEXT, -- ID type or service type (Passport, Driver License, etc.)
    source TEXT DEFAULT 'api' CHECK (source IN ('api', 'single', 'batch')),
    token TEXT UNIQUE,
    metadata JSONB,
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Support Tickets Table: Stores support requests from merchants
CREATE TABLE IF NOT EXISTS tickets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    merchant_id UUID REFERENCES auth.users(id) NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    priority TEXT NOT NULL CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
    status TEXT NOT NULL DEFAULT 'open',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Ticket Messages Table: Stores the conversation within a ticket
CREATE TABLE IF NOT EXISTS ticket_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    ticket_id UUID REFERENCES tickets(id) ON DELETE CASCADE NOT NULL,
    sender_id UUID REFERENCES auth.users(id) NOT NULL,
    sender_type TEXT NOT NULL CHECK (sender_type IN ('merchant', 'admin')),
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Enable RLS on all tables
ALTER TABLE merchants ENABLE ROW LEVEL SECURITY;
ALTER TABLE merchant_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE api_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_details ENABLE ROW LEVEL SECURITY;
ALTER TABLE verifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE tickets ENABLE ROW LEVEL SECURITY;
ALTER TABLE ticket_messages ENABLE ROW LEVEL SECURITY;

-- RLS Policies

-- Merchants
CREATE POLICY "Merchants can view/update own profile" ON merchants
    FOR ALL USING (
        id = auth.uid() OR 
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = TRUE)
    );

-- Merchant Users
CREATE POLICY "Merchants can manage their team" ON merchant_users
    FOR ALL USING (merchant_id = auth.uid());

-- API Tokens
CREATE POLICY "Merchants can manage their own tokens" ON api_tokens
    FOR ALL USING (merchant_id = auth.uid());

-- Business Details
CREATE POLICY "Merchants can manage their business details" ON business_details
    FOR ALL USING (
        merchant_id = auth.uid() OR 
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = TRUE)
    );

-- Verifications
CREATE POLICY "Merchants can manage their own verifications" ON verifications
    FOR ALL USING (
        merchant_id = auth.uid() OR 
        EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND is_admin = TRUE)
    );

-- Tickets
CREATE POLICY "Merchants can manage their own tickets" ON tickets
    FOR ALL USING (merchant_id = auth.uid());

-- Ticket Messages
CREATE POLICY "Merchants can view/insert messages for their tickets" ON ticket_messages
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM tickets 
            WHERE tickets.id = ticket_messages.ticket_id 
            AND tickets.merchant_id = auth.uid()
        )
    );

-- Verification Codes Table: Stores 4-digit PINs for email verification
CREATE TABLE IF NOT EXISTS verification_codes (
    id BIGSERIAL PRIMARY KEY,
    email TEXT NOT NULL,
    code TEXT NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
