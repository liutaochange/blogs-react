import { call, put, takeEvery, select } from 'redux-saga/effects'
import { getCommentsAction, commentAddAction } from './action'
import { get_comments, comments_add } from '@/services/index'
import { message } from 'antd'
function* getCommonList({ data }) {
  try {
    const res = yield call(get_comments, data)
    if (res.status === 1) {
      const action = getCommentsAction({
        commentList: res.response,
        pager: response.pager
      })
      yield put(action)
    }
  } catch (error) {
    console.log(error)
  }
}
function* addCommon({ data }) {
  try {
    const res = yield call(comments_add, data)
    if (res.status === 1) {
      message.success('评论成功')
      const { name, auth } = yield select(state => state.user)
      const action = commentAddAction({
        ...response,
        replies: [],
        user: { name, auth }
      })
      yield put(action)
    }
  } catch (error) {
    console.log(error)
  }
}
export default function* commentSaga() {
  yield takeEvery('AsyncGetComment', getCommonList)
  yield takeEvery('AsyncAddComment', addCommon)
}
