import React from 'react'

import Hero from '../components/Hero'
import Footer from '../components/Footer'
// import sections from '../content/sections'

const IndexPage = () => (
  <main className='flex-auto'>
    <Hero />
    {/* {sections.map(({component: Cmp, id, name}) =>
      <Cmp key={id} id={id} name={name} />
    )} */}
    <Footer />
  </main>
)

export default IndexPage
