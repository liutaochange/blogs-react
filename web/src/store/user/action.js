import { INITDATA, SETDATA } from '../actionType'
export const initDataAction = data => ({
  type: INITDATA,
  data
})
export const setDataAction = () => ({
  type: SETDATA
})
