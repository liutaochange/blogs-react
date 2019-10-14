const BASE_URL =
  process.env.NODE_ENV === 'production' ? '' : 'http://localhost:4399/api'
const REGISTER = '/user/register'
const LOGIN = '/user/login'
const LOGOUT = '/user/logout'
export { BASE_URL, REGISTER, LOGIN, LOGOUT }
