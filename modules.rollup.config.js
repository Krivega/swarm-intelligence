/* eslint-disable import/no-extraneous-dependencies */
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const plugins = [resolve(), babel(), terser()];

export default [
  {
    plugins,
    input: {
      drawer: './examples/drawer/index.js',
      canvas: './examples/canvas/index.js',
      resolveObjectiveFunctionMouseTracking:
        './examples/resolveObjectiveFunctionMouseTracking/index.js',
      createConfig: './examples/createConfig.js',
      getArrayWithRandomValues: './src/utils/getArrayWithRandomValues.js'
    },
    output: [
      {
        dir: './dist/cjs',
        format: 'cjs'
      },
      {
        dir: './dist/es',
        format: 'es'
      }
    ]
  },
  {
    plugins,
    input: {
      griewank: './src/objectiveFunctions/griewank.js',
      paraboloid: './src/objectiveFunctions/paraboloid.js',
      rastrigin: './src/objectiveFunctions/rastrigin.js',
      rosenbrock: './src/objectiveFunctions/rosenbrock.js',
      schwefel: './src/objectiveFunctions/schwefel.js'
    },
    output: [
      {
        dir: './dist/objectiveFunctions/cjs',
        format: 'cjs'
      },
      {
        dir: './dist/objectiveFunctions/es',
        format: 'es'
      }
    ]
  }
];
