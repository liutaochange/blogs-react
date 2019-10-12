import { USER_TOKEN_KEY, USER_INFO } from '@/config/index'
let userInfo = window.localStorage.getItem(USER_INFO)
userInfo = userInfo ? JSON.parse(userInfo) : null
let token = localStorage.getItem(USER_TOKEN_KEY)
let state = {
  userId: userInfo ? userInfo.userId : '',
  username: userInfo ? userInfo.username : '',
  name: userInfo ? userInfo.name : '',
  token: token,
}

export default state
