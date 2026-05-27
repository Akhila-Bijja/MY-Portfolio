import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Download, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav className="glass" style={{
        position: 'fixed',
        top: '1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1200px',
        zIndex: 1000,
        padding: '0.75rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Profile Logo & Clickable Avatar */}
        <div style={{ fontWeight: 700, fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img 
            src={profileImg} 
            alt="Akhila Bijja" 
            onClick={() => setShowProfileModal(true)}
            style={{ 
              width: '35px', 
              height: '35px', 
              borderRadius: '50%', 
              objectFit: 'cover',
              border: '1px solid var(--accent-1)',
              cursor: 'pointer',
              transition: 'transform 0.2s ease'
            }} 
            className="navbar-profile-avatar"
            title="Click to view photo"
          />
          <span className="gradient-text">Akhila</span>
        </div>

        {/* Desktop Links (Hidden on Mobile) */}
        <ul className="nav-links" style={{ display: 'flex', gap: '2rem', fontWeight: 500 }}>
          {navLinks.map((link) => (
            <li key={link.name}><a href={link.href}>{link.name}</a></li>
          ))}
        </ul>

        {/* Action Controls */}
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <button
            onClick={toggleTheme}
            className="btn btn-outline"
            style={{ padding: '0.5rem', borderRadius: '50%' }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <a href="/resume.pdf" download="Akhila_Bijja_Resume.pdf" className="btn btn-primary resume-btn">
            <Download size={18} />
            <span>Resume</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-outline mobile-toggle"
            style={{ padding: '0.5rem', display: 'none' }}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-down Glass Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className="glass"
            style={{
              position: 'fixed',
              top: '6rem',
              left: '50%',
              width: '90%',
              maxWidth: '1200px',
              zIndex: 999,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              alignItems: 'center',
              backgroundColor: 'var(--bg)', /* Use active theme background (solid) */
              border: '1px solid var(--card-border)'
            }}
          >
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', textAlign: 'center', fontWeight: 600 }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    style={{ fontSize: '1.2rem', display: 'block', padding: '0.5rem' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PREMIUM PROFILE PHOTO LIGHTBOX MODAL */}
      <AnimatePresence>
        {showProfileModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowProfileModal(false)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(15px)',
              zIndex: 999999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="glass"
              style={{
                position: 'relative',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                maxWidth: '450px',
                width: '100%',
                background: 'var(--bg)',
                border: '1px solid var(--card-border)',
                borderRadius: '1.5rem',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowProfileModal(false)}
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-dim)',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'color 0.2s'
                }}
                className="btn-close"
              >
                <X size={20} />
              </button>

              {/* Large Image view */}
              <img 
                src={profileImg} 
                alt="Akhila Bijja" 
                style={{
                  width: '100%',
                  height: '350px',
                  borderRadius: '1rem',
                  objectFit: 'cover',
                  border: '1px solid var(--card-border)',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)'
                }}
              />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0 }}>
                <span className="gradient-text">Akhila Bijja</span>
              </h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', margin: 0, fontStyle: 'italic' }}>
                Full Stack Developer
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

