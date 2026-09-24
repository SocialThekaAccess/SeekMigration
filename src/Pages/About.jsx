import { Link } from 'react-router-dom';
import './About.css';

/* ── Icons ── */
const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a6fd4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const TrophyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="8 21 12 17 16 21"/>
    <line x1="12" y1="17" x2="12" y2="11"/>
    <path d="M7 4H17v4a5 5 0 01-10 0V4z"/>
    <path d="M5 4H3v2a4 4 0 004 4M19 4h2v2a4 4 0 01-4 4"/>
  </svg>
);
const StarIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="#e6bb52" stroke="#e6bb52" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const UserIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);
const PeopleIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
  </svg>
);
const LockIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0110 0v4"/>
  </svg>
);
const BoltIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);
const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

/* ── Data ── */
const values = [
  { Icon: ClockIcon,  title: 'Success-Driven',  desc: '98% visa approval rate backed by deep expertise and thorough case preparation.', color: '#1a6fd4' },
  { Icon: PeopleIcon, title: 'Client-First',    desc: 'Your goals are our mission. We offer personalised strategies, not cookie-cutter solutions.', color: '#7c3aed' },
  { Icon: LockIcon,   title: 'Confidential',    desc: 'Your personal details and case information are handled with absolute discretion.', color: '#059669' },
  { Icon: BoltIcon,   title: 'Fast & Efficient',desc: 'We cut through the bureaucracy so you spend less time waiting and more time planning.', color: '#d97706' },
];

const team = [
  { name: 'Priya Sharma',  role: 'Lead Migration Agent',      exp: '4 yrs exp' },
  { name: 'Rahul Verma',   role: 'Skilled Worker Specialist',  exp: '3 yrs exp' },
  { name: 'Anjali Singh',  role: 'Student Visa Advisor',       exp: '2 yrs exp' },
];

const milestones = [
  { year: '2019', label: 'Founded',       desc: 'SeekMigration opened its doors in Chandigarh with a small but passionate team.' },
  { year: '2020', label: 'First 100',     desc: 'Reached 100 successful visa approvals within the first year of operation.' },
  { year: '2022', label: '500+ Families', desc: 'Expanded service offerings and helped over 500 families relocate abroad.' },
  { year: '2023', label: 'Award Won',     desc: 'Recognised as a top-rated immigration consultancy in North India.' },
  { year: '2024', label: '1,200+ Cases',  desc: 'Crossed 1,200 successful applications with a 98% approval rate.' },
];

