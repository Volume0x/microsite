import React from 'react'

// import sections from '../../content/sections'

import Section from '../Section'
import Headline from '../Headline'
import SignupForm from './SignupForm'
// import ScrollLink from '../ScrollLink'
// import FeatherIcon from '../FeatherIcon'
import ParticlePlains from './ParticlePlains'

const Hero = () => (
  <Section id='home' name='home' className='h-100 absolute'>
    <ParticlePlains />
    <article className='z-1 dt h-100'>
      <div className='dtc v-mid'>
        <Headline className='lh-solid f1 f-subheadline-m f-headline-l mt0'>
          Fueled by Community
        </Headline>
        <h2 className='lh-title f3 f2-ns measure-narrow'>
          We're setting out to build a self-sustaining platform for independent audio.
        </h2>
        <h2 className='lh-title f3 f2-ns measure-narrow'>
          We need your help.
        </h2>
        <SignupForm />
      </div>
    </article>
    {/* <div className='z-1 absolute left-0 bottom-0 w-100 tc'>
      <ScrollLink to={sections[0].name}>
        <FeatherIcon
          iconKey='chevron-down'
          className='dib w2 w3-ns hover-up'
        />
      </ScrollLink>
    </div> */}
  </Section>
)

export default Hero
