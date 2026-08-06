import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    historyApiFallback: true,
  },
  preview: {
    historyApiFallback: true,
  },
});
