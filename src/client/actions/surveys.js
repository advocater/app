
import * as api from '../utils/api'

import { FETCH_SURVEYS, RECEIVE_SURVEYS } from '../constants'

/* Helper functions */
function logError(err) { console.log('Error in actions/surveys.js', err); throw err; }
function log(message, value) { console.log(message, value); return value; }

/* Survey actions */
export function receiveSurveys(payload) {
  return { type: RECEIVE_SURVEYS, payload }
}

export function fetchSurveys() {
  return (dispatch) => {
    return api.surveys_get()
      .then((surveys) => { dispatch(receiveSurveys(surveys))})
      .catch(logError)
  }
}
