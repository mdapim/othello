import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import dateFormat from 'dateformat'
import PropTypes from 'prop-types'
import InputCard from './InputCard'

const timeOptions = [
  '12:00',
  '12:30',
  '13:00',
  '14:00',
  '--:--',
  '18:00',
  '18:30',
  '19:00',
  '19:30',
  '20:00',
  '20:30',
  '21:00',
  '21:30',
  '22:00'
]

export default function Form({ sendMessage, handleFormInput }) {
  const { t } = useTranslation('Contact')
  const [selectedDate] = useState(new Date())
  return (
    <form
      className="grid h-screen/2"
      onSubmit={e => {
        sendMessage()
        e.preventDefault()
      }}
    >
      <div className="grid">
        <div className="grid gap-4 grid-cols-2">
          <InputCard
            name="Full name"
            label="Form.name"
            size={25}
            type="text"
            handleFormInput={handleFormInput}
          />
          <InputCard
            name="phone number"
            label="Form.phone"
            size={25}
            type="phone"
            handleFormInput={handleFormInput}
          />
        </div>
        <InputCard
          name="email address"
          label="Form.email"
          size={55}
          type="email"
          handleFormInput={handleFormInput}
        />
        <div className="grid gap-4 grid-cols-2">
          <div>
            {/* eslint-disable-next-line */}
            <label htmlFor="underline_select" className="sr-only">
              Underline select
            </label>
            <p className="font-extrabold uppercase"> {t('Form.time')}</p>
            <select
              id="underline_select"
              name="event"
              defaultValue="--:--"
              // onChange={e => setSelectedDate(e.target.value)}
              className="indent-2.5 h-10 w-full bg-gray-50 text-black bg-transparent border border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-2 focus:border-gray-700 peer"
            >
              {timeOptions.map(item => (
                <option key={item} disabled={item === '--:--'} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <label htmlFor="input_date" className="font-extrabold uppercase">
            {t('Form.date')}
            <br />
            <input
              id="input_date"
              type="date"
              name="date"
              size={25}
              className="indent-1 border-gray-400 bg-gray-50 w-full border outline-0 normal-case font-normal h-10 focus:border-gray-700 focus:border-2"
              onChange={handleFormInput}
              min={dateFormat(selectedDate, 'yyyy-mm-dd')}
              max="2030-01-01"
              defaultValue={dateFormat(selectedDate, 'yyyy-mm-dd')}
            />
          </label>
        </div>
        <label htmlFor="text_box" className="font-extrabold uppercase">
          {t('Form.info')}
          <br />
          <textarea
            id="text_box"
            cols="55"
            rows="9"
            maxLength="200"
            type="text"
            name="message"
            className="indent-2.5 border-gray-400 border bg-gray-50 w-full outline-0 normal-case font-normal focus:border-2 focus:border-gray-700 "
            onChange={handleFormInput}
          />
        </label>
      </div>
      <div className="mx-auto mt-8">
        <button
          type="submit"
          aria-label="submit form"
          className="relative border-black bg-black text-white h-12 w-44 border before:border-black after:border-black before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(90%+16px)] hover:before:w-[calc(90%+16px)] hover:after:h-[calc(90%+16px)] hover:after:w-[calc(90%+16px)] hover:bg-white hover:text-black cursor-pointer"
        >
          {t('button')}
        </button>
      </div>
    </form>
  )
}

Form.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  handleFormInput: PropTypes.func.isRequired
}
