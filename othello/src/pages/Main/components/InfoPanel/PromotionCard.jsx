import React from 'react'
import PropTypes from 'prop-types'

export default function PromotionCard({ code, title, description }) {
  return (
    <div className="w-32 p-2 m-auto text-sm md:w-32 md:text-lg">
      <p>{code}</p>
      <h2> {title}</h2>
      <p className="text-xs">{description}</p>
    </div>
  )
}

PromotionCard.propTypes = {
  code: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
