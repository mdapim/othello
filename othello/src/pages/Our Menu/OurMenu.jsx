/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import SectionItem from './components/sectionItem'
import Footer from '../../components/Footer/Footer'
import ButtonGrid from './components/buttonGrid'

export default function OurMenu() {
  const { i18n, t } = useTranslation(['Menu', 'OurMenu'])
  const [chosenItem, setChosenItem] = useState('Lunch')
  const [MenuItems, setMenuItems] = useState(null)

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
        <p className="text-6xl md:text-8xl uppercase font-bold">
          {t('OurMenu:title')}
        </p>
        <p className="text-base px-6 md:text-2xl md:px-96">
          {t('OurMenu:description')}
        </p>
      </div>
      <div className="m-4 md:m-24">
        <ButtonGrid setItem={setChosenItem} />
      </div>

      <br />
      <hr className=" p-2 bg-white" />

      <ul className="flex flex-col space-y-10 ">
        {MenuItems &&
          chosenItem &&
          Object.keys(
            t('Menu:OfficialMenu', { returnObjects: true })[chosenItem]
          ).map((item, index) => (
            <SectionItem
              menuItem={t(`OurMenu:${chosenItem}.${index}`)}
              menuList={MenuItems[chosenItem][item]}
            />
          ))}
      </ul>
      <div className="p-6 bg-white" />
      <Footer />
    </div>
  )
}
