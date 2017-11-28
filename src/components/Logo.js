import React from 'react'

import LogoIcon from '../img/logos/volume0x-icon-white.svg'
import LogoIconWithGradient from '../img/logos/volume0x-icon-color.svg'
import LogoWithText from '../img/logos/volume0x-white.svg'
import LogoWithGradientWithText from '../img/logos/volume0x-color.svg'

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
