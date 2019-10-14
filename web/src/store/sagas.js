import { fork } from 'redux-saga/effects'
import userSagas from './user/sagas'
function* rootSaga() {
  yield fork(userSagas)
}
export default rootSaga
