import React from 'react'
import PropTypes from 'prop-types'

export default function ButtonCard({
  title,
  description,
  image,
  setItem,
  chosenKey
}) {
  return (
    <div
      className="grid grid-cols-2 bg-black h-64 rounded w-full shadow md:grid hover:bg-gray-900 hover:cursor-pointer"
      onClick={() => {
        setItem(chosenKey)
      }}
      onKeyDown={() => {
        setItem(chosenKey)
      }}
      role="button"
      tabIndex={0}
    >
      <img
        className="object-cover w-full h-64 md:w-96 md:rounded-none md:rounded-l"
        src={`${process.env.PUBLIC_URL}/Images/${image}`}
        alt=""
      />
      <div className="p-4 leading-normal m-auto">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className=" font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  )
}

ButtonCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  setItem: PropTypes.func.isRequired,
  chosenKey: PropTypes.string.isRequired
}
