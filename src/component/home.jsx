import './home.css';

const stats = [
  { number: '5000+', label: 'Visas Approved' },
  { number: '15+', label: 'Years Experience' },
  { number: '98%', label: 'Success Rate' },
  { number: '50+', label: 'Countries Covered' },
];

const destinations = [
  {
    flag: (
      <svg width="20" height="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <rect width="32" height="32" rx="4" fill="#00008B"/>
        <text x="4" y="22" fontSize="18">🇦🇺</text>
      </svg>
    ),
    country: 'Australia',
  },
  { country: 'Canada' },
  { country: 'United Kingdom' },
  { country: 'United States' },
  { country: 'New Zealand' },
  { country: 'Germany' },
];

/* Individual destination SVG flags as inline components */
const FlagAU = () => (
  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="22" height="16" rx="2" fill="#012169"/>
    <path d="M0 0l11 8L0 16" stroke="#fff" strokeWidth="0.5" fill="none"/>
    <path d="M22 0L11 8 22 16" stroke="#fff" strokeWidth="0.5" fill="none"/>
    <circle cx="16" cy="12" r="1.5" fill="#fff"/>
    <circle cx="19" cy="9" r="1" fill="#fff"/>
    <circle cx="19" cy="13" r="1" fill="#fff"/>
    <circle cx="17" cy="7" r="1" fill="#fff"/>
    <circle cx="14" cy="10" r="0.8" fill="#fff"/>
  </svg>
);
const FlagCA = () => (
  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="6" height="16" rx="0" fill="#D80000"/>
    <rect x="16" width="6" height="16" fill="#D80000"/>
    <rect x="6" width="10" height="16" fill="#fff"/>
    <path d="M11 3l1 2.5h2.5l-2 1.5 1 2.5L11 8l-2.5 1.5 1-2.5-2-1.5H10z" fill="#D80000"/>
  </svg>
);
const FlagUK = () => (
  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="22" height="16" rx="2" fill="#012169"/>
    <path d="M0 0l22 16M22 0L0 16" stroke="#fff" strokeWidth="3"/>
    <path d="M0 0l22 16M22 0L0 16" stroke="#C8102E" strokeWidth="1.5"/>
    <path d="M11 0v16M0 8h22" stroke="#fff" strokeWidth="4"/>
    <path d="M11 0v16M0 8h22" stroke="#C8102E" strokeWidth="2.5"/>
  </svg>
);
const FlagUS = () => (
  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="22" height="16" rx="2" fill="#B22234"/>
    {[0,2,4,6,8,10,12].map(y => <rect key={y} x="0" y={y} width="22" height="1.2" fill="#fff"/>)}
    <rect width="9" height="8" fill="#3C3B6E"/>
  </svg>
);
const FlagNZ = () => (
  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="22" height="16" rx="2" fill="#012169"/>
    <path d="M0 0l11 8L0 16" stroke="#fff" strokeWidth="0.5" fill="none"/>
    <circle cx="16" cy="5" r="1.5" fill="#CC142B"/>
    <circle cx="19" cy="8" r="1.5" fill="#CC142B"/>
    <circle cx="16" cy="11" r="1.5" fill="#CC142B"/>
    <circle cx="13" cy="8" r="1.5" fill="#CC142B"/>
  </svg>
);
const FlagDE = () => (
  <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="22" height="16" rx="2" fill="#FFCE00"/>
    <rect width="22" height="5.3" fill="#000"/>
    <rect y="5.3" width="22" height="5.3" fill="#D00"/>
  </svg>
);

const destinationsData = [
  { Flag: FlagAU, country: 'Australia' },
  { Flag: FlagCA, country: 'Canada' },
  { Flag: FlagUK, country: 'UK' },
  { Flag: FlagUS, country: 'USA' },
  { Flag: FlagNZ, country: 'New Zealand' },
  { Flag: FlagDE, country: 'Germany' },
];

const UserIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

const Home = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="home">
      <div className="home__bg">
        <div className="home__blob home__blob--1" />
        <div className="home__blob home__blob--2" />
        <div className="home__blob home__blob--3" />
        <div className="home__grid" />
      </div>

      <div className="home__container">
        {/* Badge */}
        <div className="home__badge">
          <span className="home__badge-dot" />
          Trusted Immigration Consultants
        </div>

        {/* Headline */}
        <h1 className="home__title">
          Your Dream of a
          <span className="home__title-gradient"> New Life Abroad</span>
          <br />Starts Here
        </h1>

        <p className="home__subtitle">
          SeekMigration guides you through every step of your immigration journey —
          from visa applications to permanent residency, with expert consultants
          who truly care about your future.
        </p>

        {/* CTA Buttons */}
        <div className="home__ctas">
          <button className="home__btn home__btn--primary" onClick={() => scrollTo('contact')}>
            <span>Get Free Consultation</span>
            <ArrowIcon />
          </button>
          <button className="home__btn home__btn--secondary" onClick={() => scrollTo('services')}>
            Explore Services
          </button>
        </div>

        {/* Trust row */}
        <div className="home__trust">
          <div className="home__trust-avatars">
            {[0,1,2,3,4].map((i) => (
              <span key={i} className="home__avatar"><UserIcon /></span>
            ))}
          </div>
          <p className="home__trust-text">
            <strong>5,000+</strong> families successfully migrated
          </p>
        </div>

        {/* Stats */}
        <div className="home__stats">
          {stats.map((s) => (
            <div className="home__stat" key={s.label}>
              <span className="home__stat-number">{s.number}</span>
              <span className="home__stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Destination chips */}
        <div className="home__destinations">
          <p className="home__dest-label">Popular Destinations</p>
          <div className="home__dest-chips">
            {destinationsData.map(({ Flag, country }) => (
              <div className="home__dest-chip" key={country}>
                <Flag />
                <span>{country}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="home__scroll-hint" onClick={() => scrollTo('services')}>
        <div className="home__scroll-mouse">
          <div className="home__scroll-wheel" />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Home;
