
/* Import tools, styles, pages and components*/

import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './style.css'
import Home from './pages/Home/index'
import AboutKasa from './pages/A-propos'
import Rental from './pages/Logement'
import Error from './components/Error'
import Header from './components/Header'
import Footer from './components/Footer'

/*  Component */


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logement/:rentalId" element={<Rental />} />
          <Route path="/a-propos" element={<AboutKasa />} />
          <Route path="/address-not-found" element={<Error />} />
          <Route
            path="*"
            element={<Navigate to="/address-not-found" replace />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App



