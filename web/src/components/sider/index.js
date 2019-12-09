import React from 'react'
import BloggerInfor from './bloggerInfor'
import NewArticles from './newArticles'
import Tags from './tags'
import './index.less'
const Sider = () => (
  <div className="sider-container">
    <div className="sider-roll">
      <BloggerInfor />
      <NewArticles />
      <Tags />
    </div>
  </div>
)

export default Sider
