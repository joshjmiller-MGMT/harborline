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
        <section id="services" className="services-section">
            <div className="container">
                <h2 className="section-title">World-Class Entertainment</h2>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <img
                                src={service.image}
                                alt={service.title}
                                className="service-image"
                            />
                            <div className="service-content">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-desc">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
