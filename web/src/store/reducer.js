import { combineReducers } from 'redux'
import { UPDATE_LOADING } from './actionType'
import user from './user/reducer'
const commonState = {
  loading: false
}
// common
const common = (state = commonState, { type, payload }) => {
  switch (type) {
    case UPDATE_LOADING:
      return { ...payload }
    default:
      return state
  }
}
export default combineReducers({
  common,
  user
})
