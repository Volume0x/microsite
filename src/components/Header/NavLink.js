import React from 'react'

import ScrollLink from '../ScrollLink'

const NavLink = ({negative, index, count, className, ...props}) => (
  <ScrollLink
    {...props}
    activeClass={negative ? 'navlink-active' : ''}
    className={`
      ${className}
      dim dib v-top
      mao
      ${index > 0 ? 'ml2-m ml4-l' : 'ml0'}
      ${index < count - 1 ? 'mr2-m mr4-l' : 'mr0 pb4 pb0-ns'}
      ${negative ? 'blue bg-white' : 'white'}
      w-100 w-auto-ns
      pv4 pa0-ns
    `}
  />
)

export default NavLink
