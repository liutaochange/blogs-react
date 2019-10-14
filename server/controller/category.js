const { categoryModel, sequelize } = require('../model/index')

class categoryController {
  // 分类列表
  static async list(ctx) {
    let response = await categoryModel.findAll({
      group: 'name',
      attributes: [
        'name',
        [sequelize.fn('COUNT', sequelize.col('name')), 'articleCount']
      ]
    })
    ctx.body = {
      status: 1,
      message: '请求成功',
      response
    }
  }
}

module.exports = categoryController
