/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const path = require('path');
const env = require('./env');

module.exports = merge({
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    hot: true,
    static: {
      publicPath: path.resolve(env.server.base),
    },
  },
});
