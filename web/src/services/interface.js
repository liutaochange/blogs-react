const BASE_URL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:4399/api'
const REGISTER_URL = '/user/register'
const LOGIN_URL = '/user/login'

export { BASE_URL, REGISTER_URL, LOGIN_URL }
