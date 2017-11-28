import React from 'react'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

import createStore from './src/store'

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => (
  replaceBodyHTMLString(
    renderToString(
      <Provider store={createStore()}>
        { bodyComponent }
      </Provider>
    )
  )
)
