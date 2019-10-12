import React, { Fragment, useState } from 'react'
import { Menu, Dropdown, Avatar, Icon } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { logoutAction } from '@/store/user/action'
import headImg from '@/assets/images/bloger-head.jpg'

const UserHead = () => {
  const [loginShow, setLoginShow] = useState(false)
  const [registerShow, setRegisterShow] = useState(false)
  const [updateUserInfoShow, setUpdateUserInfoShow] = useState(false)
  const changeLoginModalShow = () => {
    setLoginShow(!loginShow)
  }
  const changeRegisterModalShow = () => {
    setRegisterShow(!registerShow)
  }
  const changeUpdateUserInfoModalShow = () => {
    setUpdateUserInfoShow(!updateUserInfoShow)
  }
  const logout = () => {
    const dispatch = useDispatch()
    dispatch(logoutAction())
  }
  const userMenu = (
    <Menu>
      <Menu.Item
        onClick={() => {
          changeUpdateUserInfoModalShow()
        }}
      >
        修改用户信息
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          logout()
        }}
      >
        退出登录
      </Menu.Item>
    </Menu>
  )
  const loginRegisterMenu = (
    <Menu>
      <Menu.Item
        onClick={() => {
          changeLoginModalShow()
        }}
      >
        用户登录
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          changeRegisterModalShow()
        }}
      >
        用户注册
      </Menu.Item>
    </Menu>
  )
  const { userId, token, name, auth } = useSelector(state => state.user)
  const { categoryColors } = useSelector(state => state.category)
  const avatarBgColor = categoryColors[(userId - 1) % 11]
  return (
    <div className="userHead">
      {token ? (
        <Fragment>
          <Dropdown overlay={userMenu} trigger={['hover', 'click']}>
            {auth ? (
              <Avatar size={43} src={headImg} style={{ marginLeft: '40px' }} />
            ) : (
              <Avatar
                size={43}
                style={{ backgroundColor: avatarBgColor, marginLeft: '40px' }}
              >
                {name.substring(0, 1)}
              </Avatar>
            )}
          </Dropdown>
          {updateUserInfoShow && (
            <UpdateUserModal
              isShow={updateUserInfoShow}
              onCancel={() => {
                changeUpdateUserInfoModalShow()
              }}
            />
          )}
        </Fragment>
      ) : (
        <Fragment>
          <Dropdown overlay={loginRegisterMenu} trigger={['hover', 'click']}>
            <Avatar size={43} style={{ marginLeft: '40px' }}>
              <Icon type="user" />
            </Avatar>
          </Dropdown>
          {loginShow && (
            <LoginModal
              isShow={loginShow}
              onCancel={() => {
                changeLoginModalShow()
              }}
            />
          )}
          {registerShow && (
            <RegisterModal
              isShow={registerShow}
              onCancel={() => {
                changeRegisterModalShow()
              }}
            />
          )}
        </Fragment>
      )}
    </div>
  )
}
export default UserHead
