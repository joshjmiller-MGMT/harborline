import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const isHome = location.pathname === '/';
    const navbarClass = `navbar ${scrolled || !isHome || isOpen ? 'scrolled' : ''}`;

    const navItems = ['About', 'Services', 'Portfolio'];

    return (
        <nav className={navbarClass}>
            <div className="container nav-container">
                <Link to="/" className="nav-logo">
                    HARBORLINE
                </Link>

                {/* Mobile Toggle */}
                <button 
                    className="mobile-toggle" 
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Desktop Navigation */}
                <div className="nav-desktop">
                    <ul className="nav-links">
                        {navItems.map((item) => (
                            <li key={item}>
                                <Link
                                    to={`/${item.toLowerCase()}`}
                                    className={`nav-link ${location.pathname === `/${item.toLowerCase()}` ? 'active' : ''}`}
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

                {/* Mobile Navigation Overlay */}
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    {navItems.map((item) => (
                        <Link
                            key={item}
                            to={`/${item.toLowerCase()}`}
                            className="mobile-nav-link"
                        >
                            {item.toUpperCase()}
                        </Link>
                    ))}
                    <Link to="/contact" className="btn" style={{ marginTop: '1rem' }}>
                        Book Now
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
