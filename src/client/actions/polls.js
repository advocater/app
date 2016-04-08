
import * as api from '../utils/api'

import { FETCH_POLLS, RECEIVE_POLLS } from '../constants'

/* Helper functions */
function logError(err) { console.log('Error in actions/polls.js', err); throw err; }
function log(message, value) { console.log(message, value); return value; }

/* Poll actions */
export function receivePolls(payload) {
  return { type: RECEIVE_POLLS, payload }
}

export function fetchPolls() {
  return (dispatch) => {
    return api.polls_get()
      .then((polls) => { dispatch(receivePolls(polls))})
      .catch(logError)
  }
}
