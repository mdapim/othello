import React from 'react'
import { useTranslation } from 'react-i18next'
import SocialIcons from './SocialIcons'

function OpeningHours() {
  const { t } = useTranslation('Navigation')
  return (
    <div className="basis-2 flex-1 md:m-auto">
      <h1 className="text-2xl my-2 md:text-4xl md:my-8">{t('Footer.hours')}</h1>
      <div className="text-sm md:text-base">
        <p> {t('Footer.days')}</p>
        <p> {t('Footer.open_afternoon')}</p>
        <p> {t('Footer.open_evening')}</p>
      </div>
    </div>
  )
}

function ContactInfo() {
  const { t } = useTranslation('Navigation')
  return (
    <div className=" basis-2 flex-1 pl-4 md:m-auto">
      <h1 className="text-2xl my-2 md:text-4xl md:my-8">
        {t('Footer.contact')}
      </h1>
      <div className="text-sm md:text-base">
        <p>{t('Footer.address')}</p>
        <p className="font-bosld mt-4">{t('Footer.phone')}</p>
        <p className="font-bosld">{t('Footer.email')}</p>
      </div>
    </div>
  )
}

export default function Footer() {
  const { t } = useTranslation('Navigation')
  return (
    <div className="h-96 md:h-96 bg-black text-white w-full ">
      <div className="grid grid-cols-2 pt-6 md:grid-cols-3 m-auto justify-items-center">
        <ContactInfo />
        <div className="m-auto pt-10 col-span-2 order-last md:order-none md:col-span-1">
          <img
            className="w-[100px] ml-4 md:mt-20 md:w-[200px]"
            src={`${process.env.PUBLIC_URL}Images/otello2.png`}
            alt="Othello Logo"
          />
          <div className="mt-6 space-x-1 text-center">
            <SocialIcons
              aria-label="twitter link"
              imageURL="https://twitter.com/jaketrent"
            />
            <SocialIcons
              aria-label="facebook link"
              imageURL="https://www.facebook.com/othellorestaurantgrimsby/"
            />
            <SocialIcons
              aria-label="email link"
              imageURL="mailto:othellogrimsby@gmail.com"
            />
          </div>
        </div>
        <OpeningHours />
      </div>
      <p className="text-xs md:text-base text-center text-white mt-5 md:pb-8 bg-black">
        {t('Footer.copyright')}
      </p>
    </div>
  )
}
