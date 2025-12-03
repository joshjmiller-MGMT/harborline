import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';
import type { ServiceData } from '../data/services';

interface ServicePageProps {
    data: ServiceData;
}

const ServicePage = ({ data }: ServicePageProps) => {
    const { title, subtitle, description, heroImage, content, features, faq } = data;

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": title,
        "description": description,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Baltimore Music & Entertainment"
        },
        "areaServed": ["Washington DC", "Maryland", "Virginia"]
    };

    return (
        <div className="page-enter" style={{ backgroundColor: '#050505', minHeight: '100vh' }}>
            <SEO
                title={`${title} | Baltimore Music & Entertainment`}
                description={description}
                image={heroImage}
                schema={schema}
                canonical={`/services/${data.slug}`}
            />

            {/* Hero Section */}
            <section className="hero-section" style={{ height: '50vh', minHeight: '400px' }}>
                <div className="hero-bg" style={{ backgroundImage: `url(${heroImage})` }}></div>
                <div className="hero-overlay" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), #050505)' }}></div>
                <div className="container hero-content">
                    <FadeIn direction="up">
                        <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '0.5rem' }}>
                            {title}
                        </h1>
                        <p className="hero-subtitle" style={{ fontSize: '1.25rem', color: '#D4AF37', fontWeight: 600 }}>
                            {subtitle}
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Main Content */}
            <section style={{ padding: '3rem 0' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                        {/* Intro */}
                        <FadeIn direction="up">
                            <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: '#d4d4d8', marginBottom: '4rem', textAlign: 'center' }}>
                                {content}
                            </p>
                        </FadeIn>

                        {/* Features Grid */}
                        <div style={{ marginBottom: '4rem' }}>
                            <FadeIn direction="up">
                                <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>What We Offer</h2>
                            </FadeIn>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                {features.map((feature, i) => (
                                    <FadeIn key={i} delay={i * 0.1} direction="up">
                                        <div style={{
                                            backgroundColor: '#0a0a0a',
                                            padding: '1.5rem',
                                            borderRadius: '4px',
                                            border: '1px solid #27272a',
                                            textAlign: 'center'
                                        }}>
                                            <span style={{ color: '#D4AF37', fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem' }}>✦</span>
                                            <span style={{ color: '#e4e4e7', fontWeight: 500 }}>{feature}</span>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div style={{ marginBottom: '4rem' }}>
                            <FadeIn direction="up">
                                <h2 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Client Love</h2>
                            </FadeIn>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                                {data.testimonials.map((t, i) => (
                                    <FadeIn key={i} delay={i * 0.1} direction="up">
                                        <div style={{
                                            backgroundColor: '#0a0a0a',
                                            padding: '2rem',
                                            borderRadius: '4px',
                                            border: '1px solid #27272a',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between'
                                        }}>
                                            <p style={{ color: '#d4d4d8', fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.6' }}>"{t.quote}"</p>
                                            <div>
                                                <div style={{ color: '#fff', fontWeight: 600 }}>{t.author}</div>
                                                <div style={{ color: '#a1a1aa', fontSize: '0.9rem' }}>{t.role}</div>
                                            </div>
                                        </div>
                                    </FadeIn>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <FadeIn direction="up">
                            <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                                <Link to="/contact" className="btn">Book {title}</Link>
                            </div>
                        </FadeIn>

                        {/* FAQs */}
                        <div style={{ marginBottom: '4rem' }}>
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

                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicePage;
