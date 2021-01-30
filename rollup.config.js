import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.js',
  output: [
    {
      name: 'useDebounce',
      file: 'build/index.js',
      format: 'cjs',
    },
    {
      name: 'useDebounce',
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
};
