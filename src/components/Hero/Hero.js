import React from 'react'

// import sections from '../../content/sections'

import Section from '../Section'
import Headline from '../Headline'
import SignupForm from './SignupForm'
// import ScrollLink from '../ScrollLink'
// import FeatherIcon from '../FeatherIcon'
import ParticlePlains from './ParticlePlains'
import TextTransition from './TextTransition'

const Hero = () => (
  <Section id='home' name='home' className='h-100 absolute'>
    { typeof window !== 'undefined' && <ParticlePlains /> }
    <div className='z-1 flex flex-column justify-between min-vh-100'>
      <Headline className='lh-solid f1 f-subheadline-m f-headline-l mt0 mb0 w-two-thirds-l'>
        Fueled by Community
      </Headline>
      <TextTransition>
        <h2 className='db lh-title f3 f2-ns measure-narrow'>
          We're setting out to build a self-sustaining platform for independent audio.
        </h2>
        <h2 className='db lh-title f3 f2-ns measure-narrow'>
          Run by artists, small labels, curators, and consumers. The way it should be.
        </h2>
        <h2 className='db lh-title f3 f2-ns measure-narrow'>
          Distinct roles that incentivize cooperation, safely enforced by smart contracts.
        </h2>
        <h2 className='db lh-title f3 f2-ns measure-narrow'>
          A tokenized protocol underpinning licensing, governance, royalties, and so much more...
        </h2>
        <h2 className='db lh-title f3 f2-ns measure-narrow'>
          Interested in the music marketplace of the future? We need your help.
        </h2>
      </TextTransition>
      <div className='mb4'>
        <SignupForm />
      </div>
    </div>
    {/* <article className='z-1 dt h-100'>
      <div className='dtc v-mid'>
        <Headline className='lh-solid f1 f-subheadline-m f-headline-l mt0'>
          Fueled by Community
        </Headline>
        <TextTransition className='mb2'>
          <h2 className='db lh-title f3 f2-ns measure-narrow'>
            We're setting out to build a self-sustaining platform for independent audio.
          </h2>
          <h2 className='db lh-title f3 f2-ns measure-narrow'>
            A marketplace for music governed by artists, labels, curators, and consumers.
          </h2>
          <h2 className='db lh-title f3 f2-ns measure-narrow'>
            Cooperation incentivized and enforced by smart contracts on Ethereum.
          </h2>
          <h2 className='db lh-title f3 f2-ns measure-narrow'>
            Cooperation incentivized and enforced by smart contracts on Ethereum.
          </h2>
        </TextTransition>
        <div className='pt6'>
          <h2 className='lh-title f3 f2-ns measure-narrow'>
            We need your help.
          </h2>
          <SignupForm />
        </div>
      </div>
    </article> */}
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
