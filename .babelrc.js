const defaultAlias = {
  '@open-react-hooks/utils': './packages/open-react-hooks-utils/index.js',
};

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

let defaultPresets = [
  [
    '@babel/env',
    {
      bugfixes: true,
      modules: ['cjs'].includes(process.env.BABEL_ENV) ? false : 'commonjs',
    },
  ],
];

if (process.env.BABEL_ENV === 'esm') {
  defaultPresets = [
    [
      '@babel/env',
      {
        loose: true,
        bugfixes: true,
        shippedProposals: true,
        modules: false,
        modules: false,
        targets: {
          ie: 9,
        },
      },
    ],
  ];
}

module.exports = {
  presets: defaultPresets.concat(['@babel/react']),
  plugins: [
    ...defaultPlugins,
    // for IE 11 support
    '@babel/plugin-transform-object-assign',
    [
      'babel-plugin-module-resolver',
      {
        root: ['./'],
        alias: defaultAlias,
      },
    ],
  ],
  ignore: [/@babel[\\|/]runtime/], // Fix a Windows issue.
  env: {
    cjs: {
      plugins: [
        ...defaultPlugins,
        'babel-plugin-macros',
        ['@babel/plugin-transform-runtime', { useESModules: true }],
      ],
    },
    esm: {
      presets: defaultPresets,
      plugins: [
        ...defaultPlugins,
        'babel-plugin-macros',
        ['@babel/plugin-transform-runtime', { useESModules: false }],
      ],
    },
    development: {
      plugins: [
        [
          'babel-plugin-module-resolver',
          {
            root: ['./'],
            alias: defaultAlias,
          },
        ],
      ],
    },
    test: {
      sourceMaps: 'both',
      plugins: [
        ...defaultPlugins,
        [
          'babel-plugin-module-resolver',
          {
            root: ['./'],
            alias: defaultAlias,
          },
        ],
      ],
    },
  },
};
