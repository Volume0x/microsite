import React from 'react'
import Waypoint from 'react-waypoint'
import { Element } from 'react-scroll'
import { navigateTo } from 'gatsby-link'

const Section = ({id, name, className, pushRoute, children}) => (
  <Element
    id={name}
    name={name}
    className={`section vh-100 pv4 ph4 ph5-m ph6-l ${className || ''}`}
  >
    <Waypoint
      bottomOffset={'4rem'}
      onEnter={() => navigateTo(`#${name}`)}
    >
      <div className='h-100 v-mid'>
        {children}
      </div>
    </Waypoint>
  </Element>
)

export default Section
