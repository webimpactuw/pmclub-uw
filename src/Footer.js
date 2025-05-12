import './App.css';
import logo from './logo.svg';

export function Footer() {
    return (
      <footer className="footer">
        <img src={logo} alt="PM Logo" className="footer-logo" />
        <p>Keep in touch with us to see our upcoming events!</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/pmclubuw/" target="_blank" rel="noreferrer">
            <img src="/instagram.png" alt="Instagram" className="icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img src="/LinkedIn.png" alt="LinkedIn" className="icon" />
          </a>
        </div>
        <p>© 2025 Product Management Club UW</p>
      </footer>
    );
  }
  