# PrivyID API Connection Guide

This guide details how to integrate with the PrivyID identity infrastructure and explore demo verification services.

## 1. Authentication

All requests to the PrivyID API require an API Key. You can obtain your keys from the **Integration Setup** step of the onboarding flow or from your **Dashboard > API Settings**.

```http
Authorization: Bearer sk_live_xxxxxxxxxxxxxx
```

## 2. Environment Base URLs

- **Sandbox:** `https://api.sandbox.privyid.cloud/v1`
- **Production:** `https://api.privyid.cloud/v1`

---

## 3. Demo Verification Integrations

To test the system during the demo phase, we recommend using the following free/mock services:

### A. Mock Identity (RandomUser.me)

Useful for testing KYC data mapping without real documents.

**Endpoint:** `https://randomuser.me/api/`
**Purpose:** Simulates fetching user profile data (Name, Email, Photo).

### B. Document Verification Simulation

For the demo, you can use the built-in **Sandbox Mode** which accepts any valid-looking image and returns a "Verified" status after a 3-second simulation delay.

### C. Live Demo Endpoints

- **KYC Verification:** `POST /verifications/kyc`
- **KYB Verification:** `POST /verifications/kyb`

---

## 4. Example Integration (Node.js)

```javascript
const PrivyID = require("privyid-sdk");

const client = new PrivyID({
  apiKey: "your_api_key_here",
  environment: "sandbox",
});

// Start verification session
const session = await client.verifications.create({
  type: "kyc",
  callback_url: "https://your-app.com/webhook",
  customer_id: "user_123",
});

console.log("Redirect user to:", session.url);
```

## 5. Webhooks

PrivyID sends webhooks to your server when a verification status changes.

```json
{
  "event": "verification.completed",
  "data": {
    "token": "tok_verified_abc123",
    "status": "approved",
    "metadata": {
      "user_id": "user_123"
    }
  }
}
```
