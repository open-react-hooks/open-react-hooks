import babel from '@rollup/plugin-babel';

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
  external: ['react'],
  plugins: [
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
  ],
};
