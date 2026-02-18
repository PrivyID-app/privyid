import React from "react";
import LoginStep from "../../features/onboarding/steps/LoginStep";
import OnboardingLayout from "../../features/onboarding/layouts/OnboardingLayout";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (userData) => {
    console.log("Login successful:", userData);
    navigate("/dashboard"); // Placeholder
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
      />
    </OnboardingLayout>
  );
};

export default LoginPage;
