import state from './state'
import { GET_CATEGORY_LIST } from '../actionType'
const initState = state

const category = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_CATEGORY_LIST:
      return { ...state, categoryList: payload }
    default:
      return state
  }
}

export default category
