import { COMMENT_ADD_URL, GET_COMMENTS_URL } from './interface'
import axios from '@/base/fetch'
export const GET_COMMENTS = async data =>
  await axios.get(GET_COMMENTS_URL, { params: data })
export const COMMENT_ADD = async data => await axios.post(COMMENT_ADD_URL, data)
