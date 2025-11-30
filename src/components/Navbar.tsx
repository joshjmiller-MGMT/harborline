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
<<<<<<< HEAD
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            padding: '1.5rem 0',
            transition: 'background-color 0.3s ease',
            backgroundColor: scrolled || !isHome || isOpen ? 'rgba(0, 0, 0, 0.9)' : 'transparent',
            backdropFilter: scrolled || !isHome || isOpen ? 'blur(10px)' : 'none',
            borderBottom: !isHome && !isOpen ? '1px solid #333' : 'none'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" onClick={closeMenu} style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '2px', color: 'white', zIndex: 1002 }}>
                    HARBORLINE
                </Link>

                {/* Desktop Nav */}
                <div className="nav-links">
                    <ul style={{ display: 'flex', gap: '2rem', margin: 0, padding: 0 }}>
                        {['About', 'Services', 'Portfolio'].map((item) => (
=======
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
>>>>>>> 44e1892bb7d36c6ffaa2909cf6bc86a31d5440ba
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

<<<<<<< HEAD
                {/* Mobile Toggle */}
                <button className="mobile-menu-btn" onClick={toggleMenu}>
                    {isOpen ? '✕' : '☰'}
                </button>

                {/* Mobile Menu Overlay */}
                <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            onClick={closeMenu}
                            style={{
                                fontSize: '2rem',
                                fontWeight: 700,
                                color: 'white'
                            }}
                        >
                            {item}
                        </Link>
                    ))}
=======
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
>>>>>>> 44e1892bb7d36c6ffaa2909cf6bc86a31d5440ba
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
