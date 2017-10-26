import React from 'react'

import Section from '../Section'
import Headline from '../Headline'
import Paragraph from '../Paragraph'

const Platform = ({id}) => (
  <Section id={id}>
    <Headline className='tc pt5'>Platform</Headline>
    <div>
      <article>
        <h2 className='f2'>Overview</h2>
        <Paragraph>
          We're tired of the ads, the monthly plans, and the grip over our content.
        </Paragraph>
        <Paragraph>
          So tired, in fact, that we're building the first ever self-sustaining platform for independent audio.
        </Paragraph>
        <Paragraph>
          We're doing it with a tokenized protocol for fast and fair, state-channel enabled micropayments on the Ethereum blockchain.
        </Paragraph>
        <Paragraph>
          Are you ready? Here's what you can expect...
        </Paragraph>
      </article>
    </div>
    <div>
      <article>
        <h2 className='f2'>Features</h2>
        <Paragraph>
          Tracks, playlists, and account types for both artists and labels.
        </Paragraph>
        <Paragraph>
          Token royalties that go directly to artists and labels at a rate <em>they</em> set,
          and paid the second their audience engages.
        </Paragraph>
        <Paragraph>An integrated tipping system that supports both tokens and Ether.</Paragraph>
        <Paragraph>A friendly and accesible onboarding process for Ethereum newcomers, still with advanced options for experienced token users.</Paragraph>
      </article>
    </div>
    <div>
      <article>
        <h2 className='f2'>Anticipated Integrations</h2>
        <h3 className='f3'>Bring Your Own...</h3>
        <Paragraph>Identity management (Uport, Civic)</Paragraph>
        <Paragraph>Digital rights managemnet (Ujo)</Paragraph>
        <Paragraph>Metadata and content licensing (Jaak, MediaChain)</Paragraph>
      </article>
    </div>
    <div>
      <Paragraph>
        Not to mention:
      </Paragraph>
      <ul className='lh-copy measure measure-wide-l f5 f4-l'>
        <li>Full featured mobile app</li>
        <li>Embeddable player with accompanying browser extension</li>
      </ul>
    </div>
  </Section>
)

export default Platform
