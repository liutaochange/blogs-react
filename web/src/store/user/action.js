import {
  LOGIN,
  LOGOUT,
  REGISTER,
  UPDATE_USER,
} from '../actionType'
export const loginAction = payload => ({
  type: LOGIN,
  payload
})
export const logoutAction = payload => ({
  type: LOGOUT,
  payload
})
export const registerAction = payload => ({
  type: REGISTER,
  payload
})
export const updateUserAction = payload => ({
  type: UPDATE_USER,
  payload
})
