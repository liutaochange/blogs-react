import React from 'react'
import './index.less'
import BloggerInfor from './bloggerInfor'
import NewArticles from './newArticles'
import Tags from './tags'
const Sider = () => {
  return (
    <div className="sider-container">
      <div className="sider-roll">
        <BloggerInfor />
        <NewArticles />
        <Tags />
      </div>
    </div>
  )
}

export default Sider
