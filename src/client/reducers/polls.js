
import { FETCH_POLLS, RECEIVE_POLLS } from '../constants'

const initialState = { polls: [] }

export default function polls(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      let payload = action.payload
      return {
        ...state,
        polls: payload
      }
    default:
      return state
  }
}
