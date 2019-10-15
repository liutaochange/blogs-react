import React, { useState, Fragment } from 'react'
import { Modal, Button, Form, Input, Radio } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

const UpdateUserModal = props => {
  const [loading, setLoading] = useState(false)
  const [type, setType] = useState(1)
  const dispatch = useDispatch()
  const { isShow, onCancel } = props
  const { getFieldDecorator, validateFields } = props.form
  const { username, name } = useSelector(state => state.user)
  const handleSubmit = e => {
    e.preventDefault()
    validateFields((err, values) => {
      if (!err) {
        setLoading(true)
        dispatch({
          type: 'AsyncUserUpdate',
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
  const compareToNextPassword = (rule, value, callback) => {
    let confirmPassword = getFieldValue('confirmPassword')
    if (!confirmPassword || !value) {
      callback()
    } else {
      validateFields(['confirmPassword'], (errors, values) => {})
    }
    callback()
  }
  const compareToFirstPassword = (rule, value, callback) => {
    let password = getFieldValue('newPassword')
    if (!password || !value) {
      callback()
    } else {
      if (value !== password) {
        callback('两次密码输入不一致')
      }
      callback()
    }
  }
  const onChange = e => {
    setType(e.target.value)
  }
  const formItemLayout = {
    labelCol: { span: 6, offset: 0 },
    wrapperCol: { span: 17, offset: 0 }
  }
  const submitLayout = {
    wrapperCol: { span: 23, offset: 0 }
  }
  return (
    <Modal
      title="修改用户信息"
      visible={isShow}
      onCancel={onCancel}
      width={434}
      footer={null}
    >
      <Radio.Group
        value={type}
        onChange={onChange}
        style={{ marginBottom: '10px', textAlign: 'right', display: 'block' }}
      >
        <Radio value={1}>昵称</Radio>
        <Radio value={2}>密码</Radio>
      </Radio.Group>
      <Form onSubmit={handleSubmit} {...formItemLayout} className="login-form">
        <Form.Item label="用户邮箱">
          <Input disabled value={username} />
        </Form.Item>
        {type === 1 ? (
          <Fragment>
            <Form.Item label="用户昵称">
              {getFieldDecorator('name', {
                initialValue: name,
                rules: [
                  {
                    required: true,
                    message: '用户昵称'
                  }
                ]
              })(<Input />)}
            </Form.Item>
            <Form.Item label="密码">
              {getFieldDecorator('password', {
                validateFirst: true,
                rules: [
                  {
                    required: true,
                    message: '请输入密码'
                  }
                ]
              })(<Input.Password />)}
            </Form.Item>
          </Fragment>
        ) : (
          <Fragment>
            <Form.Item label="原密码">
              {getFieldDecorator('password', {
                validateFirst: true,
                rules: [
                  {
                    required: true,
                    message: '请输入原密码'
                  }
                ]
              })(<Input.Password />)}
            </Form.Item>
            <Form.Item label="新密码" hasFeedback>
              {getFieldDecorator('newPassword', {
                validateFirst: true,
                rules: [
                  {
                    required: true,
                    message: '请输入新密码'
                  },
                  {
                    min: 6,
                    message: '密码长度至少为6'
                  },
                  {
                    validator: compareToNextPassword
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
          </Fragment>
        )}
        <Form.Item {...submitLayout}>
          <Button
            type="primary"
            loading={loading}
            htmlType="submit"
            style={{ width: '100%', float: 'right' }}
          >
            确认修改
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default Form.create()(UpdateUserModal)
