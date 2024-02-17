import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  server: {
    port: 4000,
    cors: true,
    host: 'localhost',
  },
  optimizeDeps: {
    exclude: ['multiple-select-vanilla'],
  },
});
