import React from 'react'
import './InfoPanel.css'
import '../../../../Fonts/Font.css'
import { useTranslation } from 'react-i18next'
import PromotionCard from './PromotionCard'

const promotionCards = ['\u2605', '\u2766', '\u2764', '\u2600', '\u2746']

export default function InfoPanel() {
  const { t } = useTranslation('Main')
  return (
    <div className="flex flex-wrap flex-row m-auto h-auto w-full md:w-10/12 relative overflow-hidden">
      <img
        src={`${process.env.PUBLIC_URL}/Images/sketch.jpeg`}
        alt="op"
        className="opacity-30 absolute top-0 left-0 w-screen h-full md:h-auto z-0" // inset-x-80 inset-y-24
      />
      <div
        className="infoPanel-container infoPanel-text pacific text-center align-self-center m-auto z-10 "
        id="test"
      >
        <h1 className="uppercase text-2xl md:text-4xl">
          {t('InfoPage.title')}
        </h1>
        <br />
        <span className="flex flex-col text-justify p-4 space-y-10 text-sm md:p-0 md:flex-row md:text-lg md:space-y-0 md:space-x-14">
          <p className="flex-1">{t('InfoPage.about_message.p1')}</p>
          <p className="flex-1">{t('InfoPage.about_message.p2')}</p>
        </span>
        <br />
        <span className="flex flex-row flex-wrap md:space-x-32 text-justify">
          {promotionCards.map((item, index) => (
            <PromotionCard
              key={item.id}
              Details={item}
              title={t(`Promotion.${index}.title`)}
              description={t(`Promotion.${index}.description`)}
            />
          ))}
        </span>
      </div>
      <img
        className="h-96 shadow-[0px_0px_1px_1px] m-auto md:h-[500px] md:shadow-[0_0_2px_2px] md:p-0 z-10"
        src={`${process.env.PUBLIC_URL}/Images/drinks.jpeg`}
        alt="mine"
      />
    </div>
  )
}
