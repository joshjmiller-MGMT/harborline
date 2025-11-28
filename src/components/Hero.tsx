import { Link } from 'react-router-dom';

const Hero = () => {

    return (
        <section className="hero-section">
            <div className="hero-bg" style={{ backgroundImage: 'url(/hero.png)' }} />
            <div className="hero-overlay" />

            <div className="container hero-content">
                <h1 className="hero-title">
                    Entertainment<br />Reimagined
                </h1>
                <p className="hero-subtitle">
                    We bring world-class talent to your most important events. Experience the difference of true professionalism.
                </p>
                <Link to="/contact" className="btn">Request a Quote</Link>
            </div>
        </section>
    );
};

export default Hero;
