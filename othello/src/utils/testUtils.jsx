import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render as testRender } from '@testing-library/react'
import PropTypes from 'prop-types'

// jest.mock('react-i18next', () => ({
//   // this mock makes sure any components using the translate hook can use it without a warning being shown
//   useTranslation: () => ({
//     t: str => str,
//     i18n: {
//       changeLanguage: () => new Promise(() => {})
//     }
//   }),
//   initReactI18next: {
//     type: '3rdParty',
//     init: () => {}
//   }
// }))

function Wrapper({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>
}

export default function render(component, options = {}) {
  return testRender(component, {
    wrapper: Wrapper,
    ...options
  })
}

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
