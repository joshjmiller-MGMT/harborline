import { Link } from 'react-router-dom';

interface LocationPageProps {
    city: string;
    image: string;
    title: string;
    intro: string;
    venues: string[];
}

const LocationPage = ({ city, image, title, intro, venues }: LocationPageProps) => {
    return (
        <div style={{ backgroundColor: '#000', minHeight: '100vh' }}>
            {/* Hero Section */}
            <section style={{
                height: '60vh',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                }} />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.5)',
                    zIndex: 1,
                }} />
                <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', // Responsive font size
                        fontWeight: 900,
                        marginBottom: '1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '-1px',
                        lineHeight: 1.1
                    }}>
                        {title}
                    </h1>
                    <p style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#e4e4e7' }}>
                        Premier Entertainment in {city}
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section style={{ padding: '5rem 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 className="section-title">Why Choose Harborline in {city}?</h2>
                        <p style={{
                            fontSize: '1.1rem',
                            lineHeight: '1.8',
                            color: '#d4d4d8',
                            marginBottom: '3rem',
                            textAlign: 'center'
                        }}>
                            {intro}
                        </p>

                        <div style={{
                            backgroundColor: '#18181b',
                            padding: '2rem',
                            borderRadius: '8px',
                            border: '1px solid #27272a'
                        }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#2563eb', textAlign: 'center' }}>
                                Serving Top Venues
                            </h3>
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '1rem',
                                justifyContent: 'center'
                            }}>
                                {venues.map((venue, index) => (
                                    <span key={index} style={{
                                        padding: '0.5rem 1rem',
                                        backgroundColor: '#000',
                                        borderRadius: '20px',
                                        fontSize: '0.9rem',
                                        color: '#a1a1aa',
                                        border: '1px solid #333'
                                    }}>
                                        {venue}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Ready to Book?</h3>
                            <Link to="/contact" className="btn">
                                Get a Quote for {city}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LocationPage;
