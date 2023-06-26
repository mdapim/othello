import React from 'react'
import PropTypes from 'prop-types'

export default function PromotionCard({ code, title, description }) {
  return (
    <div className="w-32 text-lg">
      <p>{code}</p>
      <h3> {title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  )
}

PromotionCard.propTypes = {
  code: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
