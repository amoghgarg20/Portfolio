import React from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedBounce = ({ children, duration = 1000, delay = 0 }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '-10% 0px',
  });

  const styles = {
    transition: `all ${duration}ms ease-out ${delay}ms`,
    transform: inView ? 'translateY(0px)' : 'translateY(30px)',
    opacity: inView ? 1 : 0,
  };

  return (
    <div ref={ref} style={styles}>
      {children}
    </div>
  );
};

export default AnimatedBounce;