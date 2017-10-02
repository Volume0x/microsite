import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import headerReducer from './header'

export default combineReducers({
  router: routerReducer,
  header: headerReducer
})
