/* eslint-disable import/no-extraneous-dependencies */
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const output = {
  dir: './dist',
  format: 'iife'
};

const plugins = [resolve(), babel(), terser()];

export default [
  {
    output,
    plugins,
    input: {
      demo: './srcDemo/index.js'
    }
  }
];
