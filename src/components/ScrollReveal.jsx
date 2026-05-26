import { useEffect } from 'react';

const ScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sr-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with sr-* classes
    document.querySelectorAll('.sr-fade, .sr-left, .sr-right, .sr-scale').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
};

export default ScrollReveal;
