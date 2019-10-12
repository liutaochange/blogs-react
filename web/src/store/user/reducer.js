import { INITDATA } from '../actionType'
const initCount = {
  count: 0
}
function User(state = initCount, action) {
  switch (action.type) {
    case INITDATA:
      return Object.assign({}, state, action.count)
    default:
      return state
  }
}

export default User
