import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      name: 'useThrottle',
      file: 'build/index.js',
      format: 'cjs',
    },
    {
      name: 'useThrottle',
      file: 'build/index.esm.js',
      format: 'esm',
    },
  ],
  external: ['react', '@open-react-hooks/utils'],
  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    commonjs(),
    terser({
      module: true,
      output: { comments: false },
    }),
  ],
};
