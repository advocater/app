
import { FETCH_SURVEYS, RECEIVE_SURVEYS } from '../constants'

const initialState = { surveys: [] }

export default function surveys(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_SURVEYS:
      let payload = action.payload
      return {
        ...state,
        surveys: payload
      }
    default:
      return state
  }
}
