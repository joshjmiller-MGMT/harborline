import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isHome = location.pathname === '/';

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            padding: '1.5rem 0',
            transition: 'background-color 0.3s ease',
            backgroundColor: scrolled || !isHome ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
            backdropFilter: scrolled || !isHome ? 'blur(10px)' : 'none',
            borderBottom: !isHome ? '1px solid #333' : 'none'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '2px', color: 'white' }}>
                    HARBORLINE
                </Link>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    <ul style={{ display: 'flex', gap: '2rem', margin: 0, padding: 0 }}>
                        {['About', 'Services', 'Portfolio'].map((item) => (
                            <li key={item}>
                                <Link
                                    to={`/${item.toLowerCase()}`}
                                    style={{
                                        fontSize: '0.9rem',
                                        fontWeight: 600,
                                        letterSpacing: '1px',
                                        color: location.pathname === `/${item.toLowerCase()}` ? '#2563eb' : 'white'
                                    }}
                                >
                                    {item.toUpperCase()}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link to="/contact" className="btn" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
                        Book Now
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