const AboutPage = () => {
  return (
    <div className="ap">

      {/* ── Hero ── */}
      <section className="ap__hero">
        <div className="ap__hero-bg" />
        <div className="ap__hero-content">
          <span className="ap__eyebrow">Who We Are</span>
          <h1 className="ap__hero-title">
            Trusted Immigration Experts<br />
            <span className="ap__hero-accent">Since 2019</span>
          </h1>
          <p className="ap__hero-sub">
            SeekMigration is a registered immigration consultancy built on trust,
            transparency, and a genuine commitment to helping people build better lives abroad.
          </p>
          <div className="ap__hero-btns">
            <Link to="/contact" className="ap__btn ap__btn--primary">Get Free Consultation <ArrowIcon /></Link>
            <a href="#ap-story" className="ap__btn ap__btn--outline">Our Story</a>
          </div>
        </div>
      </section>

      {/* ── Quick Stats ── */}
      <div className="ap__stats-strip">
        {[
          { n: '5+',    l: 'Years Experience' },
          { n: '1,200+', l: 'Visas Approved' },
          { n: '40+',   l: 'Countries Covered' },
          { n: '98%',   l: 'Success Rate' },
        ].map((s) => (
          <div className="ap__stat" key={s.l}>
            <strong>{s.n}</strong>
            <span>{s.l}</span>
          </div>
        ))}
      </div>

      {/* ── Mission / Bento Section (replaces old story split) ── */}
      <section className="ap__mission" id="ap-story">
        <div className="ap__container">
          <div className="ap__mission-bento">

            {/* Big headline tile */}
            <div className="ap__bento ap__bento--headline">
              <span className="ap__bento-tag">Our Mission</span>
              <h2>
                Making Immigration<br />
                <span className="ap__bento-gold">Simple, Honest,</span><br />
                Life-Changing
              </h2>
              <p>
                Since 2019, we've been the bridge between your dreams and a new life abroad
                combining legal expertise with genuine human care.
              </p>
              <Link to="/contact" className="ap__btn ap__btn--primary">
                Start Your Journey <ArrowIcon />
              </Link>
            </div>

            {/* Founding story tile */}
            <div className="ap__bento ap__bento--story">
              <span className="ap__bento-year">EST. 2019</span>
              <h3>Born in Chandigarh</h3>
              <p>
                We started as a two-person team with one belief that immigration
                shouldn't be confusing or exploitative. Five years later, we've helped
                1,200+ families across 40+ countries.
              </p>
            </div>

            {/* Stat tile 1 */}
            <div className="ap__bento ap__bento--stat ap__bento--stat-1">
              <strong>98%</strong>
              <span>Approval Rate</span>
              <p>Across all visa categories</p>
            </div>

            {/* Stat tile 2 */}
            <div className="ap__bento ap__bento--stat ap__bento--stat-2">
              <strong>1,200+</strong>
              <span>Families Helped</span>
              <p>And counting every year</p>
            </div>

            {/* Certifications tile */}
            <div className="ap__bento ap__bento--certs">
              <h4>Certified &amp; Regulated</h4>
              <div className="ap__bento-cert-list">
                {['MARA Registered Agents', 'RCIC Certified (Canada)', 'OISC Regulated (UK)'].map((c) => (
                  <div className="ap__bento-cert" key={c}>
                    <span className="ap__bento-cert-dot" />
                    {c}
                  </div>
                ))}
              </div>
            </div>

            {/* Countries tile */}
            <div className="ap__bento ap__bento--countries">
              <strong>40+</strong>
              <span>Countries</span>
              <div className="ap__bento-flags">
                {['🇦🇺', '🇨🇦', '🇬🇧', '🇺🇸', '🇳🇿', '🇩🇪', '🇫🇷', '🇸🇬'].map((f) => (
                  <span key={f}>{f}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="ap__values">
        <div className="ap__container">
          <div className="ap__section-head">
            <span className="ap__label">What Drives Us</span>
            <h2>Our Core Values</h2>
          </div>
          <div className="ap__values-grid">
            {values.map((v) => (
              <div className="ap__value-card" key={v.title}>
                <div className="ap__value-icon" style={{ color: v.color, background: `${v.color}14` }}>
                  <v.Icon />
                </div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="ap__timeline">
        <div className="ap__container">
          <div className="ap__section-head">
            <span className="ap__label">Our Journey</span>
            <h2>5 Years of Impact</h2>
          </div>
          <div className="ap__timeline-list">
            {milestones.map((m, i) => (
              <div className={`ap__milestone ${i % 2 === 0 ? 'ap__milestone--left' : 'ap__milestone--right'}`} key={m.year}>
                <div className="ap__milestone-dot" />
                <div className="ap__milestone-card">
                  <span className="ap__milestone-year">{m.year}</span>
                  <h4>{m.label}</h4>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="ap__team">
        <div className="ap__container">
          <div className="ap__section-head">
            <span className="ap__label">The People Behind It</span>
            <h2>Meet Our Experts</h2>
          </div>
          <div className="ap__team-grid">
            {team.map((m) => (
              <div className="ap__team-card" key={m.name}>
                <div className="ap__team-avatar"><UserIcon /></div>
                <h4>{m.name}</h4>
                <p className="ap__team-role">{m.role}</p>
                <span className="ap__team-exp">{m.exp}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="ap__cta">
        <div className="ap__container">
          <h2>Ready to Start Your Migration Journey?</h2>
          <p>Talk to one of our certified advisors — consultation is free.</p>
          <Link to="/contact" className="ap__btn ap__btn--gold">
            Book Free Consultation <ArrowIcon />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
