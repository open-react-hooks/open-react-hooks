import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import externalDeps from 'rollup-plugin-peer-deps-external';
import size from 'rollup-plugin-size';

const globals = {
  react: 'React',
  '@emotion/react': 'EmotionReact',
  '@open-react-hooks/utils': 'openReactHooksUtils',
};
const extensions = ['.js', '.es6', '.es', '.mjs'];
const babelOptions = {
  exclude: /node_modules/,
  extensions,
  babelHelpers: 'runtime',
  configFile: '../../.babelrc.js',
};

const resolveConfig = { extensions };

export default {
  input: 'src/index.js',
  output: {
    name: 'useThrottle',
    file: 'build/index.js',
    sourcemap: true,
    format: 'umd',
    globals,
  },
  external: Object.keys(globals),
  plugins: [
    resolve(resolveConfig),
    babel(babelOptions),
    commonjs(),
    externalDeps(),
    terser(),
    size(),
  ],
};
