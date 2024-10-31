import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import NavBar from '../components/nav_bar'

const Layout = () => {
  useEffect(() => {
    document.title = "Aula USM";
  }, []);
  return (
    <BrowserRouter>
      <div className='layout'>
        <NavBar />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
