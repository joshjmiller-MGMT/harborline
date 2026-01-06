import { useState } from 'react';
import { Send } from 'lucide-react';

const LeadForm = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        date: '',
        eventType: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <form 
            name="lead-intake" 
            method="POST" 
            data-netlify="true" 
            className="lead-form"
            action="/success"
        >
            <input type="hidden" name="form-name" value="lead-intake" />
            
            <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-input" 
                    required 
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                />
            </div>

            <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-input" 
                    required 
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                />
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="date" className="form-label">Event Date</label>
                    <input 
                        type="date" 
                        id="date" 
                        name="date" 
                        className="form-input" 
                        value={formState.date}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="eventType" className="form-label">Event Type</label>
                    <select 
                        id="eventType" 
                        name="eventType" 
                        className="form-input"
                        value={formState.eventType}
                        onChange={handleChange}
                    >
                        <option value="">Select Type</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="private">Private Party</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="message" className="form-label">Tell us about your event</label>
                <textarea 
                    id="message" 
                    name="message" 
                    className="form-input" 
                    rows={4} 
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Venue, vibe, special requests..."
                ></textarea>
            </div>

            <button type="submit" className="btn" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
                Lock In Your Date <Send size={18} />
            </button>
        </form>
    );
};

export default LeadForm;
