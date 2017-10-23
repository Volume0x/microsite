import React from 'react'

const Paragraph = ({ className, ...props }) => (
  <p
    className={`lh-copy measure measure-wide-l f5 f4-l ${className || ''}`}
    {...props}
  />
)

export default Paragraph
