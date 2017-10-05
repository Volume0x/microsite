import React from 'react'
import { connect } from 'react-redux'

import LogoLink from './LogoLink'
import NavLinks from './NavLinks'
import FeatherIcon from '../FeatherIcon'
import getTransform from './getTransform'

const Header = props => {
  return (
    <header
      className={`
        z-1 w-100 ph4 ph5-m ph6-l
        ${props.belowTop ? 'fixed bg-white shadow-2' : 'absolute'}
      `}
      style={{
        transform: getTransform(props),
        transition: props.hasTransition ? 'transform .6s' : '' // 'transform .05s'
      }}
    >
      <div className='pv3 pv4-ns flex justify-between items-center border-box '>
        <LogoLink negative={props.belowTop} />
        <NavLinks negative={props.belowTop} sections={props.sections} />
        <FeatherIcon
          iconKey='menu'
          className={`
            pointer link
            db dn-ns w2
            ${props.belowTop ? 'blue' : 'white'}
          `}
        />
      </div>
    </header>
  )
}

const mapStateToProps = state => ({
  ...state.window,
  ...state.header
})

export default connect(
  mapStateToProps
)(Header)
