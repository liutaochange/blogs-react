import React, { useState } from 'react'
import { Modal, Button, Form, Input, message } from 'antd'
import { useDispatch } from 'react-redux'

const RegisterModal = props => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const handleSubmit = e => {
    e.preventDefault()
    const { onCancel } = props
    const { validateFields } = props.form
    validateFields((err, values) => {
      if (!err) {
        const password = getFieldValue('password')
        const confirmPassword = getFieldValue('confirmPassword')
        if (password && value && confirmPassword !== password) {
          message.error('两次密码输入不一致')
          return
        }
        setLoading(true)
        dispatch({
          type: 'AsyncUserRegister',
          data: {
            ...values
          },
          callback: () => {
            setLoading(false)
            onCancel()
          }
        })
      }
    })
  }
  const compareToFirstPassword = (rule, value, callback) => {
    const { getFieldValue } = props.form
    let password = getFieldValue('password')
    if (password && value && value !== password) {
      callback('两次密码输入不一致')
    } else {
      callback()
    }
  }
  const formItemLayout = {
    labelCol: { span: 6, offset: 0 },
    wrapperCol: { span: 17, offset: 0 }
  }
  const submitLayout = {
    wrapperCol: { span: 23, offset: 0 }
  }
  let { isShow, onCancel } = props
  const { getFieldDecorator } = props.form
  return (
    <Modal
      title="注册"
      visible={isShow}
      onCancel={onCancel}
      width={434}
      footer={null}
    >
      <Form onSubmit={handleSubmit} {...formItemLayout} className="login-form">
        <Form.Item label="用户邮箱">
          {getFieldDecorator('username', {
            rules: [
              {
                required: true,
                message: '请输入电子邮箱'
              },
              {
                type: 'email',
                message: '请注意正确的电子邮箱格式'
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="用户昵称">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: '请输入用户昵称'
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item label="新密码" hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: '请输入新密码'
              },
              {
                min: 6,
                message: '密码长度至少为6'
              }
            ]
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item label="确认密码" hasFeedback>
          {getFieldDecorator('confirmPassword', {
            rules: [
              {
                required: true,
                message: '请输入确认密码'
              },
              {
                validator: compareToFirstPassword
              }
            ]
          })(<Input.Password />)}
        </Form.Item>
        <Form.Item {...submitLayout}>
          <Button
            type="primary"
            loading={loading}
            htmlType="submit"
            style={{ width: '100%', float: 'right' }}
          >
            注册
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default Form.create()(RegisterModal)
