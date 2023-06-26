import React from 'react'
import './InfoPanel.css'
import '../../../../Fonts/Font.css'
import { useTranslation } from 'react-i18next'
import PromotionCard from './PromotionCard'

const promotionCards = ['\u2605', '\u2766', '\u2764', '\u2600', '\u2746']

export default function InfoPanel() {
  const { t } = useTranslation('Main')
  return (
    <div className="flex flex-wrap flex-row m-auto h-screen w-10/12 relative overflow-hidden w-screenfull">
      <img
        src={`${process.env.PUBLIC_URL}/Images/sketch.jpeg`}
        alt="op"
        className="opacity-30 absolute top-0 left-0 w-screen h-auto z-0" // inset-x-80 inset-y-24
      />
      <div
        className="infoPanel-container infoPanel-text pacific text-center align-self-center m-auto z-10 "
        id="test"
      >
        <h1 className="uppercase text-4xl">What we offer</h1>
        <br />
        <span className="flex flex-row text-lg text-justify space-x-14">
          <p className="flex-1">{t('InfoPage.about_message.p1')}</p>
          <p className="flex-1">{t('InfoPage.about_message.p2')}</p>
        </span>
        <br />
        <span className="flex flex-row flex-wrap space-x-32 text-justify">
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
        className="image-container m-auto z-10"
        src={`${process.env.PUBLIC_URL}/Images/drinks.jpeg`}
        alt="mine"
      />
    </div>
  )
}
