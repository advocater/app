
import { AUTHENTICATE_USER, AUTHENTICATE_USER_FAILED, RECEIVE_USER } from '../constants/actions.js';

export function user(state={}, action) {
    switch (action.type) {
    case AUTHENTICATE_USER:
      return null;
    case AUTHENTICATE_USER_FAILED:
      return action.payload;
    case RECEIVE_USER:
      return action.payload;
    default:
      return state;
  }
}
