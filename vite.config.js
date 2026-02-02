import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  // Use the GitHub Pages base only for build; keep dev server at root
  const base = command === 'build' ? '/privyid/' : '/'
  return {
    base,
    plugins: [react()],
  }
})
