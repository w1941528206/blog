import merge from 'webpack-merge';
import webpack from 'webpack';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import bascConfig from './webpack.base';

const devConfig = {
  mode: 'development',
  plugins: [new ReactRefreshWebpackPlugin()],
  module: {
    rules: [
      {
        test: /.(less|css)$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
    ],
  },
  devServer: {
    // contentBase: '../dist',
    port: 8080,
    open: true,
    compress: true,
    hot: true,
    historyApiFallback: {
      disableDotRule: true, // 解决 history 刷新404问题
    },
  },
  devtool: 'cheap-source-map',
};

export default merge(bascConfig, devConfig as any);
