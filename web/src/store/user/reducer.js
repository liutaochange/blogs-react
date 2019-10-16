import {
  LOGIN,
  LOGOUT,
  REGISTER,
  UPDATE_USER,
  GET_USER_INFO
} from '../actionType'
import initState from './state'
function User(state = initState, { type, data }) {
  switch (type) {
    case LOGIN:
      return {
        ...state,
        data
      }
    case LOGOUT:
      return {
        ...state,
        data
      }
    case REGISTER:
      return {
        ...state,
        data
      }
    case UPDATE_USER:
      return {
        ...state,
        data
      }
    case GET_USER_INFO:
      return {
        ...state,
        data
      }
    default:
      return state
  }
}

export default User
