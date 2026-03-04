import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  root: 'public',
  publicDir: '.',
  resolve: {
    alias: {
      '/src': path.resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3000
  },
  build: {
    outDir: '../build',
    emptyOutDir: true
  },
  plugins: [react()]
});
