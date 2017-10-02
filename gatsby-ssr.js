import { compose } from 'redux'
import { Provider } from 'react-redux'
import { renderToString } from 'react-dom/server'

import createStore from './src/store'

exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => (
  compose(
    replaceBodyHTMLString,
    renderToString,
    Provider
  )({
    store: createStore(),
    children: bodyComponent
  })
)
