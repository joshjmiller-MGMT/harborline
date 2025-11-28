const services = [
    {
        title: 'Corporate Events',
        image: '/corporate.png',
        description: 'Elevate your brand with sophisticated entertainment solutions.'
    },
    {
        title: 'Weddings',
        image: '/weddings.png',
        description: 'Create unforgettable moments with our curated wedding bands.'
    },
    {
        title: 'Headliners',
        image: '/bands.png',
        description: 'Book top-tier talent for festivals and private concerts.'
    }
];

const Services = () => {
    return (
        <section id="services" style={{ padding: '8rem 0', backgroundColor: '#000' }}>
            <div className="container">
                <h2 className="section-title">Our Expertise</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                }}>
                    {services.map((service, index) => (
                        <div key={index} style={{ position: 'relative', cursor: 'pointer' }}>
                            <div style={{
                                height: '400px',
                                overflow: 'hidden',
                                borderRadius: '8px',
                                position: 'relative',
                            }}>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease',
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    padding: '2rem',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
                                }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{service.title}</h3>
                                    <p style={{ color: '#d4d4d8', fontSize: '0.9rem' }}>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
