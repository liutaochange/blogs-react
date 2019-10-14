import React from 'react'
import { Avatar, Row, Col, Icon } from 'antd'
import img from '@/assets/images/bloger-head.jpg'
const BloggerInfor = () => {
  return (
    <div className="blogger-infor">
      <Avatar size={110} src={img} />
      <h2 className="name">黄老邪</h2>
      <p className="introduction">梦想做全栈</p>
      <Row>
        <Col span={24}>
          <a
            href="https://github.com/liutaochange"
            rel="noopener noreferrer"
            target="_blank"
            style={{ color: 'rgba(0, 0, 0, 0.65)' }}
          >
            <Icon type="github" /> github
          </a>
        </Col>
      </Row>
    </div>
  )
}

export default BloggerInfor
