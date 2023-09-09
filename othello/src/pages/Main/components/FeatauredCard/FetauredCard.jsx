import React from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function FeaturedCard({ image, title, description }) {
  const navigate = useNavigate()
  const handleEventAction = () => {
    navigate('/OurMenu')
  }

  return (
    <div
      className="w-48 m-auto md:w-80 h-[340px] md:h-[480px] shadow-md border text-black hover:cursor-pointer"
      role="link"
      tabIndex={0}
      onClick={handleEventAction}
      onKeyDown={handleEventAction}
    >
      <img
        className="object-cover w-full "
        src={`${process.env.PUBLIC_URL}/Images/${image}.jpeg`}
        alt=""
      />
      <hr className="w-16 shadow shadow-black border-transparent mx-auto mt-8" />
      <div className="p-4 ">
        <h5 className="mb-2 text-sm md:text-2xl text-center font-bold tracking-tight">
          {title}
        </h5>
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
