import { REPLY_ADD_URL } from './interface'
import axios from '@/base/fetch'
export const reply_add = async data => await axios.post(REPLY_ADD_URL, data)
