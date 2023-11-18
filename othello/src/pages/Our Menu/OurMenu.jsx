/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import SectionItem from './components/sectionItem'
import Footer from '../../components/Footer/Footer'
import ButtonGrid from './components/buttonGrid'
import BackToTop from './components/BackToTop'

function MenuButton({ name }) {
  return (
    <button
      type="button"
      className={
        'inline-block text-lg rounded-sm bg-neutral-800 px-10 pb-2 pt-2.5 font-medium uppercase leading-normal text-neutral-50' +
        ' md:text-2xl' +
        ' shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]'
      }
    >
      {name}
    </button>
  )
}

// const menuTitles = () => {
//   return (
//     <p className="block group transition duration-300 cursor-pointer">
//       Christmas
//       <span className="block max-w-0 md:group-hover:max-w-full transition-all duration-500 h-0.5 bg-black" />
//     </p>
//   )
// }

const specialMenus = [
  'New years eve',
  'Valentines day',
  'Easter sunday',
  'Christmas'
]

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
        <p className="text-base px-6 md:text-2xl md:px-[18vw]" ref={ref3}>
          {t('OurMenu:description')}
        </p>
      </div>
      <div className="mt-10 m-4 md:m-[3%]">
        <ButtonGrid setItem={setChosenItem} scrollToMenu={handleClick} />
      </div>
      <p className="text-center text-4xl font-bold mt-10"> Special Menus </p>
      <div className="flex flex-col text-center space-y-4 whitespace-nowrap xl:space-y-0 xl:flex-row xl:justify-around text-2xl font-medium border-8 mx-10 p-5 border-double border-black mt-10 xl:space-x-10">
        {specialMenus.map(name => {
          return <MenuButton name={name} />
        })}
      </div>

      <br ref={ref} />
      <hr className=" p-4 bg-white" />

      <div className="flex flex-col space-y-10">
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
      </div>
      <div className="p-6 bg-white" />
      <BackToTop scrollToTop={handleClick2} />
      <Footer />
    </div>
  )
}
