import initState from './state'
import { GET_CATEGORY_LIST } from '../actionType'
const category = (state = initState, { type, data }) => {
  switch (type) {
    case GET_CATEGORY_LIST:
      return { ...state, categoryList: data }
    default:
      return state
  }
}

export default category
