import { fork } from 'redux-saga/effects'
import userSagas from './user/saga'
import categorySagas from './category/saga'
function* rootSaga() {
  yield fork(userSagas)
  yield fork(categorySagas)
}
export default rootSaga
