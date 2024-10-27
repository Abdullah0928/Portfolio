import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, XCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  user_name: string;
  user_email: string;
  message: string;
}

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setStatus('sending');

    try {
      await emailjs.sendForm(
        'service_jzxk4dn', // Replace with your EmailJS service ID
        'template_s189m6l', // Replace with your EmailJS template ID
        form.current,
        'fbZGpM6ONCZiPsw3-' // Replace with your EmailJS public key
      );
      
      setStatus('success');
      setFormData({ user_name: '', user_email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <motion.form
      ref={form}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-6 relative"
    >
      <motion.div
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ delay: 0.1 }}
        className="group"
      >
        <label htmlFor="user_name" className="block text-sm font-medium mb-2 text-gold-400">Name</label>
        <input
          id="user_name"
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded bg-zinc-800/50 backdrop-blur-sm border border-gold-500/20 focus:outline-none focus:border-gold-500 transition-colors"
        />
      </motion.div>

      <motion.div
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ delay: 0.2 }}
        className="group"
      >
        <label htmlFor="user_email" className="block text-sm font-medium mb-2 text-gold-400">Email</label>
        <input
          id="user_email"
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded bg-zinc-800/50 backdrop-blur-sm border border-gold-500/20 focus:outline-none focus:border-gold-500 transition-colors"
        />
      </motion.div>

      <motion.div
        initial={{ x: -50 }}
        whileInView={{ x: 0 }}
        transition={{ delay: 0.3 }}
        className="group"
      >
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-gold-400">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 rounded bg-zinc-800/50 backdrop-blur-sm border border-gold-500/20 focus:outline-none focus:border-gold-500 transition-colors resize-none"
        />
      </motion.div>

      {/* Hidden recipient email field */}
      <input 
        type="hidden" 
        name="to_email" 
        value="mnabdullah0928@gmail.com"
      />

      <motion.button
        type="submit"
        disabled={status === 'sending'}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full bg-gradient-to-r from-gold-600 to-gold-500 text-black font-medium py-3 px-4 rounded transition-all duration-300 flex items-center justify-center gap-2 ${
          status === 'sending' ? 'opacity-75 cursor-not-allowed' : ''
        }`}
      >
        {status === 'sending' ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            >
              <Send size={20} />
            </motion.div>
            Sending...
          </>
        ) : status === 'success' ? (
          <>
            <CheckCircle size={20} />
            Message Sent!
          </>
        ) : status === 'error' ? (
          <>
            <XCircle size={20} />
            Error Sending
          </>
        ) : (
          <>
            <Send size={20} />
            Send Message
          </>
        )}
      </motion.button>

      <AnimatePresence>
        {(status === 'success' || status === 'error') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`absolute bottom-16 left-0 right-0 p-4 rounded ${
              status === 'success' ? 'bg-green-500/20' : 'bg-red-500/20'
            }`}
          >
            {status === 'success' ? (
              <p className="text-green-400 text-center">Message sent successfully!</p>
            ) : (
              <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.form>
  );
};

export default ContactForm;
