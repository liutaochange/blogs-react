import { put, fork, all, takeEvery } from 'redux-saga/effects'
import { initDataAction } from './action'
import { SETDATA } from '../actionType'
function* getInitList() {
  try {
    const res = yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ count: 1 })
      }, 3000)
    })
    console.log(res)
    const action = initDataAction(res)
    yield put(action)
  } catch (error) {
    console.log(error)
  }
}
export function* setInit() {
  yield takeEvery(SETDATA, getInitList)
}
export default function* userSagas() {
  yield all([fork(setInit)])
}
