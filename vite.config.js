import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({ 
  plugins: [react()],
  rollupOptions: {
    input: '/src/main.jsx',
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom'
    ],
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
  build: {
    sourcemap: true,
  },
})
