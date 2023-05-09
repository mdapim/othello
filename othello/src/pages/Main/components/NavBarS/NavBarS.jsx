import '../../../../index.css';
import { Link } from 'react-router-dom';
import '../../Main.css';
import AnimatedLink from './AnimatedLink';
import { useState, useEffect } from 'react';

export default function NavBarS() {
  const [hideBar, setHideBar] = useState(true);
  const [changeSize, setChangeSize] = useState(false);
  const [linkNames, setLinkNames] = useState([
    { name: 'Home', link: '/' },
    { name: 'About', link: '/About' },
    { name: 'Our Menu', link: '/OurMenu' },
    { name: 'Contact', link: 'Contact' },
    { name: 'Private Bookings', link: 'PrivateBookings' },
  ]);

  useEffect(() => {
    const fixedNavbar = () => {
      if (window.scrollY >= 150) {
        setChangeSize(true);
      } else if (window.scrollY < 150) {
        setChangeSize(false);
      }
    };
    window.addEventListener('scroll', fixedNavbar, { capture: true });
    return () => {
      window.removeEventListener('scroll', fixedNavbar, true);
    };
  }, []);

  return (
    <>
      <nav class='bg-white px-2 sm:px-4 py-2.5 dark:bg-black fixed w-full z-20 top-0 left-0 border-b border-transparent dark:border-transparent opacity-95'>
        <div
          class={
            'container flex flex-wrap items-center justify-between mx-auto transition-all duration-200' +
            (changeSize ? ' py-0' : ' py-6')
          }
        >
          <Link to='/' class='flex items-center'>
            <img
              src={process.env.PUBLIC_URL + '/Images/otello2.png'}
              class={
                'relative object-cover overflow-hidden transition-all duration-200' +
                (changeSize ? ' w-full h-14' : ' w-full h-20')
              }
              alt='Flowbite Logo'
            />
            <span class='self-center othello-text-small text-4xl font-semibold whitespace-nowrap dark:text-white'>
              Othello
            </span>
          </Link>
          <div class='flex md:order-2'>
            <button
              onClick={() => {
                setHideBar(!hideBar);
              }}
              data-collapse-toggle='navbar-sticky'
              type='button'
              class='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
              aria-controls='navbar-sticky'
              aria-expanded='false'
            >
              <span class='sr-only'>Open main menu</span>
              <svg
                class='w-6 h-6'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clip-rule='evenodd'
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={
              'items-center justify-between  w-full md:flex md:w-auto md:order-2 uppercase' +
              (hideBar ? ' hidden' : '')
            }
            id='navbar-sticky'
          >
            <ul class='flex pacifico flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-12 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700'>
              {linkNames.map(({ name, link }) => {
                return (
                  <li>
                    <AnimatedLink
                      name={name}
                      link={link}
                      textCol={
                        name === 'Home' ? 'text-othello' : 'text-gray-400'
                      }
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
