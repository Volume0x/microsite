import React, { PureComponent } from 'react'
import Waypoint from 'react-waypoint'
import { Element } from 'react-scroll'
// import { navigateTo } from 'gatsby-link'

class Section extends PureComponent {
  render () {
    const {id, name, className, children} = this.props
    return (
      <Element
        id={id}
        name={name}
        className={`section pb5 ${className || ''}`}
      >
        <Waypoint
          bottomOffset={'4rem'}
          // onEnter={() => navigateTo(`#${name}`)}
        >
          <div className='h-100 v-mid ph4 ph5-m ph6-l mw9 center'>
            {children}
          </div>
        </Waypoint>
      </Element>
    )
  }
}

export default Section
