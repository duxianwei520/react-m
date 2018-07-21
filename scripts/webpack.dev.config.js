/**
 * 开发环境配置
 */
/* eslint no-undef:0 */

const webpackConfigBase = require('./webpack.base.config')
const merge = require('webpack-merge')
const path = require('path')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

function resolve(p) {
  return path.join(__dirname, p)
}
const PORT = 8900

const webpackConfigDev = {
  mode: 'development',
  plugins: [
    new OpenBrowserPlugin({
      url: `http://localhost:${PORT}/#/login`
    }),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: resolve('../app'),
    historyApiFallback: false,
    hot: false,
    host: '0.0.0.0',
    port: PORT,
  },
}

module.exports = merge(webpackConfigBase, webpackConfigDev)
