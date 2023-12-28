import React from 'react'
import { screen } from '@testing-library/react'
import render from '../../utils/testUtils'
import Footer from './Footer'
import i18n from '../../i18n'
import NavTranslations from '../../../public/locales/en/Navigation.json'

beforeAll(async () => {
  await i18n.init({
    resources: {
      en: {
        Navigation: NavTranslations
      }
    }
  })
})

const FACEBOOK_LINK = 'https://www.facebook.com/othellorestaurantgrimsby/'
const INSTAGRAM_LINK =
  'https://www.instagram.com/othellogrimsby?igsh=MXRnY3Q5NHIwa2F6ZA=='
const EMAIL_LINK = 'mailto:othellogrimsby@gmail.com'

describe('contact information and icons are present', () => {
  test('matches snapshot test with full information and icons', async () => {
    expect(render(<Footer />)).toMatchSnapshot()
  })
  test('icons link to the correct sites', async () => {
    await render(<Footer />)

    const facebookIcon = screen.getByLabelText('facebook')
    expect(facebookIcon).toBeInTheDocument()
    expect(facebookIcon).toHaveAttribute('href', FACEBOOK_LINK)

    const instagramIcon = screen.getByLabelText('instagram')
    expect(instagramIcon).toBeInTheDocument()
    expect(instagramIcon).toHaveAttribute('href', INSTAGRAM_LINK)

    const emailIcon = screen.getByLabelText('mailto')
    expect(emailIcon).toBeInTheDocument()
    expect(emailIcon).toHaveAttribute('href', EMAIL_LINK)
  })

  test('image is rendered with alt text', async () => {
    await render(<Footer />)
    const logoIcon = screen.getByTestId('othello-logo-footer')
    expect(logoIcon).toBeInTheDocument()
    expect(logoIcon.alt).toContain('Othello Logo')
  })
})
