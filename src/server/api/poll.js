
'use strict'

let router = require('express').Router();

let surveys = require('../../../lib/data/example_polls.json')

router.route('/')
  .get(function(req, res){
    console.log("Got polls")
    res.json(polls)
  })


module.exports = router
