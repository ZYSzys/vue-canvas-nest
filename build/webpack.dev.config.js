const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './example/main.js',
  resolve: {
    extensions: ['*', '.js', '.vue'],
    alias: {
      main: path.resolve(__dirname, '../src')
    }
  },
  output: {
    path: path.resolve(__dirname, '../dist/dev'),
    publicPath: '/',
    filename: 'vue-canvas-nest.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist/dev'),
    compress: false,
    port: 8080
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: path.resolve(__dirname, '../dist/dev/index.html'),
      template: 'example/index.html',
      inject: true
    })
  ],
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          scss: 'vue-style-loader!css-loader!sass-loader',
          sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
        }
      }
    }, {
      test: /\.js$/,
      loaders: ['babel-loader'],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }]
  }
}
