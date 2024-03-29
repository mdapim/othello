import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import InfoPanel from './components/InfoPanel/InfoPanel'
import Featured from './components/Featured/Featured'
import Footer from '../../components/Footer/Footer'
import Comments from './components/Comments/Comments'

export default function Main() {
  const navigate = useNavigate()
  const { t } = useTranslation('Main')

  return (
    <div className="mt-[50px] h-[600px] w-full">
      <div
        className=" bg-fixed h-screen min-h-full w-full flex"
        data-aos="fade-up"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${`${process.env.PUBLIC_URL}/Images/main.jpeg`})`
        }}
      >
        <div className="animate-fade-up text-center text-white m-auto pt-20">
          <img
            className={'w-12 h-12 invert block m-auto' + ' md:w-20 md:h-20'}
            src={`${process.env.PUBLIC_URL}/Images/logot.png`}
            alt="wheat symbol"
          />
          <h2>
            <span className={'text-lg block uppercase' + ' md:text-2xl'}>
              {t('MainPage.welcome_message.p1')}
            </span>
            <span className={'text-lg block uppercase' + ' md:text-2xl'}>
              {t('MainPage.welcome_message.p2')}
            </span>
            <span className={'text-4xl alegreya' + ' md:text-6xl md:text-8xl'}>
              {t('MainPage.welcome_message.p3')}
            </span>
          </h2>

          <p className={'text-sm px-2 pt-10 ' + ' md:text-2xl md:px-[10vw]'}>
            {t('MainPage.welcome_message.p4')}
          </p>
          <br />
          <br />
          <button
            type="button"
            onClick={() => {
              navigate('/OurMenu')
            }}
            aria-label="Try now navigates to the our menu page"
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
