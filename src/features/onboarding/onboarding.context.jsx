import React, { createContext, useContext, useState } from 'react';

const OnboardingContext = createContext(null);

export const OnboardingProvider = ({ children }) => {
  const [accountType, setAccountType] = useState(null);
  const [selectedServices, setSelectedServices] = useState([]);
  const [kycOptions, setKycOptions] = useState({});
  const [kybOptions, setKybOptions] = useState({});
  const [integrationMethod, setIntegrationMethod] = useState(null);

  const value = {
    accountType,
    setAccountType,
    selectedServices,
    setSelectedServices,
    kycOptions,
    setKycOptions,
    kybOptions,
    setKybOptions,
    integrationMethod,
    setIntegrationMethod,
  };

  return (
    <OnboardingContext.Provider value={value}>
      {children}
    </OnboardingContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within OnboardingProvider');
  }
  return context;
};
