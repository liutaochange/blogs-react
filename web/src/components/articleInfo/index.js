import React from 'react'
import { Divider, Icon, Tag } from 'antd'
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import './index.less'

const ArticleInfo = props => {
  const { tagColors } = useSelector(state => state.tag)
  const { categoryColors } = useSelector(state => state.category)
  let { children, history } = props
  let { readCount, commentsTotal, tags, categories } = props.data
  return (
    <div className="article-info">
      {children}
      <Icon type="eye" className="icon" />
      {readCount}
      <Divider type="vertical" />
      <Icon type="message" className="icon" />
      {commentsTotal}
      <Divider type="vertical" />
      <Icon type="tags" className="icon" />
      {tags &&
        tags.map((tag, key) => (
          <Tag
            className="tag"
            color={tagColors[key % 11]}
            key={key}
            onClick={e => {
              e.stopPropagation()
              history.push({
                pathname: '/tag/' + tag.name,
                state: { type: 'Tag', tagName: tag.name }
              })
            }}
          >
            {tag.name}
          </Tag>
        ))}
      <Divider type="vertical" />
      <Icon type="bars" className="icon" />
      {categories &&
        categories.map((category, key) => (
          <Tag
            className="category"
            color={categoryColors[key % 11]}
            key={key}
            onClick={e => {
              e.stopPropagation()
              history.push({
                pathname: '/category/' + category.name,
                state: { type: 'Category', categoryName: category.name }
              })
            }}
          >
            {category.name}
          </Tag>
        ))}
    </div>
  )
}

export default withRouter(ArticleInfo)
