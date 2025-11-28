const About = () => {
    return (
        <div style={{ paddingTop: '120px', paddingBottom: '4rem', minHeight: '100vh', backgroundColor: '#000' }}>
            <div className="container">
                <h1 className="section-title">Our Story</h1>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#fff' }}>Redefining Live Entertainment</h2>
                        <p style={{ color: '#d4d4d8', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                            Harborline was founded on a simple premise: that live entertainment should be nothing short of spectacular. We aren't just a booking agency; we are curators of atmosphere, architects of energy, and partners in creating memories that last a lifetime.
                        </p>
                        <p style={{ color: '#d4d4d8', lineHeight: '1.8' }}>
                            With a roster of the world's most talented musicians, performers, and production experts, we bridge the gap between artistic excellence and seamless event execution. Whether it's an intimate wedding or a massive corporate gala, we bring the same level of passion and precision to every stage.
                        </p>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <img
                            src="/hero.png"
                            alt="Concert crowd"
                            style={{ borderRadius: '8px', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5)' }}
                        />
                        <div style={{
                            position: 'absolute',
                            bottom: '-2rem',
                            left: '-2rem',
                            backgroundColor: '#2563eb',
                            padding: '2rem',
                            borderRadius: '8px',
                            maxWidth: '200px'
                        }}>
                            <div style={{ fontSize: '3rem', fontWeight: 900, lineHeight: 1 }}>10+</div>
                            <div style={{ fontSize: '0.9rem', fontWeight: 600, marginTop: '0.5rem' }}>Years of Excellence</div>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '8rem', textAlign: 'center' }}>
                    <h2 className="section-title">Why Choose Harborline?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginTop: '3rem' }}>
                        {[
                            { title: 'Curated Talent', desc: 'Every artist on our roster is vetted for exceptional skill and professionalism.' },
                            { title: 'Seamless Production', desc: 'We handle the technical details so you can focus on enjoying the event.' },
                            { title: 'Tailored Experiences', desc: 'No two events are alike. We customize every performance to your vision.' }
                        ].map((item, i) => (
                            <div key={i} style={{ padding: '2rem', backgroundColor: '#18181b', borderRadius: '8px' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#2563eb' }}>{item.title}</h3>
                                <p style={{ color: '#a1a1aa' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
