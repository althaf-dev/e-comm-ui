import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    hmr:false,
    watch: {
      usePolling: true, // Forces Vite to use polling instead of WebSockets
    }
  }
})
