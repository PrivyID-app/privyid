import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginStep from '../steps/LoginStep';
import OnboardingLayout from '../layouts/OnboardingLayout'; // Reusing layout

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = (userData) => {
    console.log('Standalone Login successful:', userData);
    // Redirect to dashboard or user account page
    navigate('/dashboard'); // Placeholder route
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };

  return (
    <OnboardingLayout layoutClassName="login_flow">
      <LoginStep onLoginSuccess={handleLoginSuccess} onSignupClick={handleSignupClick} />
    </OnboardingLayout>
  );
};

export default LoginPage;
