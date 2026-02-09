import React, { useState, useEffect } from 'react';
import { useOnboarding } from './onboarding.context';
import { ONBOARDING_STEPS, STEP_ORDER } from './onboarding.constants';
import OnboardingLayout from './layouts/OnboardingLayout';
import LoginStep from './steps/LoginStep';
import SignupStep, { SignupLeftContent } from './steps/SignupStep';
import VerifyEmailStep from './steps/VerifyEmailStep';
import WelcomeStep from './steps/WelcomeStep';
import AccountTypeStep from './steps/AccountTypeStep';
import ServiceTypeStep from './steps/ServiceTypeStep';
import ServiceTypeKYCStep from './steps/ServiceTypeKYCStep';
import ServiceTypeKYBStep from './steps/ServiceTypeKYBStep';
import ServiceTypeBothStep from './steps/ServiceTypeBothStep';
import BusinessVerificationStep, { BusinessVerificationLeftContent, BusinessVerificationLeftTopContent } from './steps/BusinessVerificationStep';
import IntegrationStep from './steps/IntegrationStep';
import SetupStep from './steps/SetupStep';

const OnboardingFlow = () => {
  const [currentStep, setCurrentStep] = useState(ONBOARDING_STEPS.LOGIN);
  const { 
    selectedServices, 
    setSelectedServices,
    setAccountType,
    setKycOptions,
    setKybOptions,
    setIntegrationMethod
  } = useOnboarding();

  // Reset onboarding state when component mounts or when returning to login
  useEffect(() => {
    if (currentStep === ONBOARDING_STEPS.LOGIN) {
      setSelectedServices([]);
      setAccountType(null);
      setKycOptions({});
      setKybOptions({});
      setIntegrationMethod(null);
    }
  }, [currentStep, setSelectedServices, setAccountType, setKycOptions, setKybOptions, setIntegrationMethod]);

  const handleNext = () => {
    const currentIndex = STEP_ORDER.indexOf(currentStep);
    let nextStepIndex = currentIndex + 1;

    if (currentStep === ONBOARDING_STEPS.SERVICE_TYPE) {
      const isKYCOnly = selectedServices.includes('kyc_only');
      const isKYBOnly = selectedServices.includes('kyb_only');
      const isBoth = selectedServices.includes('kyc_kyb');

      if (isBoth) {
        nextStepIndex = STEP_ORDER.indexOf(ONBOARDING_STEPS.SERVICE_TYPE_BOTH);
      } else if (isKYCOnly) {
        nextStepIndex = STEP_ORDER.indexOf(ONBOARDING_STEPS.SERVICE_TYPE_KYC);
      } else if (isKYBOnly) {
        nextStepIndex = STEP_ORDER.indexOf(ONBOARDING_STEPS.SERVICE_TYPE_KYB);
      } else {
        nextStepIndex = STEP_ORDER.indexOf(ONBOARDING_STEPS.SERVICE_TYPE_BOTH) + 1;
      }
    } else if (currentStep === ONBOARDING_STEPS.SERVICE_TYPE_KYC || currentStep === ONBOARDING_STEPS.SERVICE_TYPE_KYB || currentStep === ONBOARDING_STEPS.SERVICE_TYPE_BOTH) {
      // After customization, proceed to next step
      // Ensure we jump past the customization group
      nextStepIndex = STEP_ORDER.indexOf(ONBOARDING_STEPS.SERVICE_TYPE_BOTH) + 1;
    } else if (currentStep === ONBOARDING_STEPS.INTEGRATION) {
      if (!selectedServices || selectedServices.length === 0) {
        // If no services are selected, go back to service type selection
        setCurrentStep(ONBOARDING_STEPS.SERVICE_TYPE);
        return;
      }
    }

    if (nextStepIndex < STEP_ORDER.length && nextStepIndex !== -1) {
      setCurrentStep(STEP_ORDER[nextStepIndex]);
    }
  };

  const handleBack = () => {
    // Custom back logic for customization sub-steps
    if (
      currentStep === ONBOARDING_STEPS.SERVICE_TYPE_KYC || 
      currentStep === ONBOARDING_STEPS.SERVICE_TYPE_KYB ||
      currentStep === ONBOARDING_STEPS.SERVICE_TYPE_BOTH
    ) {
      setCurrentStep(ONBOARDING_STEPS.SERVICE_TYPE);
      return;
    }

    if (currentStep === ONBOARDING_STEPS.BUSINESS_VERIFICATION) {
      const isKYCOnly = selectedServices.includes('kyc_only');
      const isKYBOnly = selectedServices.includes('kyb_only');
      const isBoth = selectedServices.includes('kyc_kyb');

      if (isBoth) {
        setCurrentStep(ONBOARDING_STEPS.SERVICE_TYPE_BOTH);
      } else if (isKYCOnly) {
        setCurrentStep(ONBOARDING_STEPS.SERVICE_TYPE_KYC);
      } else if (isKYBOnly) {
        setCurrentStep(ONBOARDING_STEPS.SERVICE_TYPE_KYB);
      } else {
        setCurrentStep(ONBOARDING_STEPS.SERVICE_TYPE);
      }
      return;
    }

    const currentIndex = STEP_ORDER.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(STEP_ORDER[currentIndex - 1]);
    }
  };

  const handleSignupClick = () => {
    setCurrentStep(ONBOARDING_STEPS.SIGNUP);
  };

  const handleLoginClick = () => {
    setCurrentStep(ONBOARDING_STEPS.LOGIN);
  };

  const renderLeftContent = () => {
    switch (currentStep) {
      case ONBOARDING_STEPS.SIGNUP:
        return <SignupLeftContent />;
      case ONBOARDING_STEPS.ACCOUNT_TYPE:
      case ONBOARDING_STEPS.SERVICE_TYPE:
      case ONBOARDING_STEPS.SERVICE_TYPE_KYC:
      case ONBOARDING_STEPS.SERVICE_TYPE_KYB:
      case ONBOARDING_STEPS.SERVICE_TYPE_BOTH:
      case ONBOARDING_STEPS.INTEGRATION:
        return (
          <div className="onboarding_left_bottom row">
            <p className="onboarding_left_footer_text_bg bigger_txt">Client Onboarding</p>
            <span className="material-symbols-outlined arrow_outward" style={{ fontSize: '3rem', color: 'white' }}>arrow_outward</span>
          </div>
        );
      case ONBOARDING_STEPS.BUSINESS_VERIFICATION:
        return (
          <div className="onboarding_left_bottom_column">
            <BusinessVerificationLeftContent />
            <div className="onboarding_left_bottom_content">
                <p className="onboarding_left_footer_text_bg bigger_txt" style={{ marginTop: '0' }}>Client Onboarding</p>
                <span className="material-symbols-outlined arrow_outward" style={{ fontSize: '3rem', color: 'white' }}>arrow_outward</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case ONBOARDING_STEPS.LOGIN:
        return <LoginStep onNext={handleNext} onSignupClick={handleSignupClick} />;
      case ONBOARDING_STEPS.SIGNUP:
        return <SignupStep onNext={handleNext} onLoginClick={handleLoginClick} />;
      case ONBOARDING_STEPS.VERIFY_EMAIL:
        return <VerifyEmailStep onNext={handleNext} />;
      case ONBOARDING_STEPS.WELCOME:
        return <WelcomeStep onNext={handleNext} />;
      case ONBOARDING_STEPS.ACCOUNT_TYPE:
        return <AccountTypeStep onNext={handleNext} onBack={handleBack} />;
      case ONBOARDING_STEPS.SERVICE_TYPE:
        return <ServiceTypeStep onNext={handleNext} onBack={handleBack} />;
      case ONBOARDING_STEPS.SERVICE_TYPE_KYC:
        return <ServiceTypeKYCStep onNext={handleNext} onBack={handleBack} onStepChange={setCurrentStep} />;
      case ONBOARDING_STEPS.SERVICE_TYPE_KYB:
        return <ServiceTypeKYBStep onNext={handleNext} onBack={handleBack} onStepChange={setCurrentStep} />;
      case ONBOARDING_STEPS.SERVICE_TYPE_BOTH:
        return <ServiceTypeBothStep onNext={handleNext} onBack={handleBack} onStepChange={setCurrentStep} />;
      case ONBOARDING_STEPS.BUSINESS_VERIFICATION:
        return <BusinessVerificationStep onNext={handleNext} onBack={handleBack} />;
      case ONBOARDING_STEPS.INTEGRATION:
        return <IntegrationStep onNext={handleNext} onBack={handleBack} />;
      case ONBOARDING_STEPS.SETUP:
        return <SetupStep onNext={handleNext} onBack={handleBack} />;
      default:
        return null;
    }
  };

  const getLayoutConfig = () => {
    switch (currentStep) {
      case ONBOARDING_STEPS.LOGIN:
        return { layoutClassName: 'login_flow' };
      case ONBOARDING_STEPS.SIGNUP:
        return { layoutClassName: 'signup_flow' };
      case ONBOARDING_STEPS.VERIFY_EMAIL:
        return { layoutClassName: 'verify_email' };
      case ONBOARDING_STEPS.WELCOME:
        return { 
          layoutClassName: 'welcome_step',
          showLeftPanel: false,
          useLoginStepWrapper: false
        };
      case ONBOARDING_STEPS.ACCOUNT_TYPE:
        return { 
          layoutClassName: 'account_type',
          leftContainerClassName: 'for_acct',
          useLoginStepWrapper: false
        };
      case ONBOARDING_STEPS.SERVICE_TYPE:
        return { 
          layoutClassName: 'service_type',
          leftContainerClassName: 'for_acct',
          useLoginStepWrapper: false
        };
      case ONBOARDING_STEPS.SERVICE_TYPE_KYC:
        return { 
          layoutClassName: 'service_type_kyc',
          leftContainerClassName: 'for_acct',
          useLoginStepWrapper: false
        };
      case ONBOARDING_STEPS.SERVICE_TYPE_KYB:
        return { 
          layoutClassName: 'service_type_kyc', // Sharing layout styles
          leftContainerClassName: 'for_acct',
          useLoginStepWrapper: false
        };
      case ONBOARDING_STEPS.SERVICE_TYPE_BOTH:
        return { 
          layoutClassName: 'service_type_kyc', // Sharing layout styles
          leftContainerClassName: 'for_acct',
          useLoginStepWrapper: false
        };
      case ONBOARDING_STEPS.BUSINESS_VERIFICATION:
        return { 
          layoutClassName: 'business_verification',
          useLoginStepWrapper: false,
          leftTopContent: <BusinessVerificationLeftTopContent />
        };
      case ONBOARDING_STEPS.INTEGRATION:
        return { 
          layoutClassName: 'integration', // Matches class in HTML but we might need to check CSS
          leftContainerClassName: 'for_acct', // Assuming same sidebar style
          useLoginStepWrapper: false
        };
      case ONBOARDING_STEPS.SETUP:
        return { 
          layoutClassName: 'setup',
          leftContainerClassName: 'for_acct',
          useLoginStepWrapper: false
        };
      default:
        return { layoutClassName: 'login_flow' };
    }
  };

  const layoutConfig = getLayoutConfig();

  return (
      <OnboardingLayout 
        leftContent={renderLeftContent()}
        leftTopContent={layoutConfig.leftTopContent}
        {...layoutConfig}
      >
        {renderStep()}
      </OnboardingLayout>
  );
};

export default OnboardingFlow;
