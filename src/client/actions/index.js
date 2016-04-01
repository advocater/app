
import { RECEIVE_USER, AUTHENTICATE_USER_FAILED }

/* Path */

export function changePath(payload) {
  return { type: CHANGE_PATH, payload }
}

/* User */

export function authenticateUser(user) {
  return (dispatch) => {
    return api.login(user.email, user.password)
      .then(response => {
        if (response.user) {
          dispatch(receiveUser(response.user));
        } else {
          dispatch(authUserFailed(response.reason));
        }
      });
  }
  return dispatch(receiveUser('TEST USER'));
}

export function receiveUser(user) {
  return { type: RECEIVE_USER, payload: user}
}

export function authUserFailed(reason) {
  return { type: AUTHENTICATE_USER_FAILED, payload: reason}
}

export function fetchUser() {
  return (dispatch) => {
    return api.get_user()
      .then(result => dispatch(receiveUser('TEST USER')))
      .catch(logError);
  }
}
