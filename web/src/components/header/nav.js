import React, { useState, useEffect } from 'react'
import { Menu, Icon } from 'antd'
import { Link, withRouter } from 'react-router-dom'
const navData = [
  {
    key: '/',
    pathname: '/',
    name: '首页',
    icon: 'home'
  },
  {
    key: '/archive',
    pathname: '/archive',
    name: '归档',
    icon: 'edit'
  },
  {
    key: '/category',
    pathname: '/category',
    name: '分类',
    icon: 'bars'
  },
  {
    key: '/about',
    pathname: '/about',
    name: '关于',
    icon: 'user'
  }
]
const Nav = props => {
  const [currentKey, setCurrentKey] = useState('/')
  const { pathname } = props.location
  const changeSelectNav = ({ key }) => {
    setCurrentKey(key)
  }
  useEffect(() => {
    let include = navData.find(item => item.pathname === pathname)
    if (!include) {
      changeSelectNav({ key: '' })
    } else {
      changeSelectNav({ key: pathname })
    }
  }, [pathname])
  return (
    <div className="nav">
      <Menu
        mode="horizontal"
        className="nav-ul"
        selectedKeys={[currentKey]}
        onClick={() => {
          changeSelectNav()
        }}
        overflowedIndicator={<Icon type="menu" />}
      >
        {navData.map((nav, key) => (
          <Menu.Item key={nav.key} className="item">
            <Link to={nav.pathname}>
              <Icon type={nav.icon} />
              {nav.name}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  )
}

export default withRouter(Nav)
