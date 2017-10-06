import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import LogoLink from './LogoLink'
import NavLinks from './NavLinks'
import FeatherIcon from '../FeatherIcon'
import getTransform from './getTransform'
import { closeNav, resetNav, toggleNav } from '../../store/constants/actionCreators'

class Header extends React.Component {
  componentWillUnmount () {
    if (this.props.expanded !== null) {
      this.props.resetNav()
    }
  }

  render () {
    const { hasTransition, belowTop, sections, expanded, toggleNav } = this.props
    return (
      <header
        className={`
          z-1 w-100 ph4 ph5-m ph6-l
          ${belowTop ? 'fixed bg-white shadow-2' : 'absolute'}
        `}
        style={{
          transform: getTransform(this.props),
          transition: hasTransition ? 'transform .6s' : '' // 'transform .05s'
        }}
      >
        <div className='pv3 pv4-ns flex justify-between items-center border-box '>
          <LogoLink negative={belowTop} />
          <NavLinks negative={belowTop} sections={sections} />
          <FeatherIcon
            iconKey={expanded ? 'x' : 'menu'}
            onClick={toggleNav}
            className={`
              pointer link
              db dn-ns w2
              ${belowTop ? 'blue' : 'white'}
            `}
          />
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  ...state.window,
  ...state.header
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    resetNav,
    closeNav,
    toggleNav
  }, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
