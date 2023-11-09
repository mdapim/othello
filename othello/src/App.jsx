import React, { Suspense, useEffect } from 'react'
import './App.css'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import Main from './pages/Main/Main'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import OurMenu from './pages/Our Menu/OurMenu'
import PrivateBookings from './pages/Private Bookings/PrivateBookings'
import NavBarS from './pages/Main/components/NavBarS/NavBarS'
import 'aos/dist/aos.css'

function App() {
  console.log(process.env.REACT_APP_AWS_REGION)
  useEffect(() => {
    AOS.init({ duration: 1200 })
  })
  return (
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
  )
}

export default App
