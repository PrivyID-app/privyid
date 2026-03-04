import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // Use the GitHub Pages base prefix only when building for GH Pages
  // Detect deployment environment
  // Vercel sets these automatically
  const isVercel = !!(
    process.env.VERCEL ||
    process.env.VITE_VERCEL ||
    process.env.VERCEL_URL
  );

  // GitHub Actions typically sets GITHUB_ACTIONS
  const isGitHubPages =
    process.env.GITHUB_ACTIONS === "true" ||
    process.env.DEPLOY_TARGET === "gh-pages";

  // Only use the /privyid/ base if we are building for GH Pages and NOT on Vercel
  const base = isGitHubPages && !isVercel ? "/privyid/" : "/";

  return {
    base,
    plugins: [react(), tailwindcss()],
  };
});
