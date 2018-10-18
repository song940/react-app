
const { NODE_ENV = 'development' } = process.env;

module.exports = {
  watch: true,
  devtool: false,
  mode: NODE_ENV,
  entry: './src/main.jsx',
  output: {
    path: __dirname + '/public',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        loader: 'babel-loader',
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
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  },
  optimization: {
    splitChunks: {
      minChunks: 2,
      chunks: "initial",
      cacheGroups: {
        commons: {
          minChunks: 1,
          name: "common",
        }
      },
      automaticNameDelimiter: '-',
    }
  }
};