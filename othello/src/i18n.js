import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import BackEnd from 'i18next-http-backend'

i18n
  .use(LanguageDetector)
  .use(BackEnd)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: 'en',
    debug: true,
    interpolation: { escapeValue: false },
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    }
  })

export default i18n
