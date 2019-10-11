const Sequelize = require('sequelize')
const fs = require('fs')
const path = require('path')
let { database, username, password, options } = require('../config/db')
let sequelize = new Sequelize(database, username, password, options)
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

let db = {}

// 读取各个模块
fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => {
    const model = sequelize.import(path.join(__dirname, file))
    db[model.name + 'Model'] = model
  })

// 执行相关联的模块
Object.keys(db).forEach(name => {
  db[name].associate && db[name].associate(db)
})

db.sequelize = sequelize

sequelize.sync()

module.exports = db
