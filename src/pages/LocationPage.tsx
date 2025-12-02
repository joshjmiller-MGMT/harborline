import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import type { LocationData } from '../data/locations';

interface LocationPageProps {
    data: LocationData;
}

const LocationPage = ({ data }: LocationPageProps) => {
    const { city, image, title, intro, venues, specific_services, faq, nearby_cities } = {
        city: data.name,
        image: data.heroImage,
        title: data.title,
        intro: data.content,
        venues: data.venues,
        specific_services: data.specific_services,
        faq: data.faq,
        nearby_cities: data.nearby_cities
    };

    const seoDesc = data.description;

    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Baltimore Music & Entertainment - ${city}`,
        "description": seoDesc,
        "url": `https://harborline.com/locations/${data.slug}`,
        "areaServed": city,
        "image": `https://harborline.com${image}`
    };

    return (
        <div className="page-enter" style={{ backgroundColor: '#050505', minHeight: '100vh' }}>
            <SEO
                title={title}
                description={seoDesc}
                image={image}
                schema={schema}
                canonical={`/locations/${data.slug}`}
            />

            {/* Hero Section */}
            <section className="hero-section" style={{ height: '60vh' }}>
                <div className="hero-bg" style={{ backgroundImage: `url(${image})` }}></div>
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <FadeIn direction="up">
                        <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
                            {city}
                        </h1>
                        <p className="hero-subtitle" style={{ fontSize: '1.5rem', color: '#D4AF37' }}>
                            {data.localVibe}
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                        {/* Intro & Venues */}
                        <FadeIn direction="up">
                            <h2 className="section-title">Why Choose BME in {city}?</h2>
                            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#d4d4d8', marginBottom: '4rem', textAlign: 'center' }}>
                                {intro}
                            </p>
                        </FadeIn>

                        <div className="grid-2" style={{ marginBottom: '6rem', alignItems: 'start' }}>
                            <FadeIn direction="left">
                                <div style={{ backgroundColor: '#0a0a0a', padding: '2rem', borderRadius: '4px', border: '1px solid #27272a' }}>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#D4AF37' }}>Top Venues</h3>
                                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {venues.map((venue, i) => (
                                            <li key={i} style={{ color: '#a1a1aa', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                                <span style={{ color: '#2563eb' }}>•</span> {venue}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeIn>

                            <FadeIn direction="right" delay={0.2}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: '#fff' }}>Local Expertise</h3>
                                    <p style={{ color: '#a1a1aa', lineHeight: '1.7', marginBottom: '2rem' }}>
                                        {specific_services}
                                    </p>
                                    <Link to="/contact" className="btn">Check Availability in {city}</Link>
                                </div>
                            </FadeIn>
                        </div>

                        {/* FAQs */}
                        <div style={{ marginBottom: '6rem' }}>
                            <FadeIn direction="up">
                                <h2 className="section-title" style={{ fontSize: '2rem' }}>Common Questions</h2>
                            </FadeIn>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                {faq.map((item, i) => (
                                    <FadeIn key={i} direction="up" delay={i * 0.1}>
                                        <div style={{ borderBottom: '1px solid #27272a', paddingBottom: '1.5rem' }}>
                                            <h4 style={{ fontSize: '1.2rem', color: '#fff', marginBottom: '0.5rem' }}>{item.question}</h4>
                                            <p style={{ color: '#a1a1aa', lineHeight: '1.6' }}>{item.answer}</p>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>

                        {/* Nearby Cities */}
                        <div style={{ textAlign: 'center', borderTop: '1px solid #27272a', paddingTop: '4rem' }}>
                            <h3 style={{ fontSize: '1.2rem', color: '#a1a1aa', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                Also Serving Nearby Areas
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                                {nearby_cities.map((nearby, i) => (
                                    <Link
                                        key={i}
                                        to={`/locations/${nearby.toLowerCase().replace(' ', '-').replace('.', '')}`}
                                        style={{
                                            color: '#D4AF37',
                                            textDecoration: 'none',
                                            fontSize: '1.1rem',
                                            fontWeight: 600
                                        }}
                                        className="hover:text-white transition-colors"
                                    >
                                        {nearby} {i < nearby_cities.length - 1 && <span style={{ color: '#333', margin: '0 0.5rem' }}>|</span>}
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default LocationPage;
