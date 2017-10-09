import React from 'react'

import Logo from '../Logo'
import ScrollLink from '../ScrollLink'

const LogoLink = ({negative, className, ...props}) => (
  <ScrollLink
    {...props}
    to={'home'}
    className={`tl white flex items-center w4 w3-m w5-l h3 ${className}`}
  >
    <Logo
      className={`dn db-m h3 ${negative ? 'blue' : 'white'}`}
      withGradient={negative}
    />
    <Logo
      className={`db dn-m ${negative ? 'blue' : 'white'}`}
      withGradient={negative}
      withText
    />
  </ScrollLink>
)

export default LogoLink
