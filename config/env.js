const src = './src';
const build = './build';
const static = './static';

module.exports = {
  src,
  build,
  static,
  isProd: process.env.mode === 'production',
  server: {
    base: build,
  },
  html: `${static}/index.html`,
  entry: `${src}/index.tsx`,
};
