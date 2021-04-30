import axios from 'axios'
import {
  EXCHANGES_REQUEST,
  EXCHANGES_SUCCESS,
  EXCHANGES_FAIL
} from './mainConstants'


// Exchanges Actions
export const exchanges = async (dispatch) => {
  try {
    dispatch({ type: EXCHANGES_REQUEST})

    const { data } = await axios.get(`/api/exchanges`)

    dispatch({
      type: EXCHANGES_SUCCESS,
      payload: data
    })
  } catch (error) {
    dispatch({
      type: EXCHANGES_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message
    })
  }
}