
import fetch from 'isomorphic-fetch'

/* Helper functions */
function logError(err) { console.log('Error in actions/surveys.js', err); throw err; }
function log(message, value) { console.log(message, value); return value; }

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    console.log('Error ' + response.status, response.statusText)
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

function getJSON(response) { return response.json() }

/* Surveys */
export function polls_get() {
  let path = '/api/polls/'
  return fetch(path, { method: 'GET', credentials: 'same-origin' })
    .then(checkStatus)
    .then(getJSON)
    .catch(logError)
}

export function polls_post(newPoll) {
  let path = '/api/polls'
  return fetch(path, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPoll)
  }).then(checkStatus)
    .then(getJSON)
    .catch(logError)
}

/* Responses */
export function responses_get() {
  let path = '/api/responses'
  return fetch(path, { method: 'GET', credentials: 'same-origin'})
    .then(checkStatus)
    .then(getJSON)
    .catch(logError)
}

export function responses_post(newResponse) {
  let path = '/api/responses'
  return fetch(path, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newResponse)
  }).then(checkStatus)
    .then(getJSON)
    .catch(logError)
}

/* Users */
export function users_get() {
  return fetch('/api/users', { method: 'GET', credentials: 'same-origin' })
    .then(checkStatus)
    .then(getJSON)
    .catch(logError)
}
