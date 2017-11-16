import React from 'react'
import { connect } from 'react-redux'
import throttle from 'lodash.throttle'
import { bindActionCreators } from 'redux'

import '../styles/index.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import sections from '../content/sections'
import { didScroll, didResize } from '../store/constants/actionCreators'

class Layout extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.handleScroll = throttle(this.handleScroll.bind(this), 50)
    this.handleResize = throttle(this.handleResize.bind(this), 250)
  }

  componentDidMount () {
    this.handleScroll()
    this.handleResize()
    window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
    window.removeEventListener('resize', this.handleResize)
  }

  handleScroll () {
    this.props.didScroll()
  }

  handleResize () {
    this.props.didResize()
  }

  render () {
    const { children } = this.props
    return (
      <div className='flex flex-column flex-auto min-vh-100'>
        <Header sections={sections} />
        <main className='flex-auto'>
          { children() }
        </main>
        <Footer />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    didScroll,
    didResize
  }, dispatch)
)

export default connect(
  null,
  mapDispatchToProps
)(Layout)
