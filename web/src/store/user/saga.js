import { put, call, takeEvery } from 'redux-saga/effects'
import {
  loginAction,
  logoutAction,
  registerAction,
  updateUserAction,
} from './action'
import { login, register, logout, update } from '@/services/index'
import { message } from 'antd'
function* userLogin({ data, callback }) {
  try {
    const res = yield call(login, data)
    if (res.status === 1) {
      callback()
      message.success('登录成功')
      const action = loginAction(res.response)
      yield put(action)
    }
  } catch (error) {
    callback()
    console.log(error)
  }
}
function* userRegister({ data, callback }) {
  try {
    const res = yield call(register, data)
    if (res.status === 1) {
      callback()
      message.success('注册成功')
      const action = registerAction(res.response)
      yield put(action)
    }
  } catch (error) {
    callback()
    console.log(error)
  }
}
function* userUpdate({ data, callback }) {
  try {
    const res = yield call(update, data)
    if (res.status === 1) {
      callback()
      message.success('更新成功')
      const action = updateUserAction(res.response)
      yield put(action)
    }
  } catch (error) {
    callback()
    console.log(error)
  }
}
export default function* userSagas() {
  yield takeEvery('AsyncUserLogin', userLogin)
  yield takeEvery('AsyncUserRegister', userRegister)
  yield takeEvery('AsyncUserUpdate', userUpdate)
}
