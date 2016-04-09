/**
 * survey.js
 * Generates survey data for demo
 */

'use strict'

let fs = require('fs')
let path = require('path')

const OUTPUT_PATH = path.resolve(__dirname, '../data/example_users.json')
const DEFAULT_COUNT = 100
const DIGIT_RANGE = 10
const FIRST_NAMES = [
  "Derek", "Caroline", "Thomas", "Danny", "Susan", "Melanie",
  "Sally", "Joe", "Rachel", "Phil", "Leonard", "Penny",
  "Claire", "Devin", "Glenn", "Christine", "Minnie", "Frank"
]
const LAST_NAMES = [
  "Sakamoto", "Luby", "Vik", "Fujita", "SMITH", "BROWN",
  "JOHNSON", "JONES", "WILLIAMS", "DAVIS", "MILLER", "WILSON", "TAYLOR",
  "CLARK", "WHITE", "MOORE", "THOMPSON", "ALLEN", "MARTIN", "HALL", "ADAMS",
  "THOMAS", "WRIGHT", "BAKER", "WALKER", "ANDERSON", "LEWIS", "HARRIS", "HILL",
  "KING","JACKSON","LEE"
]
const PARTIES = ["DEMOCRAT", "REPUBLICAN", "INDEPENDENT", "GREEN", "LIBERTARIAN"]

let randomInt = function(range) {
  return Math.floor(Math.random() * range)
}

let randomArrayValue = function(array) {
  return array[randomInt(array.length)]
}


let generateUsers = function(count) {
  count = count || DEFAULT_COUNT
  let users = []
  for (let i = 0; i < count; i++) {
    let user = {}
    let id = 1000 + i
    user.id = '' + id
    user.first_name = randomArrayValue(FIRST_NAMES).toUpperCase()
    user.last_name = randomArrayValue(LAST_NAMES).toUpperCase()
    user.party = randomArrayValue(PARTIES)
    user.gender = Math.random > 0.5 ? 'male' : 'female'
    user.zip = '941' + randomInt(100)
    users.push(user)
  }
  fs.writeFile(OUTPUT_PATH, JSON.stringify(users, 0, 2), (err) => {
    if (err) throw err
    console.log('Saved to', OUTPUT_PATH)
  })
}

generateUsers();
