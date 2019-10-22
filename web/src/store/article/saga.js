import { get_article, get_article_detail } from '@/services/index'
import { put, call, takeEvery } from 'redux-saga/effects'
import { getArticleListAction, getNewThreeAction } from './action'
function* getArticleList({ data }) {
  try {
    const res = yield call(get_article, data)
    if (res.status === 1) {
      const action = getArticleListAction(res.response)
      yield put(action)
    }
  } catch (error) {
    console.log(error)
  }
}
function* getNewThreeList({ data }) {
  try {
    const res = yield call(get_article, data)
    if (res.status === 1) {
      const threeAction = getNewThreeAction(res.response)
      yield put(threeAction)
    }
  } catch (error) {
    console.log(error)
  }
}
function* getArticleDetail({ data }) {
  try {
    const res = yield call(get_article_detail, data)
    if (res.status === 1) {
      const action = getArticleListAction(res.response)
      yield put(action)
    }
  } catch (error) {
    console.log(error)
  }
}

export default function* articleSagas() {
  yield takeEvery('AsyncArticleList', getArticleList)
  yield takeEvery('AsyncArticleThree', getNewThreeList)
  yield takeEvery('AsyncArticleDetail', getArticleDetail)
}
