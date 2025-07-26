import React, { memo, useState } from "react";
import AnimatedBounce from "./AnimatedBounce";
import LazyImage from "./LazyImage";

const Testimonials = memo(() => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <AnimatedBounce>
      <section id="testimonials">
        <div className="text-container">
          <div className="row">
            <h1>TESTIMONIAL</h1>
            <div className="two columns header-col" />
            <div className="testimonial-image-container">
              {!imageError ? (
                <LazyImage 
                  src="images/5.jpg" 
                  alt="Testimonial showcase" 
                  className="testimonial-image" 
                  loading="lazy"
                  onError={handleImageError}
                />
              ) : (
                <div className="testimonial-image-placeholder">
                  <div className="placeholder-content">
                    <h3>Portfolio Showcase</h3>
                    <p>View my work and projects</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </AnimatedBounce>
  );
});

Testimonials.displayName = "Testimonials";

export default Testimonials;
