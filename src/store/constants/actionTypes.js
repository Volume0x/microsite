const scopeTypes = (types = [], scope = 'App') => (
  types.reduce(
    (scopedTypes, type) => {
      scopedTypes[type] = `${scope}/${type}`
      return scopedTypes
    }, {}
  )
)

const windowTypes = [
  'DID_SCROLL',
  'DID_RESIZE'
]

const headerTypes = [
  'CLOSE_NAV',
  'RESET_NAV',
  'TOGGLE_NAV'
]

export default {
  ...scopeTypes(windowTypes, 'Window'),
  ...scopeTypes(headerTypes, 'Header')
}
