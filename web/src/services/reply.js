import { REPLY_ADD_URL } from './interface'
import axios from '@/base/fetch'
export const REPLY_ADD = async data => await axios.post(REPLY_ADD_URL, data)
export const REPLY_DEL = async data => await axios.post(REPLY_DEL_URL, data)
