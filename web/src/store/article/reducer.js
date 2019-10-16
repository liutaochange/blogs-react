import initState from './state'
import { GET_ARTICLE_LIST, GET_NEW_THREE_ARTICLES } from '../actionType'
const article = (state = initState, { type, data }) => {
  switch (type) {
    case GET_ARTICLE_LIST:
      return { ...state, articleListData: data }
    case GET_NEW_THREE_ARTICLES:
      return { ...state, newThreeArticles: data }
    default:
      return state
  }
}

export default article
