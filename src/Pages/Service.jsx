import { Link } from 'react-router-dom';
import './Service.css';

/* ── Icons ── */
const StudentIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
);
const VisitorIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21.5 2l-8 8M13 2h8v8M10 13l-8 8M2 13v8h8"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);
const BusinessIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
);
const FamilyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
  </svg>
);
const PRIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1a6fd4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);
const ShieldIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>
);
const FixedFeeIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M8 21h8M12 17v4"/>
    <path d="M9 9h6M9 12h4"/>
  </svg>
);
const AgentIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
    <path d="M8 11l2 2 4-4"/>
  </svg>
);
const GlobeIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);
const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const services = [
  {
    Icon: StudentIcon,
    title: 'Student Visa',
    desc: 'Expert guidance for study permits at top universities in Canada, Australia, UK, USA and more.',
    points: ['University shortlisting', 'SOP & document prep', 'Visa filing & interview prep', 'Post-landing support'],
    color: '#1a6fd4',
  },
  {
    Icon: VisitorIcon,
    title: 'Visitor Visa',
    desc: 'Hassle-free tourist and visitor visa processing for individuals, couples and families.',
    points: ['Travel history review', 'Financial documentation', 'Cover letter drafting', 'Fast-track processing'],
    color: '#1a6fd4',
  },
  {
    Icon: BusinessIcon,
    title: 'Business Immigration',
    desc: 'Investor and entrepreneur visa solutions to help you expand your business internationally.',
    points: ['Investor visa filing', 'Entrepreneur permits', 'Business plan review', 'Intra-company transfers'],
    color: '#1a6fd4',
  },
  {
    Icon: FamilyIcon,
    title: 'Family Sponsorship',
    desc: 'Reunite with your loved ones through spouse, dependent and family reunification visas.',
    points: ['Spousal sponsorship', 'Dependent child visas', 'Parent & grandparent PR', 'Relationship documentation'],
    color: '#1a6fd4',
  },
  {
    Icon: PRIcon,
    title: 'Permanent Residency',
    desc: 'Complete PR and citizenship application support for Canada, Australia, New Zealand and more.',
    points: ['Express Entry / SkillSelect', 'Points calculation & profile', 'PR application filing', 'Citizenship guidance'],
    color: '#1a6fd4',
  },
];

const whyUs = [
  { Icon: ShieldIcon, title: 'Licensed & Registered', desc: 'Licensed and regulated immigration consultants you can trust.' },
  { Icon: FixedFeeIcon, title: 'Fixed Fees, No Surprises', desc: 'Transparent pricing with written timelines from day one.' },
  { Icon: AgentIcon, title: 'Dedicated Case Manager', desc: 'One expert handles your file end to end — never a call centre.' },
  { Icon: GlobeIcon, title: '40+ Countries Covered', desc: 'Expert guidance for every major immigration destination worldwide.' },
];

const stats = [
  { number: '5+', label: 'Years of Practice' },
  { number: '1,200+', label: 'Successful Applications' },
  { number: '40+', label: 'Countries Served' },
  { number: '98%', label: 'Approval Rate' },
];

const ServicePage = () => {
  return (
    <div className="sp">

      {/* ── Hero ── */}
      <section className="sp__hero">
        <div className="sp__hero-bg">
          <div className="sp__hero-overlay" />
        </div>
        <div className="sp__hero-content">
          <span className="sp__eyebrow">OUR SERVICES</span>
          <h1 className="sp__hero-title">
            Our Visa Services —<br />Study, Visitor &amp; Tourist Visa
          </h1>
          <p className="sp__hero-sub">
            From student permits to permanent residency — we offer end-to-end
            immigration services across every major category and destination.
          </p>
          <div className="sp__hero-btns">
            <Link to="/contact" className="sp__btn sp__btn--primary">Book Free Consultation →</Link>
            <a href="#sp-services" className="sp__btn sp__btn--outline">Explore Services</a>
          </div>
        </div>

        {/* Stats bar */}
        <div className="sp__stats-bar">
          {stats.map((s) => (
            <div className="sp__stat" key={s.label}>
              <strong>{s.number}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── All Services ── */}
      <section className="sp__services" id="sp-services">
        <div className="sp__container">
          <h2 className="sp__section-title">All Immigration Services</h2>
          <p className="sp__section-sub">Tailored solutions for every stage of your immigration journey</p>

          <div className="sp__cards">
            {services.map((svc) => (
              <div className="sp__card" key={svc.title}>
                <div className="sp__card-icon" style={{ color: svc.color }}>
                  <svc.Icon />
                </div>
                <h3 className="sp__card-title">{svc.title}</h3>
                <p className="sp__card-desc">{svc.desc}</p>
                <ul className="sp__card-list">
                  {svc.points.map((pt) => (
                    <li key={pt}>
                      <CheckIcon />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="sp__card-link">
                  Get Started <ArrowIcon />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="sp__why">
        <div className="sp__container">
          <div className="sp__why-grid">
            {whyUs.map((item) => (
              <div className="sp__why-item" key={item.title}>
                <div className="sp__why-icon"><item.Icon /></div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="sp__cta">
        <div className="sp__container">
          <h2>Not Sure Which Service You Need?</h2>
          <p>Book a free consultation and our experts will guide you to the right pathway.</p>
          <div className="sp__cta-btns">
            <a href="tel:+918699737272" className="sp__btn sp__btn--white">
              <PhoneIcon /> Call Us Now
            </a>
            <Link to="/contact" className="sp__btn sp__btn--dark">
              <MailIcon /> Send Inquiry
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicePage;
