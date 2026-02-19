-- Database Schema for PrivyID Application
-- This schema represents the future state of the database for storing user, merchant, and verification data.

-- Users Table: Stores account information for platform users
CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    full_name TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Merchants Table: Stores business information for clients using the API
CREATE TABLE IF NOT EXISTS merchants (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    business_name TEXT NOT NULL,
    website_url TEXT,
    account_type TEXT CHECK (account_type IN ('individual', 'business')),
    verification_status TEXT DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- API Tokens Table: Stores API credentials for merchants
CREATE TABLE IF NOT EXISTS api_tokens (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    merchant_id UUID REFERENCES auth.users(id) NOT NULL,
    name TEXT NOT NULL, -- e.g., 'Default Token'
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
    merchant_id UUID REFERENCES merchants(id),
    user_identifier TEXT NOT NULL, -- ID provided by the merchant
    status TEXT NOT NULL CHECK (status IN ('initiated', 'pending', 'completed', 'failed', 'expired')),
    verification_type TEXT CHECK (verification_type IN ('kyc', 'kyb', 'both')),
    token TEXT UNIQUE NOT NULL, -- The PrivyID token returned to the merchant
    metadata JSONB, -- Additional data provided by the merchant or captured during flow
    completed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Audit Logs Table: Tracks sensitive actions in the platform
CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    actor_id UUID REFERENCES users(id),
    action TEXT NOT NULL,
    resource_type TEXT NOT NULL,
    resource_id UUID,
    ip_address TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Verification Codes Table: Stores 4-digit PINs for email verification
CREATE TABLE IF NOT EXISTS verification_codes (
    id BIGSERIAL PRIMARY KEY,
    email TEXT NOT NULL,
    code TEXT NOT NULL,
    expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
