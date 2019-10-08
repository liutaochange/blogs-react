import React, { useEffect } from 'react'
import API from '@/services/index'
const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      let res = await API.register({
        username: 'java',
        password: '123456',
        name: 'web'
      })
      console.log(res)
    }
    fetchData()
  })
  return <div>我是首页</div>
}
export default Home
