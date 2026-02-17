import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignupStep, { SignupLeftContent } from '../steps/SignupStep';
import OnboardingLayout from '../layouts/OnboardingLayout'; // Reusing layout
import { ONBOARDING_STEPS } from '../onboarding.constants'; // Assuming this is needed for initial step

const SignupPage = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    // After signup, proceed to the full onboarding flow
    navigate('/onboarding'); // Start full onboarding flow
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <OnboardingLayout layoutClassName="signup_flow" leftContent={<SignupLeftContent />}>
      <SignupStep onNext={handleNext} onLoginClick={handleLoginClick} />
    </OnboardingLayout>
  );
};

export default SignupPage;
