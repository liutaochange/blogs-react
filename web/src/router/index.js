import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Row, Col, BackTop } from 'antd'
import Loading from '@/components/common/loading'
import NotFound from '@/views/404'

const Home = lazy(() => import(/* webpackChunkName: "home" */ '@/views/home'))
const Archive = lazy(() =>
  import(/* webpackChunkName: "archive" */ '@/views/archive')
)
const Category = lazy(() =>
  import(/* webpackChunkName: "category" */ '@/views/category')
)
const About = lazy(() =>
  import(/* webpackChunkName: "about" */ '@/views/about')
)
const Detail = lazy(() =>
  import(/* webpackChunkName: "detail" */ '@/views/detail')
)

const config = [
  {
    path: '/',
    title: '首页',
    exact: true,
    component: Home
  },
  {
    path: '/archive',
    title: '归档',
    exact: true,
    component: Archive
  },
  {
    path: '/category',
    title: '分类',
    exact: true,
    component: Category
  },
  {
    path: '/about',
    title: '关于',
    exact: true,
    component: About
  },
  {
    path: '/article',
    title: '文章列表',
    exact: true,
    component: Home
  },
  {
    path: '/article/:id',
    title: '文章详情',
    exact: true,
    component: Detail
  },
  {
    path: '/tag/:name',
    title: '标签归档',
    exact: true,
    component: Archive
  },
  {
    path: '/category/:name',
    title: '分类归档',
    exact: true,
    component: Archive
  }
]

const App = () => (
  <Router>
    <div className="web-root">
      <Row>
        <Col span={5} className="slider-box"></Col>
        <Col span={19} className="content-box">
          <div
            id="main-body"
            style={{ height: 'calc(100vh - 73px)', overflowY: 'auto' }}
          >
            <Suspense fallback={<Loading />}>
              <Switch>
                {config.map((res, key) => (
                  <Route {...res} key={key} />
                ))}
                <Route component={NotFound} />
              </Switch>
            </Suspense>
            <BackTop target={() => document.getElementById('main-body')} />
          </div>
        </Col>
      </Row>
    </div>
  </Router>
)

export default App
