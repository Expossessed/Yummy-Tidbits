import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending an email/message via backend
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 5000);
      
    }, 1500);
  };

  return (
    <main className="contact-page">
      <div className="container">
        <div className="category-header text-center">
          <Link to="/" className="btn-back-home">&larr; Back to Home</Link>
          <h1 className="category-title">Contact Us</h1>
          <p className="category-subtitle">We'd love to hear from you.</p>
        </div>

        <div className="contact-container">
          <div className="contact-info-panel animate-slide-up">
            <h3 className="contact-panel-title">Get In Touch</h3>
            <p className="contact-panel-desc">
              Have a question about an order, a customized cake request, or just want to say hi? 
              Fill out the form and we'll get back to you as soon as possible!
            </p>
            
            <div className="contact-detail-item">
              <span className="material-symbols-outlined">location_on</span>
              <div>
                <strong>Visit Our Cafe</strong>
                <p>RAMS 1911 bldg. ML Quezon national highway<br/>Brgy. Gabi Cordova Cebu, 6015</p>
              </div>
            </div>
            
            <div className="contact-detail-item">
              <span className="material-symbols-outlined">call</span>
              <div>
                <strong>Call Us</strong>
                <p>0995 670 5265</p>
              </div>
            </div>
            
            <div className="contact-detail-item">
              <span className="material-symbols-outlined">mail</span>
              <div>
                <strong>Email Us</strong>
                <p>yummytidbitsbymommyanne@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form-panel animate-fade-in delay-200">
            {isSent ? (
              <div className="success-message animate-scale-in">
                <span className="material-symbols-outlined success-icon">check_circle</span>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out to Yummy Tidbits. We will get back to you shortly.</p>
                <button className="btn-primary mt-4" onClick={() => setIsSent(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>YOUR NAME *</label>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="e.g. John Doe"
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label>YOUR EMAIL *</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="e.g. john@example.com"
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label>SUBJECT *</label>
                  <input 
                    type="text" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    placeholder="e.g. Customized Cake Inquiry"
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <label>MESSAGE *</label>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="How can we help you today?"
                    rows="5"
                    required 
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary submit-btn" 
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
