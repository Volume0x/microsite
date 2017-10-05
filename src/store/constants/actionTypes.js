const scopeTypes = (types = [], scope = 'App') => (
  types.reduce(
    (scopedTypes, type) => {
      scopedTypes[type] = `${scope}/${type}`
      return scopedTypes
    }, {}
  )
)

const appTypes = [
  'DID_SCROLL'
]

const headerTypes = [
  'SET_SMALL',
  'CLOSE_NAV',
  'RESET_NAV',
  'TOGGLE_NAV'
]

export default {
  ...scopeTypes(appTypes),
  ...scopeTypes(headerTypes, 'Header')
}
