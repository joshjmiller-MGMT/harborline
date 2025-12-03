import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';

const Contact = () => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        eventType: 'corporate',
        date: '',
        venue: '',
        budget: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const encode = (data: any) => {
            return Object.keys(data)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                .join("&");
        };

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...formData })
            });
            setIsSuccess(true);
        } catch (error) {
            console.error("Form submission error:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
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

                        <div style={{ padding: '2rem', backgroundColor: 'var(--color-surface)', borderRadius: '4px' }}>
                            <h4 style={{ color: 'var(--color-primary)', fontSize: '1.1rem', marginBottom: '1rem' }}>The Process</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: step >= 1 ? 1 : 0.5 }}>
                                    <span style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: step >= 1 ? 'var(--color-primary)' : '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: 'black', fontWeight: 'bold' }}>1</span>
                                    <span style={{ color: step >= 1 ? 'white' : 'var(--color-text-muted)' }}>Event Details</span>
                                </div>
                                <div style={{ width: '1px', height: '20px', backgroundColor: '#333', marginLeft: '12px' }}></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: step >= 2 ? 1 : 0.5 }}>
                                    <span style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: step >= 2 ? 'var(--color-primary)' : '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: 'black', fontWeight: 'bold' }}>2</span>
                                    <span style={{ color: step >= 2 ? 'white' : 'var(--color-text-muted)' }}>Vibe & Vision</span>
                                </div>
                                <div style={{ width: '1px', height: '20px', backgroundColor: '#333', marginLeft: '12px' }}></div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', opacity: step >= 3 ? 1 : 0.5 }}>
                                    <span style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: step >= 3 ? 'var(--color-primary)' : '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', color: 'black', fontWeight: 'bold' }}>3</span>
                                    <span style={{ color: step >= 3 ? 'white' : 'var(--color-text-muted)' }}>Contact Info</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="contact-form-wrapper" style={{ position: 'relative', overflow: 'hidden', minHeight: '500px' }}>
                        {isSuccess ? (
                            <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✨</div>
                                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'white' }}>Inquiry Received</h3>
                                <p style={{ color: 'var(--color-text-muted)', maxWidth: '400px' }}>
                                    Thank you for reaching out. We'll review your details and get back to you within 24 hours with a custom proposal.
                                </p>
                            </div>
                        ) : (
                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                onSubmit={handleSubmit}
                                style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                            >
                                <input type="hidden" name="form-name" value="contact" />
                                {/* Hidden inputs for Netlify to detect fields */}
                                <div style={{ display: 'none' }}>
                                    <input name="name" />
                                    <input name="email" />
                                    <input name="phone" />
                                    <input name="eventType" />
                                    <input name="date" />
                                    <input name="venue" />
                                    <input name="budget" />
                                    <textarea name="message" />
                                </div>

                                <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <span style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>Step {step} of 3</span>
                                    <div style={{ width: '100px', height: '4px', backgroundColor: '#333', borderRadius: '2px' }}>
                                        <div style={{ width: `${(step / 3) * 100}%`, height: '100%', backgroundColor: 'var(--color-primary)', borderRadius: '2px', transition: 'width 0.3s ease' }}></div>
                                    </div>
                                </div>

                                <AnimatePresence mode="wait">
                                    {step === 1 && (
                                        <motion.div
                                            key="step1"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ flex: 1 }}
                                        >
                                            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'white' }}>Event Details</h3>
                                            <div className="form-group">
                                                <label htmlFor="eventType" className="form-label">WHAT ARE WE CELEBRATING?</label>
                                                <select
                                                    id="eventType"
                                                    name="eventType"
                                                    value={formData.eventType}
                                                    onChange={handleChange}
                                                    className="form-input"
                                                >
                                                    <option value="corporate">Corporate Event / Gala</option>
                                                    <option value="wedding">Wedding</option>
                                                    <option value="private">Private Party</option>
                                                    <option value="festival">Festival / Concert</option>
                                                </select>
                                            </div>
                                            <div className="form-row">
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
                                                <div>
                                                    <label htmlFor="venue" className="form-label">VENUE (IF KNOWN)</label>
                                                    <input
                                                        type="text"
                                                        id="venue"
                                                        name="venue"
                                                        placeholder="e.g. The Anthem"
                                                        value={formData.venue}
                                                        onChange={handleChange}
                                                        className="form-input"
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === 2 && (
                                        <motion.div
                                            key="step2"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ flex: 1 }}
                                        >
                                            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'white' }}>Vibe & Vision</h3>
                                            <div className="form-group">
                                                <label htmlFor="budget" className="form-label">ESTIMATED BUDGET</label>
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
                                            <div className="form-group">
                                                <label htmlFor="message" className="form-label">TELL US ABOUT YOUR VISION</label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows={6}
                                                    placeholder="What kind of atmosphere are you trying to create? Any specific genres or artists you love?"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className="form-input"
                                                    style={{ resize: 'vertical' }}
                                                />
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === 3 && (
                                        <motion.div
                                            key="step3"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.3 }}
                                            style={{ flex: 1 }}
                                        >
                                            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'white' }}>Contact Info</h3>
                                            <div className="form-group">
                                                <label htmlFor="name" className="form-label">FULL NAME</label>
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
                                            <div className="form-row">
                                                <div>
                                                    <label htmlFor="email" className="form-label">EMAIL ADDRESS</label>
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
                                                <div>
                                                    <label htmlFor="phone" className="form-label">PHONE NUMBER</label>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className="form-input"
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid #333' }}>
                                    {step > 1 && (
                                        <button type="button" onClick={prevStep} className="btn" style={{ backgroundColor: 'transparent', border: '1px solid #333' }}>
                                            Back
                                        </button>
                                    )}
                                    {step < 3 ? (
                                        <button type="button" onClick={nextStep} className="btn" style={{ flex: 1 }}>
                                            Next Step
                                        </button>
                                    ) : (
                                        <button type="submit" disabled={isSubmitting} className="btn" style={{ flex: 1 }}>
                                            {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                                        </button>
                                    )}
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;