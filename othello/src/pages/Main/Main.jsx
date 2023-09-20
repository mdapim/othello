/* eslint-disable */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import InfoPanel from './components/InfoPanel/InfoPanel'
import Featured from './components/Featured/Featured'
import Footer from '../../components/Footer/Footer' // eslint-disable-line
import Comments from './components/Comments/Comments'

export default function Main() {
  const navigate = useNavigate() // eslint-disable-line
  const { t } = useTranslation('Main') // eslint-disable-line

  return (
    <div className="mt-[50px] h-[600px] w-full">
      <div
        className=" bg-fixed h-screen w-full flex"
        data-aos="fade-up"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${`${process.env.PUBLIC_URL}/Images/main.jpeg`})`
        }}
      >
        <div className="animate-fade-up text-center text-white m-auto pt-20">
          <img
            className="w-12 h-12 md:w-20 md:h-20 invert block m-auto"
            src={`${process.env.PUBLIC_URL}/Images/logot.png`}
            alt="logo"
          />
          <p className="text-lg md:text-2xl uppercase">
            {t('MainPage.welcome_message.p1')}
          </p>
          <p className="text-lg md:text-2xl uppercase">
            {t('MainPage.welcome_message.p2')}
          </p>
          <p className="text-4xl md:text-6xl md:text-8xl">
            {t('MainPage.welcome_message.p3')}
          </p>
          <p className="text-sm px-2 md:text-2xl md:px-72 pt-10 ">
            {t('MainPage.welcome_message.p4')}
          </p>
          <br />
          <br />
          <button
            type="button"
            onClick={() => {
              navigate('/OurMenu')
            }}
            className="relative h-12 w-44 border before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(90%+16px)] hover:before:w-[calc(90%+16px)] hover:after:h-[calc(90%+16px)] hover:after:w-[calc(90%+16px)] hover:bg-black"
          >
            {t('MainPage.Try')}
          </button>
        </div>
      </div>
      <br />
      <br />
      <InfoPanel />
      <br />
      <Comments />
      <Featured />
      <Footer />
    </div>
  )
}
