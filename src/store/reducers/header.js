import { header as defaultState } from '../state'
import { actionTypes as types } from '../constants'

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CLOSE_NAV:
      return { ...state, expanded: false }
    case types.RESET_NAV:
      return { ...state, expanded: undefined }
    case types.TOGGLE_NAV:
      return { ...state, expanded: !state.expanded }
    default: return state
  }
}

export const headerDidScroll = (state = defaultState, action, windowState) => {
  const nextState = { ...state }
  const { scrollY, innerHeight } = window
  const { hasTransition, visibleBelowFold } = state
  const { belowTop, belowFold, scrollY: lastScrollY } = windowState

  if (scrollY < lastScrollY) {
    nextState.lastVisibleHeaderY = scrollY
  }
  if (!hasTransition && belowTop && scrollY >= innerHeight * 0.75 && scrollY < innerHeight) {
    return { ...nextState, hasTransition: true }
  }
  if (hasTransition && belowTop && scrollY <= innerHeight * 0.75) {
    return { ...nextState, hasTransition: false }
  }
  if (belowFold && scrollY < innerHeight) {
    return { ...nextState, visibleBelowFold: false }
  }
  if (belowFold && !visibleBelowFold && scrollY < lastScrollY) {
    return { ...nextState, visibleBelowFold: true, hasTransition: true }
  }
  if (belowFold && visibleBelowFold && scrollY > lastScrollY) {
    return { ...nextState, visibleBelowFold: false, hasTransition: false }
  }
  return nextState
}
