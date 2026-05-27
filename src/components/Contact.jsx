import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { db, collection, addDoc, serverTimestamp } from '../firebase';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // 'idle' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Save message details in Firebase Cloud Firestore
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: serverTimestamp(),
      });

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (err) {
      console.error("Firebase Database submission error:", err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="container">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '5rem', alignItems: 'start' }}>
        <div>
          <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1.5rem' }}>Let's <span className="gradient-text">Connect</span></h2>
          <p style={{ color: 'var(--text-dim)', fontSize: '1.25rem', marginBottom: '3rem' }}>
            Have a project in mind or just want to chat? I'm always open to discussing new opportunities and ideas.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ padding: '1rem', background: 'var(--card-bg)', borderRadius: '1rem', color: 'var(--accent-1)' }}>
                <Mail size={24} />
              </div>
              <div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>Mail me at</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>bijjaakhila123@gmail.com</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ padding: '1rem', background: 'var(--card-bg)', borderRadius: '1rem', color: 'var(--accent-1)' }}>
                <Phone size={24} />
              </div>
              <div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>Call me</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>8208841402</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <div style={{ padding: '1rem', background: 'var(--card-bg)', borderRadius: '1rem', color: 'var(--accent-1)' }}>
                <MapPin size={24} />
              </div>
              <div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)' }}>Location</p>
                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Mumbai,India</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass"
          style={{ padding: '3rem' }}
        >
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '0.75rem',
                  color: 'var(--text)',
                  outline: 'none'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '0.75rem',
                  color: 'var(--text)',
                  outline: 'none'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>Your Message</label>
              <textarea
                rows="5"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--card-border)',
                  borderRadius: '0.75rem',
                  color: 'var(--text)',
                  outline: 'none',
                  resize: 'none'
                }}
              ></textarea>
            </div>

            <AnimatePresence mode="wait">
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    borderRadius: '0.75rem',
                    color: '#10b981',
                    fontSize: '0.95rem'
                  }}
                >
                  <CheckCircle size={20} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '1rem',
                    background: 'rgba(239, 68, 68, 0.1)',
                    border: '1px solid rgba(239, 68, 68, 0.2)',
                    borderRadius: '0.75rem',
                    color: '#ef4444',
                    fontSize: '0.95rem'
                  }}
                >
                  <AlertCircle size={20} />
                  <span>Failed to send message. Please try again.</span>
                </motion.div>
              )}
            </AnimatePresence>

            <button 
              type="submit" 
              className="btn btn-primary" 
              disabled={isSubmitting}
              style={{ 
                justifyContent: 'center', 
                width: '100%',
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer'
              }}
            >
              {isSubmitting ? (
                <>
                  Sending...
                  <Loader className="spinner" size={20} style={{ animation: 'spin 1s linear infinite' }} />
                </>
              ) : (
                <>
                  Send Message
                  <Send size={20} />
                </>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
