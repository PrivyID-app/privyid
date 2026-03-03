# API Reference & Future Integrations

This document serves as a reference for external KYC, KYB, and Identity Verification APIs that can be integrated into the PrivyID platform.

## Proposed External APIs for Integration

### 1. [Stripe Identity](https://stripe.com/identity)

- **Focus**: Global KYC and ID document verification.
- **Why**: Excellent documentation and robust infrastructure.
- **Sample Request**:
  ```bash
  curl https://api.stripe.com/v1/identity/verification_sessions \
    -u <YOUR_STRIPE_KEY>: \
    -d type=document \
    -d "options[document][require_id_number]"=true
  ```

### 2. [Sumsub](https://sumsub.com/)

- **Focus**: All-in-one compliance (KYC, KYB, AML).
- **Why**: Specifically strong in KYB (Business verification) and global coverage.
- **Sample Integration**:
  - Uses a WebSDK for the verification flow.
  - Webhooks for status updates (`applicantUpdated`, `applicantReviewed`).

### 3. [Onfido](https://onfido.com/)

- **Focus**: High-end AI-powered document and biometric verification.
- **Why**: Industry standard for enterprise identity.
- **Key Features**: Liveness detection (video verification).

### 4. [Persona](https://withpersona.com/)

- **Focus**: Highly customizable verification flows.
- **Why**: Great for building complex onboarding logic without data custody.

## Internal PrivyID API Idea

Once implemented, the PrivyID API might look like this:

### Initiate Verification

`POST /api/v1/verifications`
**Headers**: `Authorization: Bearer <API_KEY>`
**Request body**:

```json
{
  "user_id": "customer_99",
  "verification_type": "kyc",
  "success_url": "https://clientapp.com/success",
  "webhook_url": "https://clientapp.com/webhooks/privyid"
}
```

**Response**:

```json
{
  "id": "v_12345",
  "verification_url": "https://privyid.com/verify/v_12345",
  "status": "initiated"
}
```

### Webhook Payload (Status Update)

`POST <merchant_webhook_url>`

```json
{
  "event": "verification.completed",
  "data": {
    "verification_id": "v_12345",
    "user_id": "customer_99",
    "token": "pit_abc123ez90",
    "status": "completed"
  }
}
```
