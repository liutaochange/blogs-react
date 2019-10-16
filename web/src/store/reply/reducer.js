import initState from './state'
import { REPLY_ADD } from '../actionType'

const user = (state = initState, { type, data }) => {
  switch (type) {
    case REPLY_ADD:
      return { ...state, data }
    default:
      return state
  }
}

export default user
