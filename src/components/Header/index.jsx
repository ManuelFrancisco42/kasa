 import React from 'react'
 import { Link, NavLink } from 'react-router-dom'
 import logo from '../../assets/logo.svg'

 const navLinks = [
   { name: 'Accueil', path: '/' },
   { name: 'A Propos', path: '/about' },
 ]

 function Header() {
   return (
     <header className="header">
       <Link to="/">
         <img className="header__logo" src={logo} alt="Kasa" />
       </Link>
       <nav className="header__nav">
         {navLinks.map((link) => (
           <NavLink
             to={link.path}
             key={link.name}
             activeClassName="active-link"
           >
             {link.name}
           </NavLink>
         ))}
       </nav>
     </header>
   )
 }

 export default Header
