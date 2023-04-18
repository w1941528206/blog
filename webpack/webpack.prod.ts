import merge from 'webpack-merge';
import webpack from 'webpack';
import cssnano from 'cssnano';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import bascConfig from './webpack.base';

const prodConfig = {
  mode: 'production',
  cache: {
    type: 'filesystem',
  },
  // externals: ['react'],
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      // filename: '[name]-[contenthash:8].css'
      chunkFilename: '[name]-[chunkhash].css',
    }),
    // new OptimizeCSSAssetsPlugin({
    //   assetNameRegExp: /\.css$/g,
    //   cssProcessor: cssnano,
    // })
  ],
  module: {
    rules: [
      // 解决使用css modules时antd样式不生效
      {
        test: /.(less|css)$/,
        // 排除业务模块，其他模块都不采用css modules方式解析
        exclude: [/src/],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      },
      {
        test: /.(less|css)$/,
        exclude: [/node_modules/],
        use: [
          MiniCssExtractPlugin.loader,
          // {
          //   loader: 'css-loader',
          //   options: {
          //     modules: true,
          //   }
          // },
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[name]__[local]--[hash:base64:5]'
              }
            }
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ],
        sideEffects: true, // package 中 sideEffects 设置为 false 后 所有文件都会被 Tree Shaking 通过 import 引入的 css 会被当作无用代码 这里 true 告诉 webpack 不要 shaking 掉
      }
    ]
  },
  optimization: {
    minimize: true, // 开启最小化
    minimizer: [ // 最小化 压缩
      new TerserPlugin(),
      new CssMinimizerPlugin()
    ],
  }
};

export default merge(bascConfig, prodConfig as any);
