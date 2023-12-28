import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import render from '../../utils/testUtils'
import PrivateBookings from './PrivateBookings'
import i18n from '../../i18n'
import PrivateTranslations from '../../../public/locales/en/Private.json'

beforeAll(async () => {
  await i18n.init({
    resources: {
      en: {
        Private: PrivateTranslations
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
    expect(render(<PrivateBookings />)).toMatchSnapshot()
  })

  test('testing enquire buttons', async () => {
    render(<PrivateBookings />)

    const EnquireButtons = screen.getAllByRole('button')
    fireEvent.click(EnquireButtons[0])

    expect(mockedUsedNavigate).toBeCalled()
    expect(mockedUsedNavigate).toBeCalledWith('/Contact')
    mockedUsedNavigate.mockClear()

    fireEvent.click(EnquireButtons[1])

    expect(mockedUsedNavigate).toBeCalled()
    expect(mockedUsedNavigate).toBeCalledWith('/Contact')
  })
})
