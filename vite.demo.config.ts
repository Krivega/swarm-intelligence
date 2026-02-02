import { defineConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    outDir: 'demoDist',
    rollupOptions: {
      input: {
        demo: 'demo/index.ts',
      },
      output: {
        entryFileNames: '[name].js',
        format: 'iife',
      },
    },
    minify: true,
    sourcemap: true,
  },
  plugins: [tsConfigPaths()],
});
