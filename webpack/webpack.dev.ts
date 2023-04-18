import merge from 'webpack-merge';
import webpack from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import bascConfig from './webpack.base';

const devConfig = {
  mode: 'development',
  plugins: [
    new ReactRefreshWebpackPlugin()
  ],
  module: {
    rules: [
      // 解决使用css modules时antd样式不生效
      {
        test: /.(less|css)$/,
        // 排除业务模块，其他模块都不采用css modules方式解析
        exclude: [/src/],
        use: [
          'style-loader',
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
          { loader: 'style-loader' },
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
      },
    ]
  },
  devServer: {
    // contentBase: '../dist',
    port: 8080,
    open: true,
    compress: true,
    hot: true,
    historyApiFallback: {
      disableDotRule: true // 解决 history 刷新404问题
    }
  },
  devtool: 'cheap-source-map',
};

export default merge(bascConfig, devConfig as any);
