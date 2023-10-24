/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import SectionItem from './components/sectionItem'
import Footer from '../../components/Footer/Footer'
import ButtonGrid from './components/buttonGrid'
import BackToTop from './components/BackToTop'

export default function OurMenu() {
  const { i18n, t } = useTranslation(['Menu', 'OurMenu'])
  const [chosenItem, setChosenItem] = useState('Lunch')
  const [MenuItems, setMenuItems] = useState(null)
  const ref = useRef(null)
  const ref3 = useRef(null)

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleClick2 = () => {
    ref3.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    setMenuItems(t('Menu:OfficialMenu', { returnObjects: true }))
  }, [i18n.language])
  return (
    <div>
      <div
        className="mt-[149px] bg-fixed h-[50vh] w-full text-center text-white flex flex-col space-y-10 items-center justify-center"
        style={{
          backgroundImage: ` linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${`${process.env.PUBLIC_URL}/Images/crab.jpeg`})`
        }}
      >
        <h1 className="text-6xl md:text-8xl uppercase font-bold">
          {t('OurMenu:title')}
        </h1>
        <p className="text-base px-6 md:text-2xl md:px-96" ref={ref3}>
          {t('OurMenu:description')}
        </p>
      </div>
      <div className="m-4 md:m-24">
        <ButtonGrid setItem={setChosenItem} scrollToMenu={handleClick} />
      </div>

      <br ref={ref} />
      <hr className=" p-4 bg-white" />

      <ul className="flex flex-col space-y-10">
        {MenuItems &&
          chosenItem &&
          Object.keys(
            t('Menu:OfficialMenu', { returnObjects: true })[chosenItem]
          ).map((item, index) => (
            <SectionItem
              key={item}
              menuItem={t(`OurMenu:${chosenItem}.${index}`)}
              menuList={MenuItems[chosenItem][item]}
            />
          ))}
      </ul>
      <div className="p-6 bg-white" />
      <BackToTop scrollToTop={handleClick2} />
      <Footer />
    </div>
  )
}
