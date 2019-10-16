import initState from './state'
import { UPDATE_LOADING } from '../actionType'
const common = (state = initState, { type, data }) => {
  switch (type) {
    case UPDATE_LOADING:
      return { ...state, data }
    default:
      return state
  }
}

export default common
