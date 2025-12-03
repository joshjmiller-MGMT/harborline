import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';

const About = () => {
    return (
        <div className="page-enter" style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
            <SEO
                title="About Us | Baltimore Music & Entertainment"
                description="We are a collective of industry-leading musicians and event professionals dedicated to elevating your event experience."
                canonical="/about"
            />

            {/* Hero Section */}
            <section className="hero-section" style={{ height: '60vh', minHeight: '400px' }}>
                <div className="hero-bg" style={{ backgroundImage: 'url(/sax.png)' }}></div>
                <div className="hero-overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), #050505)' }}></div>
                <div className="container hero-content">
                    <FadeIn direction="up">
                        <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '0.5rem' }}>
                            Our Story
                        </h1>
                        <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: '#D4AF37', fontWeight: 600 }}>
                            A Collective of Industry-Leading Musicians
                        </p>
                    </FadeIn>
                </div>
            </section>

            <div className="container" style={{ paddingTop: '4rem' }}>
                <FadeIn direction="up">
                    <div style={{ maxWidth: '800px', margin: '0 auto 6rem', textAlign: 'center' }}>
                        <p style={{ fontSize: '1.5rem', color: '#a1a1aa', lineHeight: '1.6' }}>
                            We are a team of musicians, producers, and creatives dedicated to the art of celebration.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid-2" style={{ marginBottom: '8rem' }}>
                    <FadeIn direction="left">
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#fff', fontWeight: 300 }}>The Standard for <span style={{ fontWeight: 700, color: '#2563eb' }}>Luxury Entertainment</span></h2>
                            <p style={{ color: '#d4d4d8', lineHeight: '1.8', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                                Baltimore Music & Entertainment isn't just a booking agency; we are the region's premier curator of atmosphere. We understand that entertainment is the heartbeat of any event, and we refuse to compromise on quality. Our mission is simple: to provide an experience that is as flawless as it is unforgettable.
                            </p>
                            <p style={{ color: '#d4d4d8', lineHeight: '1.8', fontSize: '1.1rem' }}>
                                With an exclusive roster of the Mid-Atlantic's most accomplished musicians and production experts, we bridge the gap between artistic excellence and seamless event execution. From intimate diplomatic dinners to large-scale corporate galas, we bring a level of sophistication and energy that is unmatched in the industry.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn direction="right" delay={0.2}>
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
                    </FadeIn>
                </div>

                <div style={{ marginBottom: '8rem' }}>
                    <FadeIn direction="up">
                        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Why Choose BME?</h2>
                    </FadeIn>
                    <div className="grid-3">                        {[
                        { title: 'Elite Talent Roster', desc: 'We represent only the top 1% of musicians in the region. Every artist is vetted for exceptional skill, style, and unwavering professionalism.' },
                        { title: 'Flawless Production', desc: 'We handle every technical detail—from concert-grade sound to intelligent lighting—ensuring a seamless experience for you and your guests.' },
                        { title: 'Bespoke Curation', desc: 'Your event is unique. We customize every setlist, lineup, and performance to align perfectly with your vision and brand identity.' }
                    ].map((item, i) => (
                        <FadeIn key={i} delay={i * 0.1} direction="up">
                            <div style={{
                                padding: '3rem 2rem',
                                backgroundColor: '#09090b',
                                borderRadius: '4px',
                                borderTop: '4px solid #2563eb',
                                height: '100%'
                            }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#fff' }}>{item.title}</h3>
                                <p style={{ color: '#a1a1aa', lineHeight: '1.7' }}>{item.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                    </div>
                </div>

                {/* Team/Values Section (Conceptual) */}
                <FadeIn direction="up">
                    <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#fff' }}>Our Philosophy</h2>
                        <p style={{ color: '#d4d4d8', fontSize: '1.2rem', lineHeight: '1.8', fontStyle: 'italic' }}>
                            "Music is the language of emotion. We speak it fluently, ensuring every note strikes a chord with your guests."
                        </p>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default About;