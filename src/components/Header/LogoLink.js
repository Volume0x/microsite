import React from 'react'

import ScrollLink from '../ScrollLink'
import LogoWhite from '../../img/logos/soundcoin-white.svg'
import LogoColor from '../../img/logos/soundcoin-color.svg'
import LogoIconWhite from '../../img/logos/soundcoin-icon-white.svg'
import LogoIconColor from '../../img/logos/soundcoin-icon-color.svg'

const LogoLink = ({negative, ...props}) => (
  <ScrollLink
    {...props}
    to={'home'}
    className='tl white flex items-center w4 w3-m w5-l h3'
  >
    <img className='db dn-m db-l ' src={negative ? LogoColor : LogoWhite} />
    <img className='dn db-m h3' src={negative ? LogoIconColor : LogoIconWhite} />
  </ScrollLink>
)

export default LogoLink
