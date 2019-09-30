const Router = require('koa-router')
const router = new Router({ prefix: '/api' })
// const userRouter = require('./user')
const graphQLSchema = require('../graphql/schema')
const graphqlHTTP = require('koa-graphql')
const root = {
  hello: () => 'hello world'
}
router.all(
  '/hello',
  graphqlHTTP({
    schema: graphQLSchema,
    rootValue: root,
    graphiql: true
  })
)
// router.use('/user', userRouter.routes())

module.exports = router
