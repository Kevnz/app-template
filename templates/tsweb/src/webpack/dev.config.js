const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const baseConfig = require('./config')

const devConfig = {
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: '"development"',
        },
      },
    }),
    new HtmlWebpackPlugin({
      title: 'Web App',
      template: './src/ui/index.html',
    }),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './src/public',
    contentBasePublicPath: '/',
    hot: true,
    historyApiFallback: true,
    proxy: {
      '/api': 'http://localhost:4567/',
    },
  },
}

module.exports = {
  ...baseConfig,
  ...devConfig,
}
