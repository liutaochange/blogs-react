import { put, fork, takeEvery } from 'redux-saga/effects'
import { initDataAction, setUserAction } from './action'
function* getInitList() {
  try {
    const res = yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ count: 1 })
      }, 3000)
    })
    const action = initDataAction(res)
    yield put(action)
  } catch (error) {
    console.log(error)
  }
}
function* getAsyncUser() {
  try {
    const res = yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ user: 100 })
      }, 5000)
    })
    const action = setUserAction(res)
    yield put(action)
  } catch (error) {
    console.log(error)
  }
}
export function* setInit() {
  yield takeEvery('__SETDATA__', getInitList)
}
export function* setUser() {
  yield takeEvery('__SETUSER__', getAsyncUser)
}
export default function* userSagas() {
  yield fork(setInit)
  yield fork(setUser)
}
