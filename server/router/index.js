const Router = require('koa-router')
const router = new Router({ prefix: '/api' })
const userRouter = require('./user')

router.use('/user', userRouter.routes())

module.exports = router