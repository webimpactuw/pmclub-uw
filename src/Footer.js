import './App.css';
import logo from './logo.svg';

export function Footer() {
    return (
      <footer className="footer">
        <img src="/logo.svg" alt="PM Logo" className="footer-logo" />
        <p>Keep in touch with us to see our upcoming events!</p>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src="/instagram.svg" alt="Instagram" className="icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img src="/linkedin.svg" alt="LinkedIn" className="icon" />
          </a>
        </div>
        <p>© 2025 Product Management Club UW</p>
      </footer>
    );
  }
  