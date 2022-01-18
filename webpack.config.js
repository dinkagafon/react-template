/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge');
const { isProd } = require('./config/env');

const config = {
  base: require('./config/webpack.config.base'),
  prod: require('./config/webpack.config.production'),
  dev: require('./config/webpack.config.development'),
};

module.exports = merge(config.base, isProd ? config.prod : config.dev);
