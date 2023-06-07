import React from 'react'
import PropTypes from 'prop-types'

export default function InputCard({ name, handleFormInput, size, type }) {
  return (
    <label htmlFor="name" className="font-extrabold uppercase">
      {name}
      <br />
      <input
        id="name"
        type={type}
        name={name}
        size={size}
        className="border-gray-400 bg-gray-50 indent-2.5 w-full h-10 border outline-0 normal-case font-normal h-8 focus:border-gray-700 focus:border-2"
        onChange={handleFormInput}
      />
    </label>
  )
}

InputCard.propTypes = {
  name: PropTypes.string.isRequired,
  handleFormInput: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
}
