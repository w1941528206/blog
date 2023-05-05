import merge from 'webpack-merge';
// import webpack from 'webpack';
// import cssnano from 'cssnano';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
// import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
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
      {
        test: /.(less|css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
    ],
  },
  optimization: {
    minimize: true, // 开启最小化
    minimizer: [
      // 最小化 压缩
      new TerserPlugin(),
      new CssMinimizerPlugin(),
    ],
  },
};

export default merge(bascConfig, prodConfig as any);
