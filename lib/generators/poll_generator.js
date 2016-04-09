/**
 * survey.js
 * Generates survey data for demo
 */

'use strict'

let fs = require('fs')
let path = require('path')

const OUTPUT_PATH = path.resolve(__dirname, '../data/example_polls.json')
const DEFAULT_COUNT = 10
const ID_RANGE = 10000
const POLLS_SENT = 10
const DIGIT_RANGE = 10
const HOUR = 3600 * 1000
const DAY = 24 * HOUR

const QUESTIONS = [
  "How did I do in last night's debate? (0-10)",
  "How much do you care about the 2nd Amendment? (0-10)",
  "What place did I get in last night's debate? (0-10)",
  "Do you approve of my campaign so far? (0-10)",
  "Would you recommend me as a candidate to your friend? (0-10)"
];

let randomInt = function(range) {
  return Math.floor(Math.random() * range)
}

let randomArrayValue = function(array) {
  return array[randomInt(array.length)]
}


let generateSurveys = function(count) {
  count = count || DEFAULT_COUNT
  let polls = []
  let last = Date.now()
  for (let i = 0; i < count; i++) {
    let poll = {}
    let start = last - randomInt(10) * DAY
    let ended = start + 2 * HOUR
    last = start
    poll.id = 1000 + i + ''
    poll.question = randomArrayValue(QUESTIONS)
    poll.start = '' + start
    poll.end = '' + ended
    poll.polls_sent = POLLS_SENT
    poll.polls_responded = randomInt(POLLS_SENT - 1) + 1
    polls.push(poll)
  }
  fs.writeFile(OUTPUT_PATH, JSON.stringify(polls, 0, 2), (err) => {
    if (err) throw err
    console.log('Saved to', OUTPUT_PATH)
  })
}

generateSurveys();
