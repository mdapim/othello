import React from 'react'
import { SocialIcon } from 'react-social-icons'
import PropTypes from 'prop-types'

export default function SocialIcons({ imageURL }) {
  return (
    <SocialIcon
      style={{ height: '30px', width: '30px' }}
      url={imageURL}
      bgColor="white"
      fgColor="black"
    />
  )
}

SocialIcons.propTypes = {
  imageURL: PropTypes.string.isRequired
}
