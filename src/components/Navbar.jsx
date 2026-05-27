import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Download, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../assets/profile.jpg';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

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
        {/* Profile Logo */}
        <div style={{ fontWeight: 700, fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img 
            src={profileImg} 
            alt="Akhila Bijja" 
            style={{ 
              width: '35px', 
              height: '35px', 
              borderRadius: '50%', 
              objectFit: 'cover',
              border: '1px solid var(--accent-1)'
            }} 
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
    </>
  );
};

export default Navbar;

