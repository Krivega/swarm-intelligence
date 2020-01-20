/* eslint-disable import/no-extraneous-dependencies */
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const output = {
  dir: './dist/examples',
  format: 'iife'
};

const plugins = [resolve(), babel(), terser()];

export default [
  {
    output,
    plugins,
    input: {
      paraboloid: './examples/paraboloid/index.js'
    }
  },
  {
    output,
    plugins,
    input: {
      schwefel: './examples/schwefel/index.js'
    }
  },
  {
    output,
    plugins,
    input: {
      rastrigin: './examples/rastrigin/index.js'
    }
  },
  {
    output,
    plugins,
    input: {
      rosenbrock: './examples/rosenbrock/index.js'
    }
  },
  {
    output,
    plugins,
    input: {
      griewank: './examples/griewank/index.js'
    }
  }
];
