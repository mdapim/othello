import GMap from './googlemap';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../Main/components/Footer/Footer';
import Form from './Form';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    event: '',
    date: '',
    message: '',
  });
  var data = {
    service_id: 'service_lw9ch6r',
    template_id: 'template_0lx9i2t',
    user_id: 'fUXfArGHyPjFG9aG-',
    template_params: {
      to_name: formData.name,
      from_name: formData.email,
      subject: formData.subject,
      phone: formData.phone,
      message: formData.message,
      'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...',
    },
  };

  const handleFormInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const sendMessage = async () => {
    const apiResponse = await emailjs
      .send(
        data.service_id,
        data.template_id,
        data.template_params,
        data.user_id
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
  };

  useEffect(() => {}, []);

  return (
    <div className='h-full w-full'>
      <div
        class='mt-[149px] bg-fixed h-[50vh] w-full text-center text-white flex flex-col space-y-10 items-center justify-center'
        style={{
          backgroundImage: ` linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${
            process.env.PUBLIC_URL + '/Images/chris.jpg'
          })`,
        }}
      >
        <p className='text-8xl font-bold uppercase'>Contact Us </p>
        <p className='text-2xl px-96'>
          We're here to assist you! Contact us at Othello Restaurant in Grimsby
          to reserve a table or discuss your event needs. We look forward to
          hearing from you.
        </p>
      </div>
      <div className='grid grid-cols-2 m-auto w-screenfull'>
        <div className='mx-14'>
          <Form handleFormInput={handleFormInput} sendMessage={sendMessage} />
        </div>

        <div className='flex basis-1/3 flex-col justify-around'>
          <div className='text-center mx-auto'>
            <p className='text-4xl bold'>Contact Us</p>
            <p>01472 356704</p>
            <p> othellogrimsby@gmail.com</p>
          </div>
          <div className='text-center mx-auto mb-20'>
            <p className='text-4xl bold'>Opening Times</p>
            <p>Monday to Saturday</p>
            <p> Lunch: 12-2pm</p>
            <p> Dinner: 6-10pm</p>
          </div>
        </div>
      </div>
      <GMap />
      <Footer />
    </div>
  );
}
