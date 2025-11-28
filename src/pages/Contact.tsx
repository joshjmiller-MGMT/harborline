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

    return (
        <div style={{ paddingTop: '120px', paddingBottom: '4rem', minHeight: '100vh', backgroundColor: '#000' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 className="section-title">Start Your Experience</h1>
                <p style={{ textAlign: 'center', color: '#a1a1aa', marginBottom: '3rem', fontSize: '1.1rem' }}>
                    Tell us about your event. We'll craft the perfect entertainment solution for you.
                </p>

                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                >
                    <input type="hidden" name="form-name" value="contact" />

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="name" style={{ fontWeight: 600, fontSize: '0.9rem' }}>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#18181b', color: 'white', fontSize: '1rem' }}
                            />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="email" style={{ fontWeight: 600, fontSize: '0.9rem' }}>Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#18181b', color: 'white', fontSize: '1rem' }}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="eventType" style={{ fontWeight: 600, fontSize: '0.9rem' }}>Event Type</label>
                            <select
                                id="eventType"
                                name="eventType"
                                value={formData.eventType}
                                onChange={handleChange}
                                style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#18181b', color: 'white', fontSize: '1rem' }}
                            >
                                <option value="corporate">Corporate Event</option>
                                <option value="wedding">Wedding</option>
                                <option value="private">Private Party</option>
                                <option value="festival">Festival/Concert</option>
                            </select>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="date" style={{ fontWeight: 600, fontSize: '0.9rem' }}>Event Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#18181b', color: 'white', fontSize: '1rem' }}
                            />
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="budget" style={{ fontWeight: 600, fontSize: '0.9rem' }}>Estimated Budget</label>
                        <input
                            type="text"
                            id="budget"
                            name="budget"
                            placeholder="$5,000 - $10,000"
                            value={formData.budget}
                            onChange={handleChange}
                            style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#18181b', color: 'white', fontSize: '1rem' }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="message" style={{ fontWeight: 600, fontSize: '0.9rem' }}>Additional Details</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            value={formData.message}
                            onChange={handleChange}
                            style={{ padding: '1rem', borderRadius: '4px', border: '1px solid #333', backgroundColor: '#18181b', color: 'white', fontSize: '1rem', resize: 'vertical' }}
                        />
                    </div>

                    <button type="submit" className="btn" style={{ marginTop: '1rem', width: '100%', fontSize: '1.1rem' }}>
                        Submit Request
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
