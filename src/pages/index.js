import React from 'react'

import Hero from '../components/Hero'
// import sections from '../content/sections'

const IndexPage = () => (
  <main className='flex-auto'>
    <Hero />
    {/* {sections.map(({component: Cmp, id, name}) =>
      <Cmp key={id} id={id} name={name} />
    )} */}
  </main>
)

export default IndexPage
