import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/SeekMigrationLogo.png';
import './navbar.css';

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.856L.057 23.57a.75.75 0 00.916.916l5.733-1.48A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.715 9.715 0 01-4.953-1.355l-.355-.212-3.681.949.973-3.57-.232-.368A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
  </svg>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* On home page — smooth scroll; on other pages — navigate home first then scroll */
  const handleNav = (id) => {
    setMenuOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="SeekMigration Logo" />
        </Link>

        {/* Desktop Links */}
        <ul className="navbar__links">
          <li>
            <Link to="/services" onClick={() => setMenuOpen(false)}
              className={location.pathname === '/services' ? 'navbar__link--active' : ''}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}
              className={location.pathname === '/about' ? 'navbar__link--active' : ''}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}
              className={location.pathname === '/contact' ? 'navbar__link--active' : ''}>
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <a
          href="https://wa.me/918699737272"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__cta"
        >
          <WhatsAppIcon /> Free Consultation
        </a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link to="/contact" className="navbar__cta" onClick={() => setMenuOpen(false)}>Free Consultation</Link>
      </div>
    </nav>
  );
};

export default Navbar;
