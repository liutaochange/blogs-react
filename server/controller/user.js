const { userModel } = require('../model/index')
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const { passwordHash, passwordCompare } = require('../lib/bcrypt')
const { createToken, getUserInfo } = require('../lib/token')
class userController {
  // 校验用户名是否已经注册，密码加密处理
  static async register(ctx) {
    let params = ctx.request.body
    let { username, password, name } = params
    let user = await userModel.findOne({ where: { username } }) // 校验是否用户名是否已经注册
    if (user) {
      ctx.body = {
        status: 0,
        message: '此用户名已注册过'
      }
    } else {
      let bcryptPassword = await passwordHash(password) // 密码加密
      let response = await userModel.create({
        username,
        name,
        password: bcryptPassword
      })
      if (response) {
        let User = await userModel.findOne({ where: { username } })
        let token = await createToken({
          id: User.id,
          username: User.username,
          auth: User.auth
        })
        ctx.body = {
          status: 1,
          message: '注册成功',
          response: { id: User.id, username, name, token }
        }
      } else {
        ctx.body = {
          status: 0,
          message: '注册失败'
        }
      }
    }
  }
  // 用户登录
  static async login(ctx) {
    let { username, password, type } = ctx.request.body
    let where = {}
    if (type === 'admin') {
      where = { username, auth: 1 }
    } else {
      where = { username }
    }
    let response = await userModel.findOne({ where })
    if (response) {
      let isSame = await passwordCompare(password, response.password) // 校验密码是否正确
      if (isSame) {
        let { id, username, name, auth } = response
        let token = await createToken({ id, username, auth })
        ctx.body = {
          status: 1,
          message: '登录成功',
          response: { id, username, name, token }
        }
      } else {
        ctx.body = {
          status: 0,
          message: '密码不正确'
        }
      }
    } else {
      if (type === 'admin') {
        ctx.body = {
          status: 0,
          message: '管理员账号不存在'
        }
      } else {
        ctx.body = {
          status: 0,
          message: '用户不存在'
        }
      }
    }
  }
}

module.exports = userController
