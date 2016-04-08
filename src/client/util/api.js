
import 'fetch' from 'isomorphic-fetch'

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

/* Polls */
export function polls_get() {
  return fetch('/api/polls', { method: 'GET', credentials: 'same-origin' })
    .then(checkStatus)
    .then(getJSON)
    .catch(logError)
}

/* Responses */
export function responses_get() {
  return fetch('/api/responses', { method: 'GET', credentials: 'same-origin' })
    .then(checkStatus)
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
