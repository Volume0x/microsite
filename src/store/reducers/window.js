import { window as defaultState } from '../state'
import { actionTypes as types } from '../constants'

const SMALL_WIDTH = 480

export default (state = defaultState, action) => {
  const nextState = { ...state }
  switch (action.type) {
    case types.DID_SCROLL:
      const { belowTop, belowFold } = state
      const { scrollY, innerHeight } = window
      nextState.scrollY = scrollY

      if (belowTop && scrollY < innerHeight * 0.5) {
        return { ...nextState, belowTop: false }
      }
      if (!belowTop && scrollY >= innerHeight * 0.5) {
        return { ...nextState, belowTop: true }
      }
      if (belowFold && scrollY < innerHeight) {
        return { ...nextState, belowFold: false }
      }
      if (!belowFold && scrollY >= innerHeight) {
        return { ...nextState, belowFold: true }
      }
      return nextState

    case types.DID_RESIZE:
      const { innerWidth } = window
      nextState.innerWidth = innerWidth

      return { ...nextState, isSmall: innerWidth < SMALL_WIDTH }
    default: return state
  }
}
