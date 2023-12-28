import React from 'react'
import { screen, fireEvent, waitFor } from '@testing-library/react'
import render from '../../utils/testUtils'
import Contact from './Contact'
import i18n from '../../i18n'
import ContactTranslations from '../../../public/locales/en/Contact.json'
import sendEmail from './sendEmail'

jest.mock('./sendEmail')

beforeAll(async () => {
  await i18n.init({
    resources: {
      en: {
        Contact: ContactTranslations
      }
    }
  })
})

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}))

describe('Test all elements are present', () => {
  test('matches snapshot test ', async () => {
    expect(render(<Contact />)).toMatchSnapshot()
  })

  describe('test states of the form', () => {
    test('submit button is not disabled', () => {
      render(<Contact />)

      const submitButton = screen.getByTestId('submit-button')
      expect(submitButton).not.toHaveAttribute('disabled')

      sendEmail.mockImplementation(() => 'failed')
    })

    test('Attempting to submit while inputs are invalid raises a text error ', async () => {
      render(<Contact />)

      const submitButton = screen.getByTestId('submit-button')
      fireEvent.click(submitButton)

      await waitFor(() => {
        expect(
          screen.queryByText(
            'Invalid input. Please check all fields have been filled before submitting. Thank you.'
          )
        ).not.toBeNull()
      })
    })

    test('An error message is shown if the request fails to send ', async () => {
      sendEmail.mockImplementation(() => 'failed')
      render(<Contact />)

      const emailInput = screen.getByTestId('email-input')
      const nameInput = screen.getByTestId('name-input')
      const phoneInput = screen.getByTestId('phone-input')
      const timeInput = screen.getByTestId('time-input')
      const dateInput = screen.getByTestId('date-input')
      const messageInput = screen.getByTestId('message-input')
      const submitButton = screen.getByTestId('submit-button')

      fireEvent.change(emailInput, { target: { value: 'John@doe.com' } })
      fireEvent.change(nameInput, { target: { value: 'John Doe' } })
      fireEvent.change(phoneInput, { target: { value: '06482658234' } })

      fireEvent.change(timeInput, { target: { value: '12:00' } })
      fireEvent.change(dateInput, {
        target: { value: '2030-01-01' }
      })
      fireEvent.change(messageInput, {
        target: { value: 'Additional information' }
      })

      expect(emailInput.value).toBe('John@doe.com')
      expect(phoneInput.value).toBe('06482658234')
      expect(nameInput.value).toBe('John Doe')
      fireEvent.click(submitButton)
      expect(timeInput.value).toBe('12:00')
      expect(dateInput.value).toBe('2030-01-01')
      expect(messageInput.value).toBe('Additional information')

      await waitFor(() => {
        expect(
          screen.queryByText(
            'Apologies for the inconvenience, but it seems there was an issue sending your inquiry. Please try again or contact us directly on 01472356704'
          )
        ).not.toBeNull()
      })
    })

    test('A success message is shown if the request succeeds and the button is disabled', async () => {
      sendEmail.mockImplementation(() => 'sent')
      render(<Contact />)

      const emailInput = screen.getByTestId('email-input')
      const nameInput = screen.getByTestId('name-input')
      const phoneInput = screen.getByTestId('phone-input')
      const timeInput = screen.getByTestId('time-input')
      const dateInput = screen.getByTestId('date-input')
      const messageInput = screen.getByTestId('message-input')
      const submitButton = screen.getByTestId('submit-button')

      fireEvent.change(emailInput, { target: { value: 'John@doe.com' } })
      fireEvent.change(nameInput, { target: { value: 'John Doe' } })
      fireEvent.change(phoneInput, { target: { value: '06482658234' } })

      fireEvent.change(timeInput, { target: { value: '12:00' } })
      fireEvent.change(dateInput, {
        target: { value: '2030-01-01' }
      })
      fireEvent.change(messageInput, {
        target: { value: 'Additional information' }
      })

      expect(emailInput.value).toBe('John@doe.com')
      expect(phoneInput.value).toBe('06482658234')
      expect(nameInput.value).toBe('John Doe')
      fireEvent.click(submitButton)
      expect(timeInput.value).toBe('12:00')
      expect(dateInput.value).toBe('2030-01-01')
      expect(messageInput.value).toBe('Additional information')

      await waitFor(() => {
        expect(
          screen.queryByText(
            'Thank you for your inquiry. We have received it and will reach out to you shortly to confirm the reservation.'
          )
        ).not.toBeNull()
        expect(submitButton).toBeDisabled()
      })
    })
  })
})
