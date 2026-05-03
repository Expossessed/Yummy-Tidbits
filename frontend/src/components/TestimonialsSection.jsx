import React from 'react';
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
    rating: 5,
  },
  {
    id: 3,
    name: 'Maria C.',
    review: 'I order their pasta trays for every family gathering. Super creamy and perfectly cooked every single time.',
    rating: 5,
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="section-header">
          <span className="title-accent">Testimonials</span>
          <h2 className="section-title">What Our Customers Say</h2>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testi) => (
            <div key={testi.id} className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(testi.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined filled">star</span>
                ))}
              </div>
              <p className="testimonial-review">"{testi.review}"</p>
              <h4 className="testimonial-name">- {testi.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
