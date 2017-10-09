import React from 'react'

import NavLink from './NavLink'

const NavLinks = ({sections, expanded, negative, onClick, ...props}) => (
  <nav
    className={`
      tc w-100 w-auto-ns
      order-0 order-1-ns
      mb2 mb0-ns
      flex flex-column flex-row-ns
      flex-end items-end justify-end
    `}
  >
    {sections.map(({name, title}, i) => (
      <NavLink
        to={name}
        key={i}
        index={i}
        onClick={onClick}
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
