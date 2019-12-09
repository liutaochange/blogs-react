import { LOGIN, LOGOUT, REGISTER, UPDATE_USER } from '../actionType'
export const loginAction = data => ({
  type: LOGIN,
  data
})
export const logoutAction = data => ({
  type: LOGOUT,
  data
})
export const registerAction = data => ({
  type: REGISTER,
  data
})
export const updateUserAction = data => ({
  type: UPDATE_USER,
  data
})
