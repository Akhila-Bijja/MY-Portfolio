import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, FileText, X, Briefcase, Award } from 'lucide-react';

const Experience = () => {
  const [activeCert, setActiveCert] = useState(null);

  const experiences = [
    {
      company: 'Kiruvar Technologies',
      role: 'MERN Stack Web Developer Intern',
      period: 'May - Sept 2026 - Present',
      desc: 'Selected as a Junior MERN Stack Developer Intern at Kiruvar Technology for a 4-month remote internship program. Worked on full-stack web development using MongoDB, Express.js, React.js, and Node.js, gaining hands-on experience in frontend/backend development, debugging, teamwork, and real-world project workflows.',
      certificate: '/Kiruvar Intership.pdf',
      type: 'pdf'
    },
    {
      company: 'Oracle',
      role: 'Database Intern',
      period: 'June 2025',
      desc: 'Successfully completed the Oracle Academy Database Foundations – English certification program focused on database concepts, SQL fundamentals, and data management techniques. The course provided a strong understanding of relational databases, data organization, and basic query operations, strengthening core knowledge required for software development and data-driven applications.',
      certificate: '/Oracle Intership.png',
      type: 'image'
    }
  ];

  return (
    <section id="experience" className="container">
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>
          Work <span className="gradient-text">Experience</span>
        </h2>
        <p style={{ color: 'var(--text-dim)', fontStyle: 'italic', fontSize: '1.1rem' }}>
          My professional journey and internship highlights in software engineering.
        </p>
      </div>

      <div style={{ position: 'relative', maxWidth: '850px', margin: '0 auto' }}>
        {/* Timeline main axis */}
        <div style={{
          position: 'absolute',
          left: '20px',
          top: '10px',
          bottom: '10px',
          width: '2px',
          background: 'var(--gradient)',
          opacity: 0.35
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ position: 'relative', paddingLeft: '4rem' }}
            >
              {/* Outer Glow Timeline Node */}
              <div style={{
                position: 'absolute',
                left: '11px',
                top: '6px',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'var(--gradient)',
                boxShadow: '0 0 15px var(--accent-1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 2
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--bg)',
                }} />
              </div>

              <div className="glass card-hover" style={{ padding: '2.5rem', transition: 'all 0.3s ease' }}>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <div>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text)' }}>
                      {exp.role}
                    </h3>
                    <h4 style={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: 'var(--accent-2)',
                      marginTop: '0.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <Briefcase size={16} />
                      {exp.company}
                    </h4>
                  </div>
                  <span style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: 'var(--text-dim)',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    padding: '0.4rem 1rem',
                    borderRadius: '999px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontStyle: 'italic'
                  }}>
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                </div>

                <p style={{
                  color: 'var(--text-dim)',
                  lineHeight: 1.7,
                  fontSize: '1.05rem',
                  marginBottom: exp.certificate ? '1.5rem' : '0'
                }}>
                  {exp.desc}
                </p>

                {/* Certificate Attachment Trigger Buttons */}
                {exp.certificate && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    <button
                      onClick={() => setActiveCert({
                        url: exp.certificate,
                        type: exp.type,
                        title: `${exp.company} Internship Certificate`
                      })}
                      className="btn btn-outline"
                      style={{
                        padding: '0.5rem 1.25rem',
                        borderRadius: '0.75rem',
                        fontSize: '0.875rem',
                        background: 'rgba(255,255,255,0.02)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}
                    >
                      {exp.type === 'pdf' ? (
                        <FileText size={16} style={{ color: 'var(--accent-1)' }} />
                      ) : (
                        <Award size={16} style={{ color: 'var(--accent-1)' }} />
                      )}
                      View Certificate ({exp.type.toUpperCase()})
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FULL-SCREEN GORGEOUS EMBEDDED LIGHTBOX (FOR IMAGES & PDF IFRAMES) */}
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
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              backdropFilter: 'blur(15px)',
              zIndex: 999999, // Render on top of everything
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
              className="glass"
              style={{
                width: '100%',
                maxWidth: activeCert.type === 'pdf' ? '950px' : '750px',
                background: 'rgba(20, 20, 20, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6)'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveCert(null)}
                style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  background: 'rgba(0,0,0,0.5)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: 'white',
                  cursor: 'pointer',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  transition: 'color 0.2s, background 0.2s'
                }}
                className="btn-close"
              >
                <X size={18} />
              </button>

              <div style={{
                background: '#050505',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: activeCert.type === 'pdf' ? '3.5rem 1.5rem 1.5rem 1.5rem' : '2.5rem 1.5rem 1.5rem 1.5rem',
                maxHeight: '80vh',
                overflowY: 'auto'
              }}>
                {activeCert.type === 'image' ? (
                  <img
                    src={activeCert.url}
                    alt={activeCert.title}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      objectFit: 'contain',
                      borderRadius: '0.75rem',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                    }}
                  />
                ) : (
                  <div className="iframe-container" style={{ width: '100%' }}>
                    <iframe
                      src={activeCert.url}
                      title={activeCert.title}
                      style={{
                        width: '100%',
                        height: '65vh',
                        border: 'none',
                        borderRadius: '0.75rem',
                        background: '#ffffff'
                      }}
                    />
                  </div>
                )}
              </div>

              <div style={{
                padding: '1.5rem 2rem',
                textAlign: 'center',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(0,0,0,0.3)'
              }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                  {activeCert.title}
                </h3>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
                  Verified Internship Credential of Akhila Bijja
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;
