import React from 'react'
import { useTranslation } from 'react-i18next'
import SocialIcons from './SocialIcons'

function OpeningHours() {
  const { t } = useTranslation('Navigation')
  return (
    <div className={'basis-2 flex-1' + ' md:m-auto'}>
      <h1 className={'text-2xl my-2' + ' md:text-4xl md:my-8'}>
        {t('Footer.hours')}
      </h1>
      <div className={'text-sm' + ' md:text-base'}>
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
    <div className={' basis-2 flex-1 pl-4' + ' md:m-auto'}>
      <h1 className={'text-2xl my-2' + ' md:text-4xl md:my-8'}>
        {t('Footer.contact')}
      </h1>
      <div className={'text-sm' + ' md:text-base'}>
        <p>{t('Footer.address')}</p>
        <p className="font-bold mt-4">{t('Footer.phone')}</p>
        <p className="font-bold">{t('Footer.email')}</p>
      </div>
    </div>
  )
}

export default function Footer() {
  const { t } = useTranslation('Navigation')
  return (
    <div className={'h-96 bg-black text-white w-full' + ' md:h-96'}>
      <div
        className={
          'grid grid-cols-2 pt-6 m-auto justify-items-center ' +
          'md:grid-cols-3 '
        }
      >
        <ContactInfo />
        <div
          className={
            'm-auto pt-10 col-span-2 order-last' +
            ' md:order-none md:col-span-1'
          }
        >
          <img
            className={'w-[100px] ml-4' + ' md:mt-20 md:w-[200px]'}
            src={`${process.env.PUBLIC_URL}Images/otello2.png`}
            alt="Othello Logo"
            data-testid="othello-logo-footer"
          />
          <div className="mt-6 space-x-1 text-center">
            <SocialIcons imageURL="https://www.instagram.com/othellogrimsby?igsh=MXRnY3Q5NHIwa2F6ZA==" />
            <SocialIcons imageURL="https://www.facebook.com/othellorestaurantgrimsby/" />
            <SocialIcons imageURL="mailto:othellogrimsby@gmail.com" />
          </div>
        </div>
        <OpeningHours />
      </div>
      <p
        className={
          'text-xs text-center text-white mt-5 bg-black' +
          ' md:pb-8 md:text-base'
        }
      >
        {t('Footer.copyright')}
      </p>
    </div>
  )
}
