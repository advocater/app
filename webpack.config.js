'use strict'

let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: [
    "./src/client/index.jsx",
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
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
};
