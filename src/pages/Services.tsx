import { Link } from 'react-router-dom';

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
        <div className="page-enter" style={{ paddingTop: '120px', paddingBottom: '4rem', minHeight: '100vh', backgroundColor: '#000' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                    <h1 className="section-title">Our Services</h1>
                    <p style={{ color: '#a1a1aa', maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
                        Bespoke entertainment solutions for every occasion.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
                    {services.map((service, index) => (
                        <div key={index} className={`service-row ${index % 2 === 0 ? 'normal' : 'reverse'}`}>
                            {/* Image Side */}
                            <div className="service-img" style={{ 
                                position: 'relative'
                            }}>
                                <div style={{ 
                                    position: 'absolute', 
                                    top: '20px', 
                                    [index % 2 === 0 ? 'right' : 'left']: '20px', 
                                    width: '100%', 
                                    height: '100%', 
                                    border: '1px solid #333', 
                                    zIndex: 0 
                                }}></div>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    style={{ 
                                        position: 'relative',
                                        zIndex: 1,
                                        borderRadius: '2px', 
                                        width: '100%', 
                                        height: '500px', 
                                        objectFit: 'cover',
                                        filter: 'grayscale(100%)' // Stylistic choice
                                    }}
                                />
                            </div>

                            {/* Content Side */}
                            <div className="service-content">
                                <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#fff', lineHeight: 1 }}>{service.title}</h2>
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
            </div>
        </div>
    );
};

export default Services;