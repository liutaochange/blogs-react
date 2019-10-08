const bcrypt = require('bcrypt')
const { BCRYPT_ROUNDS } = require('../config/index')
// 密码加密
const passwordHash = async password => {
  return await bcrypt.hashSync(password, BCRYPT_ROUNDS)
}
// 密码校验
const passwordCompare = async (password, passwordHash) => {
  return await bcrypt.compareSync(password, passwordHash)
}

module.exports = {
  passwordHash,
  passwordCompare
}
