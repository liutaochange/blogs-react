import axios from '@/bese/fetch'
import { GET_ARTICLES_URL, GET_ARTICLE_DETAIL_URL } from './interface'
export const get_article = async params =>
  await axios.get(GET_ARTICLES_URL, { params })
export const get_article_detail = async params =>
  await axios.get(GET_ARTICLE_DETAIL_URL, { params })
