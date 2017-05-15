

module.exports = {
  entry: './app/main.jsx',
  output: {
    filename: 'public/js/[name].js'
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
