

'use strict'

let express = require('express');
// let session = require('express-session');
let path = require('path');
let webpack = require('webpack');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');

let webpackConfig = require('../../webpack.config');

let app = express();

let api = require('./api');

require('./middleware')(app);
let compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath, historyApiFallback: true }));
app.use(webpackHotMiddleware(compiler));

const PATH_IMAGES = path.resolve(__dirname,'../../lib/img')
app.use('/images', express.static(PATH_IMAGES))


app.use('/api', api);

app.get('/', function (req, res) {
  res.sendFile('index.html', { root: __dirname + '/../client' });
});

module.exports = app;
