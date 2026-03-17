import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../shared/services/supabase";
import { useGlobal } from "../../app/GlobalContext";
import { useOnboarding } from "./onboarding.context";
import { ONBOARDING_STEPS, STEP_ORDER } from "./onboarding.constants";
import OnboardingLayout from "./layouts/OnboardingLayout";
import LoginStep from "./steps/LoginStep";
import SignupStep, { SignupLeftContent } from "./steps/SignupStep";
import VerifyEmailStep from "./steps/VerifyEmailStep";
import WelcomeStep from "./steps/WelcomeStep";
import AccountTypeStep from "./steps/AccountTypeStep";
import ServiceTypeStep from "./steps/ServiceTypeStep";
import ServiceTypeKYCStep from "./steps/ServiceTypeKYCStep";
import ServiceTypeKYBStep from "./steps/ServiceTypeKYBStep";
import ServiceTypeBothStep from "./steps/ServiceTypeBothStep";
import BusinessVerificationStep, {
  BusinessVerificationLeftContent,
  BusinessVerificationLeftTopContent,
} from "./steps/BusinessVerificationStep";
import IntegrationStep from "./steps/IntegrationStep";
import SetupStep from "./steps/SetupStep";

const OnboardingFlow = () => {
  const navigate = useNavigate();
  const { showToast } = useGlobal();
  const [currentStep, setCurrentStep] = useState(ONBOARDING_STEPS.SIGNUP); // Default to SIGNUP as requested

  const {
    selectedServices,
    setSelectedServices,
    setAccountType,
    setKycOptions,
    setKybOptions,
    setIntegrationMethod,
  } = useOnboarding();

  const handleLoginSuccess = useCallback(
    (data) => {
      const { user, merchant, admin } = data;

      // If it's a super admin, they should have already been navigated by LoginStep
      // but we handle it here just in case to prevent crashes on merchant access.
      if (admin || user?.role === "Super Admin") {
        return;
      }

      if (merchant?.onboarding_step === "completed") {
        const serviceMap = {
          kyc: `/m/${user.id}/kyc`,
          kyb: `/m/${user.id}/kyb`,
          combined: `/m/${user.id}/combined`,
        };
        navigate(serviceMap[merchant.service_type] || `/m/${user.id}/combined`);
        return;
      }

      if (!merchant) return;

      // Resume Onboarding
      showToast("Resuming your onboarding flow...", "info");

      // Map service_type back to selectedServices
      const serviceReverseMap = {
        kyc: ["kyc_only"],
        kyb: ["kyb_only"],
        combined: ["kyc_kyb"],
      };

      if (merchant.service_type) {
        setSelectedServices(serviceReverseMap[merchant.service_type]);
      }

      // Map database step name to internal ONBOARDING_STEPS
      const stepMap = {
        verify_email: ONBOARDING_STEPS.VERIFY_EMAIL,
        welcome: ONBOARDING_STEPS.WELCOME,
        account_type: ONBOARDING_STEPS.ACCOUNT_TYPE,
        service_type: ONBOARDING_STEPS.SERVICE_TYPE,
        service_customization:
          merchant.service_type === "kyc"
            ? ONBOARDING_STEPS.SERVICE_TYPE_KYC
            : merchant.service_type === "kyb"
              ? ONBOARDING_STEPS.SERVICE_TYPE_KYB
              : ONBOARDING_STEPS.SERVICE_TYPE_BOTH,
        business_verification: ONBOARDING_STEPS.BUSINESS_VERIFICATION,
        integration: ONBOARDING_STEPS.INTEGRATION,
        setup: ONBOARDING_STEPS.SETUP,
      };

      const nextStep =
        stepMap[merchant.onboarding_step] || ONBOARDING_STEPS.WELCOME;
      setCurrentStep(nextStep);
    },
    [navigate, setSelectedServices, showToast],
  );

  const checkResumption = useCallback(async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const { data: merchant } = await supabase
        .from("merchants")
        .select("*")
        .eq("id", user.id)
        .single();

      if (merchant) {
        handleLoginSuccess({ user, merchant });
      } else {
        // Auth session exists but no merchant profile by ID.
        // Check by email to handle orphaned records.
        const { data: byEmail } = await supabase
          .from("merchants")
          .select("*")
          .eq("email", user.email)
          .single();

        if (byEmail) {
          console.log(
            "Auth session found but ID mismatch. Updating merchant ID...",
          );
          await supabase
            .from("merchants")
            .update({ id: user.id })
            .eq("email", user.email);
          byEmail.id = user.id;
          handleLoginSuccess({ user, merchant: byEmail });
        } else {
          // Profile totally missing
          console.log(
            "Auth session found but no merchant profile. Initializing...",
          );
          const { data: newMerchant, error: merchError } = await supabase
            .from("merchants")
            .upsert({
              id: user.id,
              email: user.email,
              onboarding_step: "verify_email",
            })
            .select()
            .single();

          if (newMerchant) {
            handleLoginSuccess({ user, merchant: newMerchant });
          }
        }
      }
    } catch (error) {
      console.error("Resumption check failed:", error);
    }
  }, [handleLoginSuccess]);

  useEffect(() => {
    // Check for mode parameter in URL
    const params = new URLSearchParams(window.location.search);
    const mode = params.get("mode");

    if (mode === "login") {
      setCurrentStep(ONBOARDING_STEPS.LOGIN);
    } else if (mode === "signup") {
      setCurrentStep(ONBOARDING_STEPS.SIGNUP);
    } else {
      checkResumption();
    }
  }, [checkResumption]);

  // Reset onboarding state when component mounts or when returning to login
  useEffect(() => {
    if (currentStep === ONBOARDING_STEPS.LOGIN) {
      setSelectedServices([]);
      setAccountType(null);
      setKycOptions({});
      setKybOptions({});
      setIntegrationMethod(null);
    }
  }, [
    currentStep,
    setSelectedServices,
    setAccountType,
    setKycOptions,
    setKybOptions,
    setIntegrationMethod,
  ]);

  const handleNext = () => {
    const currentIndex = STEP_ORDER.indexOf(currentStep);
    let nextStepIndex = currentIndex + 1;

    if (currentStep === ONBOARDING_STEPS.SERVICE_TYPE) {
      const isKYCOnly = selectedServices.includes("kyc_only");
      const isKYBOnly = selectedServices.includes("kyb_only");
      const isBoth = selectedServices.includes("kyc_kyb");

      if (isBoth) {
        nextStepIndex = STEP_ORDER.indexOf(ONBOARDING_STEPS.SERVICE_TYPE_BOTH);
      } else if (isKYCOnly) {
        nextStepIndex = STEP_ORDER.indexOf(ONBOARDING_STEPS.SERVICE_TYPE_KYC);
      } else if (isKYBOnly) {
        nextStepIndex = STEP_ORDER.indexOf(ONBOARDING_STEPS.SERVICE_TYPE_KYB);
      } else {
        nextStepIndex =
          STEP_ORDER.indexOf(ONBOARDING_STEPS.SERVICE_TYPE_BOTH) + 1;
      }
    } else if (
      currentStep === ONBOARDING_STEPS.SERVICE_TYPE_KYC ||
      currentStep === ONBOARDING_STEPS.SERVICE_TYPE_KYB ||
      currentStep === ONBOARDING_STEPS.SERVICE_TYPE_BOTH
    ) {
      // After customization, proceed to next step
      // Ensure we jump past the customization group
      nextStepIndex =
        STEP_ORDER.indexOf(ONBOARDING_STEPS.SERVICE_TYPE_BOTH) + 1;
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
      const isKYCOnly = selectedServices.includes("kyc_only");
      const isKYBOnly = selectedServices.includes("kyb_only");
      const isBoth = selectedServices.includes("kyc_kyb");

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
            <p className="onboarding_left_footer_text_bg bigger_txt">
              Client Onboarding
            </p>
            <span
              className="material-symbols-outlined arrow_outward"
              style={{ fontSize: "3rem", color: "white" }}
            >
              arrow_outward
            </span>
          </div>
        );
      case ONBOARDING_STEPS.BUSINESS_VERIFICATION:
        return (
          <div className="onboarding_left_bottom_column">
            <BusinessVerificationLeftContent />
            <div className="onboarding_left_bottom_content">
              <p
                className="onboarding_left_footer_text_bg bigger_txt"
                style={{ marginTop: "0" }}
              >
                Client Onboarding
              </p>
              <span
                className="material-symbols-outlined arrow_outward"
                style={{ fontSize: "3rem", color: "white" }}
              >
                arrow_outward
              </span>
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
        return (
          <LoginStep
            onNext={handleNext}
            onSignupClick={handleSignupClick}
            onLoginSuccess={handleLoginSuccess}
          />
        );
      case ONBOARDING_STEPS.SIGNUP:
        return (
          <SignupStep onNext={handleNext} onLoginClick={handleLoginClick} />
        );
      case ONBOARDING_STEPS.VERIFY_EMAIL:
        return <VerifyEmailStep onNext={handleNext} />;
      case ONBOARDING_STEPS.WELCOME:
        return <WelcomeStep onNext={handleNext} />;
      case ONBOARDING_STEPS.ACCOUNT_TYPE:
        return <AccountTypeStep onNext={handleNext} onBack={handleBack} />;
      case ONBOARDING_STEPS.SERVICE_TYPE:
        return <ServiceTypeStep onNext={handleNext} onBack={handleBack} />;
      case ONBOARDING_STEPS.SERVICE_TYPE_KYC:
        return (
          <ServiceTypeKYCStep
            onNext={handleNext}
            onBack={handleBack}
            onStepChange={setCurrentStep}
          />
        );
      case ONBOARDING_STEPS.SERVICE_TYPE_KYB:
        return (
          <ServiceTypeKYBStep
            onNext={handleNext}
            onBack={handleBack}
            onStepChange={setCurrentStep}
          />
        );
      case ONBOARDING_STEPS.SERVICE_TYPE_BOTH:
        return (
          <ServiceTypeBothStep
            onNext={handleNext}
            onBack={handleBack}
            onStepChange={setCurrentStep}
          />
        );
      case ONBOARDING_STEPS.BUSINESS_VERIFICATION:
        return (
          <BusinessVerificationStep onNext={handleNext} onBack={handleBack} />
        );
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
        return { layoutClassName: "login_flow" };
      case ONBOARDING_STEPS.SIGNUP:
        return { layoutClassName: "signup_flow" };
      case ONBOARDING_STEPS.VERIFY_EMAIL:
        return { layoutClassName: "verify_email" };
      case ONBOARDING_STEPS.WELCOME:
        return {
          layoutClassName: "welcome_step",
          showLeftPanel: false,
          useLoginStepWrapper: false,
        };
      case ONBOARDING_STEPS.ACCOUNT_TYPE:
        return {
          layoutClassName: "account_type",
          leftContainerClassName: "for_acct",
          useLoginStepWrapper: false,
        };
      case ONBOARDING_STEPS.SERVICE_TYPE:
        return {
          layoutClassName: "service_type",
          leftContainerClassName: "for_acct",
          useLoginStepWrapper: false,
        };
      case ONBOARDING_STEPS.SERVICE_TYPE_KYC:
        return {
          layoutClassName: "service_type_kyc",
          leftContainerClassName: "for_acct",
          useLoginStepWrapper: false,
        };
      case ONBOARDING_STEPS.SERVICE_TYPE_KYB:
        return {
          layoutClassName: "service_type_kyc", // Sharing layout styles
          leftContainerClassName: "for_acct",
          useLoginStepWrapper: false,
        };
      case ONBOARDING_STEPS.SERVICE_TYPE_BOTH:
        return {
          layoutClassName: "service_type_kyc", // Sharing layout styles
          leftContainerClassName: "for_acct",
          useLoginStepWrapper: false,
        };
      case ONBOARDING_STEPS.BUSINESS_VERIFICATION:
        return {
          layoutClassName: "business_verification",
          useLoginStepWrapper: false,
          leftTopContent: <BusinessVerificationLeftTopContent />,
        };
      case ONBOARDING_STEPS.INTEGRATION:
        return {
          layoutClassName: "integration", // Matches class in HTML but we might need to check CSS
          leftContainerClassName: "for_acct", // Assuming same sidebar style
          useLoginStepWrapper: false,
        };
      case ONBOARDING_STEPS.SETUP:
        return {
          layoutClassName: "setup",
          leftContainerClassName: "for_acct",
          useLoginStepWrapper: false,
        };
      default:
        return { layoutClassName: "login_flow" };
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
