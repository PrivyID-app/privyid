import React from "react";
import AppRoutes from "./routes/routes";
import { OnboardingProvider } from "../features/onboarding/onboarding.context";
import { GlobalProvider } from "./GlobalContext";

import { AppProvider } from "../context/AppContext";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <GlobalProvider>
          <OnboardingProvider>
            <AppRoutes />
          </OnboardingProvider>
        </GlobalProvider>
      </AppProvider>
    </div>
  );
}

export default App;
