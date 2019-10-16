import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Divider, Tag } from 'antd'
import { Link } from 'react-router-dom'

const Tags = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch({type: 'AsyncGetTagList'})
  }, [dispatch])
  let { tagList, tagColors } = useSelector(state => state.tag)
  return (
    <div className="tags-container">
      <Divider orientation="left">标签</Divider>
      <div className="tags">
        {tagList.map((tag, key) => (
          <Link
            to={{
              pathname: '/tag/' + tag.name,
              state: { type: 'Tag', tagName: tag.name }
            }}
            key={key}
          >
            <Tag color={tagColors[key % 11]}>{tag.name}</Tag>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Tags
