const BASE_URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:4399/api'
// 用户模块
const REGISTER = '/user/register'
const LOGIN = '/user/login'
const LOGOUT = '/user/logout'
// 分类
const GET_CATEGORIES_URL = '/category/list'

export { BASE_URL, REGISTER, LOGIN, LOGOUT, GET_CATEGORIES_URL }
