import { window as defaultState } from '../state'
import { actionTypes as types } from '../constants'

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.DID_SCROLL:
      const { belowTop, belowFold } = state
      const { scrollY, innerHeight } = window
      const nextState = { ...state, scrollY }

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
    default: return state
  }
}
