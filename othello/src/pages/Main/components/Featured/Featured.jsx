/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Slider from 'react-slick'
import FeaturedCard from '../FeatauredCard/FetauredCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import useWindowSize from '../../../../utils/useWindowSize'
// import Menu from '../../../../Menu.json'

export default function Featured() {
  const { t } = useTranslation(['Menu', 'Main'])
  const [activeSlide, setActiveSlide] = useState(0)
  const isMobile = useWindowSize(window.innerWidth)
  const settings = {
    infinite: true,
    slidesToShow: isMobile ? 2 : 4,
    slidesToScroll: 1,
    fade: false,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
    pauseOnHover: false,
    arrows: false,
    accessibility: true,
    afterChange: () => hideAriaHiddenTiles()
  }

  useEffect(() => {
    hideAriaHiddenTiles()
  }, [])

  const hideAriaHiddenTiles = () => {
    Array.from(document.querySelectorAll('.slick-slide')).forEach(slide => {
      slide.style.visibility = slide.classList?.contains('slick-active')
        ? 'visible'
        : 'hidden'
    })
  }

  const featuredItems = [
    {
      image: 'bac',
      title: t('Menu:OfficialMenu.Desserts.deserts.0.name'),
      description: t('Menu:OfficialMenu.Desserts.deserts.0.description'),
      price: t('Menu:OfficialMenu.Desserts.deserts.0.price'),
      hiddenNo: 1
    },
    {
      image: 'sea',
      title: t('Menu:OfficialMenu.Dinner.fish.1.name'),
      description: t('Menu:OfficialMenu.Dinner.fish.1.description'),
      price: t('Menu:OfficialMenu.Dinner.fish.1.price'),
      hiddenNo: 2
    },
    {
      image: 'garlic',
      title: t('Menu:OfficialMenu.Dinner.fish.0.name'),
      description: t('Menu:OfficialMenu.Dinner.fish.0.description'),
      price: t('Menu:OfficialMenu.Dinner.fish.0.price'),
      hiddenNo: 3
    },
    {
      image: 'steak',
      title: t('Menu:OfficialMenu.Dinner.grill.1.name'),
      description: t('Menu:OfficialMenu.Dinner.grill.1.description'),
      price: t('Menu:OfficialMenu.Dinner.grill.1.price'),
      hiddenNo: 4
    },
    {
      image: 'cheese',
      title: t('Menu:OfficialMenu.Desserts.deserts.3.name'),
      description: t('Menu:OfficialMenu.Desserts.deserts.3.description'),
      price: t('Menu:OfficialMenu.Desserts.deserts.3.price'),
      hiddenNo: 0
    }
  ]

  return (
    <div
      className=" h-full md:h-screen/2 w-full py-10 relative overflow-hidden"
      data-aos="fade-up"
    >
      <div className="m-auto z-10">
        <h1 className="text-center t-40 text-4xl md:text-5xl text-black">
          {t('Main:Featured.title')}
        </h1>
        <br />
        <div
          className="w-full h-72 m-auto mt-10
"
        >
          {console.log('active slide is', activeSlide)}
          <Slider
            beforeChange={(_, next) => setActiveSlide(next)}
            {...settings}
          >
            {featuredItems.map((item, index) => {
              // console.log('active slide is ', activeSlide, 'index is ', index)
              return (
                <FeaturedCard
                  activeSlide={activeSlide}
                  key={item.title}
                  image={item.image}
                  index={index}
                  title={item.title}
                  description={item.description}
                  hiddenNo={item.hiddenNo}
                />
              )
            })}
          </Slider>
        </div>
        <p className="mt-60 text-black text-xl text-center">
          ----------- &#x2605; &#x2605; &#x2605; &#x2605; &#x2605; ------------
        </p>
      </div>
    </div>
  )
}
