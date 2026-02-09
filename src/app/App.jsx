import React from 'react';
import AppRoutes from './routes/routes';
import { OnboardingProvider } from '../features/onboarding/onboarding.context';

function App() {
  return (
    <div className="App">
      <OnboardingProvider>
        <AppRoutes />
      </OnboardingProvider>
    </div>
  );
}

export default App;
