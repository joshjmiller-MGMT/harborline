import { Link } from 'react-router-dom';

const Footer = () => {

    return (
        <footer style={{ padding: '4rem 0', borderTop: '1px solid #333', backgroundColor: '#09090b' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
                <div>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>HARBORLINE</h4>
                    <p style={{ color: '#a1a1aa', maxWidth: '300px' }}>
                        The premier entertainment agency for those who demand excellence.
                    </p>
                </div>

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
                    </div>
                </div>
            </div>
            <div className="container" style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #27272a', textAlign: 'center', color: '#52525b', fontSize: '0.8rem' }}>
                © {new Date().getFullYear()} Harborline Agency. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
