import {
  LOGIN,
  LOGOUT,
  REGISTER,
  UPDATE_USER,
  GET_USER_INFO
} from '../actionType'
import initState from './state'
function User(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        ...action.payload
      }
    case LOGOUT:
      return {
        ...state,
        ...action.payload
      }
    case REGISTER:
      return {
        ...state,
        ...action.payload
      }
    case UPDATE_USER:
      return {
        ...state,
        ...action.payload
      }
    case GET_USER_INFO:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default User
