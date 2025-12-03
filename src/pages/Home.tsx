import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import { locations } from '../data/locations';

const Home = () => {
    return (
        <div className="page-enter">
            <SEO
                title="Baltimore Music & Entertainment | Premier Event Entertainment in DC & MD"
                description="Baltimore Music & Entertainment provides bespoke live music and entertainment for corporate events, weddings, and private parties in Washington DC, Maryland, and Virginia."
                canonical="/"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "EntertainmentBusiness",
                    "name": "Baltimore Music & Entertainment",
                    "url": "https://harborline.com", // TODO: Update with real domain
                    "logo": "https://harborline.com/logo.png",
                    "image": "https://harborline.com/hero.png",
                    "description": "Premier event entertainment agency serving Washington DC, Maryland, and Virginia. Specializing in wedding bands, corporate entertainment, and private party DJs.",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "123 Harbor East", // Placeholder
                        "addressLocality": "Baltimore",
                        "addressRegion": "MD",
                        "postalCode": "21202",
                        "addressCountry": "US"
                    },
                    "geo": {
                        "@type": "GeoCoordinates",
                        "latitude": 39.2835,
                        "longitude": -76.6006
                    },
                    "areaServed": ["Washington DC", "Maryland", "Virginia", "Baltimore", "Annapolis"],
                    "priceRange": "$$$",
                    "telephone": "+1-555-123-4567", // Placeholder
                    "sameAs": [
                        "https://www.instagram.com/baltimoremusic",
                        "https://www.facebook.com/baltimoremusic"
                    ]
                }}
            />
            <Hero />

            <FadeIn>
                <Services />
            </FadeIn>

            {/* Service SEO Links */}
            <section style={{ padding: '4rem 0', backgroundColor: '#050505', borderTop: '1px solid #27272a' }}>
                <div className="container">
                    <FadeIn direction="up">
                        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                            {[
                                { name: 'Wedding Bands', slug: 'wedding-bands' },
                                { name: 'Corporate Entertainment', slug: 'corporate-entertainment' },
                                { name: 'Private Party DJs', slug: 'private-party-djs' },
                                { name: 'Jazz Ensembles', slug: 'jazz-ensembles' }
                            ].map((service) => (
                                <Link
                                    key={service.slug}
                                    to={`/services/${service.slug}`}
                                    style={{
                                        color: '#a1a1aa',
                                        textDecoration: 'none',
                                        fontSize: '0.9rem',
                                        border: '1px solid #3f3f46',
                                        padding: '0.5rem 1.25rem',
                                        borderRadius: '20px',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.borderColor = '#D4AF37';
                                        e.currentTarget.style.color = '#fff';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.borderColor = '#3f3f46';
                                        e.currentTarget.style.color = '#a1a1aa';
                                    }}
                                >
                                    {service.name}
                                </Link>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* CTA Section */}
            <section style={{ padding: '8rem 0', backgroundColor: '#09090b', textAlign: 'center' }}>
                <div className="container">
                    <FadeIn direction="up">
                        <h2 className="section-title">Ready to Elevate Your Event?</h2>
                        <p style={{ color: '#a1a1aa', maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.2rem' }}>
                            Contact us today to discuss your vision and receive a custom proposal.
                        </p>
                        <Link to="/contact" className="btn">Get in Touch</Link>
                    </FadeIn>
                </div>
            </section>

            {/* Testimonials */}
            <section style={{ padding: '8rem 0', backgroundColor: '#000' }}>
                <div className="container">
                    <FadeIn direction="up">
                        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Client Stories</h2>
                    </FadeIn>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        {[
                            { quote: "BME transformed our gala. The band was electric, and the production was flawless.", author: "Sarah M., Event Planner" },
                            { quote: "I've never seen a dance floor that packed for that long. Truly world-class talent.", author: "James R., Corporate Client" },
                            { quote: "From the first email to the last song, working with them was a dream.", author: "Emily & David, Newlyweds" }
                        ].map((t, i) => (
                            <FadeIn key={i} delay={i * 0.1} direction="up">
                                <div style={{ padding: '2rem', borderLeft: '2px solid #2563eb' }}>
                                    <p style={{ fontSize: '1.2rem', color: '#d4d4d8', marginBottom: '1.5rem', fontStyle: 'italic' }}>"{t.quote}"</p>
                                    <p style={{ color: '#a1a1aa', fontWeight: 600 }}>— {t.author}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Locations SEO Links */}
            <section style={{ padding: '6rem 0', borderTop: '1px solid #27272a' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '2rem' }}>Serving Major Destinations</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
                        {locations.map((loc) => (
                            <Link
                                key={loc.slug}
                                to={`/locations/${loc.slug}`}
                                style={{
                                    color: '#a1a1aa',
                                    textDecoration: 'none',
                                    fontSize: '1rem',
                                    border: '1px solid #3f3f46',
                                    padding: '0.5rem 1.5rem',
                                    borderRadius: '20px',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = '#2563eb';
                                    e.currentTarget.style.color = '#fff';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = '#3f3f46';
                                    e.currentTarget.style.color = '#a1a1aa';
                                }}
                            >
                                {loc.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;