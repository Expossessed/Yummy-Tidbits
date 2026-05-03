import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onOrderClick }) => {
  return (
    <header className="navbar">
      <div className="container navbar-content">
        <div className="logo-container">
          <img src="/YummyTidbits_images/YummyTidbits_Logo.png" alt="Yummy Tidbits Logo" className="navbar-logo" />
          <h1 className="title-accent">Yummy Tidbits</h1>
        </div>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/#about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <button className="btn-primary order-btn" onClick={onOrderClick}>
          Order Now
        </button>
      </div>
    </header>
  );
};

export default Navbar;
