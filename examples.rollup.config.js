/* eslint-disable import/no-extraneous-dependencies */
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
  input: {
    paraboloid: './src/examples/paraboloid/index.js'
  },
  output: {
    dir: './dist/examples',
    format: 'iife',
    plugins: [terser()]
  },
  plugins: [resolve(), babel()]
};
