import axios from 'axios'
import { BASE_URL } from '@/services/interface'
import { USER_TOKEN_KEY } from '@/config/index'
import { message } from 'antd'

axios.defaults.baseURL = BASE_URL // 全局设置请求的前缀url
// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    let token = window.localStorage.getItem(USER_TOKEN_KEY)
    if (token) {
      config.headers.Authorization = 'Blog ' + token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 添加响应拦截器
axios.interceptors.response.use(
  function(response) {
    if (response.data.status !== 1) {
      message.error(response.data.message)
    }
    return response.data
  },
  function(error) {
    return Promise.reject(error)
  }
)

export default axios
