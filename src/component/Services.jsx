import './Services.css';

const services = [
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
        <path d="M16 3.13a4 4 0 010 7.75"/>
        <path d="M21 21v-2a4 4 0 00-3-3.87"/>
      </svg>
    ),
    title: 'Skilled Worker Visa',
    desc: 'Navigate points-based skilled migration programs for Australia, Canada, UK, and more with expert guidance.',
    tags: ['Australia', 'Canada', 'UK'],
    color: '#1a6fd4',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
    title: 'Student Visa',
    desc: 'Study at top universities abroad. We handle your student visa from application to approval, stress-free.',
    tags: ['USA', 'UK', 'Australia'],
    color: '#7c3aed',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    ),
    title: 'Business & Investor Visa',
    desc: 'Expand your business globally. Expert support for entrepreneur, investor, and business innovation visas.',
    tags: ['Canada', 'New Zealand', 'Germany'],
    color: '#0891b2',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Family Sponsorship',
    desc: 'Reunite with your loved ones. We manage spousal, partner, and dependent visa applications end-to-end.',
    tags: ['All Countries'],
    color: '#059669',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Permanent Residency',
    desc: 'Take the final step to call your new country home. We guide you through every PR pathway available.',
    tags: ['Australia', 'Canada', 'NZ'],
    color: '#d97706',
  },
  {
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Refugee & Asylum',
    desc: 'Compassionate, confidential support for protection visa applications and humanitarian pathways.',
    tags: ['Protection Visa'],
    color: '#dc2626',
  },
];

const Services = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="services">
      <div className="services__bg">
        <div className="services__glow" />
      </div>

      <div className="services__container">
        <div className="services__header">
          <span className="services__eyebrow">What We Offer</span>
          <h2 className="services__title">
            Immigration Services
            <span className="services__title-accent"> Tailored for You</span>
          </h2>
          <p className="services__subtitle">
            From first consultation to visa approval — we cover every immigration
            pathway with precision and care.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <div className="services__card" key={service.title} style={{ '--card-color': service.color }}>
              <div className="services__card-glow" />
              <div className="services__card-icon" style={{ color: service.color }}>
                {service.icon}
              </div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-desc">{service.desc}</p>
              <div className="services__card-tags">
                {service.tags.map((tag) => (
                  <span className="services__tag" key={tag}>{tag}</span>
                ))}
              </div>
              <button className="services__card-btn" onClick={() => scrollTo('contact')}>
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="services__cta-block">
          <p>Not sure which visa is right for you?</p>
          <button className="services__cta-btn" onClick={() => scrollTo('contact')}>
            Get a Free Assessment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
