const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

var defaults = require("./webpack.config.defaults"); //default webpack.config for most of development requirements

module.exports = Object.assign({}, defaults, {
  entry: './app/entry.js',

  output: Object.assign({}, defaults.output, {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'libs')
  }),

  module : Object.assign({}, defaults.module, {
      loaders : defaults.module.loaders.concat([{
        test: require.resolve("lodash"),
        loader: 'expose-loader?_'
      }])
  }),

  plugins: defaults.plugins.concat([
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),

    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      title: 'React Redux Konva CANVAS APPLICATION',
      template: 'app/index.html',
      inject: 'body'
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      React: 'react',
    }),
    
  ]),

  // target: "web",
  devtool: 'source-map',
});