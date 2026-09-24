import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Countries.css';

/* ── Icons ── */
const ArrowIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const StarIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

/* ── Country Data ── */
const countries = [
  {
    flag: '🇨🇦',
    name: 'Canada',
    tagline: 'World\'s top immigration destination',
    highlight: 'Express Entry',
    processingTime: '6–8 months',
    successRate: '96%',
    color: '#D80000',
    bgGradient: 'linear-gradient(135deg, #D8000015, #D8000005)',
    borderColor: '#D80000',
    visaTypes: ['Express Entry (PR)', 'Student Visa', 'Visitor Visa', 'Family Sponsorship', 'Business Visa'],
    requirements: ['Valid passport', 'Language test (IELTS/CELPIP)', 'Education credential assessment', 'Work experience proof', 'Medical & police clearance'],
    whyChoose: ['Points-based transparent system', 'Path to permanent residency', 'Free healthcare & education', 'Multicultural & welcoming society'],
    processingSteps: ['Eligibility check & CRS score', 'Create Express Entry profile', 'Receive Invitation to Apply (ITA)', 'Submit PR application', 'Biometrics & medical exam', 'PR Visa issued'],
    popular: true,
  },
  {
    flag: '🇦🇺',
    name: 'Australia',
    tagline: 'High quality of life & strong economy',
    highlight: 'SkillSelect',
    processingTime: '8–12 months',
    successRate: '94%',
    color: '#00008B',
    bgGradient: 'linear-gradient(135deg, #00008B15, #00008B05)',
    borderColor: '#00008B',
    visaTypes: ['Skilled Independent (189)', 'Employer Sponsored (482)', 'Student Visa (500)', 'Partner Visa', 'Business Innovation Visa'],
    requirements: ['Skills assessment', 'English proficiency (IELTS/PTE)', 'Age under 45', 'Nominated occupation on SOL', 'Health & character check'],
    whyChoose: ['High salaries & living standards', 'Pathway to Australian citizenship', 'Stunning lifestyle & weather', 'World-class education system'],
    processingSteps: ['Skills assessment by authority', 'Submit EOI in SkillSelect', 'State nomination (if required)', 'Receive invitation to apply', 'Lodge visa application', 'Grant & move to Australia'],
    popular: true,
  },
  {
    flag: '🇬🇧',
    name: 'United Kingdom',
    tagline: 'Gateway to Europe & global opportunity',
    highlight: 'Skilled Worker Visa',
    processingTime: '3–8 weeks',
    successRate: '92%',
    color: '#012169',
    bgGradient: 'linear-gradient(135deg, #01216915, #01216905)',
    borderColor: '#012169',
    visaTypes: ['Skilled Worker Visa', 'Student Visa', 'Graduate Route', 'Family Visa', 'Innovator Founder Visa'],
    requirements: ['Job offer from UK employer', 'Certificate of Sponsorship', 'English language proof', 'Salary threshold (£26,200+)', 'Tuberculosis test (if required)'],
    whyChoose: ['Fast processing (3–8 weeks)', 'Route to Indefinite Leave to Remain', 'World\'s top universities', 'Vibrant multicultural cities'],
    processingSteps: ['Secure job offer in UK', 'Employer gets sponsor licence', 'Certificate of Sponsorship issued', 'Apply online for Skilled Worker Visa', 'Biometrics appointment', 'Decision & travel to UK'],
    popular: false,
  },
  {
    flag: '🇺🇸',
    name: 'United States',
    tagline: 'Land of opportunity & innovation',
    highlight: 'H-1B / Student Visa',
    processingTime: '3–12 months',
    successRate: '89%',
    color: '#B22234',
    bgGradient: 'linear-gradient(135deg, #B2223415, #B2223405)',
    borderColor: '#B22234',
    visaTypes: ['H-1B Work Visa', 'F-1 Student Visa', 'B-2 Visitor Visa', 'L-1 Intracompany', 'O-1 Extraordinary Ability'],
    requirements: ['Valid passport', 'DS-160 form', 'Visa interview at US Embassy', 'Financial proof', 'Purpose documentation'],
    whyChoose: ['World\'s largest economy', 'Top universities (MIT, Harvard)', 'Silicon Valley tech jobs', 'Diverse culture & opportunities'],
    processingSteps: ['Determine correct visa category', 'Fill DS-160 application', 'Pay visa fee', 'Schedule embassy interview', 'Attend interview with documents', 'Visa stamp in passport'],
    popular: false,
  },
  {
    flag: '🇳🇿',
    name: 'New Zealand',
    tagline: 'Peaceful, progressive & nature-rich',
    highlight: 'Skilled Migrant',
    processingTime: '4–9 months',
    successRate: '93%',
    color: '#00247D',
    bgGradient: 'linear-gradient(135deg, #00247D15, #00247D05)',
    borderColor: '#00247D',
    visaTypes: ['Skilled Migrant Category (PR)', 'Accredited Employer Work Visa', 'Student Visa', 'Investor Visa', 'Partner Visa'],
    requirements: ['Points-based EOI submission', 'Job offer (preferred)', 'English language proficiency', 'Health & character requirements', 'Recognised qualifications'],
    whyChoose: ['Peaceful & safe environment', 'Stunning natural landscapes', 'Strong work-life balance', 'Pathway to NZ citizenship in 5 yrs'],
    processingSteps: ['Check eligibility & points score', 'Submit Expression of Interest', 'Receive invitation to apply', 'Lodge residency application', 'Medical & police certificates', 'Residence visa granted'],
    popular: false,
  },
  {
    flag: '🇩🇪',
    name: 'Germany',
    tagline: 'Europe\'s economic powerhouse',
    highlight: 'EU Blue Card',
    processingTime: '1–4 months',
    successRate: '91%',
    color: '#000000',
    bgGradient: 'linear-gradient(135deg, #00000012, #00000005)',
    borderColor: '#555',
    visaTypes: ['EU Blue Card', 'Job Seeker Visa', 'Student Visa', 'Self-Employment Visa', 'Family Reunion Visa'],
    requirements: ['Recognised degree or qualification', 'Job offer with min. €45,300 salary', 'German language (A1 for family visa)', 'Health insurance', 'Sufficient finances'],
    whyChoose: ['Free or low-cost university education', 'Strong job market in tech & engineering', 'Permanent residency in 33 months (Blue Card)', 'Central location in Europe'],
    processingSteps: ['Get degree/qualification recognised', 'Find employer or use job seeker visa', 'Apply at German Embassy in India', 'Submit complete document set', 'Attend visa interview', 'Travel & register at local office'],
    popular: false,
  },
];

