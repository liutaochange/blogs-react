import React, { useState } from 'react'
import { Button, Form, Input, Icon } from 'antd'
import { useDispatch } from 'react-redux'

const LoginForm = props => {
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const handleSubmit = e => {
    e.preventDefault()
    let { succeedCallback, type } = props
    const { validateFields } = props.form
    validateFields((err, values) => {
      if (!err) {
        setLoading(true)
        dispatch({
          type: 'AsyncUserLogin',
          data: {
            ...values,
            type
          },
          callback: () => {
            setLoading(false)
            succeedCallback()
          }
        })
      }
    })
  }
  const { getFieldDecorator } = props.form
  return (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item>
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
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="请输入电子邮箱"
          />
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [
            {
              required: true,
              message: '请输入密码'
            }
          ]
        })(
          <Input.Password
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="请输入密码"
          />
        )}
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          loading={loading}
          htmlType="submit"
          style={{ width: '100%', float: 'right' }}
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}
export default Form.create()(LoginForm)
