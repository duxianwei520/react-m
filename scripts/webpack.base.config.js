
/**
 * webpack基础配置
 */
/* eslint no-undef:0*/
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolve(p) {
  return path.join(__dirname, p)
}

const webpackConfigBase = {
  entry: {
    client: ['babel-polyfill', resolve('../app/client.js')]
  },
  output: {
    path: resolve('../dist'),
    filename: '[name].[hash:4].js',
    chunkFilename: 'chunks/[name].[hash:4.js]',
  },
  resolve: {
    extensions: ['.js', '.json'],
    // 文件引用路径替换，加@区别于node_modules库
    alias: {
      '@style': resolve('../app/style'),
      '@api': resolve('../app/api'),
      '@resource': resolve('../app/resource'),
      '@components': resolve('../app/components'),
      '@config': resolve('../app/config'),
      '@pages': resolve('../app/pages'),
      '@utils': resolve('../app/utils'),
    },
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true, minimize: true } },
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { sourceMap: true, minimize: true } },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
              javascriptEnabled: true,
              paths: [
                resolve('../node_modules'),
                resolve('../app/style'),
              ]
            }
          }
        ],
      },
      {
        test: /\.(woff|eot|ttf|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'resource/iconfont/[hash:4].[ext]',
          },
        }],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'resource/image/[name].[hash:4].[ext]'
            }
          }
        ],
      },
    ],
  },
  plugins: [
    // 打包后的资源引用到html文件内
    new HtmlWebpackPlugin({
      template: resolve('../app/index.html'),
    }),
    // 提取css
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'style.[hash:4].css',
      chunkFilename: '[id].css'
    })
  ],
}

module.exports = webpackConfigBase

