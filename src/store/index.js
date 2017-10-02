import createHistory from 'history/createMemoryHistory'
import { compose, createStore, applyMiddleware } from 'redux'
import { routerMiddleware as _routerMiddleware } from 'react-router-redux'

import rootReducer from './reducers'
import initialState from './state'
import { actionCreators } from './constants'

const composeEnhancers = (
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionCreators })
    : compose
)

const createRouterMiddleware = compose(_routerMiddleware, createHistory)
const middlewares = [
  createRouterMiddleware()
]
const middleware = composeEnhancers(
  applyMiddleware(...middlewares)
  /* additional enhancers */
)

let store

export default (state = initialState) => {
  if (!store) {
    store = createStore(rootReducer, state, middleware)
  }
  return store
}
