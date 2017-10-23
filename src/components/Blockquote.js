import React from 'react'

const Blockquote = ({ className, children, ...props }) => (
  <blockquote
    className={`measure-narrow-ns f4 f3-l i ${className || ''}`}
    {...props}
  >
    “{children}”
  </blockquote>
)

export default Blockquote
