import React from 'react'
import { useTranslation } from 'react-i18next'
import SocialIcons from './SocialIcons'

function OpeningHours() {
  const { t } = useTranslation('Navigation')
  return (
    <div className="text-justify m-auto">
      <p className="text-4xl my-8">{t('Footer.hours')}</p>
      <p> Monday - Saturday</p>
      <p> 12pm - 2pm</p>
      <p> 6pm - 10pm</p>

      <p className="underline mt-4"> {t('Footer.Enquire')} </p>
    </div>
  )
}

function ContactInfo() {
  const { t } = useTranslation('Navigation')
  return (
    <div className="text-justify m-auto">
      <p className="text-4xl my-8">{t('Footer.contact')}</p>
      <p>{t('Footer.address')}</p>
      <p>{t('Footer.postcode')}</p>

      <p className="underline mt-4">{t('Footer.phone')}</p>
      <p className="underline">{t('Footer.email')}</p>
      <p />
    </div>
  )
}

export default function Footer() {
  const { t } = useTranslation('Navigation')
  return (
    <div className="h-96 bg-black text-white">
      <div className="w-screenfull grid grid-cols-3 m-auto ">
        <ContactInfo />
        <div className="m-auto">
          <img
            width={200}
            className="ml-4 mt-20"
            src={`${process.env.PUBLIC_URL}Images/otello2.png`}
            alt="logo"
          />
          <div className="mt-6 space-x-1 text-center">
            <SocialIcons imageURL="https://twitter.com/jaketrent" />
            <SocialIcons imageURL="https://www.facebook.com/othellorestaurantgrimsby/" />
            <SocialIcons imageURL="mailto:othellogrimsby@gmail.com" />
          </div>
        </div>
        <OpeningHours />
      </div>
      <p className=" mt-16 text-center text-white mt-5">
        {t('Footer.copyright')}
      </p>
    </div>
  )
}