const filters = ['All Countries', 'Canada', 'Australia', 'United Kingdom', 'United States', 'New Zealand', 'Germany'];

const CountriesPage = () => {
  const [active, setActive] = useState(null); // expanded country
  const [filter, setFilter] = useState('All Countries');

  const displayed = filter === 'All Countries'
    ? countries
    : countries.filter(c => c.name === filter);

  return (
    <div className="cp2">

      {/* ── Hero ── */}
      <section className="cp2__hero">
        <div className="cp2__hero-bg" />
        <div className="cp2__hero-content">
          <span className="cp2__eyebrow">IMMIGRATION DESTINATIONS</span>
          <h1 className="cp2__hero-title">
            Where Do You Want<br />
            <span className="cp2__hero-gold">to Build Your Life?</span>
          </h1>
          <p className="cp2__hero-sub">
            Explore visa options, requirements, and processing timelines for the world's
            most sought-after immigration destinations — all in one place.
          </p>
          <div className="cp2__hero-stats">
            <div><strong>40+</strong><span>Countries</span></div>
            <div><strong>98%</strong><span>Approval Rate</span></div>
            <div><strong>1,200+</strong><span>Families Helped</span></div>
          </div>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <div className="cp2__filters">
        <div className="cp2__filters-inner">
          {filters.map(f => (
            <button
              key={f}
              className={`cp2__filter-btn ${filter === f ? 'cp2__filter-btn--active' : ''}`}
              onClick={() => { setFilter(f); setActive(null); }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ── Countries Grid ── */}
      <section className="cp2__main">
        <div className="cp2__container">
          <div className="cp2__grid">
            {displayed.map((country) => {
              const isOpen = active === country.name;
              return (
                <div
                  key={country.name}
                  className={`cp2__card ${isOpen ? 'cp2__card--open' : ''} ${country.popular ? 'cp2__card--popular' : ''}`}
                  style={{ '--card-border': country.borderColor }}
                >
                  {country.popular && <span className="cp2__popular-badge">⭐ Most Popular</span>}

                  {/* Card Header */}
                  <div className="cp2__card-header">
                    <div className="cp2__card-flag">{country.flag}</div>
                    <div className="cp2__card-meta">
                      <h2>{country.name}</h2>
                      <p>{country.tagline}</p>
                    </div>
                  </div>

                  {/* Quick stats row */}
                  <div className="cp2__card-quick">
                    <div className="cp2__quick-stat">
                      <ClockIcon />
                      <span>{country.processingTime}</span>
                      <small>Processing</small>
                    </div>
                    <div className="cp2__quick-divider" />
                    <div className="cp2__quick-stat">
                      <StarIcon />
                      <span>{country.successRate}</span>
                      <small>Success Rate</small>
                    </div>
                    <div className="cp2__quick-divider" />
                    <div className="cp2__quick-stat">
                      <span className="cp2__highlight-pill" style={{ background: `${country.borderColor}18`, color: country.borderColor }}>
                        {country.highlight}
                      </span>
                      <small>Top Route</small>
                    </div>
                  </div>

                  {/* Visa types */}
                  <div className="cp2__visa-types">
                    <h4>Visa Categories</h4>
                    <div className="cp2__visa-chips">
                      {country.visaTypes.map(v => (
                        <span key={v} className="cp2__visa-chip">{v}</span>
                      ))}
                    </div>
                  </div>

                  {/* Expandable section */}
                  {isOpen && (
                    <div className="cp2__expanded">
                      {/* Requirements */}
                      <div className="cp2__exp-block">
                        <h4>Key Requirements</h4>
                        <ul>
                          {country.requirements.map(r => (
                            <li key={r}><span className="cp2__check"><CheckIcon /></span>{r}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Why choose */}
                      <div className="cp2__exp-block cp2__exp-block--gold">
                        <h4>Why Choose {country.name}?</h4>
                        <ul>
                          {country.whyChoose.map(w => (
                            <li key={w}><span className="cp2__check cp2__check--gold"><CheckIcon /></span>{w}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Step by step */}
                      <div className="cp2__exp-block">
                        <h4>How It Works</h4>
                        <div className="cp2__steps">
                          {country.processingSteps.map((step, i) => (
                            <div className="cp2__step" key={step}>
                              <span className="cp2__step-num">{i + 1}</span>
                              <span>{step}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Card footer */}
                  <div className="cp2__card-footer">
                    <button
                      className="cp2__toggle-btn"
                      onClick={() => setActive(isOpen ? null : country.name)}
                    >
                      {isOpen ? 'Show Less ↑' : 'View Full Details ↓'}
                    </button>
                    <Link to="/contact" className="cp2__cta-btn">
                      Apply Now <ArrowIcon />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cp2__cta">
        <div className="cp2__container">
          <div className="cp2__cta-inner">
            <div>
              <h2>Not Sure Which Country Is Right for You?</h2>
              <p>Our experts assess your profile and recommend the best immigration pathway for your goals.</p>
            </div>
            <div className="cp2__cta-btns">
              <a href="tel:+918699737272" className="cp2__btn cp2__btn--gold">
                <PhoneIcon /> Call Us Now
              </a>
              <Link to="/contact" className="cp2__btn cp2__btn--white">
                Free Assessment <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CountriesPage;
