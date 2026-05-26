import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="container" 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        paddingTop: '8rem',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1rem',
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            borderRadius: '9999px',
            fontSize: '0.875rem',
            marginBottom: '2rem',
            color: 'var(--text-dim)',
            fontStyle: 'italic'
          }}
        >
          <span>👋 Welcome to my portfolio</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1.1, fontWeight: 700, marginBottom: '1.5rem' }}
        >
          I'm <span className="gradient-text">Akhila Bijja</span><br />
          Full Stack <span style={{ opacity: 0.8, fontStyle: 'italic' }}>Developer</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ fontSize: '1.25rem', color: 'var(--text-dim)', marginBottom: '3rem', maxWidth: '600px' }}
        >
          Crafting <span style={{ fontStyle: 'italic' }}>high-performance</span> web applications with modern technologies.
          Passionate about clean code, stunning UI, and seamless user experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            gap: '1.5rem', 
            alignItems: 'center', 
            justifyContent: 'center',
            marginBottom: '4rem' 
          }}
        >
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <a href="#contact" className="btn btn-primary">
              Get In Touch
              <ArrowRight size={20} />
            </a>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <a href="https://github.com/Akhila-Bijja" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.75rem', borderRadius: '50%' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/akhilabijja/" target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.75rem', borderRadius: '50%' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="tel:8208841402" className="btn btn-outline" style={{ padding: '0.75rem', borderRadius: '50%' }}>
              <Phone size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, var(--accent-1) 0%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: 0.2,
          zIndex: -1
        }}
      />
    </section>
  );
};

export default Hero;
