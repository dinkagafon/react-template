module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    [
      'postcss-easy-import',
      {
        extensions: '.scss',
        path: ['src/styles'],
      },
    ],
    'cssnano',
    'postcss-advanced-variables',
    'postcss-preset-env',
    'postcss-nested',
  ],
};
