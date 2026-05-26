import React from 'react';

const Footer = () => {
  return (
    <footer className="container" style={{ padding: '4rem 0', borderTop: '1px solid var(--card-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', fontStyle: 'italic' }}>
        © {new Date().getFullYear()} Akhila Bijja. Built with React & MERN.
      </p>
      <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', fontWeight: 500 }}>
        <a href="#home" style={{ color: 'var(--text-dim)' }}>Home</a>
        <a href="#skills" style={{ color: 'var(--text-dim)' }}>Skills</a>
        <a href="#projects" style={{ color: 'var(--text-dim)' }}>Projects</a>
        <a href="#contact" style={{ color: 'var(--text-dim)' }}>Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
