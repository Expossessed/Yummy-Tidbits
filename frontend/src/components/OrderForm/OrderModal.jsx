import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { allProducts } from '../../data/products';
import './OrderModal.css';

// Flatten the allProducts object into a single array of product names
const allProductNames = Object.values(allProducts).flat().map(p => p.name);

const OrderModal = ({ isOpen, onClose, initialProduct = '' }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    product: initialProduct,
    quantity: 1,
    fullName: '',
    contactNumber: '',
    deliveryMode: '',
    deliveryAddress: '',
    preferredDate: '',
    specialInstructions: ''
  });

  const [generatedMessage, setGeneratedMessage] = useState('');

  // Update initial product if changed from outside
  useEffect(() => {
    if (initialProduct) {
      setFormData(prev => ({ ...prev, product: initialProduct }));
    }
  }, [initialProduct]);

  // Reset when opened
  useEffect(() => {
    if (isOpen) {
      setStep(1);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const generateMessage = () => {
    const { product, quantity, fullName, contactNumber, deliveryMode, deliveryAddress, preferredDate, specialInstructions } = formData;
    
    let message = `Hi, I'm ${fullName}! I would like to order ${quantity}x ${product ? product : 'treat(s)'}. `;
    
    if (deliveryMode === 'Delivery') {
      message += `Please deliver it to ${deliveryAddress} on ${preferredDate}. `;
    } else {
      message += `I will pick it up on ${preferredDate}. `;
    }

    if (specialInstructions) {
      message += `Could you please include a note that says: "${specialInstructions}" `;
    }

    message += `My contact number is ${contactNumber} if you need to reach me. Thank you!`;

    setGeneratedMessage(message);
    setStep(2);
  };

  const handleCopyAndOpen = () => {
    navigator.clipboard.writeText(generatedMessage)
      .then(() => {
        // Open Messenger link in a new tab with the text parameter (auto-fill if supported by their device/app)
        const encodedMessage = encodeURIComponent(generatedMessage);
        window.open(`https://m.me/100063696411772?text=${encodedMessage}`, '_blank');
        onClose(); // Optional: close modal after action
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
        alert('Failed to copy text to clipboard. Please copy manually.');
      });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container animate-scale-in" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="modal-header">
          <span className="modal-supertitle">YUMMY TIDBITS</span>
          <h2 className="modal-title">{step === 1 ? 'Order Details' : 'Review Order'}</h2>
        </div>

        {step === 1 ? (
          <div className="modal-body form-step animate-fade-in">
            <div className="form-group">
              <label>PRODUCT *</label>
              {initialProduct ? (
                <input 
                  type="text" 
                  name="product" 
                  value={formData.product} 
                  readOnly
                  className="product-locked"
                />
              ) : (
                <select 
                  name="product" 
                  value={formData.product} 
                  onChange={handleChange} 
                  required
                >
                  <option value="" disabled>Select a product...</option>
                  {allProductNames.map((name, idx) => (
                    <option key={idx} value={name}>{name}</option>
                  ))}
                </select>
              )}
            </div>

            <div className="form-group">
              <label>QUANTITY *</label>
              <input 
                type="number" 
                name="quantity" 
                value={formData.quantity} 
                onChange={handleChange} 
                min="1"
                required 
              />
            </div>

            <div className="form-group">
              <label>FULL NAME *</label>
              <input 
                type="text" 
                name="fullName" 
                value={formData.fullName} 
                onChange={handleChange} 
                placeholder="e.g. John Doe"
                required 
              />
            </div>

            <div className="form-group">
              <label>CONTACT NUMBER *</label>
              <input 
                type="text" 
                name="contactNumber" 
                value={formData.contactNumber} 
                onChange={handleChange} 
                placeholder="e.g. 0912 345 6789"
                required 
              />
            </div>

            <div className="form-group radio-group">
              <label>DELIVERY MODE *</label>
              <div className="radio-options">
                <label className="radio-label">
                  <input 
                    type="radio" 
                    name="deliveryMode" 
                    value="Delivery" 
                    checked={formData.deliveryMode === 'Delivery'} 
                    onChange={handleChange} 
                  />
                  Delivery
                </label>
                <label className="radio-label">
                  <input 
                    type="radio" 
                    name="deliveryMode" 
                    value="Pickup" 
                    checked={formData.deliveryMode === 'Pickup'} 
                    onChange={handleChange} 
                  />
                  Pickup
                </label>
              </div>
            </div>

            {formData.deliveryMode === 'Delivery' && (
              <div className="form-group">
                <label>DELIVERY ADDRESS *</label>
                <input 
                  type="text" 
                  name="deliveryAddress" 
                  value={formData.deliveryAddress} 
                  onChange={handleChange} 
                  placeholder="Enter your complete delivery address"
                  required 
                />
              </div>
            )}

            <div className="form-group">
              <label>PREFERRED DATE *</label>
              <div className="custom-datepicker-wrapper">
                <DatePicker
                  selected={formData.preferredDate ? new Date(formData.preferredDate + 'T00:00:00') : null}
                  onChange={(date) => {
                    if (date) {
                      const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
                      handleChange({ target: { name: 'preferredDate', value: formattedDate } });
                    } else {
                      handleChange({ target: { name: 'preferredDate', value: '' } });
                    }
                  }}
                  minDate={new Date()}
                  placeholderText="Select a date"
                  className="react-datepicker-custom"
                  required
                />
                <span className="material-symbols-outlined calendar-icon">calendar_month</span>
              </div>
            </div>

            <div className="form-group">
              <label>SPECIAL INSTRUCTIONS</label>
              <textarea 
                name="specialInstructions" 
                value={formData.specialInstructions} 
                onChange={handleChange} 
                placeholder="Any special requests? (e.g., Happy Birthday message)"
                rows="3"
              ></textarea>
            </div>

            <button 
              className="btn-primary modal-action-btn" 
              onClick={generateMessage}
              disabled={!formData.product || !formData.fullName || !formData.contactNumber || !formData.preferredDate || !formData.deliveryMode || (formData.deliveryMode === 'Delivery' && !formData.deliveryAddress)}
            >
              GENERATE MESSAGE
            </button>
          </div>
        ) : (
          <div className="modal-body review-step animate-fade-in">
            <div className="message-preview">
              "{generatedMessage}"
            </div>

            <button className="btn-primary modal-action-btn messenger-btn" onClick={handleCopyAndOpen}>
              <span className="material-symbols-outlined">chat</span>
              COPY & OPEN MESSENGER
            </button>
            
            <button className="btn-back" onClick={() => setStep(1)}>
              &larr; BACK TO EDIT
            </button>
            
            <p className="clipboard-hint">YOUR MESSAGE WILL BE COPIED TO CLIPBOARD</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderModal;
