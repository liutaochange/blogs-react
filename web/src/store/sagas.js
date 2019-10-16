import { fork } from 'redux-saga/effects'
import userSagas from './user/saga'
import categorySagas from './category/saga'
import tagSagas from './tag/saga'
import articleSagas from './article/saga'
function* rootSaga() {
  yield fork(userSagas)
  yield fork(categorySagas)
  yield fork(tagSagas)
  yield fork(articleSagas)
}
export default rootSaga
