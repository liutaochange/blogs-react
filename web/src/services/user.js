import axios from '@/base/fetch'
import { REGISTER_URL } from '@/config/interface'
export const register = async data => await axios.post(REGISTER_URL, data)
