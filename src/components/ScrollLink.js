import React from 'react'
import { Link } from 'react-scroll'

const ScrollLink = ({to, className, ...props}) => (
  <Link
    to={to}
    spy
    smooth
    isDynamic
    delay={150}
    className={`pointer link ${className || ''}`}
    {...props}
  />
)

export default ScrollLink
