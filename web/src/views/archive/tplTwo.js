import React from 'react'
import { Timeline } from 'antd'
import { withRouter, Link } from 'react-router-dom'

const TplTwo = props => {
  let { data, location } = props
  let state = location.state || {}
  let { type, tagName, categoryName } = state
  return (
    <Timeline className="tplTwo">
      <Timeline.Item style={{ padding: '0px 0 40px' }}>
        <span className="name">{tagName || categoryName}</span>
        <span className="type">{type}</span>
      </Timeline.Item>
      {data.map((item, key) => (
        <Timeline.Item key={key}>
          {item.date}{' '}
          <Link className="title" to={'/article/' + item.id}>
            {item.title}
          </Link>
        </Timeline.Item>
      ))}
    </Timeline>
  )
}

export default withRouter(TplTwo)
