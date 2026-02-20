import React from "react";
import LoginStep from "../../features/onboarding/steps/LoginStep";
import OnboardingLayout from "../../features/onboarding/layouts/OnboardingLayout";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (data) => {
    const { user, merchant } = data;
    console.log("Login successful:", user);

    if (merchant.onboarding_step === "completed") {
      const serviceMap = {
        kyc: `/m/${user.id}/kyc`,
        kyb: `/m/${user.id}/kyb`,
        combined: `/m/${user.id}/combined`,
      };
      navigate(serviceMap[merchant.service_type] || `/m/${user.id}/combined`);
    } else {
      // If onboarding not completed, go to onboarding flow
      navigate("/onboarding");
    }
  };

  const handleSignupClick = () => {
    navigate("/onboarding?mode=signup");
  };

  return (
    <OnboardingLayout
      layoutClassName="login_flow"
      showLeftPanel={true}
      useLoginStepWrapper={true}
    >
      <LoginStep
        onLoginSuccess={handleLoginSuccess}
        onSignupClick={handleSignupClick}
        onNext={() => navigate("/onboarding")}
      />
    </OnboardingLayout>
  );
};

export default LoginPage;
