const BASE_URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:4399/api'
// 用户模块
const REGISTER = '/user/register'
const LOGIN = '/user/login'
const LOGOUT = '/user/logout'
const UPDATE = '/user/update'
// 分类
const GET_CATEGORIES_URL = '/category/list'
// 文章
const GET_ARTICLES_URL = '/article/list'
const GET_ARTICLE_DETAIL_URL = '/article/detail'
// 标签
const GET_TAGS_URL = '/tag/list'
// 评论
const COMMENT_ADD_URL = '/comment/add'
const GET_COMMENTS_URL = '/comment/list'
// 回复
const REPLY_ADD_URL = '/reply/add'

export {
  BASE_URL,
  REGISTER,
  LOGIN,
  LOGOUT,
  UPDATE,
  GET_CATEGORIES_URL,
  GET_ARTICLES_URL,
  GET_ARTICLE_DETAIL_URL,
  GET_TAGS_URL,
  COMMENT_ADD_URL,
  GET_COMMENTS_URL,
  REPLY_ADD_URL
}
