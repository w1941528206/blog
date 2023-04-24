import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
// import ProgressBarWebpackPlugin from 'progress-bar-webpack-plugin';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';

const cwd = process.cwd();

const bascConfig = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name]_[chunkhash:8].js',
    // libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /.(js|ts)x?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // 逆序执行
              presets: [
                '@babel/preset-env',
                // 解析jsx语法
                [
                  '@babel/preset-react',
                  {
                    runtime: 'automatic', // 无需引入react
                  },
                ],
                // 解析ts语法
                '@babel/preset-typescript',
              ],
              plugins: [
                [
                  'import',
                  {
                    libraryName: 'antd',
                    style: 'css',
                  },
                ],
              ],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png|gif|webp|jpeg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 200 * 1024,
          },
        },
      },
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      // {
      //   test: /.(png|jpg|gif|jpeg|svg)$/,
      //   use: [
      //     {
      //       loader: 'url-loader',
      //       type: 'asset',
      //       parser: {
      //         dataUrlCondition: {
      //           maxSize: 300 * 1024
      //         }
      //       },
      //       options: {
      //         name: 'static/[name]_[hash:8].[ext]',
      //       },
      //     }
      //   ]
      // }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@src': path.resolve(cwd, 'src/'),
      '@pages': path.resolve(cwd, 'src/pages'),
      '@assets': path.resolve(cwd, 'src/assets'),
      '@components': path.resolve(cwd, 'src/components'),
    },
  },
  plugins: [
    // new ProgressBarWebpackPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: '[name]_[contenthash:8].css'
    // }),
    // new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  stats: 'errors-only',
};

export default bascConfig;
