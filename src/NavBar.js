import './App.css';
import logo from './logo.svg';
import instagramImage from '../assets/Resources_Instagram.png';
import linkedinImage from '../assets/linkedin.png';

export function NavBar() {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="PM Logo" className="logo" />
        </div>
        <ul className="navbar-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Calendar</a></li>
          <li><a href="#">Resources</a></li>
        </ul>
        <div className="navbar-right">
          <a href="https://www.instagram.com/pmclubuw/" target="_blank" rel="noreferrer">
          <img src={instagramImage} alt="Instagram" className="icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img src={linkedinImage} alt="LinkedIn" className="icon" />
          </a>
        </div>
      </nav>
    );
  }
  