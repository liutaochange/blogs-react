import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer.js'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas.js'
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const Store = createStore(reducer, enhancer)
sagaMiddleware.run(rootSaga)
export default Store
