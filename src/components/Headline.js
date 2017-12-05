import React from 'react'

const Headline = ({ className, ...props }) => (
  <h1
    className={`f1 f-subheadline-m f-headline-l pt6 mt0 ${className || ' '}`}
    {...props}
  />
)

export default Headline
