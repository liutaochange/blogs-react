import { put, call, takeEvery } from 'redux-saga/effects'
import {
  loginAction,
  logoutAction,
  registerAction,
  updateUserAction,
  getUserAction
} from './action'
import { login, register, logout } from '@/services/index'
import { message } from 'antd'
function* userLogin({ data }) {
  try {
    const res = yield call(login, data)
    if (res.status === 1) {
      message.success('登录成功')
      const action = loginAction(res.response)
      yield put(action)
    }
  } catch (error) {
    console.log(error)
  }
}
function* userRegister({ data }) {
  console.log('param', data)
  try {
    const res = yield call(register, data)
    console.log('res', res)
    if (res.status === 1) {
      message.success('注册成功')
      const action = registerAction(res.response)
      yield put(action)
    }
  } catch (error) {
    console.log(error)
  }
}
export default function* userSagas() {
  yield takeEvery('AsyncUserLogin', userLogin)
  yield takeEvery('AsyncUserRegister', userRegister)
}
