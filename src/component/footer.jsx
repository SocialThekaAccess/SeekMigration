import { Link } from 'react-router-dom';
import logo from '../assets/SeekMigrationLogo.png';
import './footer.css';

/* ── Footer link structure — only real pages/anchors ── */
const footerLinks = {
  Services: [
    { label: 'Student Visa',        to: '/services' },
    { label: 'Visitor Visa',        to: '/services' },
    { label: 'Business Immigration',to: '/services' },
    { label: 'Family Sponsorship',  to: '/services' },
    { label: 'Permanent Residency', to: '/services' },
  ],
  Company: [
    { label: 'About Us',   to: '/about'   },
    { label: 'Our Team',   to: '/about'   },
    { label: 'Contact Us', to: '/contact' },
  ],
  Resources: [
    { label: 'Book a Consultation', to: '/contact' },
    { label: 'Our Services',        to: '/services' },
    { label: 'About SeekMigration', to: '/about'    },
  ],
};

/* SVG Social Icons */
const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const MapPinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const socials = [
  { label: 'Facebook',   Icon: FacebookIcon },
  { label: 'Instagram',  Icon: InstagramIcon },
  { label: 'LinkedIn',   Icon: LinkedInIcon },
  { label: 'Twitter/X',  Icon: TwitterIcon },
];

const Footer = () => {
  return (
    <footer className="footer" id="contact">

      {/* ── Top contact strip (matches the image) ── */}
      <div className="footer__topbar">
        <div className="footer__topbar-inner">
          <div className="footer__topbar-item">
            <div className="footer__topbar-icon"><MapPinIcon /></div>
            <div className="footer__topbar-text">
              <span>Sco no. 273 First Floor</span>
              <span>Sector 35D, Chandigarh</span>
            </div>
          </div>
          <div className="footer__topbar-divider" />
          <div className="footer__topbar-item">
            <div className="footer__topbar-icon"><PhoneIcon /></div>
            <a href="tel:+918699737272" className="footer__topbar-link">+91 8699737272</a>
          </div>
          <div className="footer__topbar-divider" />
          <div className="footer__topbar-item">
            <div className="footer__topbar-icon"><MailIcon /></div>
            <a href="mailto:infoseek0001@gmail.com" className="footer__topbar-link">infoseek0001@gmail.com</a>
          </div>
        </div>
      </div>
      {/* Contact CTA Banner */}
      <div className="footer__cta-banner">
        <div className="footer__cta-glow" />
        <div className="footer__cta-content">
          <h2>Ready to Start Your Journey?</h2>
          <p>Book a free consultation with one of our certified migration agents today.</p>
          <div className="footer__cta-actions">
            <a href="tel:+918699737272" className="footer__cta-btn footer__cta-btn--primary">
              <PhoneIcon /> +91 8699737272
            </a>
            <a href="mailto:infoseek0001@gmail.com" className="footer__cta-btn footer__cta-btn--secondary">
              <MailIcon /> infoseek0001@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="footer__inner">
          {/* Brand column */}
          <div className="footer__brand">
            <img src={logo} alt="SeekMigration" className="footer__logo" />
            <p className="footer__tagline">
              Your trusted partner in building a new life abroad. Certified, compassionate, and committed to your success.
            </p>
            <div className="footer__contact-info">
              <span><MapPinIcon /> Sco no. 273 First Floor, Sector 35D, Chandigarh</span>
              <a href="tel:+918699737272"><PhoneIcon /> +91 8699737272</a>
              <a href="mailto:infoseek0001@gmail.com"><MailIcon /> infoseek0001@gmail.com</a>
            </div>
            <div className="footer__socials">
              {socials.map(({ label, Icon }) => (
                <a key={label} href="#" className="footer__social" aria-label={label}>
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div className="footer__col" key={heading}>
              <h4 className="footer__col-heading">{heading}</h4>
              <ul className="footer__col-links">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <p>© {new Date().getFullYear()} SeekMigration. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
