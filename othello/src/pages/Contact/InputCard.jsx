/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

export default function InputCard({
  label,
  name,
  handleFormInput,
  size,
  type
}) {
  const { t } = useTranslation('Contact')
  return (
    <label className="font-extrabold uppercase">
      {t(label)}
      <br />
      <input
        id={name}
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
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleFormInput: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
}
