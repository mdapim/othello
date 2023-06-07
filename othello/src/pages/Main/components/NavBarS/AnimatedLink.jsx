import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function AnimatedLink({ name, link, textCol }) {
  return (
    <Link
      to={link}
      className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:${textCol} dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 group ${textCol} transition duration-300`} // prev col gray-400
    >
      {name}
      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white" />
    </Link>
  )
}

AnimatedLink.propTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  textCol: PropTypes.string.isRequired
}
