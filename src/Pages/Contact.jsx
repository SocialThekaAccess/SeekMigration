import { useState } from 'react';
import './Contact.css';

/* ── Icons ── */
const PhoneIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);
const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);
const MapPinIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);
const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12 6 12 12 16 14"/>
  </svg>
);
const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.532 5.856L.057 23.57a.75.75 0 00.916.916l5.733-1.48A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.715 9.715 0 01-4.953-1.355l-.355-.212-3.681.949.973-3.57-.232-.368A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
  </svg>
);
const SendIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);
const CheckCircleIcon = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const contactInfo = [
  {
    Icon: PhoneIcon,
    label: 'Phone',
    value: '+91 8699737272',
    href: 'tel:+918699737272',
    color: '#1a6fd4',
  },
  {
    Icon: MailIcon,
    label: 'Email',
    value: 'infoseek0001@gmail.com',
    href: 'mailto:infoseek0001@gmail.com',
    color: '#7c3aed',
  },
  {
    Icon: MapPinIcon,
    label: 'Office',
    value: 'Sco no. 273 First Floor, Sector 35D, Chandigarh',
    href: 'https://maps.google.com/?q=Sector+35D+Chandigarh',
    color: '#059669',
  },
  {
    Icon: ClockIcon,
    label: 'Hours',
    value: 'Mon – Sat: 9:00 AM – 6:00 PM',
    href: null,
    color: '#d97706',
  },
];

const visaTypes = [
  'Student Visa', 'Visitor Visa', 'Business Immigration',
  'Family Sponsorship', 'Permanent Residency', 'Other',
];

const ContactPage = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', visa: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    /* Simulate submission */
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="cp">

      {/* ── Hero ── */}
      <section className="cp__hero">
        <div className="cp__hero-bg" />
        <div className="cp__hero-content">
          <span className="cp__eyebrow">GET IN TOUCH</span>
          <h1 className="cp__hero-title">Contact Us</h1>
          <p className="cp__hero-sub">
            Have questions about your visa? Our certified consultants are ready
            to guide you — reach out and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Info Cards ── */}
      <section className="cp__info-strip">
        <div className="cp__container">
          <div className="cp__info-grid">
            {contactInfo.map((item) => (
              <div className="cp__info-card" key={item.label}>
                <div className="cp__info-icon" style={{ color: item.color, background: `${item.color}14` }}>
                  <item.Icon />
                </div>
                <div>
                  <span className="cp__info-label">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="cp__info-value" target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                      {item.value}
                    </a>
                  ) : (
                    <p className="cp__info-value">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Split ── */}
      <section className="cp__main">
        <div className="cp__container cp__split">

          {/* Form */}
          <div className="cp__form-wrap">
            <h2>Send Us a Message</h2>
            <p className="cp__form-sub">Fill in your details and we'll get back to you within one business day.</p>

            {submitted ? (
              <div className="cp__success">
                <CheckCircleIcon />
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. One of our consultants will contact you within 24 hours.</p>
                <button className="cp__btn cp__btn--primary" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', visa: '', message: '' }); }}>
                  Send Another
                </button>
              </div>
            ) : (
              <form className="cp__form" onSubmit={handleSubmit} noValidate>
                <div className="cp__form-row">
                  <div className="cp__field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="cp__field">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="cp__form-row">
                  <div className="cp__field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="cp__field">
                    <label htmlFor="visa">Visa Type</label>
                    <select id="visa" name="visa" value={form.visa} onChange={handleChange}>
                      <option value="">Select a service…</option>
                      {visaTypes.map((v) => (
                        <option key={v} value={v}>{v}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="cp__field">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your situation and what you need help with…"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="cp__btn cp__btn--primary" disabled={loading}>
                  {loading ? (
                    <span className="cp__spinner" />
                  ) : (
                    <><SendIcon /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Side info */}
          <div className="cp__side">
            {/* WhatsApp quick CTA */}
            <a
              href="https://wa.me/918699737272"
              target="_blank"
              rel="noopener noreferrer"
              className="cp__whatsapp"
            >
              <WhatsAppIcon />
              <div>
                <strong>Chat on WhatsApp</strong>
                <span>Get an instant reply from our team</span>
              </div>
            </a>

            {/* Map embed placeholder */}
            <div className="cp__map">
              <iframe
                title="SeekMigration Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.8!2d76.78!3d30.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQzJzQ4LjAiTiA3NsKwNDYnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="260"
                style={{ border: 0, borderRadius: '14px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <p className="cp__map-caption">
                <MapPinIcon /> Sco no. 273 First Floor, Sector 35D, Chandigarh
              </p>
            </div>

            {/* FAQs */}
            <div className="cp__faqs">
              <h4>Quick FAQs</h4>
              {[
                { q: 'How long does a consultation take?', a: 'Our initial consultation is 30–45 minutes, completely free.' },
                { q: 'Do you charge upfront fees?', a: 'No surprise charges. All fees are clearly discussed before we begin.' },
                { q: 'How quickly can I get my visa?', a: "Timelines vary by visa type and country — we'll give you an honest estimate." },
              ].map((faq) => (
                <details className="cp__faq" key={faq.q}>
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default ContactPage;
