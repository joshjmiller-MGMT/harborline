import { Link } from 'react-router-dom';

const Hero = () => {

    return (
        <section className="hero-section">
            <div className="hero-bg" style={{ backgroundImage: 'url(/hero.png)' }} />
            <div className="hero-overlay" />

            <div className="container hero-content">
                <h1 className="hero-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
                    2026 event on the calendar? <br />
                    <span style={{ color: '#D4AF37' }}>Let’s make it legendary.</span> 🎶✨
                </h1>
                <p className="hero-subtitle" style={{ maxWidth: '800px', fontSize: '1.2rem', lineHeight: '1.8' }}>
                    <strong>Harborline</strong> is Baltimore’s go-to live band for weddings, corporate events, galas, and private parties — bringing the best of the old and the best of the new in one nonstop, feel-good set.
                    <br /><br />
                    From timeless classics to modern hits, we’ll build the vibe, read the room, and keep your dance floor moving all night.
                </p>
                <Link to="/contact" className="btn">Lock In Your Date</Link>
            </div>
        </section>
    );
};

export default Hero;
