import logo from '../assets/SeekMigrationLogo.png';
import './About.css';

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Success-Driven',
    desc: '98% visa approval rate backed by deep expertise and thorough case preparation.',
    color: '#1a6fd4',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Client-First',
    desc: 'Your goals are our mission. We offer personalised strategies, not cookie-cutter solutions.',
    color: '#7c3aed',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
    title: 'Confidential',
    desc: 'Your personal details and case information are handled with absolute discretion.',
    color: '#059669',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: 'Fast & Efficient',
    desc: 'We cut through the bureaucracy so you spend less time waiting and more time planning.',
    color: '#d97706',
  },
];

const team = [
  {
    name: 'Priya Sharma',
    role: 'Lead Migration Agent',
    exp: '12 yrs exp',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    name: 'Rahul Verma',
    role: 'Skilled Worker Specialist',
    exp: '9 yrs exp',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    name: 'Anjali Singh',
    role: 'Student Visa Advisor',
    exp: '7 yrs exp',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
];

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a6fd4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const TrophyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="8 21 12 17 16 21"/>
    <line x1="12" y1="17" x2="12" y2="11"/>
    <path d="M7 4H17v4a5 5 0 01-10 0V4z"/>
    <path d="M5 4H3v2a4 4 0 004 4M19 4h2v2a4 4 0 01-4 4"/>
  </svg>
);

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);

const About = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="about">
      <div className="about__bg">
        <div className="about__glow about__glow--left" />
        <div className="about__glow about__glow--right" />
      </div>

      <div className="about__container">
        {/* Split */}
        <div className="about__split">
          <div className="about__text">
            <span className="about__eyebrow">Who We Are</span>
            <h2 className="about__title">
              We've Helped <span className="about__title-accent">5,000+ Families</span>
              <br />Find Their New Home
            </h2>
            <p className="about__body">
              SeekMigration is a registered immigration consultancy with over 15 years of experience
              helping individuals and families navigate complex visa processes. Our team of
              certified migration agents has a proven track record across Australia, Canada,
              the UK, USA, and beyond.
            </p>
            <p className="about__body">
              We believe every person deserves a chance at a better life. That's why we combine
              legal expertise with genuine human care — because immigration is not just paperwork,
              it's people's futures.
            </p>
            <div className="about__certs">
              <div className="about__cert"><span className="about__cert-icon"><CheckIcon /></span><span>MARA Registered Agents</span></div>
              <div className="about__cert"><span className="about__cert-icon"><CheckIcon /></span><span>RCIC Certified (Canada)</span></div>
              <div className="about__cert"><span className="about__cert-icon"><CheckIcon /></span><span>OISC Regulated (UK)</span></div>
            </div>
            <button className="about__btn" onClick={() => scrollTo('contact')}>
              Talk to an Expert
            </button>
          </div>

          <div className="about__visual">
            <div className="about__visual-card">
              <div className="about__visual-shine" />
              <div className="about__visual-globe">
                <img src={logo} alt="SeekMigration" className="about__visual-logo" />
              </div>
              <h3>Globally Recognised</h3>
              <p>Licensed to operate across multiple jurisdictions with globally certified consultants.</p>
              <div className="about__visual-stats">
                <div><strong>15+</strong><span>Years Active</span></div>
                <div><strong>50+</strong><span>Countries</span></div>
                <div><strong>98%</strong><span>Success</span></div>
              </div>
            </div>
            <div className="about__badge-float about__badge-float--1">
              <TrophyIcon /> Award-Winning Service
            </div>
            <div className="about__badge-float about__badge-float--2">
              <span className="about__star-row"><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></span> 4.9 / 5 Rating
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="about__values">
          {values.map((v) => (
            <div className="about__value-card" key={v.title}>
              <div className="about__value-icon" style={{ color: v.color }}>{v.icon}</div>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="about__team">
          <h3 className="about__team-title">Meet Our Experts</h3>
          <div className="about__team-grid">
            {team.map((m) => (
              <div className="about__team-card" key={m.name}>
                <div className="about__team-avatar">{m.icon}</div>
                <h4>{m.name}</h4>
                <p className="about__team-role">{m.role}</p>
                <span className="about__team-exp">{m.exp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
