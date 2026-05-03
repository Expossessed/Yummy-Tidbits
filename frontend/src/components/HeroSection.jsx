import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = ({ onOrderClick }) => {
  return (
    <section className="hero-section">
      <div className="container hero-content animate-slide-up">
        <span className="title-accent">Welcome to</span>
        <h1 className="hero-title">Yummy Tidbits</h1>
        <p className="hero-subtitle">Your cozy neighborhood LITOL CAFE.</p>
        
        <div className="hero-actions delay-200 animate-slide-up">
          <button className="btn-white" onClick={onOrderClick}>
            Order Now
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
          <Link to="/menu" className="btn-primary">
            View Menu
          </Link>
        </div>
      </div>
      
      {/* Decorative elements to add the "cozy" vibe */}
      <div className="hero-decoration dec-1"></div>
      <div className="hero-decoration dec-2"></div>
    </section>
  );
};

export default HeroSection;
