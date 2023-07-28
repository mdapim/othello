import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

export default function ListMeal({ title, description, price }) {
  const { t, i18n } = useTranslation('Menu')

  const localeCurrency = {
    en: 'GBP',
    de: 'EUR',
    fr: 'EUR'
  }

  const formatPrice = translatedPrice => {
    const formattedPrice = translatedPrice.replace(/,|\.|h/g, '.')
    return formattedPrice
  }

  return (
    <span className="grid grid-cols-3 gap-0">
      <span className="col-span-2">
        <h1 className="font-bold text-xl"> {title} </h1>
        <p> {description}</p>
      </span>
      <p className="font-bold m-auto col-span-1">
        {t('formatPrice', {
          val: formatPrice(price),
          currency: localeCurrency[i18n.language]
        })}
      </p>
    </span>
  )
}

ListMeal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired
}
