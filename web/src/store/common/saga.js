import { put, takeEvery } from 'redux-saga/effects'
import { updateLoadingAction } from './action'
function* updataLoading({ data }) {
  const action = updateLoadingAction(data)
  yield put(action)
}
export default function* commonSaga() {
  yield takeEvery('changeLoading', updataLoading)
}
