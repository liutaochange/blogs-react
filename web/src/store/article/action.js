import { GET_ARTICLE_LIST, GET_NEW_THREE_ARTICLES } from '../actionType'

export const getArticleListAction = data => ({
  type: GET_ARTICLE_LIST,
  data
})

export const getNewThreeAction = data => ({
  type: GET_NEW_THREE_ARTICLES,
  data
})
