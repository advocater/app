

'use strict'

let router = require('express').Router()

router.use('/polls', require('./poll'))
router.use('/responses', require('./response'))
router.use('/users', require('./user'))

module.exports = router
