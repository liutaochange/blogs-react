import { USER_TOKEN_KEY, USER_INFO } from '@/config/index'
let userInfo = window.localStorage.getItem(USER_INFO)
userInfo = userInfo ? JSON.parse(userInfo) : null
let token = localStorage.getItem(USER_TOKEN_KEY)
export default {
  id: userInfo ? userInfo.id : '',
  username: userInfo ? userInfo.username : '',
  name: userInfo ? userInfo.name : '',
  token: token,
}
