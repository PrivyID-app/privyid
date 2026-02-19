import React from "react";
import AppRoutes from "./routes/routes";
import { OnboardingProvider } from "../features/onboarding/onboarding.context";
import { GlobalProvider } from "./GlobalContext";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <OnboardingProvider>
          <AppRoutes />
        </OnboardingProvider>
      </GlobalProvider>
    </div>
  );
}

export default App;
