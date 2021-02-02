const { NODE_ENV, BABEL_ENV } = process.env;
const cjs = NODE_ENV === 'test' || BABEL_ENV === 'commonjs';

const defaultPlugins = [
  'babel-plugin-transform-react-constant-elements',
  [
    '@babel/plugin-proposal-object-rest-spread',
    {
      loose: true,
    },
  ],
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-proposal-nullish-coalescing-operator',
];

const defaultPresets = [
  [
    '@babel/env',
    {
      loose: true,
      modules: false,
    },
  ],
];

module.exports = {
  presets: defaultPresets.concat(['@babel/react']),
  plugins: [
    ...defaultPlugins,
    // for IE 11 support
    '@babel/plugin-transform-object-assign',
    [
      '@babel/transform-runtime',
      {
        useESModules: !cjs,
        version: require('./package.json').dependencies['@babel/runtime'].replace(/^[^0-9]*/, ''),
      },
    ],
  ],

  ignore: [/@babel[\\|/]runtime/], // Fix a Windows issue.
};
