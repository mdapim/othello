import React from 'react'
import PropTypes from 'prop-types'

export default function BackToTop({ scrollToTop }) {
  return (
    <div className="text-center p-4">
      <button
        data-testid="back-to-top-button"
        className="px-4 border-2 border-gray-400"
        onClick={() => {
          scrollToTop()
        }}
        onKeyDown={() => {
          scrollToTop()
        }}
        type="button"
      >
        Back to Top &#8657;
      </button>
    </div>
  )
}

BackToTop.propTypes = {
  scrollToTop: PropTypes.func.isRequired
}
