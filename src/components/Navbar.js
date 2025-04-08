import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar" role="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/resources">Resources</Link>
        </li>
        <li>
          <Link to="/calendar">Calendar</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;