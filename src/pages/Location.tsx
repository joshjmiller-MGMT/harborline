import { useParams, Link } from 'react-router-dom';
import { locations } from '../data/locations';
import { useEffect } from 'react';
import NotFound from './NotFound';

const Location = () => {
    const { city } = useParams();
    const location = locations.find(l => l.slug === city);

    useEffect(() => {
        if (location) {
            document.title = location.title;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute('content', location.description);
            }
        }
    }, [location]);

    if (!location) {
        return <NotFound />;
    }

    return (
        <div className="page-enter" style={{ paddingTop: '120px', paddingBottom: '4rem', minHeight: '100vh', backgroundColor: '#000' }}>
            {/* Hero Section for Location */}
            <div style={{
                position: 'relative',
                height: '70vh', // Increased height
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                marginBottom: '4rem'
            }}>
                 <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${location.heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    zIndex: 0,
                    opacity: 0.6,
                    filter: 'grayscale(100%)' // Black and white for mood
                }} />
                 <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), #000)',
                    zIndex: 1,
                }} />
                
                <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                    <p style={{ color: '#2563eb', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '1rem', fontWeight: 600 }}>Destinations</p>
                    <h1 style={{ fontSize: '5rem', fontWeight: 900, marginBottom: '2rem', textTransform: 'uppercase' }}>{location.name}</h1>
                    <p style={{ fontSize: '1.5rem', color: '#e4e4e7', maxWidth: '800px', margin: '0 auto', fontFamily: 'serif', fontStyle: 'italic' }}>
                        "{location.localVibe}"
                    </p>
                </div>
            </div>

            <div className="container">
                <div className="grid-asym-left" style={{ marginBottom: '6rem' }}>
                    <div>
                        <h2 className="section-title" style={{ textAlign: 'left' }}>World-Class Entertainment in {location.name}</h2>
                        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#d4d4d8', marginBottom: '2rem' }}>
                            {location.content}
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#a1a1aa', marginBottom: '3rem' }}>
                            Harborline brings a fresh perspective to {location.name}'s event scene. We don't just provide music; we curate the entire sonic atmosphere of your event. From the moment guests arrive to the final encore, our team ensures a seamless, high-energy experience.
                        </p>
                        
                        <Link to="/contact" className="btn">Book Talent in {location.name}</Link>
                    </div>

                    <div style={{ backgroundColor: '#18181b', padding: '3rem', borderRadius: '4px', borderTop: '4px solid #2563eb' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#fff' }}>Why Harborline {location.name}?</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div>
                                <h4 style={{ color: '#2563eb', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Local Expertise</h4>
                                <p style={{ color: '#a1a1aa', fontSize: '1rem', lineHeight: '1.6' }}>We know {location.name}'s venues, logistics, and local vibe better than anyone.</p>
                            </div>
                            <div>
                                <h4 style={{ color: '#2563eb', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Curated Rosters</h4>
                                <p style={{ color: '#a1a1aa', fontSize: '1rem', lineHeight: '1.6' }}>Strictly vetted talent. No "average" bands. Only the best.</p>
                            </div>
                            <div>
                                <h4 style={{ color: '#2563eb', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '1.1rem' }}>White-Glove Service</h4>
                                <p style={{ color: '#a1a1aa', fontSize: '1rem', lineHeight: '1.6' }}>Dedicated producers for every event to handle all the details.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Popular Event Types & Venues Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '6rem' }}>
                    <div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#fff' }}>Popular Events</h3>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {location.popularEventTypes?.map(item => (
                                <li key={item} style={{ 
                                    padding: '1.5rem', 
                                    backgroundColor: '#09090b', 
                                    borderLeft: '2px solid #333',
                                    color: '#d4d4d8', 
                                    fontSize: '1.1rem',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderLeftColor = '#2563eb'; e.currentTarget.style.paddingLeft = '2rem'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderLeftColor = '#333'; e.currentTarget.style.paddingLeft = '1.5rem'; }}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#fff' }}>Venues We Love</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                            {location.venues?.map(venue => (
                                <span key={venue} style={{ 
                                    padding: '0.75rem 1.5rem', 
                                    borderRadius: '50px', 
                                    border: '1px solid #3f3f46',
                                    color: '#a1a1aa',
                                    fontSize: '0.95rem'
                                }}>
                                    {venue}
                                </span>
                            ))}
                        </div>
                        
                        <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: '#09090b', borderRadius: '8px' }}>
                             <p style={{ color: '#a1a1aa', fontStyle: 'italic', marginBottom: '1rem' }}>
                                "The Harborline team knows exactly how to work with {location.name}'s unique spaces. A seamless experience."
                             </p>
                             <p style={{ color: '#2563eb', fontWeight: 600 }}>— Event Director, {location.venues?.[0]}</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div style={{ textAlign: 'center', padding: '6rem 0', borderTop: '1px solid #27272a' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#fff' }}>Ready to Elevate Your Event?</h2>
                    <p style={{ fontSize: '1.25rem', color: '#a1a1aa', marginBottom: '3rem' }}>
                        Let's bring the best of {location.name} to your stage.
                    </p>
                    <Link to="/contact" className="btn" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem' }}>Get in Touch</Link>
                </div>
            </div>
        </div>
    );
};

export default Location;
