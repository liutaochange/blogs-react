import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setDataAction } from '@/store/user/action'
const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setDataAction())
  }, [dispatch])
  return <div>我是首页</div>
}
export default Home
