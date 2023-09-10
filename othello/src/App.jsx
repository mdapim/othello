/* eslint-disable */
import React, { Suspense, useEffect } from 'react'
import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from './pages/Main/Main'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import OurMenu from './pages/Our Menu/OurMenu'
import PrivateBookings from './pages/Private Bookings/PrivateBookings'
import NavBarS from './pages/Main/components/NavBarS/NavBarS'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 })
  })
  return (
    // <div className="w-screen h-screen bg-stone-700">
    <BrowserRouter>
      <Suspense fallback={<div>"Loading...."</div>}>
        <NavBarS />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/OurMenu" element={<OurMenu />} />
          <Route path="/PrivateBookings" element={<PrivateBookings />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
    // </div>
  )
}

export default App
