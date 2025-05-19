import React from 'react';
import './styling/Navbar.css';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';


function Navbar() {
    return (

    
      <nav className="navbar">
        <img src={logo} alt="LogoImg" className="logo" />
        <ul className="nav-links">
          <li><Link to="/">About</Link></li>
          <li><Link to="/#work">Work</Link></li>
          <li><Link to="/#contact">Contact</Link></li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
