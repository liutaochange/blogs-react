import { fork } from 'redux-saga/effects'
import userSagas from './user/saga'
function* rootSaga() {
  yield fork(userSagas)
}
export default rootSaga
