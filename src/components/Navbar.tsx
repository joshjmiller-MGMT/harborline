import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            padding: '1.5rem 0',
            transition: 'background-color 0.3s ease',
            backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '2px' }}>
                    HARBORLINE
                </div>
                <ul style={{ display: 'flex', gap: '2rem' }}>
                    {['HOME', 'ABOUT', 'SERVICES', 'PORTFOLIO', 'CONTACT'].map((item) => (
                        <li key={item}>
                            <a href={`#${item.toLowerCase()}`} style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '1px' }}>
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
