import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    assetsDir: 'assets', // Ensure assets are in a consistent directory
  },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'), // Optional alias for cleaner imports
    },
  },
  assetsInclude: ['**/*.svg', '**/*.png', '**/*.jpg', '**/*.jpeg'], // Include all image types
});