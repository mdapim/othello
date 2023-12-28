import React from 'react'
import PropTypes from 'prop-types'

export default function ButtonCard({
  title,
  description,
  image,
  setItem,
  chosenKey,
  scrollToMenu
}) {
  return (
    <div
      className={
        'grid grid-cols-2 bg-black overflow-hidden h-32 h-24 rounded w-full shadow' +
        ' md:h-40 md:grid' +
        ' hover:bg-gray-800 hover:brightness-[1.20] hover:cursor-pointer'
      }
      onClick={() => {
        setItem(chosenKey)
        scrollToMenu()
      }}
      onKeyDown={() => {
        setItem(chosenKey)
        scrollToMenu()
      }}
      role="button"
      tabIndex={0}
      data-testid={`${title} button`}
    >
      <img
        className={
          ' overflow-hidden w-full h-full ' +
          ' md:h-64 md:w-96 md:rounded-none md:rounded-l'
        }
        src={`${process.env.PUBLIC_URL}/Images/${image}`}
        alt=""
      />
      <div
        className={
          ' p-2 leading-normal bg-gradient-to-r from-gray-800 via-gray-900 to-black  ' +
          ' md:p-4'
        }
      >
        <h2
          className={
            'mb-2 text-sm font-bold tracking-tight text-white' + ' md:text-2xl'
          }
        >
          {title}
        </h2>
        <p className="text-xs font-normal text-gray-200">{description}</p>
      </div>
    </div>
  )
}

ButtonCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  setItem: PropTypes.func.isRequired,
  chosenKey: PropTypes.string.isRequired,
  scrollToMenu: PropTypes.func.isRequired
}
