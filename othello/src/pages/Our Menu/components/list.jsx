import React from 'react'
import PropTypes from 'prop-types'

export default function List({ title, description, price }) {
  return (
    <span>
      <h1> {title}</h1>
      <p> {description}</p>
      <p>{price}</p>
    </span>
  )
}

List.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}
