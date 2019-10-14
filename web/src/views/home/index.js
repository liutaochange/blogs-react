import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { setDataAction } from '@/store/user/action'
const Home = () => {
  const dispatch = useDispatch()
  const { count, user } = useSelector(state => state.user)
  useEffect(() => {
    console.log('test')
    dispatch({ type: '__SETDATA__' })
    dispatch({ type: '__SETUSER__' })
  }, [dispatch])
  return (
    <div>
      我是首页{count}--{user}
    </div>
  )
}
export default Home
