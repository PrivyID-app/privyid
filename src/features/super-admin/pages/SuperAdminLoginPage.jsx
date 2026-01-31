import React from "react";
import { useNavigate } from "react-router-dom";
import OnboardingLayout from "../../onboarding/layouts/OnboardingLayout";
import AdminLoginStep from "../components/AdminLoginStep";

const SuperAdminLoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Navigate to Super Admin Dashboard
    navigate("/super-admin");
  };

  const adminLeftContent = (
    <>
      <p className="onboarding_left_footer_text_bg">Super Admin Portal</p>
      <p className="onboarding_left_footer_text_sm">
        Restricted access for system administrators only.
      </p>
    </>
  );

  return (
    <OnboardingLayout
      leftContent={adminLeftContent}
      layoutClassName="login_flow"
    >
      <AdminLoginStep onNext={handleLogin} />
    </OnboardingLayout>
  );
};

export default SuperAdminLoginPage;
