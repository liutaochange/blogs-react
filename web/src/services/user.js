import axios from '@/base/fetch'
import { REGISTER_URL } from './interface'
export const register = async data => await axios.post(REGISTER_URL, data)
