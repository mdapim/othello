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
    speed: 1000,
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
      title: t('Menu:OfficialMenu.Desserts.desserts.0.name'),
      description: t('Menu:OfficialMenu.Desserts.desserts.0.description'),
      price: t('Menu:OfficialMenu.Desserts.desserts.0.price'),
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
      title: t('Menu:OfficialMenu.Desserts.desserts.3.name'),
      description: t('Menu:OfficialMenu.Desserts.desserts.3.description'),
      price: t('Menu:OfficialMenu.Desserts.desserts.3.price'),
      hiddenNo: 0
    }
  ]

  return (
    <div
      className={
        'inline-block h-full pt-10 mb-10 w-full m-auto' +
        ' xl:pt-10 xl:py-0 xl:h-screen/2 xl:mt-[10%]' +
        ' 2xl:mb-0 2xl:px-44'
      }
      data-aos="fade-up"
    >
      <div className="m-auto z-10">
        <h1 className={'text-center t-40 text-4xl text-black' + ' md:text-5xl'}>
          {t('Main:Featured.title')}
        </h1>
        <br />
        <div className="w-full h-72 m-auto mt-10">
          <Slider
            beforeChange={(_, next) => setActiveSlide(next)}
            {...settings}
          >
            {featuredItems.map((item, index) => {
              return (
                <FeaturedCard
                  activeSlide={activeSlide}
                  key={item.title}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  hiddenNo={item.hiddenNo}
                />
              )
            })}
          </Slider>
          <p className="mt-10  text-black text-xl text-center">
            ----------- &#x2605; &#x2605; &#x2605; &#x2605; &#x2605; -----------
          </p>
          <span className={'mt-10 text-white' + ' md:visible'}>--</span>
        </div>
      </div>
    </div>
  )
}
