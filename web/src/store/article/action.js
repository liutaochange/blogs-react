import { GET_ARTICLE_LIST } from '@/store/actionType'

export const getArticleListAction = payload => ({
  type: GET_ARTICLE_LIST,
  payload
})

export const getNewThreeAction = payload => ({
  type: GET_NEW_THREE_ARTICLES,
  payload
})
