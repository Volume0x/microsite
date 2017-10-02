import React from 'react'

import hero from '../../content/hero'
import sections from '../../content/sections'

import Section from '../Section'
import SignupForm from './SignupForm'
import ScrollLink from '../ScrollLink'
import FeatherIcon from '../FeatherIcon'
import ParticlePlains from './ParticlePlains'

const Hero = () => (
  <Section id={hero.name} name={hero.name} className='min-vh-100'>
    <ParticlePlains />
    <article className='z-1 dt h-100'>
      <div className='dtc v-mid'>
        <h1 className='lh-solid f1 f-subheadline-m f-headline-l mt0'>{hero.headline}</h1>
        <h2 className='lh-title f3 f2-ns measure-narrow'>{hero.subheadline}</h2>
        <SignupForm />
      </div>
    </article>
    <div className='z-1 absolute left-0 bottom-0 w-100 tc'>
      <ScrollLink to={sections[0].name}>
        <FeatherIcon
          iconKey='chevron-down'
          className='dib w2 w3-ns hover-up'
        />
      </ScrollLink>
    </div>
  </Section>
)

export default Hero
