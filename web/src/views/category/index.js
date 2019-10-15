import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Tag, Badge } from 'antd'
import './index.less'
import { Link } from 'react-router-dom'

const Categories = props => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({ type: 'AsyncGetCategory' })
  }, [dispatch])
  const { categoryList, categoryColors } = useSelector(state => state.category)
  return (
    <div className="categories-container">
      <h1 className="title">分类</h1>
      <div className="total">
        总共 <span>{categoryList.length}</span> 个分类
      </div>
      <div className="categories">
        {categoryList.map((category, key) => (
          <Link
            to={{
              pathname: '/category/' + category.name,
              state: { type: 'Category', categoryName: category.name }
            }}
            key={key}
          >
            <span className="item">
              <Badge
                count={category.articleCount}
                style={{
                  backgroundColor: '#fff',
                  color: 'red',
                  borderColor: 'red'
                }}
              >
                <Tag
                  color={categoryColors[key % 11]}
                  style={{ cursor: 'pointer' }}
                >
                  {category.name}
                </Tag>
              </Badge>
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Categories
