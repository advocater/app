'use strict'

let webpack = require('webpack')
let path = require('path')

let webpackConfig = {
  entry: [
    "./src/client/index.js"
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
}

if (process.env.NODE_ENV === 'development') {
  webpackConfig.entry.push("webpack-hot-middleware/client")
  webpackConfig.plugins = [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}

module.exports = webpackConfig
