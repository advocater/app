
import * as api from '../utils/api'

import { FETCH_RESPONSES, RECEIVE_RESPONSES } from '../constants'

/* Helper functions */
function logError(err) { console.log('Error in actions/responses.js', err); throw err; }
function log(message, value) { console.log(message, value); return value; }

/* Poll actions */
export function receiveResponses(payload) {
  return { type: RECEIVE_RESPONSES, payload }
}

export function fetchResponses() {
  return (dispatch) => {
    return api.responses_get()
      .then((responses) => { dispatch(receiveResponses(responses)) })
      .catch(logError)
  }
}

export function createNewResponse(newResponse) {
  return (dispatch) => {
    return api.responses_post(newResponse)
      .then((responses) => { dispatch(receiveResponses(responses)) })
      .catch(logError)
  }
}
