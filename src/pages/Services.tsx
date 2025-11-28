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
        <div style={{ paddingTop: '120px', paddingBottom: '4rem', minHeight: '100vh', backgroundColor: '#000' }}>
            <div className="container">
                <h1 className="section-title">Our Services</h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
                    {services.map((service, index) => (
                        <div key={index} style={{
                            display: 'grid',
                            gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                            gap: '4rem',
                            alignItems: 'center',
                            direction: index % 2 === 1 ? 'rtl' : 'ltr'
                        }}>
                            <div style={{ direction: 'ltr' }}>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    style={{ borderRadius: '8px', width: '100%', height: '400px', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ direction: 'ltr' }}>
                                <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>{service.title}</h2>
                                <p style={{ color: '#d4d4d8', lineHeight: '1.8', marginBottom: '1.5rem' }}>{service.desc}</p>
                                <ul style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    {service.features.map((feature, fIndex) => (
                                        <li key={fIndex} style={{ color: '#a1a1aa', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                            <span style={{ color: '#2563eb' }}>•</span> {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Link to="/contact" className="btn">Book {service.title}</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
