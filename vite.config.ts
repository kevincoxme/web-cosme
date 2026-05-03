import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  base: 'https://github.com/kevincoxme/web-cosme',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
