import React from 'react';
import { Link } from 'react-router-dom';
import './MenuSection.css';

const categories = [
  { id: 'cake', name: 'Cakes', desc: 'Freshly baked daily with premium ingredients', image: '/YummyTidbits_images/Chocolate_Cake.jpg' },
  { id: 'pastries', name: 'Pastries & Cookies', desc: 'Sweet treats for your cozy afternoons', image: '/YummyTidbits_images/Cookies.jpg' },
  { id: 'desserts', name: 'Desserts & Sweets', desc: 'Delightful sweets like Leche Flan', image: '/YummyTidbits_images/Leche_Flan.jpg' },
  { id: 'pasta', name: 'Pasta & Meals', desc: 'Hearty and savory dishes', image: '/YummyTidbits_images/Pastas.jpg' },
  { id: 'customized-cakes', name: 'Customized Cakes', desc: 'Made to order for your special moments', image: '/YummyTidbits_images/Carrot_Cake.jpg' },
];

const MenuSection = () => {
  return (
    <section id="menu" className="section menu-section">
      <div className="container">
        <div className="section-header text-center">
          <span className="title-accent">Our Offerings</span>
          <h2 className="section-title">Fresh from the Oven</h2>
        </div>
        
        <div className="menu-grid">
          {categories.map((cat, index) => (
            <Link 
              to={`/category/${cat.id}`}
              key={cat.id} 
              className={`menu-card delay-${(index % 3 + 1) * 100} animate-slide-up`}
            >
              <div className="menu-image-wrapper">
                <img src={cat.image} alt={cat.name} className="menu-image" />
              </div>
              <h3 className="menu-item-title">{cat.name}</h3>
              <p className="menu-item-desc">{cat.desc}</p>
              <div className="menu-order-hint">
                <span>View Products</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
