import React from 'react'
import { screen, fireEvent } from '@testing-library/react'
import render from '../../../../utils/testUtils'
import FeaturedCard from './FetauredCard'

const featuredItem = {
  image: 'bac',
  title: 'baklava',
  description:
    'A rich, sweet pastry made with layers of filo, filled with chopped nuts and soaked in a honey syrup, served with fresh fruit and vanilla ice cream.',
  price: '£6.75',
  hiddenNo: 1
}

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}))

describe('Featured Card is clickable and hidden', () => {
  test('Featured card is clickable', async () => {
    render(
      <FeaturedCard
        activeSlide={1}
        key={featuredItem.title}
        image={featuredItem.image}
        title={featuredItem.title}
        description={featuredItem.description}
        hiddenNo={featuredItem.hiddenNo}
      />
    )

    const clickableCard = screen.getByRole('link')
    fireEvent.click(clickableCard)

    expect(mockedUsedNavigate).toBeCalled()
    expect(mockedUsedNavigate).toBeCalledWith('/OurMenu')
  })

  test('Featured Card is not included in tab index when hidden', async () => {
    // this only works with 5 cards
    render(
      <FeaturedCard
        activeSlide={1}
        key={featuredItem.title}
        image={featuredItem.image}
        title={featuredItem.title}
        description={featuredItem.description}
        hiddenNo={featuredItem.hiddenNo}
      />
    )

    const clickableCard = screen.getByRole('link')
    expect(clickableCard).toHaveAttribute('tabIndex', '-1')
  })
})
