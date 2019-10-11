import { countType, colorType } from './action'
import { combineReducers } from 'redux'
const initCount = {
  count: 0
}
function Counter(state = initCount, action) {
  switch (action.type) {
    case countType:
      return Object.assign({}, state, action.count)
    default:
      return state
  }
}
const initColor = {
  color: '#fff'
}
function Color(state = initColor, action) {
  switch (action.type) {
    case colorType:
      return Object.assign({}, state, action.color)
    default:
      return state
  }
}
export default combineReducers({
  Counter,
  Color
})
