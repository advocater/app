/**
 * server.js - Primary server file
 */

'use strict'

/* Load dependencies */
let express = require('express')
// let session = require('express-session')
let path = require('path')

/* Define some constants */
const PATH_DIST = path.resolve(__dirname, '../../dist')
const PATH_IMAGES = path.resolve(__dirname, '../../lib/images')
const PATH_DATA = path.resolve(__dirname, '../../lib/data')

/* Load local dependencies */
let config = require('./config')
let api = require('./api')

/* Start app */
let app = express()

/* Load middleware */
require('./middleware')(app)

// Webpack hot loader for development environment
if (process.env.NODE_ENV === 'development') {
  let webpack = require('webpack')
  let webpackDevMiddleware = require('webpack-dev-middleware')
  let webpackHotMiddleware = require('webpack-hot-middleware')
  let webpackConfig = require('../../webpack.config')
  let compiler = webpack(webpackConfig)
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath, historyApiFallback: true }))
  app.use(webpackHotMiddleware(compiler))
}

// Serve static files
app.use('/dist', express.static(PATH_DIST))
app.use('/images', express.static(PATH_IMAGES))
app.use('/data', express.static(PATH_DATA))

// Connect to API
app.use('/api', api)

app.all('/*', function (req, res) {
  res.sendFile('index.html', { root: __dirname + '/../client' })
})

module.exports = app
