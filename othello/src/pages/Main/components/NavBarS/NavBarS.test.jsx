import React from 'react'
import { screen } from '@testing-library/react'
import render from '../../../../utils/testUtils'
import NavBarS from './NavBarS'
import i18n from '../../../../i18n'
import NavTranslations from '../../../../../public/locales/en/Navigation.json'

beforeAll(async () => {
  await i18n.init({
    resources: {
      en: {
        Navigation: NavTranslations
      }
    }
  })
})

describe('the main title and logo is present', () => {
  test('Othello logo is displayed and is clickable', async () => {
    await render(<NavBarS />)

    const logoIcon = screen.getByTestId('othello-logo')
    const logoContainer = screen.getByTestId('logo-container')
    expect(logoIcon).toBeInTheDocument()
    expect(logoIcon.alt).toContain('Othello Linked Logo')
    expect(logoContainer).toHaveAttribute('href', `/`)
  })

  test('Title is displayed', async () => {
    await render(<NavBarS />)

    const navBarTitle = screen.getByRole('heading')
    expect(navBarTitle).toBeInTheDocument()
  })

  test('Navigation options', async () => {
    const tabs = {
      Othello: '',
      Home: '',
      About: 'About',
      'Our Menu': 'OurMenu',
      Contact: 'Contact',
      'Private Bookings': 'PrivateBookings'
    }
    await render(<NavBarS />)
    const name = screen.getAllByRole('link')

    Object.entries(tabs).forEach(([key, value], i) => {
      expect(name[i]).toHaveTextContent(key)
      expect(name[i]).toHaveAttribute('href', `/${value}`)
    })
  })
})
