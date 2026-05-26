import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    // Direct Web-based Gmail compose URL (works instantly in any browser)
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=bijjaakhila123@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Standard mailto backup link
    const mailtoUrl = `mailto:bijjaakhila123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    try {
      // Launch Gmail in a new tab
      window.open(gmailUrl, '_blank');
    } catch (err) {
      // Fallback if popups are blocked
      window.location.href = mailtoUrl;
    }
    
    setFormData({ name: '', email: '', message: '' });
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
            <button type="submit" className="btn btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
              Send Message
              <Send size={20} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
