import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import externalDeps from 'rollup-plugin-peer-deps-external';
import size from 'rollup-plugin-size';

const globals = {
  react: 'React',
};
const extensions = ['.js', '.es6', '.es', '.mjs'];
const babelOptions = {
  exclude: /node_modules/,
  extensions,
  babelHelpers: 'runtime',
  configFile: '../../.babelrc.js',
};
const commonjsOptions = {
  ignoreGlobal: true,
  include: /node_modules/,
};

const resolveConfig = { extensions };

export default {
  input: 'src/index.js',
  output: {
    name: 'utils',
    file: 'build/index.js',
    format: 'cjs',
    globals,
  },
  external: Object.keys(globals),
  plugins: [
    resolve(resolveConfig),
    babel(babelOptions),
    commonjs(commonjsOptions),
    externalDeps(),
    terser(),
    size(),
  ],
};
