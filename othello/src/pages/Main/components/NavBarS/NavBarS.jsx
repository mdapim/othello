import React, { useState, useEffect } from 'react'
import '../../../../index.css'
import { Link } from 'react-router-dom'
import '../../Main.css'
import { useTranslation } from 'react-i18next'
import AnimatedLink from './AnimatedLink'

export function SelectDropDown() {
  const { i18n, t } = useTranslation()
  return (
    <div>
      <label htmlFor="underlineSelect" className="sr-only">
        Underline select
      </label>
      <select
        id="underlineSelect"
        onChange={e => {
          i18n.changeLanguage(e.target.value)
        }}
        className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-300 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
      >
        <option selected>{t('Navigation:Header.language')}</option>
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="de">Germany</option>
      </select>
    </div>
  )
}

export default function NavBarS() {
  const { t } = useTranslation('Navigation')
  const [hideBar, setHideBar] = useState(true) //eslint-disable-line
  const [changeSize, setChangeSize] = useState(false)
  const linkNames = [
    { name: t('Header.home'), link: '/' },
    { name: t('Header.about'), link: '/About' },
    { name: t('Header.our_menu'), link: '/OurMenu' },
    { name: t('Header.contact'), link: '/Contact' },
    { name: t('Header.private'), link: '/PrivateBookings' }
  ]

  useEffect(() => {
    const fixedNavbar = () => {
      if (window.scrollY >= 150) {
        setChangeSize(true)
      } else if (window.scrollY < 150) {
        setChangeSize(false)
      }
    }
    window.addEventListener('scroll', fixedNavbar, { capture: true })
    return () => {
      window.removeEventListener('scroll', fixedNavbar, true)
    }
  }, [hideBar])

  return (
    <nav className="md:px-2 py-2.5 bg-black fixed w-full z-20 top-0 left-0 border-b border-transparent dark:border-transparent opacity-100">
      <div
        className={`container flex flex-wrap items-center justify-between mx-auto transition-all duration-200${
          changeSize ? ' py-0' : ' py-8'
        }`}
      >
        <Link to="/" class="flex items-center">
          <img
            src={`${process.env.PUBLIC_URL}/Images/otello2.png`}
            className={`relative object-cover overflow-hidden transition-all duration-200${
              changeSize ? ' w-full h-14' : ' w-full h-20'
            }`}
            alt="Flowbite Logo"
          />
          <span className="self-center othello-text-small text-4xl font-semibold whitespace-nowrap dark:text-white">
            Othello
          </span>
        </Link>
        <div className="flex md:order-2 p-4">
          <button
            onClick={() => {
              setHideBar(!hideBar)
            }}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-1 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between  w-full md:flex md:w-auto md:order-2 uppercase${
            hideBar ? ' hidden' : ''
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 rounded-lg sm:bg-black md:flex-row md:space-x-12 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white md:dark:bg-transparent">
            {linkNames.map(({ name, link }) => (
              <li>
                <AnimatedLink
                  name={name}
                  link={link}
                  textCol={name === 'Home' ? 'text-othello' : 'text-gray-400'}
                  toggleHideBar={setHideBar}
                  hideBarState={hideBar}
                />
              </li>
            ))}
          </ul>
          {/* <SelectDropDown /> */}
        </div>
      </div>
    </nav>
  )
}
