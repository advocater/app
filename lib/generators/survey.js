/**
 * survey.js
 * Generates survey data for demo
 */

'use strict'

let fs = require('fs')
let path = require('path')

const SURVEYS_PATH = path.resolve(__dirname, '../data/surveys.json')
const DEFAULT_COUNT = 10
const ID_RANGE = 10000
const POLLS_SENT = 1000
const DIGIT_RANGE = 10
const HOUR = 3600 * 1000
const DAY = 24 * HOUR

let questions = [];

let generateSurveys = function(count) {
  count = count || DEFAULT_COUNT
  let surveys = []
  let last = Date.now()
  for (let i = 0; i < count; i++) {
    let survey = {}
    let start = last - Math.floor(Math.random * 10) * DAY
    last = start
    survey.id = Math.floor(Math.random() * ID_RANGE)
    survey.question = Math.floor(Math.random() * questions.length)
    survey.start = Date(start).toString()
    survey.end = Date(start + 2 * HOUR).toString()
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
