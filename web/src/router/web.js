import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Row, Col, BackTop } from 'antd'
import Loading from '@/components/common/loading'
const Home = lazy(() => import('@/views/web/home'))
const Web = () => (
    <div className='web-root'>
        <Row >
            <Col span={5} className='slider-box'></Col>
            <Col span={19} className='content-box'>
                <div id='main-body' style={{ height: 'calc(100vh - 73px)', overflowY: 'auto' }}>
                    <Suspense fallback={<Loading />}>
                        <Switch>
                            <Route component={props => <Home {...props} />} />
                        </Switch>
                    </Suspense>
                    <BackTop target={() => document.getElementById('main-body')} />
                </div>
            </Col>
        </Row>
    </div>
)

export default Web
