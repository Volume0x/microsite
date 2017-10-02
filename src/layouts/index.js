import React from 'react'
import Scrollbar from 'react-perfect-scrollbar'

import '../styles/index.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import sections from '../content/sections'

const Layout = ({ children, ...props }) => (
  <Scrollbar>
    <div className='flex flex-column flex-auto min-vh-100'>
      <Header sections={sections} />
      <main className='flex-auto'>
        { children() }
      </main>
      <Footer />
    </div>
  </Scrollbar>
)

export default Layout
