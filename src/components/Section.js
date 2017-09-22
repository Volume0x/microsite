import React from 'react'

const Section = ({id, className, children}) => (
  <section id={id} className={`
    ${className}
    section
    vh-50
    pv4
    ph4 ph5-m ph6-l
  `}>
    {children}
  </section>
)

export default Section
