import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import ButtonCard from './buttonCard'

export default function ButtonGrid({ setItem }) {
  const { t } = useTranslation('OurMenu')
  const testArr = ['asp.jpeg', 'steak.jpeg', 'bac.jpeg', 'drinks.jpeg']
  return (
    // justify-items-stretch
    <div className="grid grid-cols-2 gap-2">
      {testArr.map((item, index) => (
        <ButtonCard
          title={t(`Buttons.${index}.title`)}
          description={t(`Buttons.${index}.description`)}
          image={item}
          setItem={setItem}
        />
      ))}
    </div>
  )
}

ButtonGrid.propTypes = {
  setItem: PropTypes.func.isRequired
}
