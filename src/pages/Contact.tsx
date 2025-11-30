import { useState } from 'react';
import SEO from '../components/SEO';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        eventType: 'corporate',
        date: '',
        budget: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="contact-page page-enter">
            <SEO
                title="Contact Us | Book Harborline Entertainment"
                description="Ready to elevate your event? Get in touch with Harborline to discuss your entertainment needs and get a custom quote."
                canonical="/contact"
            />
            <div className="container">
                <div className="contact-grid">
                    {/* Info Side */}
                    <div>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1, marginBottom: '2rem' }}>Let's Create<br />Magic.</h1>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '4rem' }}>
                            We accept a limited number of commissions each year to ensure every event receives our full attention.
                        </p>

                        <div style={{ marginBottom: '3rem' }}>
                            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>Contact</h4>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>hello@harborline.com</p>
                            <p style={{ color: 'var(--color-text-muted)' }}>+1 (555) 987-6543</p>
                        </div>

                        <div style={{ marginBottom: '3rem' }}>
                            <h4 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '1rem' }}>Headquarters</h4>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>123 Entertainment Blvd</p>
                            <p style={{ color: 'var(--color-text-muted)' }}>Los Angeles, CA 90028</p>
                        </div>

                        <div style={{ padding: '2rem', backgroundColor: 'var(--color-surface)', borderRadius: '4px' }}>
                            <h4 style={{ color: 'var(--color-primary)', fontSize: '1.1rem', marginBottom: '1rem' }}>What happens next?</h4>
                            <ol style={{ listStylePosition: 'inside', color: 'var(--color-text-muted)', lineHeight: '1.8' }}>
                                <li>We review your inquiry within 24 hours.</li>
                                <li>We schedule a discovery call.</li>
                                <li>We send a custom proposal.</li>
                            </ol>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="contact-form-wrapper">
                        <form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                        >
                            <input type="hidden" name="form-name" value="contact" />

                            <div className="form-row">
                                <div>
                                    <label htmlFor="name" className="form-label">NAME</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="form-input"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="form-label">EMAIL</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="form-input"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div>
                                    <label htmlFor="eventType" className="form-label">EVENT TYPE</label>
                                    <select
                                        id="eventType"
                                        name="eventType"
                                        value={formData.eventType}
                                        onChange={handleChange}
                                        className="form-input"
                                    >
                                        <option value="corporate">Corporate Event</option>
                                        <option value="wedding">Wedding</option>
                                        <option value="private">Private Party</option>
                                        <option value="festival">Festival/Concert</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="date" className="form-label">DATE</label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        className="form-input"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="budget" className="form-label">BUDGET RANGE</label>
                                <input
                                    type="text"
                                    id="budget"
                                    name="budget"
                                    placeholder="e.g. $10k - $20k"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="form-input"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="form-label">TELL US MORE</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="form-input"
                                    style={{ resize: 'vertical' }}
                                />
                            </div>

                            <button type="submit" className="btn" style={{ marginTop: '1rem', width: '100%' }}>
                                Send Inquiry
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;