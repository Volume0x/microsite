import React, { Component } from 'react'
import { connect } from 'react-redux'

import LogoLink from './LogoLink'
import NavLinks from './NavLinks'
import FeatherIcon from '../FeatherIcon'

class Header extends Component {
  // constructor (props, context) {
  //   super(props, context)
  //
  // }
  //
  // handleResize ({target = window} = {}) {
  //   // const innerWidth = target.innerWidth
  //   // const { isSmall, resetNav, setSmall } = this.props
  //
  //   // if (isSmall === undefined) {
  //   //   setSmall(innerWidth < smallWidth)
  //   // } else if (!isSmall && innerWidth < smallWidth) {
  //   //   setSmall(true)
  //   // } else if (isSmall && innerWidth >= smallWidth) {
  //   //   resetNav()
  //   //   setSmall(false)
  //   // }
  // }

  render () {
    const { sections, negative } = this.props
    return (
      <header className={`
        z-1 w-100 ph4 ph5-m ph6-l
        ${negative ? 'fixed bg-white shadow-2' : 'absolute'}
      `}>
        <div className='pv3 pv4-ns flex justify-between items-center border-box '>
          <LogoLink
            negative={negative}
          />
          <NavLinks
            negative={negative}
            sections={sections}
          />
          <FeatherIcon
            iconKey='menu'
            className={`
              pointer link
              db dn-ns w2
              ${negative ? 'blue' : 'white'}
            `}
          />
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  // negative: state.header.negative
})

export default connect(
  mapStateToProps
)(Header)
