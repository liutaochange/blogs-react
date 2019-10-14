import { INITDATA, SETUSER } from '../actionType'
export const initDataAction = data => ({
  type: INITDATA,
  data
})
export const setUserAction = data => ({
  type: SETUSER,
  data
})