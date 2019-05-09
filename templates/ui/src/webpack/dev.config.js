const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const baseConfig = require('./config')

const devConfig = {
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Web App',
      template: './src/ui/index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    hot: true,
  },
}

module.exports = {
  ...baseConfig,
  ...devConfig,
}
