import { INITDATA, SETUSER } from '../actionType'
const initCount = {
  count: 0,
  user: 0
}
function User(state = initCount, action) {
  switch (action.type) {
    case INITDATA:
      return {
        ...state,
        count: action.data.count
      }
    case SETUSER:
      return {
        ...state,
        user: action.data.user
      }
    default:
      return state
  }
}

export default User
