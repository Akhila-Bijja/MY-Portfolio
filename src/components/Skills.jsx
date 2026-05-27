import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Server, Terminal, Award, X, ChevronLeft, ChevronRight, Layers } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [activeCert, setActiveCert] = useState(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Layout size={20} />,
      skills: ['React', 'Next.js', 'Typescript', 'Tailwind CSS']
    },
    {
      title: 'Backend',
      icon: <Server size={20} />,
      skills: ['Node.js', 'Express', 'MongoDB', 'MySQL']
    },
    {
      title: 'Languages',
      icon: <Terminal size={20} />,
      skills: ['Javascript', 'Java', 'C', 'Python']
    },
    {
      title: 'Other Tools',
      icon: <Terminal size={20} />,
      skills: ['Github', 'Canva', 'AutoCad', 'Gamma']
    }
  ];

  const certifications = [
    {
      title: 'Copyright(Paripakvata)',
      issuer: 'Government of India (IP Office)',
      date: '2026',
      image: '/Copyright 1.png',
      images: ['/Copyright 1.png', '/Copyright 2.png', '/Copyright 3.png'],
      description: 'Successfully received an official Copyright Registration Certificate from the Government of India for the project “Paripakvata”, a Pregnant Women Support Application developed to provide guidance, support, and healthcare-related assistance. This achievement highlights innovation, originality, and contribution toward technology-driven social impact solutions.'
    },
    {
      title: 'IEEE Best Paper Award',
      issuer: 'IEEE Conference Committee',
      date: '2026',
      image: '/IEEE Best paper award.png',
      description: 'Received the Best Paper Award at the IEEE IC3ET 2026 International Conference for presenting the research paper titled “Paripakvata”. The paper focused on integrating intelligent technologies and modern communication systems to create impactful healthcare solutions, demonstrating strong research, innovation, and presentation capabilities.'
    },
    {
      title: 'Agentx Hackathon Winner',
      issuer: 'Agentx AI',
      date: '2026',
      image: '/Agentx Hackethon.png',
      description: 'Awarded fourth place at the Agentx Hackathon for designing and deploying advanced autonomous AI agents capable of resolving complex tasks.'
    },
    {
      title: 'Techblitz Hackathon Winner',
      issuer: 'Techblitz',
      date: '2026',
      image: '/Techblitz Hackethon.png',
      description: 'Not secured the winning position but gained experience at Techblitz Hackathon, demonstrating speed, creativity, clean coding practices, and high-performance product execution.'
    },
    {
      title: 'VNPS Excellence Award',
      issuer: 'VNPS Technological Event',
      date: '2026',
      image: '/VNPS.png',
      description: 'Achieved Second Place in Vidyavardhini’s National Level Project Showcase (VNPS ’2026) for presenting an innovative technical project among participants from various institutions. The project demonstrated practical problem-solving skills, creativity, and effective implementation of modern technologies. This achievement highlights strong teamwork, technical knowledge, and the ability to present ideas confidently in a competitive environment.'
    },
    {
      title: 'Oscillation',
      issuer: 'Oscillation',
      date: '2026',
      image: '/Oscillation.png',
      description: 'Actively participated in the Technical Paper Presentation event at OSCILLATION ’26, where technical concepts and research ideas were presented before faculty members and peers. The presentation enhanced communication, analytical thinking, and research skills while providing exposure to professional presentation standards and technical discussions.'
    }
  ];

  const handleOpenLightbox = (cert) => {
    setActiveCert(cert);
    setCurrentImgIndex(0);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (activeCert && activeCert.images) {
      setCurrentImgIndex((prev) => (prev + 1) % activeCert.images.length);
    }
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (activeCert && activeCert.images) {
      setCurrentImgIndex((prev) => (prev - 1 + activeCert.images.length) % activeCert.images.length);
    }
  };

  // Framer Motion Variants for Staggered Children Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="skills" className="container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }} className="sr-fade">
        <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1.5rem' }}>Skills & <span className="gradient-text-animated">Certificates</span></h2>

        <div className="glass" style={{ display: 'inline-flex', padding: '0.5rem', gap: '0.5rem', zIndex: 10 }}>
          <button
            onClick={() => setActiveTab('skills')}
            className={`btn ${activeTab === 'skills' ? 'btn-primary' : 'btn-outline'}`}
            style={{ borderRadius: '0.75rem', padding: '0.5rem 2rem' }}
          >
            Capabilities
          </button>
          <button
            onClick={() => setActiveTab('certs')}
            className={`btn ${activeTab === 'certs' ? 'btn-primary' : 'btn-outline'}`}
            style={{ borderRadius: '0.75rem', padding: '0.5rem 2rem' }}
          >
            Certifications
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'skills' ? (
          <motion.div
            key="skills"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}
          >
            {skillCategories.map((cat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="glass card-hover"
                style={{ padding: '2rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ padding: '0.75rem', background: 'var(--gradient)', borderRadius: '0.75rem', color: 'white' }}>
                    {cat.icon}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600 }}>{cat.title}</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {cat.skills.map((skill, si) => (
                    <span
                      key={si}
                      className="skill-chip"
                      style={{
                        padding: '0.4rem 1rem',
                        background: 'var(--card-bg)',
                        border: '1px solid var(--card-border)',
                        borderRadius: '0.5rem',
                        fontSize: '0.875rem'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="certs"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}
          >
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                onClick={() => handleOpenLightbox(cert)}
                className="glass card-hover"
                style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  position: 'relative'
                }}
                whileHover={{ y: -8 }}
              >
                {/* Certificate Image Preview */}
                <div style={{
                  height: '180px',
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                  position: 'relative',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid var(--card-border)'
                }}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    className="cert-preview-img"
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: '1rem',
                    opacity: 0.9
                  }}>
                    <span style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      background: 'var(--gradient)',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '999px',
                      color: '#fff'
                    }}>
                      View Certificate
                    </span>
                  </div>

                  {/* Multiple image badge */}
                  {cert.images && (
                    <div style={{
                      position: 'absolute',
                      top: '0.75rem',
                      right: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      background: 'rgba(0, 0, 0, 0.75)',
                      backdropFilter: 'blur(4px)',
                      padding: '0.35rem 0.65rem',
                      borderRadius: '0.5rem',
                      border: '1px solid rgba(255,255,255,0.1)',
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: 'var(--accent-2)'
                    }}>
                      <Layers size={12} />
                      {cert.images.length} Pages
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <Award size={32} style={{ color: 'var(--accent-1)', flexShrink: 0 }} />
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{cert.title}</h3>
                    <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>
                      {cert.issuer} • <span style={{ fontWeight: 600 }}>{cert.date}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* GORGEOUS LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(15px)',
              zIndex: 99999,
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
                maxWidth: '900px',
                background: 'var(--bg)', /* Ensure background matches current theme exactly */
                border: '1px solid var(--card-border)',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.5)'
              }}
            >
              {/* Left Column: Image Viewer */}
              <div 
                className="lightbox-img-container"
                style={{
                  position: 'relative',
                  background: '#050505',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  borderRight: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeCert.images ? activeCert.images[currentImgIndex] : activeCert.image}
                    src={activeCert.images ? activeCert.images[currentImgIndex] : activeCert.image}
                    alt={activeCert.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      maxWidth: '92%',
                      maxHeight: '92%',
                      objectFit: 'contain',
                      borderRadius: '0.5rem',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                    }}
                  />
                </AnimatePresence>

                {/* Lightbox Slideshow Controls */}
                {activeCert.images && (
                  <>
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
                        transition: 'background 0.2s, transform 0.2s'
                      }}
                      className="btn-control"
                      title="Previous Page"
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
                        transition: 'background 0.2s, transform 0.2s'
                      }}
                      className="btn-control"
                      title="Next Page"
                    >
                      <ChevronRight size={20} />
                    </button>

                    {/* Dot Indicators */}
                    <div style={{
                      position: 'absolute',
                      bottom: '1.25rem',
                      display: 'flex',
                      gap: '0.5rem',
                      background: 'rgba(0,0,0,0.6)',
                      padding: '0.4rem 0.8rem',
                      borderRadius: '999px'
                    }}>
                      {activeCert.images.map((_, idx) => (
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

                    {/* Page counter */}
                    <div style={{
                      position: 'absolute',
                      top: '1rem',
                      left: '1rem',
                      background: 'rgba(0,0,0,0.6)',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '999px',
                      fontSize: '0.75rem',
                      color: 'var(--text-dim)'
                    }}>
                      Page {currentImgIndex + 1} of {activeCert.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Right Column: Information */}
              <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', position: 'relative' }}>
                <button
                  onClick={() => setActiveCert(null)}
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
                  <Award size={20} />
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Verified Credential</span>
                </div>

                <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.5rem', lineHeight: 1.2 }}>
                  {activeCert.title}
                </h3>
                <p style={{ color: 'var(--accent-2)', fontWeight: 500, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                  {activeCert.issuer} • <span style={{ opacity: 0.7 }}>{activeCert.date}</span>
                </p>

                <div style={{
                  height: '1px',
                  background: 'linear-gradient(to right, var(--card-border), transparent)',
                  marginBottom: '1.5rem'
                }} />

                <p style={{
                  color: 'var(--text-dim)',
                  lineHeight: 1.6,
                  fontSize: '1rem',
                  marginBottom: '2rem',
                  flexGrow: 1
                }}>
                  {activeCert.description}
                </p>

                <button
                  onClick={() => setActiveCert(null)}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '0.85rem' }}
                >
                  Close Viewer
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Skills;
