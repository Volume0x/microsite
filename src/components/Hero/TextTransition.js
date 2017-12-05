import React, { Component, Children } from 'react'
import { TransitionMotion, spring } from 'react-motion'

const defaultStyles = {
  width: '100%',
  position: 'absolute'
}

const willEnter = () => ({
  opacity: 0
})

const willLeave = () => ({
  opacity: spring(0, {stiffness: 120, damping: 14})
})

const getStyles = () => ({
  opacity: spring(1, {stiffness: 120, damping: 14})
})

const FadeTransition = ({ children: child, index, className }) => (
  <TransitionMotion
    styles={[{
      key: index,
      style: getStyles(),
      data: { child }
    }]}
    willEnter={willEnter}
    willLeave={willLeave}
  >
    {interpolated => (
      <div className={`relative h4 ${className || ''}`}>
        {interpolated.map(({key, style, data}) => (
          <div
            key={`${key}-transition`}
            style={{
              ...defaultStyles,
              opacity: style.opacity
            }}
          >
            { data.child }
          </div>
        ))}
      </div>
    )}
  </TransitionMotion>
)

class TextTransition extends Component {
  state = { currIndex: 0 }
  transitionInterval = null
  static defaultProps = {
    interval: 6000
  }

  componentDidMount () {
    this.transitionInterval = window.setInterval(
      this.incrementIndex,
      this.props.interval
    )
  }

  componentWillUnmount () {
    window.clearInterval(this.transitionInterval)
  }

  incrementIndex = () => {
    this.setState((state, props) => ({
      currIndex: (state.currIndex + 1) % Children.count(props.children)
    }))
  }

  renderChild = () => {
    return Children.toArray(this.props.children)[this.state.currIndex]
  }

  render () {
    return (
      <FadeTransition className={this.props.className} index={this.state.currIndex}>
        { this.renderChild() }
      </FadeTransition>
    )
  }
}

export default TextTransition
