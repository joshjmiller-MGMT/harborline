import Hero from '../components/Hero';
import Services from '../components/Services';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { locations } from '../data/locations';

const Home = () => {
    return (
        <>
            <SEO
                title="Harborline | Premier Event Entertainment Agency"
                description="Harborline curates world-class entertainment for exclusive events in Washington DC, Baltimore, and beyond. Book top-tier bands and DJs."
            />
            <Hero />

            {/* Intro Section */}
            <section className="container" style={{ padding: '8rem 0', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#fff', fontWeight: 300 }}>
                    WE ARE <span style={{ fontWeight: 900 }}>HARBORLINE</span>
                </h2>
                <p style={{
                    fontSize: '1.5rem',
                    lineHeight: '1.6',
                    color: '#a1a1aa',
                    maxWidth: '800px',
                    margin: '0 auto 3rem',
                    fontFamily: 'serif',
                    fontStyle: 'italic'
                }}>
                    "We don't just fill a stage. We create the heartbeat of your event."
                </p>
                <div style={{ width: '60px', height: '2px', backgroundColor: '#2563eb', margin: '0 auto' }}></div>
            </section>

            <Services />

            {/* Testimonials */}
            <section style={{ padding: '8rem 0', backgroundColor: '#09090b' }}>
                <div className="container">
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Client Stories</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        {[
                            { quote: "Harborline transformed our gala. The band was electric, and the production was flawless.", author: "Sarah M., Event Planner" },
                            { quote: "I've never seen a dance floor that packed for that long. Truly world-class talent.", author: "James R., Corporate Client" },
                            { quote: "From the first email to the last song, working with them was a dream.", author: "Emily & David, Newlyweds" }
                        ].map((t, i) => (
                            <div key={i} style={{ padding: '2rem', borderLeft: '2px solid #2563eb' }}>
                                <p style={{ fontSize: '1.2rem', color: '#d4d4d8', marginBottom: '1.5rem', fontStyle: 'italic' }}>"{t.quote}"</p>
                                <p style={{ color: '#a1a1aa', fontWeight: 600 }}>— {t.author}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Locations SEO Links */}
            <section style={{ padding: '6rem 0', borderTop: '1px solid #27272a' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '2rem' }}>Serving Major Destinations</h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
                        {locations.map(loc => (
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
        </>
    );
};

export default Home;