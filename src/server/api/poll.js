
'use strict'

let router = require('express').Router();

let surveys = require('../../../lib/data/surveys.json')

router.route('/')
  .get(function(req, res){
    console.log("Got surveys")
    res.json(surveys)
  })


module.exports = router
