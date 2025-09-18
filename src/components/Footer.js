import './Footer.css';
import logo from '../assets/PM_Club_logo_bg_removed.png';
import instagramImage from '../assets/Instagram.png';
import linkedinImage from '../assets/LinkedIn.png';

const Footer = () => {
    return (
      <footer className="footer">
        <img src={logo} alt="PM Logo" className="footer-logo" />
        <p style={{fontSize:"16px"}}>Keep in touch with us to see our upcoming events!</p>
        <div className="social-icons">
          <a href="https://www.instagram.com/pmclubuw/" target="_blank" rel="noreferrer">
            <img src={instagramImage} alt="Instagram" className="icon" />
          </a>
          <a href="https://www.linkedin.com/company/product-management-club-at-uw-seattle" target="_blank" rel="noreferrer">
          <img src={linkedinImage} alt="Linkedin" className="icon" />
          </a>
        </div>
        <p>© 2025 Product Management Club UW</p>
      </footer>
    );
  }

export default Footer;