
const path = require('node:path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {       
        test: /\.css$/i,
        use: [MiniCSSExtractPlugin.loader, 'css-loader'],
      },     
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
       template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCSSExtractPlugin(),
  ],
  devServer: {
    static: './dist',
  }
};
