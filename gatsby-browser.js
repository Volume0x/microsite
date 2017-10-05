import React from 'react'
import { anchorate } from 'anchorate'
import { scroller } from 'react-scroll'
import { Provider } from 'react-redux'
import { Router } from 'react-router-dom'

import createStore from './src/store'

exports.onRouteChange = () => {
  anchorate({scroller})
}

exports.replaceRouterComponent = ({history}) => ({children}) => (
  <Provider store={createStore()}>
    <Router history={history}>
      {children}
    </Router>
  </Provider>
)
