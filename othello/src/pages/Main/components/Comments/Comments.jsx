import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../Main.css';
import ReviewsData from './TripAdvisorData.json';

import CommentCard from './CommentCard';
export default function Comments() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 8000,
    cssEase: 'linear',
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <>
      <div
        className='h-screen/2 w-100% p-10'
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${
            process.env.PUBLIC_URL + '/Images/table.jpeg'
          })`,
        }}
      >
        <div className=' w-[70%] w-screenfull m-auto'>
          <Slider {...settings}>
            {ReviewsData.map((item) => {
              return (
                <CommentCard
                  title={item.Title}
                  description={item['Review text']}
                  user={item.Author}
                  image={item['Profile picture']}
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}
