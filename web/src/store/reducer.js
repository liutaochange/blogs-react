import { combineReducers } from 'redux'
import user from './user/reducer'
import tag from './tag/reducer'
import common from './common/reducer'
import article from './article/reducer'
import category from './category/reducer'
import comment from './comment/reducer'
import reply from './reply/reducer'
export default combineReducers({
  common,
  user,
  tag,
  article,
  category,
  comment,
  reply
})
