'use strict'

let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: [
    "./src/client/index.js",
    "webpack-hot-middleware/client"
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/dist/"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" },
      { test: /\.less$/, loader: "style!css!less" },
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
};
