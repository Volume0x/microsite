import React from 'react'
import Link from 'gatsby-link'

import sections from '../content/sections'
import LogoSVG from '../img/logos/soundcoin-color.svg'

const SecondaryHeader = ({pathname}) => (
  <header className='fixed z-1 bg-white w-100 ph4 ph5-m ph6-l shadow-2'>
    <div className='db pv4 flex-ns justify-between items-center border-box '>
      <a href='#home' className='tl-ns w5 mw5 link white flex items-center h-100'>
        <img className='' src={LogoSVG} />
      </a>

      <nav className='flex flex-end justify-end dit w-100'>
        { sections.map(({id, title}, i) => (
          <Link
            key={i}
            to={`#${id}`}
            className={`
              link dim blue
              dib v-top
              ${i > 0 ? 'ml3 ml4-l' : 'ml0'}
              ${i < sections.length - 1 ? 'mr3 mr4-l' : 'mr0'}
          `}>
            {title}
          </Link>
        ))}
      </nav>
    </div>
  </header>
)

export default SecondaryHeader