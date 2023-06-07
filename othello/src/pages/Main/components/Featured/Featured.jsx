import React from 'react'
import Slider from 'react-slick'
import FeaturedCard from '../FeatauredCard/FetauredCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Featured() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    fade: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    pauseOnHover: false,
    arrows: false
  }

  const featuredItems = [
    {
      image: 'bac',
      title: 'Baklava',
      description:
        'A rich, sweet pastry made with layers of filo, filled with chopped nuts and soaked in a honey syrup, served with fresh fruit and vanilla ice cream.',
      price: '£6.95'
    },
    {
      image: 'sea',
      title: 'Sea Bass',
      description: 'Pan fried in spinach topped with a lemon and lime butter',
      price: '£17.95'
    },
    {
      image: 'garlic',
      title: 'Garlic King Prawns',
      description:
        'Large crevettes coated in garlic butter, served with a sweet chilli sauce',
      price: '£10.75'
    },

    {
      image: 'steak',
      title: 'Sirloin Steak',
      description:
        'Juicy, tender sirloin steak, perfectly seared to lock in the rich flavors and mouthwatering juiciness.',
      price: '£27.95'
    },
    {
      image: 'cheese',
      title: 'CheeseCake',
      description:
        'A rich, sweet pastry made with layers of filo, filled with chopped nuts and soaked in a honey syrup, served with fresh fruit and vanilla ice cream',
      price: '£6.95'
    }
  ]

  return (
    <div className="h-screen/2 w-100% p-10 relative overflow-hidden">
      <img
        src={`${process.env.PUBLIC_URL}/Images/olive.jpeg`}
        alt="op"
        className="opacity-10 p-10 absolute h-auto top-0 left-0 w-screen z-0" // inset-x-80 inset-y-24
      />
      <div className="m-auto z-10">
        <h1 className="text-center t-40 text-5xl text-black">Popular Dishes</h1>
        <h3 className="text-white text-xl text-center">
          ----------- &#x2605; &#x2605; &#x2605; &#x2605; &#x2605; ------------
        </h3>
        <br />
        <div
          className="w-screen h-72 w-screenfull m-auto
"
        >
          <Slider {...settings}>
            {featuredItems.map(item => (
              <FeaturedCard
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </Slider>
        </div>
        <h3 className=" mt-60 text-black text-xl text-center">
          ----------- &#x2605; &#x2605; &#x2605; &#x2605; &#x2605; ------------
        </h3>
      </div>
    </div>
  )
}
