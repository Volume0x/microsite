import React from 'react'

import Socials from './Socials'

const Footer = ({pathname}) => (
  <footer className='w-100 ph4 ph5 ph6-l pv3-m pv4 bg-white blue'>
    <div className='pv4-ns flex flex-column flex-row-ns justify-between items-center'>
      <div className='tc tl-ns order-1 order-0-ns pb2 pb0-ns'>
        &copy; {new Date().getFullYear()} SoundCoin Inc
      </div>
      <Socials />
    </div>
  </footer>
)

export default Footer
