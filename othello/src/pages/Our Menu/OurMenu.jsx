import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import SectionItem from './components/sectionItem'
// import Menu from '../../Menu.json'
import Footer from '../../components/Footer/Footer'
import ButtonGrid from './components/buttonGrid'

export default function OurMenu() {
  const { i18n, t } = useTranslation('OurMenu')
  const [chosenItem, setChosenItem] = useState('Lunch')
  const [Menu2, setMenu] = useState(null)

  useEffect(() => {
    async function getMenu() {
      const menu = await import(`../../locales/${i18n.language}/Menu.json`)
      setMenu(menu)
    }
    getMenu()
  }, [i18n.language])
  return (
    <div>
      <div
        className="mt-[149px] bg-fixed h-[50vh] w-full text-center text-white flex flex-col space-y-10 items-center justify-center"
        style={{
          backgroundImage: ` linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${`${process.env.PUBLIC_URL}/Images/crab.jpeg`})`
        }}
      >
        <p className="text-8xl uppercase font-bold"> {t('title')} </p>
        <p className="text-2xl px-96">{t('description')}</p>
      </div>
      <div className="m-24">
        <ButtonGrid setItem={setChosenItem} />
      </div>

      <br />
      <hr className=" h-px dark:bg-black" />

      <ul className="flex flex-col space-y-10 ">
        {chosenItem &&
          Menu2 &&
          Object.keys(Menu2[chosenItem]).map(item => (
            <SectionItem menuItem={item} menuList={Menu2[chosenItem][item]} />
          ))}
      </ul>

      <Footer />
    </div>
  )
}
