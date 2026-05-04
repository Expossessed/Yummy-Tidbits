import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import QuickViewModal from '../components/QuickViewModal';
import { allProducts } from '../data/products';
import './FullMenuPage.css';

const FullMenuPage = ({ onOrderClick }) => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [activeFilter, setActiveFilter] = useState('All');

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="material-symbols-outlined star filled">star</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className="material-symbols-outlined star half">star_half</span>);
      } else {
        stars.push(<span key={i} className="material-symbols-outlined star empty">star</span>);
      }
    }
    return stars;
  };

  // Flatten products and attach original category key for filtering
  const allFlattenedProducts = [];
  Object.keys(allProducts).forEach(categoryKey => {
    allProducts[categoryKey].forEach(item => {
      allFlattenedProducts.push({
        ...item,
        filterCategory: categoryKey
      });
    });
  });

  const categories = [
    { label: 'All', value: 'All' },
    { label: 'Cakes', value: 'cake' },
    { label: 'Pastries', value: 'pastries' },
    { label: 'Desserts', value: 'desserts' },
    { label: 'Pasta', value: 'pasta' },
    { label: 'Custom', value: 'customized-cakes' }
  ];

  const filteredProducts = activeFilter === 'All' 
    ? allFlattenedProducts 
    : allFlattenedProducts.filter(item => item.filterCategory === activeFilter);

  return (
    <main className="full-menu-page">
      <div className="container">
        <div className="category-header text-center">
          <Link to="/" className="btn-back-home">&larr; Back to Home</Link>
          <h1 className="category-title">Our Full Menu</h1>
          <p className="category-subtitle">Everything freshly made for you.</p>
        </div>

        <div className="menu-filters">
          {categories.map(cat => (
            <button
              key={cat.value}
              className={`filter-btn ${activeFilter === cat.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="empty-category text-center">
            <p>We are currently updating our menu for this category. Please check back later!</p>
          </div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((item, index) => (
              <div
                key={item.id}
                className={`product-card delay-${(index % 3 + 1) * 100} animate-slide-up`}
              >
                <div className="product-image-wrapper">
                  {item.isBestseller && <span className="badge-bestseller">BESTSELLER</span>}
                  <img src={item.image} alt={item.name} className="product-image" />

                  <div className="quick-view-overlay">
                    <button
                      className="btn-quick-view"
                      onClick={() => setQuickViewProduct(item)}
                    >
                      <span className="material-symbols-outlined">visibility</span>
                      Quick View
                    </button>
                  </div>
                </div>

                <div className="product-info">
                  <div className="product-meta">
                    <span className="product-category">{item.categoryLabel}</span>
                    <div className="product-stars">{renderStars(item.rating)}</div>
                  </div>

                  <h3 className="product-item-title">{item.name}</h3>
                  <span className="product-price">₱{item.price}</span>
                  <p className="product-item-desc">{item.desc}</p>

                  <div className="product-actions">
                    <button
                      className="btn-add-to-cart outline"
                      onClick={() => onOrderClick(item.name)}
                    >
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <QuickViewModal
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        product={quickViewProduct}
        onAddToCart={(productName) => {
          setQuickViewProduct(null);
          onOrderClick(productName);
        }}
      />
    </main>
  );
};

export default FullMenuPage;
