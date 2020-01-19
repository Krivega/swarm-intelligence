/* eslint-disable import/no-extraneous-dependencies */
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const output = {
  dir: './dist/examples',
  format: 'iife',
  plugins: [terser()]
};
const plugins = [resolve(), babel()];

export default [
  {
    output,
    plugins,
    input: {
      paraboloid: './src/examples/paraboloid/index.js'
    }
  },
  {
    output,
    plugins,
    input: {
      schwefel: './src/examples/schwefel/index.js'
    }
  },
  {
    output,
    plugins,
    input: {
      rastrigin: './src/examples/rastrigin/index.js'
    }
  },
  {
    output,
    plugins,
    input: {
      rosenbrock: './src/examples/rosenbrock/index.js'
    }
  },
  {
    output,
    plugins,
    input: {
      griewank: './src/examples/griewank/index.js'
    }
  }
];
