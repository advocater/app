

'use strict'

let router = require('express').Router()

router.use('/polls', require('./poll'))
// router.use('/responses', require('./response'))

module.exports = router
