import { call, put, takeEvery, select } from 'redux-saga/effects'
import { reply_add } from '@/services/index'
import { replyAddAction } from './action'
function* replyAdd({ data }) {
  try {
    const { status, response } = yield call(reply_add, data)
    if (status === 1) {
      const { name, auth } = yield select(state => state.user)
      const action = replyAddAction({ ...response, user: { name, auth } })
      yield put(action)
    }
  } catch (error) {
    console.log(error)
  }
}
export default function* replySaga() {
  yield takeEvery('AsyncReplyAdd', replyAdd)
}
