const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const router = require('./router/index')
const app = new Koa()

// 允许跨域访问, 设置接收携带Authorization的请求
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', ctx.headers.origin)
  ctx.set('Access-control-Allow-Methods', '*')
  ctx.set(
    'Access-control-Allow-Headers',
    'X-Requested-With,content-type,Authorization'
  )
  await next()
})

app.use(bodyparser())
app.use(router.routes()).use(router.allowedMethods()) // 路由配置
app.listen(4399)
