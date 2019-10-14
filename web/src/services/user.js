import axios from '@/base/fetch'
import { REGISTER, LOGIN, LOGOUT } from './interface'
export const register = async data => await axios.post(REGISTER, data)
export const login = async data => await axios.post(LOGIN, data)
export const logout = async data => await axios.post(LOGOUT, data)
