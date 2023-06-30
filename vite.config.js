import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({ 
  plugins: [react()],
  optimizeDeps: {
    include: [
      'react',
      'react-dom/client'
    ],
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  build: {
    sourcemap: true,
  },
})
