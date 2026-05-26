import { useEffect, useRef, useState } from 'react';

const CursorGlow = () => {
  const glowRef = useRef(null);
  const dotRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;

      // Hide custom cursor and restore native cursor inside iframe viewports
      if (target && (target.tagName === 'IFRAME' || target.closest('iframe') || target.closest('.iframe-container'))) {
        if (dotRef.current) dotRef.current.style.opacity = '0';
        if (glowRef.current) glowRef.current.style.opacity = '0';
        return;
      } else {
        if (dotRef.current) {
          dotRef.current.style.opacity = '1';
        }
        if (glowRef.current) {
          glowRef.current.style.opacity = '1';
        }
      }

      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.closest('a') ||
          target.closest('button') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('[role="button"]'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    let animFrame;
    const animate = () => {
      glowPos.current.x += (pos.current.x - glowPos.current.x) * 0.08;
      glowPos.current.y += (pos.current.y - glowPos.current.y) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.left = `${glowPos.current.x}px`;
        glowRef.current.style.top = `${glowPos.current.y}px`;
      }
      animFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <>
      {/* Large soft glow that lags behind */}
      <div
        ref={glowRef}
        style={{
          position: 'fixed',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--glow) 0%, transparent 70%)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 999998,
          transition: 'opacity 0.3s ease',
          mixBlendMode: 'screen',
        }}
      />
      {/* Circular pointer that follows immediately */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: isHovered ? '48px' : '24px',
          height: isHovered ? '48px' : '24px',
          borderRadius: '50%',
          border: '2px solid var(--accent-1)',
          background: isHovered ? 'rgba(248, 61, 61, 0.15)' : 'rgba(248, 61, 61, 0.05)',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 999999,
          boxShadow: isHovered ? '0 0 20px var(--accent-1)' : '0 0 10px var(--accent-1)',
          transition: 'width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Tiny center dot */}
        <div
          style={{
            width: isHovered ? '0px' : '4px',
            height: isHovered ? '0px' : '4px',
            borderRadius: '50%',
            background: 'var(--accent-1)',
            transition: 'width 0.2s ease, height 0.2s ease',
          }}
        />
      </div>
    </>
  );
};

export default CursorGlow;
