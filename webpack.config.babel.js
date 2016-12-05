import validate from 'webpack-validator'

const config = {
  entry: [
    'whatwg-fetch',
    './src/index.js'
  ],
  output: {
    path: 'docs/assets/js/',
    publicPath: 'assets/js/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: [/\.js$/, /\.jsx$/], exclude: /node_modules/, loader: 'babel-loader' },
      { test: [/\.scss$/, /\.css$/], loaders: [ 'style', 'css', 'sass' ] },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml' },
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=application/octet-stream' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}

export default validate(config)
