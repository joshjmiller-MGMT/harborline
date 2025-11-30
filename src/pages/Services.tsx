import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Services = () => {
    const services = [
        {
            title: 'Corporate Events',
            image: '/corporate.png',
            desc: 'From annual galas to product launches, we provide entertainment that aligns with your brand identity. Jazz trios for cocktail hours, high-energy party bands for the after-party, and everything in between.',
            features: ['Brand-aligned performances', 'Walk-on/Walk-off music', 'Full AV production support']
        },
        {
            title: 'Weddings',
            image: '/weddings.png',
            desc: 'Your special day deserves a soundtrack to match. We work closely with couples to curate a musical journey from the ceremony to the last dance.',
            features: ['Ceremony strings', 'Cocktail hour jazz', 'High-energy reception bands']
        },
        {
            title: 'Headliners & Concerts',
            image: '/bands.png',
            desc: 'Looking for a name act? We have direct access to touring artists and headliners suitable for festivals, private concerts, and large-scale events.',
            features: ['Talent buying', 'Rider fulfillment', 'Logistics management']
        }
    ];

    return (
        <div className="page-enter" style={{ paddingTop: '120px', paddingBottom: '4rem', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
            <SEO
                title="Our Services | Corporate, Wedding & Private Events"
                description="From high-energy dance bands to sophisticated jazz quartets, explore our range of entertainment services for any occasion."
                canonical="/services"
            />
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <h1 className="section-title">Our Services</h1>
                    <p style={{ color: '#a1a1aa', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
                        Bespoke entertainment solutions for every occasion.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
                    {services.map((service, index) => (
                        <div key={index} className={`sp-row ${index % 2 === 0 ? 'normal' : 'reverse'}`}>
                            {/* Image Side */}
                            <div className="sp-img-container">
                                <div className="sp-border" style={{
                                    left: index % 2 === 0 ? '15px' : '-15px',
                                    right: index % 2 === 0 ? 'auto' : 'auto'
                                }}></div>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    style={{
                                        position: 'relative',
                                        zIndex: 1,
                                        borderRadius: '2px',
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        filter: 'grayscale(100%)',
                                        transition: 'filter 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                                    onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(100%)'}
                                />
                            </div>

                            {/* Content Side */}
                            <div className="sp-text-content">
                                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', color: '#fff', lineHeight: 1.1 }}>{service.title}</h2>
                                <p style={{ color: '#d4d4d8', lineHeight: '1.8', marginBottom: '2rem', fontSize: '1.1rem' }}>{service.desc}</p>
                                <ul style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {service.features.map((feature, fIndex) => (
                                        <li key={fIndex} style={{ color: '#a1a1aa', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1rem' }}>
                                            <span style={{ color: '#2563eb', fontSize: '1.5rem', lineHeight: 0 }}>•</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="btn">Inquire Now</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </div >
    );
};

export default Services;