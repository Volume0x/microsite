import React from 'react'

import LogoIcon from '../img/logos/soundcoin-icon-white.svg'
import LogoIconWithGradient from '../img/logos/soundcoin-icon-color.svg'
import LogoWithText from '../img/logos/soundcoin-white.svg'
import LogoWithGradientWithText from '../img/logos/soundcoin-color.svg'

const selectSvg = (withText, withGradient) => {
  if (withText) {
    return withGradient
      ? LogoWithGradientWithText
      : LogoWithText
  } else {
    return withGradient
      ? LogoIconWithGradient
      : LogoIcon
  }
}

const Logo = ({ withText, withGradient, ...props }) => (
  <img
    {...props}
    src={selectSvg(withText, withGradient)}
  />
)

export default Logo
