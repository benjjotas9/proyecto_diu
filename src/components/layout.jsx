import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from '../pages/home_page'
import NavBar from '../components/nav_bar'
import Calendario from '../pages/calendario';
import ResumenAcademico from '../pages/resumen_academico';
import Placeholder from '../pages/placeholder';


const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.title = "Aula USM";
  }, []);


  // Alternar el tema
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <BrowserRouter>
      <div className={`layout ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <NavBar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <div className='layout__page'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/calendario' element = {<Calendario />} />
            <Route path='/resumen_academico' element = {<ResumenAcademico />} />
            <Route path='/placeholder' element = {<Placeholder />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default Layout
