import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // Use relative base path to ensure assets load correctly on any platform (GH Pages, Vercel, etc.)
  const base = "./";

  return {
    base,
    plugins: [react(), tailwindcss()],
  };
});
