import axios from '@/bese/fetch'
import { GET_ARTICLES_URL, GET_ARTICLE_DETAIL_URL } from './interface'

export const GET_ARTICLES = async params =>
  await axios.get(GET_ARTICLES_URL, { params })
export const GET_ARTICLE_DETAIL = async params =>
  await axios.get(GET_ARTICLE_DETAIL_URL, { params })
