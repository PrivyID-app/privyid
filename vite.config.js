import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // Use the GitHub Pages base prefix only when building for GH Pages
  // Detect deployment environment
  // Vercel sets these automatically
  // Detect deployment environment
  const isVercel = !!(process.env.VERCEL || process.env.VERCEL_URL);
  const isGitHubPages = !!(
    process.env.GITHUB_ACTIONS === "true" ||
    process.env.DEPLOY_TARGET === "gh-pages"
  );

  // Use /privyid/ base if we are building for GH Pages
  // Vercel handles root domains/subdomains, so it usually needs "/"
  const base = isGitHubPages ? "/privyid/" : "/";

  return {
    base,
    plugins: [react(), tailwindcss()],
  };
});
