import React from 'react'
import { Github, Twitter, Slack } from 'react-feather'

const iconList = [
  ['slack', Slack, 'https://slack.volume0x.com'],
  ['github', Github, 'https://github.com/volume0x'],
  ['twitter', Twitter, 'https://twitter.com/volume0x']
]

const Socials = () => (
  <ul className='list order-0 order-1-ns ma0 pl0 pb2 pa0-ns flex flex-row justify-between justify-end-ns items-center'>
    { iconList.map(([key, Cmp, href]) => (
      <li key={key} className='ma2 ml3-ns mr0-ns'>
        <a className='link blue dim' href={href} target='_blank'>
          <Cmp />
        </a>
      </li>
    ))}
  </ul>
)

export default Socials
