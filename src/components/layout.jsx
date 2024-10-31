import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import NavBar from '../components/nav_bar'
import Calendario from '../pages/calendario';
import ResumenAcademico from '../pages/resumen_academico';


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
            <Route path='/calendario' element = {<Calendario />} />
            <Route path='/resumen_academico' element = {<ResumenAcademico />} />
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
