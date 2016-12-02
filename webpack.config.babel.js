import validate from 'webpack-validator'

const config = {
  entry: './src/App.jsx',
  output: {
    path: 'docs/assets/js/',
    publicPath: 'assets/js/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: [/\.js$/, /\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: [ 'style', 'css', 'sass' ]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}

export default validate(config)
