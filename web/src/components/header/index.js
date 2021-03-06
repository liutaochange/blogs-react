import React from 'react'
import { Row, Col } from 'antd'
import Logo from './logo'
import Search from './search'
import Nav from './nav'
import UserHead from './userHead'
import './index.less'
const Header = () => (
  <Row type="flex" align="middle" justify="center" className="header-container">
    <Col span={5}>
      <Logo />
    </Col>
    <Col span={7}>
      <Search />
    </Col>
    <Col span={8}>
      <Nav />
    </Col>
    <Col span={4}>
      <UserHead />
    </Col>
  </Row>
)

export default Header
