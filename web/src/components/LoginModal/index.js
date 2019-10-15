import React from 'react'
import { Modal } from 'antd'
import LoginForm from '@/components/common/form'

const LoginModal = props => {
  let { isShow, onCancel } = props
  return (
    <Modal
      title="登录"
      visible={isShow}
      onCancel={onCancel}
      width={334}
      footer={null}
    >
      <LoginForm succeedCallback={onCancel} />
    </Modal>
  )
}
export default LoginModal
