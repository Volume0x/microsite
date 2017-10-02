import React from 'react'

import ScrollLink from '../ScrollLink'

const NavLink = ({negative, index, count, className, ...props}) => (
  <ScrollLink
    {...props}
    offset={negative ? -128 : 0}
    activeClass={negative ? 'navlink-active' : ''}
    className={`
      dim dib v-top
      ${negative ? 'blue' : 'white'}
      ${index > 0 ? 'ml2 ml4-l' : 'ml0'}
      ${index < count - 1 ? 'mr2 mr4-l' : 'mr0'}
      ${className}
    `}
  />
)

export default NavLink
