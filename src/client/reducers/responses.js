
import { FETCH_RESPONSES, RECEIVE_RESPONSES } from '../constants'

const initialState = { objects: [] }

export default function responses(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_RESPONSES:
      let payload = action.payload
      return {
        ...state,
        objects: payload
      }
    default:
      return state
  }
}
