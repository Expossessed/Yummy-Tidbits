import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onOrderClick }) => {
  const location = useLocation();
  const currentPath = location.pathname + location.hash;

  return (
    <header className="navbar">
      <div className="container navbar-content">
        <div className="logo-container">
          <img src="/YummyTidbits_images/YummyTidbits_Logo.png" alt="Yummy Tidbits Logo" className="navbar-logo" />
          <h1 className="title-accent">Yummy Tidbits</h1>
        </div>

        <nav className="nav-links">
          <Link to="/" className={currentPath === '/' ? 'active' : ''}>Home</Link>
          <Link to="/menu" className={currentPath === '/menu' ? 'active' : ''}>Menu</Link>
          <Link to="/#about" className={currentPath === '/#about' ? 'active' : ''}>About</Link>
          <Link to="/contact" className={currentPath === '/contact' ? 'active' : ''}>Contact</Link>
        </nav>

        <button className="btn-primary order-btn" onClick={onOrderClick}>
          Order Now
        </button>
      </div>
    </header>
  );
};

export default Navbar;
