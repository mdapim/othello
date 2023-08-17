import React from 'react'
import { useTranslation } from 'react-i18next'
import SocialIcons from './SocialIcons' // eslint-disable-line

function OpeningHours() {
  const { t } = useTranslation('Navigation')
  return (
    <div className="md:m-auto">
      <p className="text-2xl my-2 md:text-4xl md:my-8">{t('Footer.hours')}</p>
      <div className="text-sm md:text-base">
        <p> {t('Footer.days')}</p>
        <p> {t('Footer.open_afternoon')}</p>
        <p> {t('Footer.open_evening')}</p>
        <p className="underline mt-4"> {t('Footer.Enquire')} </p>
      </div>
    </div>
  )
}

// eslint-disable-next-line
function ContactInfo() {
  const { t } = useTranslation('Navigation')
  return (
    <div className=" pl-4 md:m-auto">
      <p className="text-2xl my-2 md:text-4xl md:my-8">{t('Footer.contact')}</p>
      <div className="text-sm md:text-base">
        <p>{t('Footer.address')}</p>
        {/* <p>{t('Footer.postcode')}</p> */}
        <p className="underline mt-4">{t('Footer.phone')}</p>
        <p className="underline">{t('Footer.email')}</p>
      </div>
    </div>
  )
}

export default function Footer() {
  const { t } = useTranslation('Navigation') // eslint-disable-line
  return (
    <div className=" h-80  md:h-96 bg-black text-white w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 m-auto justify-items-center">
        <ContactInfo />
        <div className="m-auto order-last md:order-none">
          <img
            // width={200}
            className="ml-4 md:mt-20 md:w-[200px] w-[100px]"
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
      <p className="text-xs md:text-base mt-16 text-center text-white mt-5">
        {t('Footer.copyright')}
      </p>
    </div>
  )
}
