
'use strict'

let router = require('express').Router();

let responses = require('../../../lib/data/example_responses.json')

router.route('/')
  .get(function(req, res){
    console.log("Got responses")
    res.json(responses)
  })


module.exports = router
