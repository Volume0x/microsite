import React from 'react'
import feather from 'feather-icons'

const defaultIconOptions = {
  width: '100%',
  height: '100%'
}

const FeatherIcon = ({iconKey, iconOptions, ...props}) => (
  <icon
    {...props}
    dangerouslySetInnerHTML={{
      __html: feather.toSvg(iconKey, Object.assign(defaultIconOptions, iconOptions))
    }}
  />
)

export default FeatherIcon
