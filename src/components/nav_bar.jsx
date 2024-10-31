import React from 'react'
import { NavLink } from 'react-router-dom'
import usmLogo from '../assets/usm.png';

export const NavBar = () => {
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
    </nav>
  );
};
 
export default NavBar
