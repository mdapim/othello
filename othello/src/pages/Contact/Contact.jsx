import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import GMap from './googlemap'
import Footer from '../../components/Footer/Footer'
import Form from './Form'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: '',
    date: '',
    message: ''
  })
  const data = {
    service_id: 'service_lw9ch6r',
    template_id: 'template_0lx9i2t',
    user_id: 'fUXfArGHyPjFG9aG-',
    template_params: {
      to_name: formData.name,
      from_name: formData.email,
      subject: formData.subject,
      phone: formData.phone,
      message: formData.message,
      'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
    }
  }

  const handleFormInput = e => {
    const { name } = e.target
    const { value } = e.target

    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const sendMessage = async () => {
    const apiResponse = await emailjs
      .send(
        data.service_id,
        data.template_id,
        data.template_params,
        data.user_id
      )
      .then(
        response => {
          console.log('SUCCESS!', response.status, response.text)
        },
        error => {
          console.log('FAILED...', error)
        }
      )
    console.log(apiResponse)
  }

  return (
    <div className="h-full w-full">
      <div
        className="mt-[149px] bg-fixed h-[50vh] w-full text-center text-white flex flex-col space-y-10 items-center justify-center"
        style={{
          backgroundImage: ` linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${`${process.env.PUBLIC_URL}/Images/chris.jpg`})`
        }}
      >
        <p className="text-8xl font-bold uppercase">Contact Us </p>
        <p className="text-2xl px-96">
          We're here to assist you! Contact us at Othello Restaurant in Grimsby
          to reserve a table or discuss your event needs. We look forward to
          hearing from you.
        </p>
      </div>
      <div className="w-screenfull m-auto">
        <div className="m-auto my-20 text-center">
          <p className="text-4xl font-bold">
            Open Mondays through Saturdays Lunch - Dinner
          </p>
          <p className="my-5 text-3xl font-bold">
            Call 01472 356704 during our opening times, or online using the form
            below
          </p>
        </div>
        <div className="grid grid-cols-2 m-auto mt-32">
          <div>
            <p className=" mx-28 font-bold text-5xl"> Enquires </p>
            <p className=" text-lg mx-28 mt-14">
              We recommend booking at least 2 weeks in advance for large parties
              of 6 or more, Please be advised this form does not confirm your
              reservation and you will be contacted by a member of our team as
              quickly as possible to confirm it. We value your interest in our
              establishment and look forward to serving you.
            </p>
          </div>
          <div className="mx-20">
            <Form handleFormInput={handleFormInput} sendMessage={sendMessage} />
          </div>
        </div>
      </div>

      <GMap />
      <Footer />
    </div>
  )
}
