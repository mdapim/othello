/* eslint-disable */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function FeaturedCard({
  image,
  title,
  description,
  index,
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
      className="w-44 m-auto md:w-80 h-[340px] md:h-[480px] shadow-md border text-black hover:cursor-pointer"
      // hidden={activeSlide === hiddenNo ? true : undefined}
      // aria-hidden={activeSlide === hiddenNo ? true : undefined}
      role="link"
      tabIndex={activeSlide === hiddenNo ? -1 : 0}
      onClick={handleEventAction}
      onKeyDown={handleKeyEventAction}
    >
      <img
        className="object-cover w-full "
        src={`${process.env.PUBLIC_URL}/Images/${image}.jpeg`}
        alt={`${title} menu item`}
      />
      <hr className="w-16 shadow shadow-black border-transparent mx-auto mt-8" />
      <div className="p-4 ">
        <h2 className="mb-2 text-sm md:text-2xl text-center font-bold tracking-tight">
          {title}
        </h2>
        <p>{index}</p>
        <p className="font-normal text-xs md:text-lg text-center">
          {description}
        </p>
      </div>
    </div>
  )
}

FeaturedCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}
