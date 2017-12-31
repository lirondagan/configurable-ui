const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  devServer: {
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  entry: [
    path.join(__dirname, './src/index.js'),
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
      }
      ],
    },
    {
      test: /\.(css|scss)$/,
      use: [{
        loader: 'style-loader',
      }, {
        loader: 'css-loader',
        options: {
          sourceMap: true,
        },
      }, {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
        },
      }],
    },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'ConfigUi',
  })],
};