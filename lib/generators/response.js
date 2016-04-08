/**
 * survey.js
 * Generates survey data for demo
 */

'use strict'

let fs = require('fs')
let path = require('path')

const RESPONSES_PATH = path.resolve(__dirname, '../data/responses.json')
const DEFAULT_COUNT = 10
const ID_RANGE = 10000
const POLLS_SENT = 1000
const DIGIT_RANGE = 10
const HOUR = 3600 * 1000
const DAY = 24 * HOUR

let responseGenerator = function(count) {
  count = count || DEFAULT_COUNT
  let responses = []
  for (let i = 0; i < count; i++) {
    let response = {}
    response.id = i
    response.poll_id = '1001'
    response.phone_number = '(238) 622-8371'
    response.first_name = 'Caroline'
    response.last_name = 'Vik'
    response.raw_response = '' + Math.floor(Math.random() * 11)
    response.parsed = true
    response.parsed_response = response.raw_response
    response.type = 'NPS'
    responses.push(response)
  }

  fs.writeFile(RESPONSES_PATH, JSON.stringify(responses, 0, 2), (err) => {
    if (err) throw err
    console.log('Saved to', RESPONSES_PATH)
  })
}

responseGenerator()
