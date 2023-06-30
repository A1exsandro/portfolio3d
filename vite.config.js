import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({ 
  plugins: [react()],
  rollupOptions: {
    input: '/src/main.jsx',
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.jsx'),
      },
    },
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
})
