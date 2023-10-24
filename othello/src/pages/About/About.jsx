import React from 'react'
import { useTranslation } from 'react-i18next'
import Footer from '../../components/Footer/Footer'
import ImageGallery from './ImageGallery'

export default function About() {
  const { t } = useTranslation('About')
  return (
    <div>
      <div
        className="mt-[149px] bg-fixed h-[50vh] w-full text-center text-white flex flex-col items-center space-y-10 justify-center"
        style={{
          backgroundImage: ` linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${`${process.env.PUBLIC_URL}/Images/table.jpeg`})`
        }}
      >
        <h1 className="text-6xl md:text-8xl font-bold uppercase">
          {t('Title.heading')}
        </h1>
        <p className="text-base px-6 md:text-2xl md:px-96">
          {t('Title.description')}
        </p>
      </div>
      <div className="flex-col justify-between text-sm md:text-base justify-center items-center">
        <div className="flex-1">
          <div>
            <img
              className="m-auto mt-20"
              src={`${process.env.PUBLIC_URL}/Images/Place/FrontBlack.jpg`}
              alt="Othello front"
            />
          </div>
        </div>
        <hr className="md:w-[600px] border-[0.5px] border-gray-400 m-auto mt-8" />
        <div className="flex-1 m-auto space-y-10">
          <div className="p-8 md:px-96 space-y-6 text-left">
            <p>{t('Story.p1')}</p>
            <p>{t('Story.p2')}</p>
            <p>{t('Story.p3')}</p>
            <p>{t('Story.p4')}</p>
            <p>{t('Story.p5')}</p>
          </div>
        </div>
      </div>
      <hr className=" border-gray-400 m-auto mt-8" />
      <div className="py-10 m-auto">
        <ImageGallery />
      </div>

      <Footer />
    </div>
  )
}
