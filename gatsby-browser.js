import React from 'react'
import { anchorate } from 'anchorate'
import { scroller } from 'react-scroll'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'react-router-redux'

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
