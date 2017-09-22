import React from 'react'

import sections from '../content/sections'
import Hero from '../components/Hero'
import Section from '../components/Section'

const IndexPage = () => (
  <div>
    <Hero />
    {sections.map((props, i) =>
      <Section key={i} {...props} />
    )}
  </div>
)

export default IndexPage
