import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Download } from 'lucide-react';
import profileImg from '../assets/profile.jpg';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
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

      <ul style={{ display: 'flex', gap: '2rem', fontWeight: 500 }}>
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button
          onClick={toggleTheme}
          className="btn btn-outline"
          style={{ padding: '0.5rem', borderRadius: '50%' }}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <a href="/resume.pdf" download="Akhila_Bijja_Resume.pdf" className="btn btn-primary">
          <Download size={18} />
          <span>Resume</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
