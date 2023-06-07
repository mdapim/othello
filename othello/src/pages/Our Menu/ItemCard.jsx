import React from 'react'
import PropTypes from 'prop-types'

export default function ItemCard({ text, source }) {
  return (
    <div className="flex justify-center h-64">
      <div className="rounded-lg shadow-lg bg-white max-w-xs relative">
        <a
          href="#!"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          data-mdb-ripple-unbound="true"
        >
          <img
            className="rounded-lg object-fill brightness-75"
            src={source}
            alt=""
          />
          <h5 className="text-white text-xl font-medium mb-2 bottom-0 absolute p-4">
            {text}
            <hr className="w-64 h-px my-1 bg-white border-0 dark:bg-white" />
          </h5>
        </a>
      </div>
    </div>
  )
}

ItemCard.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
}
