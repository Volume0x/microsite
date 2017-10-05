import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers'

import defaultState from '../state'
import windowReducer from './window'
import headerReducer, { headerDidScroll, headerDidResize } from './header'
import { actionTypes as types } from '../constants'

const combinedReducer = combineReducers({
  window: windowReducer,
  header: headerReducer
})

const crossSliceReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.DID_SCROLL: return {
      window: windowReducer(state.window, action),
      header: headerDidScroll(state.header, action, state.window)
    }
    case types.DID_RESIZE: return {
      window: windowReducer(state.window, action),
      header: headerDidResize(state.header, action, state.window)
    }
    default: return state
  }
}

export default reduceReducers(
  crossSliceReducer,
  combinedReducer
)
