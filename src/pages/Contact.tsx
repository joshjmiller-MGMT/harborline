import { useState } from 'react';

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

    const inputStyle = {
        padding: '1rem',
        borderRadius: '2px',
        border: '1px solid #333',
        backgroundColor: '#000',
        color: 'white',
        fontSize: '1rem',
        width: '100%',
        outline: 'none',
        transition: 'border-color 0.3s'
    };

    return (
        <div className="page-enter" style={{ paddingTop: '120px', paddingBottom: '4rem', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem' }}>
                    {/* Info Side */}
                    <div>
                        <h1 style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1, marginBottom: '2rem' }}>Let's Create<br />Magic.</h1>
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
                    <div style={{ backgroundColor: 'var(--color-surface)', padding: '3rem', borderRadius: '4px' }}>
                        <form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
                        >
                            <input type="hidden" name="form-name" value="contact" />

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div>
                                    <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#a1a1aa' }}>NAME</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        style={inputStyle}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                        onBlur={(e) => e.target.style.borderColor = '#333'}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#a1a1aa' }}>EMAIL</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        style={inputStyle}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                        onBlur={(e) => e.target.style.borderColor = '#333'}
                                    />
                                </div>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div>
                                    <label htmlFor="eventType" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#a1a1aa' }}>EVENT TYPE</label>
                                    <select
                                        id="eventType"
                                        name="eventType"
                                        value={formData.eventType}
                                        onChange={handleChange}
                                        style={inputStyle}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                        onBlur={(e) => e.target.style.borderColor = '#333'}
                                    >
                                        <option value="corporate">Corporate Event</option>
                                        <option value="wedding">Wedding</option>
                                        <option value="private">Private Party</option>
                                        <option value="festival">Festival/Concert</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="date" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#a1a1aa' }}>DATE</label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                        style={inputStyle}
                                        onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                        onBlur={(e) => e.target.style.borderColor = '#333'}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="budget" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#a1a1aa' }}>BUDGET RANGE</label>
                                <input
                                    type="text"
                                    id="budget"
                                    name="budget"
                                    placeholder="e.g. $10k - $20k"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    style={inputStyle}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                    onBlur={(e) => e.target.style.borderColor = '#333'}
                                />
                            </div>

                            <div>
                                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: '#a1a1aa' }}>TELL US MORE</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    style={{ ...inputStyle, resize: 'vertical' }}
                                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                                    onBlur={(e) => e.target.style.borderColor = '#333'}
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