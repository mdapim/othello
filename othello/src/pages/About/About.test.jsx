import React from 'react'
import render from '../../utils/testUtils'
import About from './About'
import i18n from '../../i18n'
import AboutTranslations from '../../../public/locales/en/About.json'

beforeAll(async () => {
  await i18n.init({
    resources: {
      en: {
        About: AboutTranslations
      }
    }
  })
})

describe('Test all elements are present', () => {
  test('matches snapshot test ', async () => {
    expect(render(<About />)).toMatchSnapshot()
  })
})
