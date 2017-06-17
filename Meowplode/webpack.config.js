const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: "inline-source-map",
  entry: './App/main.js',
  output: {
    publicPath: "./js/",
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'wwwroot/js')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        include: [
          path.resolve(__dirname, './App'),
        ],
        loader: 'ts-loader'
      },
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, './App'),
        ],
        loader: `babel-loader`,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.png$/,
        loader: "url-loader",
        query: { mimetype: "image/png" }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: 'Views/Shared/_LayoutTemplate.cshtml',
      filename: '../../Views/Shared/_Layout.cshtml'
    })
  ]
};