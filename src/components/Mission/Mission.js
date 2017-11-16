import React from 'react'

import Section from '../Section'
import Headline from '../Headline'
import Paragraph from '../Paragraph'
// import Blockquote from '../Blockquote'

const Platform = ({id}) => (
  <Section id={id}>
    <Headline className='tc pt4'>Mission</Headline>
    {/* 1st row */}
    <div className='flex flex-column flex-row-ns flex-wrap items-center justify-between'>
      <article className='flex-auto w-two-thirds-m w-60-l'>
        <h2 className='f2 f1-ns mt0'>What's Wrong</h2>
        <Paragraph>
          The current marketplaces for independent content are broken.
          Unable to ethically monetize, they sell out the only value that they can effectively capture — <em>you</em>, the user.
        </Paragraph>
        <Paragraph>
          They take advantage of your attention with unrelenting ads, record your habits using invasive data collection, and even track your whereabouts throughout the day and night. Even worse, the next indie darling is being pushed to the bottom in favor of sponsored content.
        </Paragraph>
        <Paragraph>
          If you're anything like us, you're tired of watching the big guys co-opt our creative communities.
        </Paragraph>
        <Paragraph>
          Let's do something about it.
        </Paragraph>
      </article>
      <div className='tc flex-auto w-third-m w-40-l'>
        <h1>Animated Gif</h1>
        {/* <Paragraph>
          Path between an artist (guitar) and listeners (headphones), showing how intermediaries absorb the transferred value.
        </Paragraph>
        <Paragraph>
          Maybe a river with factories polluting into it, artist at the top, listeners at the bottom
        </Paragraph> */}
      </div>
    </div>
    {/* 2nd row  */}
    <div className='flex flex-column flex-row-ns flex-wrap items-center justify-between'>
      <article className='tr-ns flex-auto w-two-thirds-m w-60-l order-2-ns'>
        <h2 className='f2 f1-ns mt0'>Value Reimagined</h2>
        <Paragraph className='ml-auto-ns mr-0-ns'>
          How can we offer something different?
          <br />
          It starts with rethinking the value of content.
        </Paragraph>
        {/* <Blockquote className='ml-auto-ns mr0-ns f4 f3-l b'>
          Users don't want to own their favorite content,
          they just want to access it.
        </Blockquote> */}
        <Paragraph className='ml-auto-ns mr-0-ns'>
          We believe that any content with an audience has inherent market value.
          The difficulty is that, most of the time, this value is really, really small.
        </Paragraph>
        <Paragraph className='ml-auto-ns mr-0-ns'>
          So small, in fact, that no currency or pricing model has been divisible or accurate enough to capture it.
          That is, until now...
        </Paragraph>
      </article>
      <div className='tc flex-auto w-third-m w-40-l order-1-ns'>
        <h1>Animated gif</h1>
        {/* <Paragraph>Sound Wave pulsing, soft curves and layered on-brand color pallette</Paragraph> */}
      </div>
    </div>
    {/* 3rd row */}
    <div className='flex flex-column flex-row-ns flex-wrap items-center justify-between'>
      <article className='flex-auto w-two-thirds-m w-60-l'>
        <h2 className='f2 f1-ns mt0'>Enter Ethereum</h2>
        <Paragraph>
          The advent of Ethereum has opened the floodgates for novel means of quantifying and commoditizing value.
        </Paragraph>
        <Paragraph>
          Through tokenized protocols, once intangible assets — like loyalty, attention, and reputation — can now be earned, traded, and burned for monetary gain.
        </Paragraph>
        <Paragraph>
          There's a reason for the hype, we believe this technology can reshape the way we support artists, subsize the cost of community infrastructure, and bring down the barriers to profiting from one's own work.
        </Paragraph>
        <Paragraph>
          <a href='#' className='link underline blue hover-purple'>
            Read our whitepaper and find out how.
          </a>
        </Paragraph>
      </article>
      <div className='tc flex-auto w-third-m w-40-l'>
        <h1>Animated Gif</h1>
        {/* <Paragraph>light stroke tokens orbiting a wire ethereum logo like electrons around an atom</Paragraph> */}
      </div>
    </div>
  </Section>
)

export default Platform
