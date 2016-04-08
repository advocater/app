
import { FETCH_USERS, RECEIVE_USERS } from '../constants'

const initialState = { objects: [] }

export default function users(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      let payload = action.payload
      return {
        ...state,
        objects: payload
      }
    default:
      return state
  }
}
