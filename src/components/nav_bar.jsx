import React from 'react'
import { NavLink } from 'react-router-dom'
import usmLogo from '../assets/usm.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

export const NavBar = ({ toggleDarkMode, darkMode }) => {
  const navLinkClass = ({ isActive }) => {
    const classes = ['nav-bar__link']
    if (isActive) classes.push('nav-bar__link--active')
    return classes.join(' ')
  };


  return (
    <nav className="nav-bar">
      <div className="nav-bar__logo">
        <NavLink to="/">
        <img src={usmLogo} alt="Universidad Técnica Federico Santa María" />
        </NavLink>
      </div>
      <div className="nav-bar__links">
        <NavLink className={navLinkClass} to="/">Página Principal</NavLink>
        <NavLink className={navLinkClass} to="/resumen_academico">Resumen Academico</NavLink>
        <NavLink className={navLinkClass} to="/calendario">Calendario</NavLink>
      </div>
      {/* Botón de modo oscuro */}
      <div className="nav-bar__toggle">
        <FontAwesomeIcon
          icon={darkMode ? faSun : faMoon}
          onClick={toggleDarkMode}
          className="theme-icon"
          style={{ cursor: 'pointer', fontSize: '1.5rem', color: darkMode ? '#FFD700' : '#333' }}  // Color y tamaño del icono
        />
      </div>
    </nav>
  );
};
 
export default NavBar
