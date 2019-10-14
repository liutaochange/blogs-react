import { put, call, takeEvery } from 'redux-saga/effects'
import { getCategoryList } from './action'
import { get_category } from '@/services/index'
function* getCategory({ data }) {
  try {
    const res = yield call(get_category)
    if (res.status === 1) {
      const action = getCategoryList(res.response)
      yield put(action)
    }
  } catch (error) {
    console.log(error)
  }
}
export default function* userSagas() {
  yield takeEvery('AsyncGetCategory', getCategory)
}
