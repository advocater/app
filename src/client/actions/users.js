
import * as api from '../utils/api'

import { FETCH_USERS, RECEIVE_USERS } from '../constants'

/* Helper functions */
function logError(err) { console.log('Error in actions/users.js', err); throw err; }
function log(message, value) { console.log(message, value); return value; }

/* Poll actions */
export function receiveUsers(payload) {
  return { type: RECEIVE_USERS, payload }
}

export function fetchUsers() {
  return (dispatch) => {
    return api.users_get()
      .then((users) => { dispatch(receiveUsers(users))})
      .catch(logError)
  }
}
