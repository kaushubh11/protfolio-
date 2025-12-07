import React, { useState } from 'react';
import { Mail, User, Code } from 'lucide-react';
import { DATA } from '../data';
import SectionContainer from './SectionContainer';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setStatus('');
    };

    const handleContactSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        // --- MOCK ASYNCHRONOUS BEHAVIOR ---
        await new Promise(resolve => setTimeout(resolve, 1500));
        // --- END MOCK ---

        console.log("Contact form submitted (MOCK):", formData);

        if (formData.email.includes("@")) {
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } else {
            setStatus('error');
        }
    };

    const contactFields = [
        { name: 'Email', value: DATA.PERSONAL.EMAIL, icon: Mail },
        { name: 'LinkedIn', value: DATA.PERSONAL.LINKEDIN, icon: User },
        { name: 'GitHub', value: DATA.PERSONAL.GITHUB, icon: Code },
    ];

    return (
        <SectionContainer id="contact" title="Connect Protocol" icon={Mail}>
            <div className="p-8 bg-zinc-900/70 rounded-xl shadow-lg shadow-purple-500/10 border border-neon-purple/20 w-full max-w-2xl mx-auto font-inter">
                <p className="text-gray-300 mb-6 text-lg text-center">
                    Engage the communication link below for collaboration or inquiries.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-8">
                    {contactFields.map((field) => {
                        const Icon = field.icon;
                        return (
                            <div key={field.name} className="text-center p-3 bg-zinc-800/70 rounded-lg hover:bg-zinc-700/70 transition">
                                <Icon size={20} className="text-neon-aqua mx-auto mb-1 neon-text-aqua" />
                                <a
                                    href={field.name === 'Email' ? `mailto:${field.value}` : field.value}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-purple-400 hover:text-neon-purple break-words"
                                >
                                    {field.name}
                                </a>
                            </div>
                        );
                    })}
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-4 pt-4 border-t border-neon-aqua/30">
                    {/* Form Inputs */}
                    <input type="text" name="name" placeholder="IDENTITY" value={formData.name} onChange={handleChange} required className="input-field" />
                    <input type="email" name="email" placeholder="FREQUENCY (EMAIL)" value={formData.email} onChange={handleChange} required className="input-field" />
                    <textarea name="message" rows="4" placeholder="DATA PACKET" value={formData.message} onChange={handleChange} required className="input-field"></textarea>

                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="w-full px-4 py-3 text-lg font-medium text-black bg-neon-purple rounded-lg shadow-neon shadow-purple-500/50 hover:bg-purple-400 transition duration-300 disabled:opacity-50 flex items-center justify-center font-orbitron"
                    >
                        {status === 'loading' ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending Transmission...
                            </>
                        ) : (
                            <>
                                <Mail size={20} className="mr-2" /> Initiate Connection
                            </>
                        )}
                    </button>

                    {status === 'success' && (
                        <p className="mt-4 text-neon-aqua font-semibold text-center font-orbitron">
                            SUCCESS: Message delivered to Nexus Core.
                        </p>
                    )}
                    {status === 'error' && (
                        <p className="mt-4 text-neon-purple font-semibold text-center font-orbitron">
                            ERROR: Connection failure. Check console or verify email placeholder.
                        </p>
                    )}
                </form>
            </div>
        </SectionContainer>
    );
};

export default Contact;
