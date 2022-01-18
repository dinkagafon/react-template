/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const path = require('path');
const env = require('./env');

module.exports = merge(
  require('./tasks/html'),
  require('./tasks/styles'),
  require('./tasks/fonts'),
  require('./tasks/scripts'),
  require('./tasks/static'),
  {
    entry: path.resolve(env.entry),
    output: {
      path: path.resolve(env.build),
      filename: '[name].bundle.js',
      clean: true,
    },
    resolve: {
      extensions: ['.js', '.ts', '.jsx', '.tsx', '.scss', '.css', '.json'],
      modules: ['node_modules', env.src],
    },
  }
);
