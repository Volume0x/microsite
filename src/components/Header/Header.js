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
    const { expanded, resetNav } = this.props
    if (expanded !== null) resetNav()
  }

  render () {
    const { hasTransition, belowTop, sections, expanded, closeNav, toggleNav } = this.props
    return (
      <header
        className={`
          z-1 w-100 ph4 ph5-m ph6-l bg-animate
          ${expanded
            ? (belowTop ? 'bg-white' : 'bg-gradient-reverse')
            : 'bg-transparent'
          }
          ${belowTop
            ? 'fixed bg-white shadow-2'
            : 'absolute'
          }
        `}
        style={{
          transform: getTransform(this.props),
          transition: hasTransition || expanded ? 'transform .6s' : '' // 'transform .05s'
        }}
      >
        <div className='pb2 pv3-m pv4-l flex flex-wrap justify-between items-center border-box '>
          <LogoLink
            onClick={closeNav}
            negative={belowTop}
            className='order-1 order-0-ns'
          />
          <NavLinks
            onClick={closeNav}
            negative={belowTop}
            sections={sections}
            expanded={expanded}
          />
          <FeatherIcon
            onClick={toggleNav}
            iconKey={expanded ? 'x' : 'menu'}
            className={`
              pointer link
              db dn-ns w2
              order-2
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
  bindActionCreators({resetNav, closeNav, toggleNav}, dispatch)
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
