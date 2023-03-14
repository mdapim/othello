import logo from "./logo.svg";
import "./App.css";
import "./index.css";
import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import OurMenu from "./pages/Our Menu/OurMenu";
import PrivateBookings from "./pages/Private Bookings/PrivateBookings";
import NavBarS from "./pages/Main/components/NavBarS/NavBarS";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <div className="w-screen h-screen bg-stone-700">
    <BrowserRouter>
      <div className="w-96">
        <NavBarS />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/OurMenu" element={<OurMenu />} />
          <Route path="/PrivateBookings" element={<PrivateBookings />} />
        </Routes>
      </div>
    </BrowserRouter>
    // </div>
  );
}

export default App;
