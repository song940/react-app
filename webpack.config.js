const { NODE_ENV = 'development' } = process.env;

module.exports = {
  watch: true,
  devtool: false,
  mode: NODE_ENV,
  entry: './app/main.jsx',
  output: {
    path: __dirname + '/public/js',
    filename: '[name].js',
    chunkFilename: 'chunk-[name].js'
  },
  resolve: {
    extensions: [ '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test   : /\.jsx?$/,
        loader : 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // }
};
