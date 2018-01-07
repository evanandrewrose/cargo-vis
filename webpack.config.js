const webpack = require('webpack');
const path = require('path');

// boolean switch for prod/dev to avoid the need for ENV variables
const prod = process.argv.indexOf('-p') !== -1;

const BUILD_DIR = path.resolve(__dirname, 'src/client/public');
const APP_DIR = path.resolve(__dirname, 'src/client/app');

const config = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: BUILD_DIR,
    publicPath: 'src/client/public',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: APP_DIR,
        exclude: path.resolve(__dirname, 'node_modules'),
        loader: 'babel',
      },
    ],
  },
  resolve: {
    root: [
      path.resolve(APP_DIR),
    ],
    extensions: ['', '.js', '.jsx'],
  },
  devtool: prod ? 'cheap-module-source-map' : 'eval',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(prod ? 'production' : 'development'),
      },
    }),
  ],
};

module.exports = config;
