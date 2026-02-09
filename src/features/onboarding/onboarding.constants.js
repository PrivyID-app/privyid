export const ONBOARDING_STEPS = {
  LOGIN: 'login',
  SIGNUP: 'signup',
  VERIFY_EMAIL: 'verify_email',
  WELCOME: 'welcome',
  ACCOUNT_TYPE: 'account_type',
  SERVICE_TYPE: 'service_type',
  SERVICE_TYPE_KYC: 'service_type_kyc',
  SERVICE_TYPE_KYB: 'service_type_kyb',
  SERVICE_TYPE_BOTH: 'service_type_both',
  BUSINESS_VERIFICATION: 'business_verification',
  INTEGRATION: 'integration',
  SETUP: 'setup',
};

export const STEP_ORDER = [
  ONBOARDING_STEPS.LOGIN,
  ONBOARDING_STEPS.SIGNUP,
  ONBOARDING_STEPS.VERIFY_EMAIL,
  ONBOARDING_STEPS.WELCOME,
  ONBOARDING_STEPS.ACCOUNT_TYPE,
  ONBOARDING_STEPS.SERVICE_TYPE,
  ONBOARDING_STEPS.SERVICE_TYPE_KYC,
  ONBOARDING_STEPS.SERVICE_TYPE_KYB,
  ONBOARDING_STEPS.SERVICE_TYPE_BOTH,
  ONBOARDING_STEPS.BUSINESS_VERIFICATION,
  ONBOARDING_STEPS.INTEGRATION,
  ONBOARDING_STEPS.SETUP,
];

export const ACCOUNT_PLANS = {
  STARTUP: 'startup',
  ENTERPRISE: 'enterprise',
};

export const ACCOUNT_TYPE_STEPS = [
  { name: 'Your Plan', key: 'plan' },
  { name: 'Select Service', key: 'service' },
  { name: 'KYB Verification', key: 'kyb' },
  { name: 'Integration', key: 'integration' },
  { name: 'Setup', key: 'setup' },
];
