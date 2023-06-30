import { defineConfig } from 'vite'
import reactPlugin from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({ 
  plugins: [reactPlugin()],
  rollupOptions: {
    input: 'src/main.jsx',
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
      'react-dom/client'
    ],
  },
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
  },
})
