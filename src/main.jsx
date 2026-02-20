console.log("BOOT: main.jsx loaded and starting imports...");

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/fonts.css";
import "./features/onboarding/onboarding.css";
import "./styles/tailwind.css";

import App from "./app/App.jsx";
import { AppProvider } from "./context/AppContext";

console.log("BOOT: Imports completed, attempting render...");

const rootElement = document.getElementById("root");

if (rootElement) {
  try {
    createRoot(rootElement).render(
      <StrictMode>
        <AppProvider>
          <App />
        </AppProvider>
      </StrictMode>,
    );
    console.log("BOOT: React Render triggered.");
  } catch (e) {
    console.error("BOOT RENDER ERROR:", e);
    alert("BOOT RENDER ERROR: " + e.message);
  }
} else {
  console.error("BOOT ERROR: Root element not found");
}
