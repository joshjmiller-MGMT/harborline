import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import FadeIn from '../components/FadeIn';

const Success = () => {
    return (
        <div className="page-enter" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: '100px' }}>
             <SEO
                title="Message Received | Harborline"
                description="Thank you for contacting Harborline."
                canonical="/success"
            />
            <FadeIn>
                <div className="container">
                    <CheckCircle size={64} color="#D4AF37" style={{ margin: '0 auto 2rem' }} />
                    <h1 className="section-title">Message Received</h1>
                    <p style={{ color: '#a1a1aa', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                        Thanks for reaching out! We've received your inquiry and will get back to you shortly to discuss your event.
                    </p>
                    <Link to="/" className="btn">Back to Home</Link>
                </div>
            </FadeIn>
        </div>
    );
};

export default Success;
