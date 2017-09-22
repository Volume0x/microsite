import React from 'react'

import hero from '../content/hero'
import Section from './Section'

const Hero = () => (
  <Section id={hero.id} className='min-vh-100'>
    {/* <h1 className='measure'>{hero.headline}</h1> */}
  </Section>
)

export default Hero
