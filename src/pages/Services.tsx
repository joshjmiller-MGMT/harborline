import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';

const Services = () => {
    const services = [
        {
            title: 'Corporate Events',
            slug: 'corporate-entertainment',
            image: '/corporate.png',
            desc: 'From annual galas to product launches, we provide entertainment that aligns with your brand identity. Jazz trios for cocktail hours, high-energy party bands for the after-party, and everything in between.',
            features: ['Brand-aligned performances', 'Walk-on/Walk-off music', 'Full AV production support']
        },
        {
            title: 'Weddings',
            slug: 'wedding-bands',
            image: '/weddings.png',
            desc: 'Your special day deserves a soundtrack to match. We work closely with couples to curate a musical journey from the ceremony to the last dance.',
            features: ['Ceremony strings', 'Cocktail hour jazz', 'High-energy reception bands']
        },
        {
            title: 'Headliners & Concerts',
            slug: 'private-party-djs', // Mapping to closest relevant page for now, or could be a new one
            image: '/bands.png',
            desc: 'Looking for a name act? We have direct access to touring artists and headliners suitable for festivals, private concerts, and large-scale events.',
            features: ['Talent buying', 'Rider fulfillment', 'Logistics management']
        }
    ];

    return (
        <div className="page-enter" style={{ backgroundColor: 'var(--color-bg)', minHeight: '100vh' }}>
            <SEO
                title="Our Services | Corporate, Wedding & Private Events"
                description="From high-energy dance bands to sophisticated jazz quartets, explore our range of entertainment services for any occasion."
                canonical="/services"
            />

            {/* Hero Section */}
            <section className="hero-section" style={{ height: '60vh', minHeight: '400px' }}>
                <div className="hero-bg" style={{ backgroundImage: 'url(/corporate.png)' }}></div>
                <div className="hero-overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), #050505)' }}></div>
                <div className="container hero-content">
                    <FadeIn direction="up">
                        <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '0.5rem' }}>
                            Our Services
                        </h1>
                        <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: '#D4AF37', fontWeight: 600 }}>
                            Bespoke Entertainment Solutions
                        </p>
                    </FadeIn>
                </div>
            </section>

            <div className="container" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
                    {services.map((service, index) => (
                        <FadeIn key={index} direction={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.1}>
                            <div className={`services-layout__row ${index % 2 === 0 ? 'normal' : 'reverse'}`}>
                                {/* Image Side */}
                                <div className="services-layout__image-col">
                                    <div className="services-layout__border"></div>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="services-layout__img"
                                    />
                                </div>

                                {/* Content Side */}
                                <div className="services-layout__text-col">
                                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', color: '#fff', lineHeight: 1.1 }}>{service.title}</h2>
                                    <p style={{ color: '#d4d4d8', lineHeight: '1.8', marginBottom: '2rem', fontSize: '1.1rem' }}>{service.desc}</p>
                                    <ul style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {service.features.map((feature, fIndex) => (
                                            <li key={fIndex} style={{ color: '#a1a1aa', display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1rem' }}>
                                                <span style={{ color: '#2563eb', fontSize: '1.5rem', lineHeight: 0 }}>•</span> {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <div style={{ display: 'flex', gap: '1rem' }}>
                                        <Link to={`/services/${service.slug}`} className="btn" style={{ backgroundColor: 'transparent', border: '1px solid #fff' }}>Learn More</Link>
                                        <Link to="/contact" className="btn">Inquire Now</Link>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div >
        </div >
    );
};

export default Services;