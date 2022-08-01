module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.json'],
        alias: {
          '@app': './src',
          '@modules': './src/modules',
          '@database': './src/database',
        },
      },
    ],
  ],
};
