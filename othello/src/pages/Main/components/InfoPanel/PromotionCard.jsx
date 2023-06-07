import React from 'react'
import PropTypes from 'prop-types'

export default function PromotionCard({ Details }) {
  return (
    <div className="w-32 text-lg">
      <p>{Details.code}</p>
      <h3> {Details.title}</h3>
      <p className="text-sm">{Details.description}</p>
    </div>
  )
}

PromotionCard.propTypes = {
  Details: PropTypes.shape({
    id: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired
}
