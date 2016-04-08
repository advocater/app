/**
 * survey.js
 * Generates survey data for demo
 */

'use strict'

let fs = require('fs')
let path = require('path')

const SURVEYS_PATH = path.resolve(__dirname, '../data/example_polls.json')
const DEFAULT_COUNT = 10
const ID_RANGE = 10000
const POLLS_SENT = 1000
const DIGIT_RANGE = 10
const HOUR = 3600 * 1000
const DAY = 24 * HOUR

let questions = [
  "How did I do in last night's debate? (0-10)",
  "How much do you care about the 2nd Amendment? (0-10)",
  "What place did I get in last night's debate? (0-10)",
  "Do you approve of my campaign so far? (0-10)",
  "Would you recommend me as a candidate to your friend? (0-10)"
];

let generateSurveys = function(count) {
  count = count || DEFAULT_COUNT
  let surveys = []
  let last = Date.now()
  for (let i = 0; i < count; i++) {
    let survey = {}
    let start = last - Math.floor(Math.random() * 10) * DAY
    last = start
    let ended = start + 2 * HOUR
    survey.id = 1000 + i
    survey.question = questions[Math.floor(Math.random() * questions.length)]
    survey.start = start
    survey.end = ended
    survey.polls_sent = POLLS_SENT
    survey.polls_responded = Math.floor(Math.random() * POLLS_SENT)
    survey.responses = []
    surveys.push(survey)
  }
  fs.writeFile(SURVEYS_PATH, JSON.stringify(surveys, 0, 2), (err) => {
    if (err) throw err
    console.log('Saved to', SURVEYS_PATH)
  })
}

generateSurveys();
