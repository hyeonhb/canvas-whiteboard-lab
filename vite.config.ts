import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    forwardConsole: {
      unhandledErrors: true,
      logLevels: ['log', 'info', 'warn', 'error', 'debug'],
    },
  },
})
