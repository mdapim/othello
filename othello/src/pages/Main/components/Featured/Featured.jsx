import React from 'react'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import FeaturedCard from '../FeatauredCard/FetauredCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// import Menu from '../../../../Menu.json'

export default function Featured() {
  const { t } = useTranslation(['Menu', 'Main'])
  // const Menu = lazy(() =>
  //   import(`../../../../../public/locales/${i18n.language}/Menu.json`)
  // )
  // console.log(t('Lunch.starters.0.name'))
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
      title: t('Menu:Desserts.deserts.0.name'),
      description: t('Desserts.deserts.0.description'),
      price: t('Desserts.deserts.0.price')
    },
    {
      image: 'sea',
      title: t('Menu:Dinner.fish.0.name'),
      description: t('Menu:Dinner.fish.0.description'),
      price: t('Menu:Dinner.fish.0.price')
    },
    {
      image: 'garlic',
      title: t('Menu:Dinner.fish.0.name'),
      description: t('Menu:Dinner.fish.0.description'),
      price: t('Menu:Dinner.fish.0.price')
    },
    {
      image: 'steak',
      title: t('Menu:Dinner.grill.1.name'),
      description: t('Menu:Dinner.grill.1.description'),
      price: t('Menu:Dinner.grill.1.price')
    },
    {
      image: 'cheese',
      title: t('Menu:Desserts.deserts.3.name'),
      description: t('Menu:Desserts.deserts.3.description'),
      price: t('Menu:Desserts.deserts.3.price')
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
        <h1 className="text-center t-40 text-5xl text-black">
          {t('Main:Featured.title')}
        </h1>
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
