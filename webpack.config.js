const webpack = require('webpack');
var path = require('path');
const rootPath = path.resolve(__dirname);
const buildFolder = path.join(rootPath, './build');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCssChunks = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const port = process.env.PORT || 3000;

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: buildFolder,
    filename: 'scripts/bundle.[hash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          ExtractCssChunks.loader,
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ExtractCssChunks({
      filename: 'css/[name].[contentHash].css',
    }),
    new CopyPlugin([
      {
        from: './src/assets',
        to: `${buildFolder}/assets`
      }
    ]),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      //   favicon: 'public/favicon.ico'
    }),
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    inline: true,
    writeToDisk: true
  }
};