const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'client');
const BUILD_DIR = path.resolve(__dirname, 'static');

module.exports = {
  entry: path.resolve(SRC_DIR, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'react'] }
        }],
      },
      {test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'}
    ]
  }
}