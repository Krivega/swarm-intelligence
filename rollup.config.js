import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: {
    paraboloid: './src/examples/paraboloid/index.js'
  },
  output: {
    dir: './dist/examples',
    format: 'iife'
  },
  plugins: [resolve(), babel()]
};
