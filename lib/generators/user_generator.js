/**
 * survey.js
 * Generates survey data for demo
 */

'use strict'

let fs = require('fs')
let path = require('path')
let faker = require('faker')

const OUTPUT_PATH = path.resolve(__dirname, '../data/example_users.json')
const DEFAULT_COUNT = 100
const DIGIT_RANGE = 10

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
    user.id = faker.random.uuid()
    user.first_name = faker.name.firstName()
    user.last_name = faker.name.lastName()
    user.party = randomArrayValue(PARTIES)
    user.gender = Math.random > 0.5 ? 'MALE' : 'FEMALE'
    user.zip = faker.address.zipCode()
    users.push(user)
  }
  fs.writeFile(OUTPUT_PATH, JSON.stringify(users, 0, 2), (err) => {
    if (err) throw err
    console.log('Saved to', OUTPUT_PATH)
  })
}

generateUsers();
