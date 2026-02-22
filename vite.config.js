import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // Use the GitHub Pages base prefix only when building for GH Pages
  // VERCEL is automatically set by the Vercel build environment
  const isVercel = process.env.VERCEL === "1" || !!process.env.VITE_VERCEL;
  const base = command === "build" && !isVercel ? "/privyid/" : "/";

  return {
    base,
    plugins: [react(), tailwindcss()],
  };
});
