
import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';

import { user } from './user.js';

import { CHANGE_PATH } from '../constants/actions.js';

export const initialState = {
  'user': false
};

function path(state = null, action) {
  switch (action.type) {
    case CHANGE_PATH:
      return action.payload;
    default:
      return state;
  }
}

const reducers = combineReducers({
  user,
  path
});

export default reducers;
