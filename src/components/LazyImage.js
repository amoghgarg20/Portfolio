import React, { useState, useRef, useEffect } from 'react';

const LazyImage = React.memo(({ src, alt, className, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={className} {...props}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          style={{
            transition: 'opacity 0.3s',
            opacity: isLoaded ? 1 : 0,
          }}
          onLoad={() => setIsLoaded(true)}
          className={className}
        />
      )}
    </div>
  );
});

LazyImage.displayName = 'LazyImage';

export default LazyImage;