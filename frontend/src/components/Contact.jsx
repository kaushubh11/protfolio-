import React, { useState } from 'react';
import { Mail, Send, Loader2 } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <section className="py-32 px-4 border-t border-zinc-900 bg-background" id="contact">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Let's build something together.</h2>
                <p className="text-zinc-400 mb-12">
                    I'm currently available for freelance work and internships.
                    Drop me a line if you'd like to chat about a project or just say hi.
                </p>

                <form onSubmit={handleSubmit} className="text-left space-y-4 bg-zinc-900/50 p-8 rounded-3xl border border-zinc-800">
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-zinc-600"
                            placeholder="John Doe"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-zinc-600"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                        <textarea
                            name="message"
                            rows="4"
                            required
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-zinc-600"
                            placeholder="Tell me about your project..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'loading' || status === 'success'}
                        className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {status === 'loading' ? (
                            <><Loader2 className="animate-spin w-5 h-5" /> Sending...</>
                        ) : status === 'success' ? (
                            "Message Sent!"
                        ) : status === 'error' ? (
                            "Failed - Try Again"
                        ) : (
                            <><Send className="w-4 h-4" /> Send Message</>
                        )}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
