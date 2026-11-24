import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    headers: {
      'Content-Security-Policy-Report-Only':
        "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https://images.pexels.com https://raw.githubusercontent.com https://*.githubusercontent.com; connect-src 'self' https://api.github.com https://api.web3forms.com; object-src 'none'; base-uri 'self';",
    },
  },
  preview: {
    headers: {
      'Content-Security-Policy-Report-Only':
        "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https://images.pexels.com https://raw.githubusercontent.com https://*.githubusercontent.com; connect-src 'self' https://api.github.com https://api.web3forms.com; object-src 'none'; base-uri 'self';",
    },
  },
});
