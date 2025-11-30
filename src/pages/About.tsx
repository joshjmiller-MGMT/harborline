import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About = () => {
    return (
        <div className="page-enter" style={{ paddingTop: '120px', paddingBottom: '4rem', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
            <SEO
                title="About Us | Harborline Entertainment"
                description="We are a collective of industry-leading musicians and event professionals dedicated to elevating your event experience."
                canonical="/about"
            />
            <div className="container">
                <div style={{ maxWidth: '800px', margin: '0 auto 6rem', textAlign: 'center' }}>
                    <h1 className="section-title">Our Story</h1>
                    <p style={{ fontSize: '1.5rem', color: '#a1a1aa', lineHeight: '1.6' }}>
                        We are a team of musicians, producers, and creatives dedicated to the art of celebration.
                    </p>
                </div>

                <div className="grid-2" style={{ marginBottom: '8rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#fff', fontWeight: 300 }}>Redefining <span style={{ fontWeight: 700, color: '#2563eb' }}>Live Entertainment</span></h2>
                        <p style={{ color: '#d4d4d8', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            Harborline was founded on a simple premise: that live entertainment should be nothing short of spectacular. We aren't just a booking agency; we are curators of atmosphere, architects of energy, and partners in creating memories that last a lifetime.
                        </p>
                        <p style={{ color: '#d4d4d8', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            With a roster of the world's most talented musicians, performers, and production experts, we bridge the gap between artistic excellence and seamless event execution. Whether it's an intimate wedding or a massive corporate gala, we bring the same level of passion and precision to every stage.
                        </p>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            right: '-20px',
                            bottom: '-20px',
                            border: '2px solid #2563eb',
                            zIndex: 0
                        }}></div>
                        <img
                            src="/hero.png"
                            alt="Concert crowd"
                            style={{
                                position: 'relative',
                                borderRadius: '4px',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                                zIndex: 1,
                                width: '100%',
                                filter: 'grayscale(100%) contrast(1.1)'
                            }}
                        />
                    </div>
                </div>

                <div style={{ marginBottom: '8rem' }}>
                    <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Why Choose Harborline?</h2>
                    <div className="grid-3">                        {[
                        { title: 'Curated Talent', desc: 'Every artist on our roster is vetted for exceptional skill, style, and professionalism. We don\'t settle for "good enough".' },
                        { title: 'Seamless Production', desc: 'We handle the technical details—sound, lighting, staging—so you can focus on enjoying the event with your guests.' },
                        { title: 'Tailored Experiences', desc: 'No two events are alike. We customize every setlist, lineup, and performance to match your specific vision.' }
                    ].map((item, i) => (
                        <div key={i} style={{
                            padding: '3rem 2rem',
                            backgroundColor: '#09090b',
                            borderRadius: '4px',
                            borderTop: '4px solid #2563eb'
                        }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#fff' }}>{item.title}</h3>
                            <p style={{ color: '#a1a1aa', lineHeight: '1.7' }}>{item.desc}</p>
                        </div>
                    ))}
                    </div>
                </div>

                {/* Team/Values Section (Conceptual) */}
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#fff' }}>Our Philosophy</h2>
                    <p style={{ color: '#d4d4d8', fontSize: '1.2rem', lineHeight: '1.8', fontStyle: 'italic' }}>
                        "Music is the language of emotion. We speak it fluently, ensuring every note strikes a chord with your guests."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;