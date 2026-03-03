import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/POC-Playground/',
  server: {
    port: 7331,
    strictPort: true,
    open: true
  }
})
