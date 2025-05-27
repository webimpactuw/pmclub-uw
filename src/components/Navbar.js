import React from 'react';
import './Navbar.css';
import logo from '../assets/PM_Club_logo_bg_removed.png';
import instagramImage from '../assets/Instagram.png';
import linkedinImage from '../assets/LinkedIn.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-left">
        <img src={logo} alt="PM Logo" className="logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/pmclub-uw/">Home</Link></li>
        <li><Link to="/pmclub-uw/about">About</Link></li>
        <li><Link to="/pmclub-uw/calendar">Calendar</Link></li>
        <li><Link to="/pmclub-uw/resources">Resources</Link></li>
      </ul>
      <div className="navbar-right">
        <a href="https://www.instagram.com/pmclubuw/" target="_blank" rel="noreferrer">
          <img src={instagramImage} alt="Instagram" className="icon" />
        </a>
        <a href="https://www.linkedin.com/company/product-management-club-at-uw-seattle" target="_blank" rel="noreferrer">
          <img src={linkedinImage} alt="LinkedIn" className="icon" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
