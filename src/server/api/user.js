
'use strict'

let router = require('express').Router();

let users = require('../../../lib/data/example_users.json')

router.route('/')
  .get(function(req, res){
    console.log("Got users")
    res.json(users)
  })


module.exports = router
