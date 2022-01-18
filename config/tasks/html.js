const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const paths = require('../env');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(paths.html),
      inject: true,
      publicPath: '/',
    }),
  ],
};
