import path from 'node:path';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsConfigPaths(),
    dts({
      entryRoot: 'src',
      include: ['src'],
      exclude: ['src/setupTests.ts', 'src/**/__tests__/**'],
    }),
  ],
  build: {
    lib: {
      entry: [
        path.resolve('src', 'index.ts'),
        path.resolve('src', 'objectiveFunctions', 'index.ts'),
        path.resolve('src', 'swarmCreators', 'index.ts'),
        path.resolve('src', 'render', 'index.ts'),
      ],
      name: 'SwarmIntelligence',
      formats: ['es', 'cjs', 'iife'],
      fileName: (format) => {
        if (format === 'es') {
          return 'index.js';
        }

        if (format === 'cjs') {
          return 'index.cjs';
        }

        return 'index.bundle.js';
      },
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
    minify: true,
    sourcemap: true,
    emptyOutDir: true,
  },
});
