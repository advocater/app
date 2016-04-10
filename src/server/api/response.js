
'use strict'

let router = require('express').Router();

const USERS = require('../../../lib/data/example_users.json')

let responses = require('../../../lib/data/example_responses.json')

let lastId = 0

const COMMENTS = [
  "",
  " I could do better",
  " #boo",
  " #winning",
  " I love you",
  " STOP sending me these",
  " I want to hear more about abortion",
  " (^*%&$^#^%$#^)"
]

let randomInt = function(range) {
  return Math.floor(Math.random() * range)
}

let randomArrayValue = function(array) {
  return array[randomInt(array.length)]
}

function createNewResponse(baseResponse) {
  let response = baseResponse
  let pollId = response.pollId || 2000
  let id = pollId + lastId * 10 + ''
  lastId = (lastId + 1) % 10
  let value = lastId % 3 === 0 ? randomInt(11) : randomInt(6) + 5
  response.id = id
  response.user = randomArrayValue(USERS)
  response.userId = response.user.id
  response.pollId = pollId
  response.time = new Date().toISOString()
  response.message = value + randomArrayValue(COMMENTS)
  response.value = '' + value
  responses.push(response);
}

router.route('/')
  .get(function(req, res){
    console.log("Got responses")
    res.json(responses)
  })
  .post(function (req, res){
    let newResponse = createNewResponse(req.body)
    console.log('created new response', JSON.stringify(newResponse, 0, 2))
    responses.unshift(newResponse)
    res.json(responses)
  })

module.exports = router
