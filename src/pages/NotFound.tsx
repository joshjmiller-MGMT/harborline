import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="page-enter" style={{ 
            height: '100vh', 
            backgroundColor: '#000', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            flexDirection: 'column',
            textAlign: 'center',
            padding: '2rem'
        }}>
            <h1 style={{ 
                fontSize: '8rem', 
                fontWeight: 900, 
                color: '#2563eb', 
                lineHeight: 1,
                marginBottom: '0'
            }}>404</h1>
            <h2 style={{ 
                fontSize: '2rem', 
                color: '#fff', 
                marginBottom: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '2px'
            }}>Page Not Found</h2>
            <p style={{ 
                color: '#a1a1aa', 
                maxWidth: '400px', 
                marginBottom: '3rem',
                fontSize: '1.1rem'
            }}>
                The show must go on, but not here. It looks like this stage is empty.
            </p>
            <Link to="/" className="btn">
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;
