import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function FeaturedCard({
  image,
  title,
  description,
  activeSlide,
  hiddenNo
}) {
  const navigate = useNavigate()
  const handleEventAction = () => {
    navigate('/OurMenu')
  }
  const handleKeyEventAction = event => {
    if (event.keyCode === 13) {
      navigate('/OurMenu')
    }
  }

  return (
    <div
      className={
        'inline-block inline-flex flex-col w-[90%] min-h-[340px] shadow-md border text-black hover:cursor-pointer object-contain overflow-hidden}' +
        ' sm:min-h-[400px]' +
        ' md:min-h-[500px]' +
        ' xl:-96 xl:min-h-[500px]  xl:w-[90%]'
      }
      role="link"
      tabIndex={activeSlide === hiddenNo ? -1 : 0}
      onClick={handleEventAction}
      onKeyDown={handleKeyEventAction}
    >
      <img
        className="object-cover overflow-hidden min-h-[50%] max-h-[50%]"
        src={`${process.env.PUBLIC_URL}/Images/${image}.jpeg`}
        alt={`${title} menu item`}
      />
      <hr className="w-16 shadow shadow-black border-transparent mx-auto mt-8" />
      <div className="block p-4 inline-block">
        <h2
          className={
            'mb-2 text-sm text-center font-bold tracking-tight' + ' md:text-2xl'
          }
        >
          {title}
        </h2>
        <p className={'font-normal text-xs text-center' + ' md:text-lg'}>
          {description}
        </p>
      </div>
    </div>
  )
}

FeaturedCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  activeSlide: PropTypes.number.isRequired,
  hiddenNo: PropTypes.number.isRequired
}
