/**
 * survey.js
 * Generates survey data for demo
 */

'use strict'

let fs = require('fs')
let path = require('path')

let polls = require('../data/example_polls.json')
let users = require('../data/example_users.json')

const RESPONSES_PATH = path.resolve(__dirname, '../data/example_responses.json')
const DEFAULT_COUNT = 10
const ID_RANGE = 10000
const POLLS_SENT = 1000
const DIGIT_RANGE = 10
const HOUR = 3600 * 1000
const DAY = 24 * HOUR

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

let responseGenerator = function() {
  let responses = []
  let id = 1
  polls.forEach((poll) => {
    for (let i = 0; i < poll.polls_responded; i++) {
      let response = {}
      let score = randomInt(11)
      response.id = poll.id + (id + i) * 10
      response.user = randomArrayValue(users)
      response.message = score + randomArrayValue(COMMENTS)
      response.score = score
      responses.push(response);
    }
  })

  fs.writeFile(RESPONSES_PATH, JSON.stringify(responses, 0, 2), (err) => {
    if (err) throw err
    console.log('Saved to', RESPONSES_PATH)
  })
}

responseGenerator()
