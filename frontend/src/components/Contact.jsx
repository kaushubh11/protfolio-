import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Loader2, MapPin, Phone, Github, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('idle');
    const [focusedField, setFocusedField] = useState(null);

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
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/contact';
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const inputClasses = (fieldName) => `
        w-full bg-zinc-900/50 border rounded-xl px-5 py-4 text-white placeholder-transparent 
        focus:outline-none transition-all duration-300
        ${focusedField === fieldName ? 'border-primary ring-1 ring-primary/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'border-zinc-800 hover:border-zinc-700'}
    `;

    const labelClasses = (fieldName, value) => `
        absolute left-5 transition-all duration-300 text-zinc-500 pointer-events-none
        ${focusedField === fieldName || value ? '-top-2.5 text-xs bg-background px-2 text-primary' : 'top-4 text-base'}
    `;

    return (
        <section className="py-32 px-4 bg-background relative" id="contact">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-primary/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2" />

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

                {/* Left Column: Info */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Let's <span className="text-primary">Connect</span></h2>
                    <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                        I'm currently looking for new opportunities. Whether you have a question,
                        a project idea, or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/50 transition-colors">
                            <div className="p-3 bg-primary/10 rounded-xl text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-white mb-1">Email</h3>
                                <a href="mailto:bkaushubh3@gmail.com" className="text-zinc-400 hover:text-primary transition-colors">bkaushubh3@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:bg-zinc-900/50 transition-colors">
                            <div className="p-3 bg-purple-500/10 rounded-xl text-purple-400">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-semibold text-white mb-1">Location</h3>
                                <p className="text-zinc-400">Kathmandu, Nepal (Open to Remote)</p>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-8">
                            <a href="#" className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:scale-110 hover:border-primary/50 hover:text-primary transition-all">
                                <Github size={20} />
                            </a>
                            <a href="#" className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl hover:scale-110 hover:border-blue-500/50 hover:text-blue-500 transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column: Interactive Form */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <form onSubmit={handleSubmit} className="space-y-6 bg-zinc-900/20 p-8 rounded-3xl border border-zinc-800 backdrop-blur-sm">
                        <div className="relative">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                onFocus={() => setFocusedField('name')}
                                onBlur={(e) => !e.target.value && setFocusedField(null)}
                                onChange={(e) => e.target.value && setFocusedField('name')}
                                className={inputClasses('name')}
                            />
                            <label htmlFor="name" className={labelClasses('name', focusedField === 'name')}>
                                Your Name
                            </label>
                        </div>

                        <div className="relative">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                onFocus={() => setFocusedField('email')}
                                onBlur={(e) => !e.target.value && setFocusedField(null)}
                                onChange={(e) => e.target.value && setFocusedField('email')}
                                className={inputClasses('email')}
                            />
                            <label htmlFor="email" className={labelClasses('email', focusedField === 'email')}>
                                Email Address
                            </label>
                        </div>

                        <div className="relative">
                            <textarea
                                name="message"
                                id="message"
                                rows="5"
                                required
                                onFocus={() => setFocusedField('message')}
                                onBlur={(e) => !e.target.value && setFocusedField(null)}
                                onChange={(e) => e.target.value && setFocusedField('message')}
                                className={inputClasses('message')}
                            ></textarea>
                            <label htmlFor="message" className={labelClasses('message', focusedField === 'message')}>
                                Write your message...
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={status !== 'idle'}
                            className={`
                                w-full py-4 rounded-xl font-bold text-white transition-all duration-300 flex items-center justify-center gap-2
                                ${status === 'idle' ? 'bg-gradient-to-r from-primary to-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:scale-[1.02]' : ''}
                                ${status === 'loading' ? 'bg-zinc-800 cursor-wait' : ''}
                                ${status === 'success' ? 'bg-green-500 shadow-[0_0_20px_rgba(34,197,94,0.4)]' : ''}
                                ${status === 'error' ? 'bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.4)]' : ''}
                            `}
                        >
                            <AnimatePresence mode="wait">
                                {status === 'idle' && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                        Send Message <Send size={18} />
                                    </motion.div>
                                )}
                                {status === 'loading' && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                                        <Loader2 className="animate-spin" size={20} />
                                    </motion.div>
                                )}
                                {status === 'success' && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                        Message Sent <CheckCircle2 size={20} />
                                    </motion.div>
                                )}
                                {status === 'error' && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                                        Error. Try Again <AlertCircle size={20} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
