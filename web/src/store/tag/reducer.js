import initState from './state'
import { GET_TAG_LIST } from '../actionType'
const tag = (state = initState, { type, data }) => {
  switch (type) {
    case GET_TAG_LIST:
      return { ...state, tagList: data }
    default:
      return state
  }
}

export default tag
