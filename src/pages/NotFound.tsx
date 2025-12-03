import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

const NotFound = () => {
    return (
        <div className="page-enter" style={{
            height: '100vh',
            width: '100%',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
        }}>
            {/* Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/hero.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'grayscale(100%) brightness(0.3)',
                zIndex: -1
            }}></div>

            <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <FadeIn direction="up">
                    <h1 style={{
                        fontSize: 'clamp(8rem, 20vw, 15rem)',
                        fontWeight: 900,
                        color: 'transparent',
                        WebkitTextStroke: '2px rgba(255,255,255,0.2)',
                        lineHeight: 0.8,
                        marginBottom: '1rem'
                    }}>404</h1>
                </FadeIn>

                <FadeIn direction="up" delay={0.2}>
                    <h2 style={{
                        fontSize: '2rem',
                        color: '#fff',
                        marginBottom: '1.5rem',
                        textTransform: 'uppercase',
                        letterSpacing: '4px'
                    }}>Encore Not Found</h2>
                    <p style={{
                        color: '#d4d4d8',
                        maxWidth: '500px',
                        margin: '0 auto 3rem',
                        fontSize: '1.2rem',
                        lineHeight: '1.6'
                    }}>
                        The page you're looking for seems to have left the stage. Let's get you back to the show.
                    </p>
                </FadeIn>

                <FadeIn direction="up" delay={0.4}>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/" className="btn">Back Home</Link>
                        <Link to="/services" className="btn" style={{ backgroundColor: 'transparent', border: '1px solid white' }}>View Services</Link>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default NotFound;
