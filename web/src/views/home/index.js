import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { setDataAction } from '@/store/user/action'
const Home = () => {
  const dispatch = useDispatch()
  const { username, name } = useSelector(state => state.user)
  useEffect(() => {
    // 注册
    // dispatch({ type: 'AsyncUserRegister', data: {
    //   username: 'java', password: '123456', name: 'php'
    // } })

    // 登录
    dispatch({ type: 'AsyncUserLogin', data: {
      username: 'java', password: '123456', type: ''
    } })

  }, [dispatch])
  return (
    <div>
      我是首页{username}--{name}
    </div>
  )
}
export default Home
