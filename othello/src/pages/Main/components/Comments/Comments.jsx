import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../../Main.css'
import ReviewsData from './TripAdvisorData.json'

import CommentCard from './CommentCard'

export default function Comments() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 8000,
    cssEase: 'linear',
    pauseOnHover: false,
    arrows: false
  }

  return (
    <div
      className={'h-full w-500% p-2 flex' + ' md:p-10 md:h-screen/2'}
      data-aos="fade-up"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${`${process.env.PUBLIC_URL}/Images/table.jpeg`})`
      }}
    >
      <div className={' w-[90%] m-auto' + ' md:w-[70%]'}>
        <Slider {...settings}>
          {ReviewsData.map(item => (
            <CommentCard
              key={item.Title}
              title={item.Title}
              description={item['Review text']}
              user={item.Author}
              image={item['Profile picture']}
            />
          ))}
        </Slider>
      </div>
    </div>
  )
}
