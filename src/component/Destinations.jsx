import './Destinations.css';

const destinations = [
  {
    country: 'Canada',
    visas: 'Express Entry, PNP, Study Visa',
    badge: 'Most Popular',
    badgeColor: 'red',
    img: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&q=80',
  },
  {
    country: 'Australia',
    visas: 'Skilled Migration, Student Visa',
    badge: 'Top Rated',
    badgeColor: 'red',
    img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=600&q=80',
  },
  {
    country: 'United Kingdom',
    visas: 'Graduate Route, Student Visa',
    badge: null,
    img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80',
  },
  {
    country: 'United States',
    visas: 'H1B, L1, Student Visa',
    badge: null,
    img: 'https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=600&q=80',
  },
  {
    country: 'New Zealand',
    visas: 'Skilled Migrant, Student Visa',
    badge: null,
    img: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600&q=80',
  },
  {
    country: 'Europe',
    visas: 'Schengen, Study Permits',
    badge: null,
    img: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=600&q=80',
  },
];

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

const Destinations = () => {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="destinations" className="dest">
      <div className="dest__container">
        {/* Header */}
        <div className="dest__header">
          <span className="dest__eyebrow">Global Reach</span>
          <h2 className="dest__title">Immigration Destinations</h2>
          <p className="dest__subtitle">Expert guidance for your dream destination</p>
        </div>

        {/* Grid */}
        <div className="dest__grid">
          {destinations.map((d) => (
            <div className="dest__card" key={d.country}>
              {/* Image */}
              <div className="dest__img-wrap">
                <img src={d.img} alt={d.country} className="dest__img" loading="lazy" />
                {d.badge && (
                  <span className={`dest__badge dest__badge--${d.badgeColor}`}>
                    {d.badge}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="dest__body">
                <h3 className="dest__country">{d.country}</h3>
                <p className="dest__visas">{d.visas}</p>
                <button
                  className="dest__link"
                  onClick={() => scrollTo('contact')}
                >
                  Explore Programs <ArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
