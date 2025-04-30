import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/john-doe-landing-page/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
