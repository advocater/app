
'use strict';

let path = require('path')
let express = require('express')
let morgan = require('morgan')
let bodyParser = require('body-parser')


// sets up global middleware
module.exports = function (app) {
  app.use(morgan('dev'))
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(bodyParser.json())
};
