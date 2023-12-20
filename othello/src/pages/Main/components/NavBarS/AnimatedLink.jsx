import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function AnimatedLink({
  name,
  link,
  textCol,
  toggleHideBar,
  hideBarState
}) {
  return (
    <Link
      to={link}
      className={
        `block py-2 pl-3 pr-4 rounded hover:text-white dark:${textCol} group ${textCol} transition duration-300` +
        `  md:hover:bg-transparent md:p-0 md:hover:text-white md:dark:hover:bg-transparent`
      } // prev col gray-400
      onClick={() => {
        toggleHideBar(!hideBarState)
      }}
    >
      {name}
      <span
        className={
          'block max-w-0 transition-all duration-500 h-0.5 bg-white' +
          ' md:group-hover:max-w-full'
        }
      />
    </Link>
  )
}

AnimatedLink.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  textCol: PropTypes.string.isRequired,
  toggleHideBar: PropTypes.func.isRequired,
  hideBarState: PropTypes.bool.isRequired
}
