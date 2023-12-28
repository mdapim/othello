import React from 'react'
import { screen, fireEvent, waitFor } from '@testing-library/react'
import render from '../../utils/testUtils'
import OurMenu from './OurMenu'
import i18n from '../../i18n'
import OurMenuTranslations from '../../../public/locales/en/OurMenu.json'
import MenuTranslations from '../../../public/locales/en/Menu.json'

const scrollIntoViewOriginal = window.HTMLElement.prototype.scrollIntoView
const scrollIntoViewMock = jest.fn()

beforeAll(async () => {
  await i18n.init({
    resources: {
      en: {
        OurMenu: OurMenuTranslations,
        Menu: MenuTranslations
      }
    }
  })
})

beforeEach(() => {
  window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock
})

afterEach(async () => {
  window.HTMLElement.prototype.scrollIntoView = scrollIntoViewOriginal
  scrollIntoViewMock.mockClear()
})

const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}))

describe('Test all elements are present', () => {
  test('matches snapshot test ', async () => {
    expect(render(<OurMenu />)).toMatchSnapshot()
  })

  test('scroll to top button works', async () => {
    render(<OurMenu />)

    const backToTopButton = screen.getByTestId('back-to-top-button')

    fireEvent.click(backToTopButton)

    expect(scrollIntoViewMock).toHaveBeenCalledWith({
      behavior: 'smooth'
    })
  })

  describe('Pressing a Menu Button displays the item for that menu', () => {
    test('Our Menu loads with lunch menu', async () => {
      render(<OurMenu />)

      expect(scrollIntoViewMock).not.toHaveBeenCalled()
      expect(
        screen.queryByText('Leeks & Wild Mushroom Tagliatelle')
      ).not.toBeNull()
      expect(screen.queryByText('Brie & Camembert Fritters')).not.toBeNull()
    })

    test('Clicking Dinner displays the items for the dinner menu', async () => {
      render(<OurMenu />)

      expect(screen.queryByText('fish')).toBeNull()
      expect(screen.queryByText('Prawn Provencale')).toBeNull()
      const DinnerButton = screen.getByTestId('Dinner button')

      fireEvent.click(DinnerButton)

      await waitFor(() => {
        expect(scrollIntoViewMock).toHaveBeenCalled()
        expect(screen.queryByText('fish')).not.toBeNull()
        expect(screen.queryByText('Prawn Provencale')).not.toBeNull()
      })
    })

    test('Clicking Dessert displays the items for the dessert menu', async () => {
      render(<OurMenu />)

      expect(screen.queryByText('desserts')).toBeNull()
      expect(screen.queryByText('Baileys Chocolate Mousse')).toBeNull()
      const DessertButton = screen.getByTestId('Desserts button')

      fireEvent.click(DessertButton)

      await waitFor(() => {
        expect(scrollIntoViewMock).toHaveBeenCalled()
        expect(screen.queryByText('desserts')).not.toBeNull()
        expect(screen.queryByText('Baileys Chocolate Mousse')).not.toBeNull()
      })
    })

    test('Clicking Wine displays the items for the Wine  menu', async () => {
      render(<OurMenu />)

      expect(screen.queryByText('red-wine')).toBeNull()
      expect(screen.queryByText('Montagne St Emilion')).toBeNull()
      const WineButton = screen.getByTestId('Wine button')

      fireEvent.click(WineButton)

      await waitFor(() => {
        expect(scrollIntoViewMock).toHaveBeenCalled()
        expect(screen.queryByText('red-wine')).not.toBeNull()
        expect(screen.queryByText('Montagne St Emilion')).not.toBeNull()
      })
    })

    describe('testing special menus', () => {
      test('Clicking New Years Eve shows displays the New years eve menu', async () => {
        render(<OurMenu />)

        expect(screen.queryByText('New Years Eve Menu')).toBeNull()
        const WineButton = screen.getByTestId('New years eve button')

        fireEvent.click(WineButton)

        await waitFor(() => {
          expect(scrollIntoViewMock).toHaveBeenCalled()
          expect(screen.queryByText('New Years Eve Menu')).not.toBeNull()
        })
      })

      test('Clicking valentines day shows displays the valentines day menu', async () => {
        render(<OurMenu />)

        expect(screen.queryByText('Valentines Day Menu')).toBeNull()
        const WineButton = screen.getByTestId('Valentines day button')

        fireEvent.click(WineButton)

        await waitFor(() => {
          expect(scrollIntoViewMock).toHaveBeenCalled()
          expect(screen.queryByText('Valentines Day Menu')).not.toBeNull()
        })
      })

      test('Clicking mothers day shows displays the mothers day menu', async () => {
        render(<OurMenu />)

        expect(screen.queryByText("Mother's Day Menu")).toBeNull()
        const WineButton = screen.getByTestId('Mothers Day button')

        fireEvent.click(WineButton)

        await waitFor(() => {
          expect(scrollIntoViewMock).toHaveBeenCalled()
          expect(screen.queryByText("Mother's Day Menu")).not.toBeNull()
        })
      })

      test('Clicking easter sunday shows displays the easter sunday menu', async () => {
        render(<OurMenu />)

        expect(screen.queryByText('Easter Sunday Menu')).toBeNull()
        const WineButton = screen.getByTestId('Easter sunday button')

        fireEvent.click(WineButton)

        await waitFor(() => {
          expect(scrollIntoViewMock).toHaveBeenCalled()
          expect(screen.queryByText('Easter Sunday Menu')).not.toBeNull()
        })
      })

      test('Clicking Fathers day shows displays the easter Fathers day menu', async () => {
        render(<OurMenu />)

        expect(screen.queryByText("Father's Day Menu")).toBeNull()
        const WineButton = screen.getByTestId('Fathers Day button')

        fireEvent.click(WineButton)

        await waitFor(() => {
          expect(scrollIntoViewMock).toHaveBeenCalled()
          expect(screen.queryByText("Father's Day Menu")).not.toBeNull()
        })
      })

      test('Clicking Christmas shows displays the Christmas menu', async () => {
        render(<OurMenu />)

        expect(screen.queryByText('Christmas Menu')).toBeNull()
        const WineButton = screen.getByTestId('Christmas button')

        fireEvent.click(WineButton)

        await waitFor(() => {
          expect(scrollIntoViewMock).toHaveBeenCalled()
          expect(screen.queryByText('Christmas Menu')).not.toBeNull()
        })
      })
    })
  })
})
