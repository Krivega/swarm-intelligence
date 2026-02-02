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
      entry: {
        index: path.resolve('src', 'index.ts'),
        'objectiveFunctions/index': path.resolve('src', 'objectiveFunctions', 'index.ts'),
        'swarmCreators/index': path.resolve('src', 'swarmCreators', 'index.ts'),
        'render/index': path.resolve('src', 'render', 'index.ts'),
      },
      name: 'SwarmIntelligence',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => {
        return `${entryName}.${format === 'cjs' ? 'cjs' : 'js'}`;
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
