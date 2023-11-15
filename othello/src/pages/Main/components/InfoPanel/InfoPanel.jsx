import React from 'react'
import './InfoPanel.css'
import '../../../../Fonts/Font.css'
import { useTranslation } from 'react-i18next'
import PromotionCard from './PromotionCard'

const promotionCards = [
  '\u2605\uFE0E',
  '\u2766\uFE0E',
  '\u2764\uFE0E',
  '\u2600\uFE0E',
  '\u2746\uFE0E'
]

export default function InfoPanel() {
  const { t } = useTranslation('Main')

  return (
    <div
      data-aos="fade-up"
      className="flex flex-wrap flex-row m-auto h-auto w-full md:w-10/12 relative overflow-hidden"
    >
      <div
        className="infoPanel-container infoPanel-text  text-center align-self-center m-auto z-10 "
        id="test"
      >
        <h1 className=" text-4xl font-normal md:text-5xl">
          {t('InfoPage.title')}
        </h1>
        <br />
        <span className="flex flex-col text-left p-4 space-y-10 text-base md:p-0 md:flex-row md:text-lg md:space-y-0 md:space-x-14">
          <p className="flex-1">{t('InfoPage.about_message.p1')}</p>
          <p className="flex-1">{t('InfoPage.about_message.p2')}</p>
        </span>
        <br />
        <span className="flex flex-row flex-wrap md:space-x-32 text-left">
          {promotionCards.map((item, index) => (
            <PromotionCard
              code={item}
              key={item}
              Details={item}
              title={t(`Promotion.${index}.title`)}
              description={t(`Promotion.${index}.description`)}
            />
          ))}
        </span>
      </div>
      <img
        className="h-96 mt-10 shadow-[0px_0px_1px_1px] m-auto xl:h-full xl:w-[550px] md:shadow-[0_0_2px_2px] md:p-0 z-10"
        src={`${process.env.PUBLIC_URL}/Images/drinks.jpeg`}
        alt="mine"
      />
    </div>
  )
}
