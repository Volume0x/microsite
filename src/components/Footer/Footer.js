import React from 'react'

import Socials from './Socials'

const Footer = ({pathname}) => (
  <footer className='w-100 pv3 pv2-ns bg-white blue z-1 mt-100vh'>
    <div className='pv4-ns ph4 ph5-m ph6-l mw9 center flex flex-column flex-row-ns justify-between items-center'>
      <div className='tc tl-ns order-1 order-0-ns pb2 pb0-ns'>
        &copy; {new Date().getFullYear()} Volume0x
      </div>
      <Socials />
    </div>
    <style>{`
      .mt-100vh {
        margin-top: 100vh;
      }
    `}</style>
  </footer>
)

export default Footer
