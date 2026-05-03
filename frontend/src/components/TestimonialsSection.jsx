import React, { useState, useEffect } from 'react';
import './TestimonialsSection.css';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    review: 'The Customized Cakes here are absolutely stunning and taste even better! Mommy Anne made my daughter\'s birthday so special.',
    rating: 5,
  },
  {
    id: 2,
    name: 'James L.',
    review: 'Best cookies in town. The macadamia ones melt in your mouth. Truly a cozy neighborhood cafe vibe!',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Maria C.',
    review: 'I order their pasta trays for every family gathering. Super creamy and perfectly cooked every single time.',
    rating: 4.9,
  },
  {
    id: 4,
    name: 'Anna P.',
    review: 'The presentation and the taste are simply top-notch! The Leche Flan is the creamiest I have ever had.',
    rating: 4,
  },
  {
    id: 5,
    name: 'David R.',
    review: 'Their chocolate cake is so decadent and rich. It\'s now our family\'s go-to dessert for weekends.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Chloe T.',
    review: 'The cupcakes are incredibly fluffy and the frosting isn\'t too sweet. Exactly how I like it!',
    rating: 4.8,
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="material-symbols-outlined filled">star</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className="material-symbols-outlined half">star_half</span>);
      } else {
        stars.push(<span key={i} className="material-symbols-outlined empty">star</span>);
      }
    }
    return stars;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 900) {
        setItemsToShow(1);
      } else {
        setItemsToShow(3);
      }
    };
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-play feature
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000); // Slide every 6 seconds
    return () => clearInterval(timer);
  }, [maxIndex]); // Re-bind if maxIndex changes

  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="title-accent">Testimonials</span>
          <h2 className="section-title">What Our Customers Say</h2>
        </div>
        
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous testimonial">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          
          <div className="carousel-track-wrapper">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
            >
              {testimonials.map((testi) => (
                <div key={testi.id} className="carousel-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-stars">
                      {renderStars(testi.rating)}
                    </div>
                    <p className="testimonial-review">"{testi.review}"</p>
                    <h4 className="testimonial-name">- {testi.name}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className="carousel-btn next" onClick={nextSlide} aria-label="Next testimonial">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
        
        <div className="carousel-dots">
          {[...Array(maxIndex + 1)].map((_, idx) => (
            <button 
              key={idx} 
              className={`carousel-dot ${idx === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
