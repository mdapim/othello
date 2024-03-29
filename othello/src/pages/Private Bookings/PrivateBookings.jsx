import React from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'

export default function PrivateBookings() {
  const { t } = useTranslation('Private')
  const navigate = useNavigate()
  return (
    <div>
      <div
        className="mt-[149px] bg-fixed h-[50vh] w-full text-center text-white flex flex-col space-y-10 items-center justify-center"
        style={{
          backgroundImage: ` linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${`${process.env.PUBLIC_URL}/Images/table.jpg`})`
        }}
      >
        <h1 className={'text-6xl uppercase font-bold' + ' md:text-8xl'}>
          {t('Title.heading')}
        </h1>
        <p className={'text-base px-6' + ' md:text-2xl md:px-[18vw]'}>
          {t('Title.description')}
        </p>
      </div>
      <div className={'m-auto grid grid-cols-1' + ' xl:p-10 xl:grid-cols-2'}>
        <img
          className={'p-2 m-auto' + ' xl:pt-20'}
          src={`${process.env.PUBLIC_URL}/Images/napkin.jpg`}
          alt=""
        />
        <div
          className={
            'pb-20  p-10 m-auto space-y-6 flex flex-col text-left' +
            ' md:px-[10%]' +
            ' xl:pb-0 xl:py-20'
          }
        >
          <h2 className="font-bold text-4xl uppercase text-center ">
            {t('Aphrodite.title')}
          </h2>
          <p>{t('Aphrodite.p1')}</p>
          <p>{t('Aphrodite.p2')}</p>
          <p>{t('Aphrodite.p3')}</p>
          <button
            type="button"
            aria-label="enquire navigates to contact"
            onClick={() => {
              navigate('/Contact')
            }}
            className="relative m-auto border-black bg-black text-white h-12 w-44 border before:border-black after:border-black before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(90%+16px)] hover:before:w-[calc(90%+16px)] hover:after:h-[calc(90%+16px)] hover:after:w-[calc(90%+16px)] hover:bg-white hover:text-black cursor-pointer"
          >
            {t('button')}
          </button>
        </div>
      </div>
      <div className={' m-auto grid grid-cols-1' + ' xl:grid-cols-2 xl:p-10'}>
        <div
          className={
            'order-2  p-10 space-y-6 m-auto flex flex-col' +
            ' md:px-[10%]' +
            ' xl:order-1 xl:py-20'
          }
        >
          <h2 className="font-bold text-4xl uppercase text-center">
            {t('Alcove.title')}
          </h2>
          <p>{t('Alcove.p1')}</p>
          <p>{t('Alcove.p2')}</p>
          <p>{t('Alcove.p3')}</p>
          <button
            type="button"
            aria-label="enquire navigates to contact"
            onClick={() => {
              navigate('/Contact')
            }}
            className="relative m-auto border-black bg-black text-white h-12 w-44 border before:border-black after:border-black before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(90%+16px)] hover:before:w-[calc(90%+16px)] hover:after:h-[calc(90%+16px)] hover:after:w-[calc(90%+16px)] hover:bg-white hover:text-black cursor-pointer"
          >
            {t('button')}
          </button>
        </div>
        <img
          className={'order-1 p-2 m-auto' + ' xl:order-2 xl:pt-20'}
          src={`${process.env.PUBLIC_URL}/Images/elnap.jpg`}
          alt=""
        />
      </div>

      <Footer />
    </div>
  )
}
