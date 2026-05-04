import React from 'react';
import './QuickViewModal.css';

const QuickViewModal = ({ isOpen, onClose, product, onAddToCart }) => {
  if (!isOpen || !product) return null;

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

  return (
    <div className="qv-overlay animate-fade-in" onClick={onClose}>
      <div className="qv-container animate-slide-up" onClick={e => e.stopPropagation()}>
        <button className="qv-close" onClick={onClose} aria-label="Close modal">
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="qv-content">
          <div className="qv-image-side">
            <img src={product.image} alt={product.name} className="qv-image" />
          </div>

          <div className="qv-details-side">
            <div className="qv-category">{product.categoryLabel}</div>
            <h2 className="qv-title">{product.name}</h2>

            <div className="qv-rating-row">
              <div className="qv-stars">{renderStars(product.rating)}</div>
              <span className="qv-rating-text">({product.rating})</span>
            </div>

            <div className="qv-price">₱{product.price}</div>

            <div className="qv-description">
              <p>{product.desc}</p>
            </div>

            <button className="btn-add-to-cart solid" onClick={() => onAddToCart(product.name)}>
              ORDER NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickViewModal;
