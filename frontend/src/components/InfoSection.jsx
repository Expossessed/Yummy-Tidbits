import React from 'react';
import './InfoSection.css';

const InfoSection = () => {
  return (
    <section id="about" className="section info-section">
      <div className="container">
        <div className="info-grid">

          <div className="info-content animate-slide-up">
            <span className="title-accent">Visit Us</span>
            <h2 className="section-title">We'd love to see you</h2>
            <p className="info-desc">
              Come by and experience the warmth of our cozy neighborhood cafe.
              Whether you're grabbing a quick coffee or celebrating a special moment,
              we have something sweet for you.
            </p>

            <div className="info-details">
              <div className="info-item">
                <span className="material-symbols-outlined">location_on</span>
                <div>
                  <strong>Location</strong>
                  <p>RAMS 1911 bldg. ML Quezon national highway Brgy. Gabi Cordova Cebu, Cordova, Philippines, 6015</p>
                </div>
              </div>

              <div className="info-item">
                <span className="material-symbols-outlined">schedule</span>
                <div>
                  <strong>Opening Hours</strong>
                  <p>Sun - Thurs: 11:00 AM - 8:00 PM</p>
                  <p>Fri - Sat: 11:00 AM - 9:00 PM</p>
                </div>
              </div>

              <div className="info-item">
                <span className="material-symbols-outlined">call</span>
                <div>
                  <strong>Contact</strong>
                  <p>0995 670 5265</p>
                  <p>yummytidbitsbymommyanne@gmail.com</p>
                </div>
              </div>

              <div className="info-services">
                <span className="service-tag">Dine in</span>
                <span className="service-dot">•</span>
                <span className="service-tag">Take out</span>
                <span className="service-dot">•</span>
                <span className="service-tag">Delivery</span>
                <span className="service-dot">•</span>
                <span className="service-tag">Reservations</span>
              </div>
            </div>
          </div>

          <div className="info-image-container animate-fade-in delay-200">
            <div className="info-image-placeholder" style={{ padding: 0, overflow: 'hidden' }}>
              <iframe 
                width="100%" 
                height="100%" 
                style={{ border: 0, display: 'block' }} 
                loading="lazy" 
                allowFullScreen 
                referrerPolicy="no-referrer-when-downgrade" 
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=RAMS%201911%20bldg.%20ML%20Quezon%20national%20highway%20Brgy.%20Gabi%20Cordova%20Cebu+(Yummy%20Tidbits%20by%20Mommy%20Anne)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                title="Yummy Tidbits Location"
              ></iframe>
            </div>
            <div className="info-shape"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InfoSection;
