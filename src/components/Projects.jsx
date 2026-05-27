import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, X, ChevronLeft, ChevronRight, Layers, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const [activeProj, setActiveProj] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const projects = [
    {
      id: 'synap',
      title: 'SYNAPSOCIAL',
      logo: '/Synap1.png',
      images: ['/Synap1.png', '/Synap2.png', '/Synap3.png', '/Synap4.png', '/Synap5.png', '/Synap6.png', '/Synap7.png'],
      tech: [
        'MERN Stack', 'Large Language Models (LLMs)', 'Node.js', 'Express.js',
        'React.js', 'MongoDB', 'OAuth 2.0', 'JWT Authentication', 'REST APIs',
        'Cron Jobs', 'Gmail API', 'LinkedIn API', 'YouTube API', 'Instagram Integration',
        'Google News RSS', 'AI Chatbot', 'Automation Systems'
      ],
      demo: 'https://vnps-copy.vercel.app/',
      github: 'https://github.com/Akhila-Bijja',
      fullDesc: 'An AI-powered social media automation platform designed to simplify multi-platform management through intelligent content generation, automated posting, and engagement handling. Built to improve productivity, SYNAPSOCIAL integrates multiple platforms into one centralized system while leveraging AI for smarter content creation, auto-replies, and trend-based insights. 🚀🤖'
    },
    {
      id: 'pari',
      title: 'Paripakvata',
      logo: '/Pari1.png',
      images: ['/Pari1.png', '/Pari2.png', '/Pari3.png', '/Pari4.png', '/Pari5.png', '/Pari6.png'],
      tech: [
        'Flutter', 'Supabase', 'Gemini AI', 'OCR', 'Machine Learning',
        'Cloud Storage', 'REST APIs', 'Multilingual Support System',
        'Authentication & Database Management'
      ],
      demo: 'https://drive.google.com/file/d/10XdkOo7Ao4oSOGHFcTWnoKf8jdLvkFyL/view?usp=sharing',
      github: 'https://github.com/vedaant0303/paripakvataapp.git',
      fullDesc: 'An AI-powered pregnancy companion designed to transform maternal healthcare through intelligent report analysis, personalized nutrition plans, prenatal wellness support, and multilingual accessibility. Built to empower women with safer, informed, and more connected pregnancy care throughout their motherhood journey. 💗✨'
    },
    {
      id: 'aidetect',
      title: 'AI Content Detector',
      logo: '/AiDetect1.png',
      images: ['/AiDetect1.png', '/AiDetect2.png', '/AiDetect3.png', '/AiDetect4.png', '/AiDetect5.png', '/AiDetect6.png'],
      tech: [
        'Python', 'Flask', 'RoBERTa', 'EfficientNet', 'AWS EC2',
        'Gunicorn', 'Nginx', 'Machine Learning', 'REST APIs',
        'HTML/CSS/JavaScript', 'Cloud Deployment', 'MLOps Basics'
      ],
      demo: 'http://13.62.102.105/',
      github: 'https://github.com/vedaant0303/ML-project-.git',
      fullDesc: 'An intelligent web application designed to detect AI-generated content from both text and images using Machine Learning models. The project integrates advanced NLP and computer vision techniques, enabling real-time analysis through a deployed production environment. Built to provide practical experience in AI deployment, cloud infrastructure, and scalable ML systems. 🚀🤖'
    }
  ];

  const handleOpenLightbox = (proj) => {
    setActiveProj(proj);
    setCurrentImgIndex(0);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (activeProj && activeProj.images) {
      setCurrentImgIndex((prev) => (prev + 1) % activeProj.images.length);
    }
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (activeProj && activeProj.images) {
      setCurrentImgIndex((prev) => (prev - 1 + activeProj.images.length) % activeProj.images.length);
    }
  };

  return (
    <section id="projects" className="container">
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p style={{ color: 'var(--text-dim)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto', fontStyle: 'italic' }}>
          Exploring full stack engineering pipelines, intelligent ML models, and high-fidelity frontends.
        </p>
      </div>

      {/* Projects Timeline Grid with Staggered Motion */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem' }}>
        {projects.map((proj, i) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.1, type: 'spring', damping: 15 }}
            whileHover={{
              y: -12,
              rotateY: 2,
              rotateX: -2,
              transition: { duration: 0.2, ease: 'easeOut' }
            }}
            onClick={() => handleOpenLightbox(proj)}
            className="glass card-hover"
            style={{
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              cursor: 'pointer',
              perspective: '1000px', // enabling 3D skew depth
              transformStyle: 'preserve-3d'
            }}
          >
            {/* Project Image Preview Cover */}
            <div style={{
              height: '240px',
              background: 'var(--card-bg)',
              borderBottom: '1px solid var(--card-border)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <img
                src={proj.logo}
                alt={proj.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease'
                }}
                className="cert-preview-img"
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '1.5rem',
                opacity: 0.95
              }}>
                <span className="gradient-text" style={{ fontWeight: 800, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>

                </span>
              </div>

              {/* Slide Count Badge */}
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                background: 'rgba(0, 0, 0, 0.75)',
                backdropFilter: 'blur(4px)',
                padding: '0.4rem 0.7rem',
                borderRadius: '0.5rem',
                border: '1px solid rgba(255,255,255,0.1)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--accent-2)'
              }}>
                <Layers size={12} />
                {proj.images.length} Slides
              </div>
            </div>

            {/* Front Page Card: ONLY show Logo/Image Cover & Title (Name) */}
            <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text)', margin: 0 }}>
                  {proj.title}
                </h3>
                <ArrowUpRight size={20} style={{ color: 'var(--accent-1)', opacity: 0.7 }} />
              </div>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', fontStyle: 'italic', margin: 0 }}>
                Interactive Case Study & Live System ➜
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FULL-SCREEN GORGEOUS PROJECT LIGHTBOX WITH SLIDESHOW CAROUSEL */}
      <AnimatePresence>
        {activeProj && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProj(null)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(15px)',
              zIndex: 99999, // Set z-index to 99999 so the custom cursor (at 999999) is fully visible
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="glass lightbox-content"
              style={{
                width: '100%',
                maxWidth: '950px',
                background: 'var(--bg)', /* Ensure background matches current theme exactly */
                border: '1px solid var(--card-border)',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6)'
              }}
            >
              {/* Left Column: Image Slideshow Viewer */}
              <div 
                className="lightbox-img-container"
                style={{
                  position: 'relative',
                  background: '#030303',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  borderRight: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeProj.images[currentImgIndex]}
                    src={activeProj.images[currentImgIndex]}
                    alt={activeProj.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      maxWidth: '92%',
                      maxHeight: '92%',
                      objectFit: 'contain',
                      borderRadius: '0.75rem',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.6)'
                    }}
                  />
                </AnimatePresence>

                {/* Lightbox Slideshow Navigation buttons */}
                <button
                  onClick={handlePrevImage}
                  style={{
                    position: 'absolute',
                    left: '1rem',
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'white',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'background 0.2s, transform 0.2s',
                    zIndex: 5
                  }}
                  className="btn-control"
                  title="Previous Slide"
                >
                  <ChevronLeft size={20} />
                </button>

                <button
                  onClick={handleNextImage}
                  style={{
                    position: 'absolute',
                    right: '1rem',
                    background: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: 'white',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'background 0.2s, transform 0.2s',
                    zIndex: 5
                  }}
                  className="btn-control"
                  title="Next Slide"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Indicators dots */}
                <div style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  display: 'flex',
                  gap: '0.45rem',
                  background: 'rgba(0,0,0,0.65)',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '999px',
                  zIndex: 5
                }}>
                  {activeProj.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentImgIndex(idx);
                      }}
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        border: 'none',
                        padding: 0,
                        background: idx === currentImgIndex ? 'var(--accent-1)' : 'rgba(255,255,255,0.3)',
                        cursor: 'pointer',
                        transition: 'background 0.2s, transform 0.2s',
                        transform: idx === currentImgIndex ? 'scale(1.25)' : 'scale(1)'
                      }}
                    />
                  ))}
                </div>

                {/* Page Counter label */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(0,0,0,0.65)',
                  padding: '0.3rem 0.7rem',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  color: 'var(--text-dim)'
                }}>
                  Slide {currentImgIndex + 1} of {activeProj.images.length}
                </div>
              </div>

              {/* Right Column: Detailed Info & Actions */}
              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                {/* Close modal X button */}
                <button
                  onClick={() => setActiveProj(null)}
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-dim)',
                    cursor: 'pointer',
                    padding: '0.5rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'color 0.2s, background 0.2s'
                  }}
                  className="btn-close"
                >
                  <X size={20} />
                </button>

                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-1)', marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Project Deep Dive
                  </span>
                </div>

                <h3 style={{ fontSize: '1.85rem', fontWeight: 800, marginBottom: '0.75rem', lineHeight: 1.2, color: '#fff' }}>
                  {activeProj.title}
                </h3>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '1.5rem', overflowY: 'auto', maxHeight: '70px', paddingRight: '0.25rem' }}>
                  {activeProj.tech.map((t, ti) => (
                    <span
                      key={ti}
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: 'var(--accent-2)',
                        background: 'var(--card-bg)',
                        border: '1px solid var(--card-border)',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '0.4rem'
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{
                  height: '1px',
                  background: 'linear-gradient(to right, var(--card-border), transparent)',
                  marginBottom: '1.5rem'
                }} />

                {/* FULL Description is visible only here in the modal */}
                <p style={{
                  color: 'var(--text-dim)',
                  lineHeight: 1.7,
                  fontSize: '0.95rem',
                  marginBottom: '2rem',
                  flexGrow: 1,
                  overflowY: 'auto',
                  maxHeight: '180px',
                  paddingRight: '0.5rem'
                }}>
                  {activeProj.fullDesc}
                </p>

                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                  <a
                    href={activeProj.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ width: '50%', justifyContent: 'center', padding: '0.85rem', fontSize: '0.95rem' }}
                  >
                    <ExternalLink size={18} /> Launch Live Demo
                  </a>
                  <a
                    href={activeProj.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline"
                    style={{ width: '50%', justifyContent: 'center', padding: '0.85rem', fontSize: '0.95rem' }}
                  >
                    <Code size={18} /> View Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
