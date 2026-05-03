import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OrderModal from './components/OrderForm/OrderModal';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import FullMenuPage from './pages/FullMenuPage';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');

  const handleOpenModal = (productName = '') => {
    // If productName is an event object (e.g. from a button click without params), ignore it
    if (typeof productName === 'string') {
      setSelectedProduct(productName);
    } else {
      setSelectedProduct('');
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Router>
      <div className="app-container">
        <Navbar onOrderClick={handleOpenModal} />
        
        <Routes>
          <Route path="/" element={<Home onOrderClick={handleOpenModal} />} />
          <Route path="/menu" element={<FullMenuPage onOrderClick={handleOpenModal} />} />
          <Route path="/category/:categoryName" element={<CategoryPage onOrderClick={handleOpenModal} />} />
        </Routes>
        
        <Footer />

        <OrderModal 
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
          initialProduct={selectedProduct} 
        />
      </div>
    </Router>
  );
}

export default App;
