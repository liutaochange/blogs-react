import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Divider } from 'antd'
// import { getNewThreeArticles } from '@/store/article/action'
import { Link } from 'react-router-dom'
const NewArticles = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(getNewThreeArticles())
  }, [dispatch])
  let { newThreeArticles } = useSelector(state => state.article)
  return (
    <div className="new-articles">
      <Divider orientation="left">最近文章</Divider>
      <div className="articles">
        {newThreeArticles.map((item, key) => (
          <Link to={'/article/' + item.id} className="item" key={key}>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NewArticles
