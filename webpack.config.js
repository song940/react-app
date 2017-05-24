const webpack = require('webpack');

module.exports = {
  entry: './app/main.jsx',
  output: {
    filename: 'public/js/[name].js'
  },
  resolve: {
    extensions: [ '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test   : /\.jsx?$/,
        loader : 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
