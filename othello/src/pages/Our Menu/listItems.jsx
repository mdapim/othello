import React from 'react'
import PropTypes from 'prop-types'

export default function ListItem({ name, description, price }) {
  return (
    <li>
      <span className="flex">
        <span className="flex flex-col basis-1 space-y-4">
          <h1 className="font-bold text-xl"> {name} </h1>
          <p> {description}</p>
        </span>
        <p className="font-bold m-auto"> {price} </p>
      </span>
    </li>
  )
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}
