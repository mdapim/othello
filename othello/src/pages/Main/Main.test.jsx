import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import render from '../../utils/testUtils'
import Featured from './components/Featured/Featured'
import Main from './Main'
import i18n from '../../i18n'
import MainTranslations from '../../../public/locales/en/Main.json'
import MenuTranslations from '../../../public/locales/en/Menu.json'

beforeAll(async () => {
  await i18n.init({
    resources: {
      en: {
        Main: MainTranslations,
        Menu: MenuTranslations
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
    expect(render(<Main />)).toMatchSnapshot()
  })

  test('testing with router', async () => {
    render(<Main />)

    const tryNowButton = screen.getByRole('button')
    fireEvent.click(tryNowButton)

    expect(mockedUsedNavigate).toBeCalled()
    expect(mockedUsedNavigate).toBeCalledWith('/OurMenu')
  })

  test('4 Feature Cards are displayed at a time', async () => {
    render(<Featured />)

    const FeatureCard1 = screen.queryByRole('link', {
      name: /Baklava/i
    })
    const FeatureCard2 = screen.queryByRole('link', {
      name: /Sea bass/i
    })
    const FeatureCard3 = screen.queryByRole('link', {
      name: /Sirloin Steak/i
    })
    const FeatureCard4 = screen.queryByRole('link', {
      name: /Garlic King Prawns/i
    })
    const FeaturedCard5 = screen.queryByRole('link', {
      name: /Raspberry Cheesecake/i
    })
    expect(FeatureCard1).toBeInTheDocument()
    expect(FeatureCard2).toBeInTheDocument()
    expect(FeatureCard3).toBeInTheDocument()
    expect(FeatureCard4).toBeInTheDocument()
    expect(FeaturedCard5).not.toBeInTheDocument()
  })
})
