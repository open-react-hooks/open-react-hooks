import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { terser } from 'rollup-plugin-terser';

const babelOptions = {
  exclude: /node_modules/,
  babelHelpers: 'runtime',
  configFile: '../../.babelrc.js',
};

const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/,
};

export default [
  {
    input: 'src/index.js',
    output: [
      {
        name: 'use-debounce',
        file: 'build/index.js',
        format: 'cjs',
      },
      {
        name: 'use-debounce',
        file: 'build/index.esm.js',
        format: 'esm',
      },
    ],
    plugins: [
      resolve(),
      babel(babelOptions),
      commonjs(commonjsOptions),
      replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
      terser({
        output: { comments: false },
        compress: {
          keep_infinity: true,
          pure_getters: true,
          passes: 10,
        },
        ecma: 5,
        toplevel: process.env.BABEL_ENV === 'cjs',
      }),
    ],
  },
];
