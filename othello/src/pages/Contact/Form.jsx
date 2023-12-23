/* eslint-disable */
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
// eslint-disable-next-line
export default function Form({
  sendMessage,
  handleFormInput,
  mailRes,
  setMailRes,
  checkFormData,
  formData
}) {
  const { t } = useTranslation('Contact')
  const [selectedDate] = useState(new Date())
  return (
    <form
      className="grid gap-6" //h-screen/2
      onSubmit={e => {
        if (checkFormData()) {
          setMailRes('loading')
          sendMessage()
        } else {
          setMailRes('invalid')
        }

        e.preventDefault()
      }}
    >
      <div className="grid gap-4">
        <div className="grid gap-4 grid-cols-2">
          <InputCard
            name="name"
            label="Form.name"
            size={25}
            type="text"
            handleFormInput={handleFormInput}
            border={
              formData.name.length <= 0 && mailRes === 'invalid'
                ? 'border-red-700 border-2'
                : ''
            }
          />
          <InputCard
            name="phone"
            label="Form.phone"
            size={25}
            type="phone"
            border={
              formData.phone.length <= 0 && mailRes === 'invalid'
                ? 'border-red-700 border-2'
                : ''
            }
            handleFormInput={handleFormInput}
          />
        </div>
        <InputCard
          name="email"
          label="Form.email"
          size={55}
          type="email"
          border={
            formData.email.length <= 0 && mailRes === 'invalid'
              ? 'border-red-700 border-2'
              : ''
          }
          handleFormInput={handleFormInput}
        />
        <div className="grid gap-4 grid-cols-2">
          <div>
            <label
              htmlFor="underline_select"
              className="sr-only whitespace-nowrap"
            >
              Underline select
            </label>
            <p className="font-extrabold uppercase"> {t('Form.time')}</p>
            <select
              // disabled={true}
              id="underline_select"
              name="time"
              defaultValue="--:--"
              onChange={handleFormInput}
              className={
                `indent-2.5 h-10 w-full rounded-none bg-gray-50 text-black bg-transparent border border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-2 focus:border-gray-700 peer ` +
                (formData.time.length <= 0 && mailRes === 'invalid'
                  ? 'border-red-700 border-2'
                  : '')
              }
            >
              {timeOptions.map(item => (
                <option key={item} disabled={item === '--:--'} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <label
            htmlFor="input_date"
            className="font-extrabold uppercase whitespace-nowrap"
          >
            {t('Form.date')}
            <br />
            <input
              // disabled={true}
              id="input_date"
              type="date"
              name="date"
              size={2}
              className={
                ` sm:min-w-[90%]` +
                ` lg:min-w-full` +
                ` rounded-none border-gray-400 whitespace-nowrap bg-gray-50 min-w-[90%] border outline-0 normal-case font-normal h-10 focus:border-gray-700 focus:border-2 ` +
                (formData.date.length <= 0 && mailRes === 'invalid'
                  ? 'border-red-700 border-2'
                  : '')
              }
              onChange={handleFormInput}
              min={dateFormat(selectedDate, 'yyyy-mm-dd')}
              max="2030-01-01"
              defaultValue={dateFormat(selectedDate, 'yyyy-mm-dd')}
            />
          </label>
        </div>
        <label
          htmlFor="text_box"
          className="font-extrabold uppercase whitespace"
        >
          {t('Form.info')}
          <br />
          <textarea
            // disabled={true}
            id="text_box"
            cols="55"
            rows="9"
            maxLength="200"
            type="text"
            name="message"
            className={
              `indent-2.5 rounded-none border-gray-400 border bg-gray-50 w-full outline-0 normal-case font-normal focus:border-2 focus:border-gray-700 ` +
              (formData.message.length <= 0 && mailRes === 'invalid'
                ? 'border-red-700 border-2'
                : '')
            }
            onChange={handleFormInput}
          />
        </label>
      </div>
      <div className="mx-auto">
        <button
          // eslint-disable-next-line
          // disabled={mailRes === 'sent'}
          // disabled={true}
          type="submit"
          aria-label="submit form"
          className="relative border-black bg-black text-white h-12 w-44 border before:border-black after:border-black before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(90%+16px)] hover:before:w-[calc(90%+16px)] hover:after:h-[calc(90%+16px)] hover:after:w-[calc(90%+16px)] hover:bg-white hover:text-black cursor-pointer
          disabled:before:h-[calc(90%+16px)] disabled:before:w-[calc(90%+16px)] disabled:after:h-[calc(90%+16px)] disabled:after:w-[calc(90%+16px)] disabled:bg-white disabled:text-black disabled:cursor-default"
        >
          {mailRes === 'sent'
            ? t('submitted')
            : mailRes === 'loading'
            ? t('loading')
            : mailRes === 'failed'
            ? t('try_again')
            : t('button')}
        </button>
      </div>
      <div className="min-h-[100px]">
        {mailRes === 'sent' && (
          <p className="text-center visible text-green-600 text">{t('sent')}</p>
        )}
        {mailRes === 'failed' && (
          <p className="text-center visible text-pink-600 text">
            {t('failed')}
          </p>
        )}
        {mailRes === 'invalid' && (
          <p className=" text-center visible text-pink-600 text">
            {t('invalid')}
          </p>
        )}
        <p className=" text-center visible text-pink-600 text">
          The contact form is temporarily disabled while the site is being
          worked on, please contact us by calling or sending an email, thank you
        </p>
      </div>
    </form>
  )
}

Form.propTypes = {
  sendMessage: PropTypes.func.isRequired,
  handleFormInput: PropTypes.func.isRequired,
  mailRes: PropTypes.string.isRequired,
  setMailRes: PropTypes.func.isRequired,
  checkFormData: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
  }).isRequired
}
