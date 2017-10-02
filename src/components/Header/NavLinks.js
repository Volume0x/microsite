import React from 'react'

import NavLink from './NavLink'

const NavLinks = ({sections, negative, ...props}) => (
  <nav className='dn flex-ns flex-end justify-end w-100'>
    {sections.map(({name, title}, i) => (
      <NavLink
        to={name}
        key={i}
        index={i}
        count={sections.length}
        negative={negative}
        {...props}
      >
        {title}
      </NavLink>
    ))}
  </nav>
)

export default NavLinks
