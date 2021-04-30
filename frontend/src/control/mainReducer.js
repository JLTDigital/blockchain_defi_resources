import {
  EXCHANGES_REQUEST,
  EXCHANGES_SUCCESS,
  EXCHANGES_FAIL
} from './mainConstants'

export const exchangesReducer = (state = { exchanges: [] }, action) => {
  switch(action.type) {
    case EXCHANGES_REQUEST:
      return { loading: true, exchanges: [] }
    case EXCHANGES_SUCCESS:
      return { loading: false, exchanges: action.payload.exchanges }
    case EXCHANGES_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}