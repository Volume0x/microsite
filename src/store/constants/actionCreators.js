import * as types from './actionTypes'

export const didScroll = () => ({
  type: types.DID_SCROLL
})

export const didResize = () => ({
  type: types.DID_RESIZE
})

export const closeNav = () => ({
  type: types.CLOSE_NAV
})

export const resetNav = () => ({
  type: types.RESET_NAV
})

export const toggleNav = () => ({
  type: types.TOGGLE_NAV
})
