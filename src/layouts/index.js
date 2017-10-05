import React from 'react'

import '../styles/index.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import sections from '../content/sections'

const Layout = ({ children, ...props }) => (
  <div className='flex flex-column flex-auto min-vh-100'>
    <Header sections={sections} />
    <main className='flex-auto'>
      { children() }
    </main>
    <Footer />
  </div>
)

export default Layout
