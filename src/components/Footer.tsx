import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer style={{ backgroundColor: '#09090b', borderTop: '1px solid #27272a', paddingTop: '6rem', paddingBottom: '3rem', color: '#fff' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '6rem' }}>
                    
                    {/* Brand Column */}
                    <div>
                        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 900, letterSpacing: '2px', display: 'block', marginBottom: '1.5rem' }}>
                            HARBORLINE
                        </Link>
                        <p style={{ color: '#a1a1aa', lineHeight: '1.6', marginBottom: '2rem' }}>
                            Curating world-class entertainment for the most exclusive events across the globe. We bring the energy, you keep the memories.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {['instagram', 'facebook', 'linkedin', 'twitter'].map(social => (
                                <a key={social} href={`#${social}`} style={{ 
                                    width: '40px', 
                                    height: '40px', 
                                    borderRadius: '50%', 
                                    border: '1px solid #3f3f46',
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    color: '#a1a1aa',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#3f3f46'; e.currentTarget.style.color = '#a1a1aa'; }}
                                >
                                    <span style={{ fontSize: '0.8rem', textTransform: 'capitalize' }}>{social[0]}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.5rem', color: '#fff' }}>Explore</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {['About', 'Services', 'Portfolio', 'Contact'].map(item => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase()}`} style={{ color: '#a1a1aa', fontSize: '0.95rem' }} className="footer-link">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Locations */}
                    <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.5rem', color: '#fff' }}>Major Markets</h4>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { name: 'New York', slug: 'new-york' },
                                { name: 'Los Angeles', slug: 'los-angeles' },
                                { name: 'Miami', slug: 'miami' },
                                { name: 'Chicago', slug: 'chicago' }
                            ].map(loc => (
                                <li key={loc.slug}>
                                    <Link to={`/locations/${loc.slug}`} style={{ color: '#a1a1aa', fontSize: '0.95rem' }} className="footer-link">
                                        {loc.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '1.5rem', color: '#fff' }}>Stay Updated</h4>
                        <p style={{ color: '#a1a1aa', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                            Join our industry list for insights on event trends and entertainment.
                        </p>
                        <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', gap: '0.5rem' }}>
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                style={{ 
                                    flex: 1, 
                                    padding: '0.75rem', 
                                    backgroundColor: '#18181b', 
                                    border: '1px solid #333', 
                                    borderRadius: '2px', 
                                    color: '#fff',
                                    outline: 'none'
                                }} 
                            />
                            <button type="submit" style={{ 
                                padding: '0.75rem 1.25rem', 
                                backgroundColor: '#fff', 
                                color: '#000', 
                                fontWeight: 600, 
                                borderRadius: '2px',
                                fontSize: '0.8rem'
                            }}>
                                JOIN
                            </button>
                        </form>
                    </div>
                </div>

<<<<<<< HEAD
                <div>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>Contact</h4>
                    <p style={{ color: '#a1a1aa' }}>hello@harborline.com</p>
                    <p style={{ color: '#a1a1aa' }}>+1 (555) 123-4567</p>
                </div>

                <div>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>Locations</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#a1a1aa' }}>
                        <Link to="/locations/washington-dc">Washington D.C.</Link>
                        <Link to="/locations/baltimore">Baltimore</Link>
                        <Link to="/locations/annapolis">Annapolis</Link>
                        <Link to="/locations/bethesda">Bethesda</Link>
                        <Link to="/locations/alexandria">Alexandria</Link>
                        <Link to="/locations/silver-spring">Silver Spring</Link>
                    </div>
                </div>

                <div>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>Social</h4>
                    <div style={{ display: 'flex', gap: '1rem', color: '#a1a1aa' }}>
                        <span>Instagram</span>
                        <span>LinkedIn</span>
                        <span>Twitter</span>
=======
                <div style={{ 
                    borderTop: '1px solid #27272a', 
                    paddingTop: '2rem', 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    flexWrap: 'wrap', 
                    gap: '1rem',
                    color: '#52525b',
                    fontSize: '0.85rem'
                }}>
                    <div>
                        © {new Date().getFullYear()} Harborline Agency. All rights reserved.
                    </div>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
>>>>>>> 44e1892bb7d36c6ffaa2909cf6bc86a31d5440ba
                    </div>
                </div>
            </div>
            <style>{`
                .footer-link:hover {
                    color: #fff !important;
                    padding-left: 5px;
                }
                .footer-link {
                    transition: all 0.3s ease;
                }
            `}</style>
        </footer>
    );
};

export default Footer;