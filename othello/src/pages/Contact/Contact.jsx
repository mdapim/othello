import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import dateFormat from 'dateformat'
import GMap from './openmap'
import Footer from '../../components/Footer/Footer'
import Form from './Form'
import sendEmail from './sendEmail'

export default function Contact() {
  const { t } = useTranslation('Contact')
  const [mailRes, setMailRes] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    time: '',
    date: dateFormat(new Date(), 'yyyy-mm-dd'),
    message: ''
  })

  const handleFormInput = e => {
    const { name } = e.target
    const { value } = e.target

    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const sendMessage = async () => {
    const response = await sendEmail(
      process.env.REACT_APP_RECIPIENT_EMAIL_ADDRESS,
      formData
    )
    setMailRes(await response)
  }

  const checkFormData = () =>
    Object.values(formData).every(value => value !== '')

  return (
    <div className="h-full w-full">
      <div
        className="mt-[149px] bg-fixed h-[50vh] w-full text-center text-white flex flex-col space-y-10 items-center justify-center"
        style={{
          backgroundImage: ` linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${`${process.env.PUBLIC_URL}/Images/chris.jpg`})`
        }}
      >
        <h1 className="text-6xl md:text-8xl font-bold uppercase">
          {t('Title.heading')}
        </h1>
        <p className={'text-base px-6 ' + ' md:text-2xl md:px-[18vw]'}>
          {t('Title.description')}
        </p>
      </div>
      <div className="m-auto">
        <div className={'m-auto my-10 text-center' + ' md:my-20'}>
          <h2 className={'text-2xl font-bold' + ' md:text-4xl'}>
            {t('open_days')}
          </h2>
          <p className={'my-2  text-xl  font-bold' + ' md:text-3xl md:my-5'}>
            {t('contact_info')}
          </p>
        </div>
        <div
          className={
            'grid grid-cols-1 mt-20 m-auto' + ' xl:mt-32 xl:grid-cols-2'
          }
        >
          <div>
            <h2 className={'mx-4  font-bold text-4xl ' + ' md:text-5xl'}>
              {t('Form.enquire')}
            </h2>
            <p className={'text-base mx-4 mt-6' + ' md:text-lg md:mt-14'}>
              {t('Form.description')}
            </p>
            <h2 className={'mx-4 font-bold mt-10 text-2xl' + ' md:text-2xl'}>
              {t('Form.notice_title')}
            </h2>
            <p className={'text-base mt-2 mx-4 ' + ' md:text-lg'}>
              {t('Form.notice')}
            </p>
          </div>
          <div className={'mt-14 mx-6 ' + ' md:pt-0 md:mx-20 xl:mt-0'}>
            <Form
              handleFormInput={handleFormInput}
              sendMessage={sendMessage}
              mailRes={mailRes}
              setMailRes={setMailRes}
              checkFormData={checkFormData}
              formData={formData}
            />
          </div>
        </div>
      </div>
      <GMap />
      <Footer />
    </div>
  )
}
