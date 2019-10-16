import { call, put, takeEvery } from 'redux-saga/effects'
import { get_tags } from '@/services'
import { getTagListAction } from './action'
function* getTagList() {
  try {
    const res = yield call(get_tags)
    if (res.status === 1) {
      const action = getTagListAction(res.response)
      yield put(action)
    }
  } catch (error) {
    console.log(error)
  }
}

export default function* tagSaga() {
  yield takeEvery('AsyncGetTagList', getTagList)
} 