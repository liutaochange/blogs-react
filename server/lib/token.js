const jwt = require('jsonwebtoken')
const { TOKEN_KEY, EXPIRESIN } = require('../config')
// 生成token
exports.createToken = async data => {
  return await jwt.sign(data, TOKEN_KEY, { expiresIn: EXPIRESIN })
}
// 判断请求头部的authorization是否携带了token
exports.getUserInfo = async ctx => {
  let authorization = ctx.header.authorization
  if (authorization) {
    let token = authorization.split(' ')[1]
    try {
      let payload = jwt.verify(token, TOKEN_KEY)
      return payload
    } catch (e) {
      return {
        auth: 0
      }
    }
  } else {
    return false
  }
}
