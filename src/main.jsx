console.log("BOOT: main.jsx loaded and starting imports...");

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/fonts.css";
import "./features/onboarding/onboarding.css";
import "./styles/tailwind.css";

import App from "./app/App.jsx";
import { AppProvider } from "./context/AppContext";
import { Analytics } from "@vercel/analytics/react";

console.log("BOOT: Imports completed, attempting render...");

const rootElement = document.getElementById("root");

if (rootElement) {
  // Early check for environment variables to help debug blank pages
  if (!import.meta.env.VITE_SUPABASE_URL) {
    console.error("CRITICAL ERROR: VITE_SUPABASE_URL is missing.");
    // Optionally show a message on the page if we're in development
    if (import.meta.env.DEV) {
      rootElement.innerHTML = `
        <div style="padding: 20px; color: white; background: #c0392b; font-family: sans-serif;">
          <h1>Configuration Error</h1>
          <p>The Supabase URL is missing. Please check your .env file or Vercel Environment Variables.</p>
        </div>
      `;
    }
  }

  try {
    createRoot(rootElement).render(
      <StrictMode>
        <AppProvider>
          <App />
          <Analytics />
        </AppProvider>
      </StrictMode>,
    );
    console.log("BOOT: React Render triggered.");
  } catch (e) {
    console.error("BOOT RENDER ERROR:", e);
    // Ensure we don't leave a blank page if possible
    rootElement.innerHTML = `<div style="padding:20px; color:red;">Initialization Error: ${e.message}</div>`;
  }
} else {
  console.error("BOOT ERROR: Root element not found");
}
