
'use strict'

let router = require('express').Router();

const HOUR = 3600 * 1000
const POLLS_SENT = 10

let polls = require('../../../lib/data/example_polls.json')
let lastId = 1010

function createNewPoll(basePoll) {
  let poll = basePoll
  lastId++
  let start = Date.now()
  let end = start + 2 * HOUR
  poll.id = poll.id || '' + lastId
  poll.question = poll.question || 'Was this a bad question? (0-10)'
  poll.start = poll.start || new Date(start).toISOString()
  poll.end = poll.end || new Date(end).toISOString()
  poll.polls_sent = poll.polls_sent || POLLS_SENT
  poll.polls_responded = 0
  return poll
}

router.route('/')
  .get(function(req, res) {
    res.json(polls)
  })
  .post(function(req, res) {
    let poll = createNewPoll(req.body)
    polls.unshift(poll)
    res.json(polls)
  })

module.exports = router
