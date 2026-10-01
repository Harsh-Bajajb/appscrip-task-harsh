'use client';

import React, { useState } from 'react';

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-subscribe">
            <h3 className="footer-heading">BE THE FIRST TO KNOW</h3>
            <p className="footer-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.</p>
            <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your e-mail..." 
                className="subscribe-input"
                aria-label="Email for subscription"
              />
              <button type="submit" className="subscribe-btn">SUBSCRIBE</button>
            </form>
          </div>
          
          <div className="footer-contact">
            <h3 className="footer-heading">CALL US</h3>
            <p className="footer-text">+44 221 133 5360 • customercare@mettamuse.com</p>
            <h3 className="footer-heading" style={{ marginTop: '25px' }}>CURRENCY</h3>
            <p className="footer-text" style={{ fontWeight: '700', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '24px' }}>🇺🇸</span> • USD
            </p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className={`footer-links ${openSection === 'metta' ? 'open' : ''}`}>
            <h3 className="footer-heading mobile-accordion" onClick={() => toggleSection('metta')}>
              mettā muse
              <span className="accordion-icon mobile-only">v</span>
            </h3>
            <ul className="footer-list">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Stories</a></li>
              <li><a href="#">Artisans</a></li>
              <li><a href="#">Boutiques</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">EU Compliances Docs</a></li>
            </ul>
          </div>
          
          <div className={`footer-links ${openSection === 'quick' ? 'open' : ''}`}>
            <h3 className="footer-heading mobile-accordion" onClick={() => toggleSection('quick')}>
              QUICK LINKS
              <span className="accordion-icon mobile-only">v</span>
            </h3>
            <ul className="footer-list">
              <li><a href="#">Orders & Shipping</a></li>
              <li><a href="#">Join/Login as a Seller</a></li>
              <li><a href="#">Payment & Pricing</a></li>
              <li><a href="#">Return & Refunds</a></li>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          
          <div className={`footer-social ${openSection === 'follow' ? 'open' : ''}`}>
            <h3 className="footer-heading mobile-accordion" onClick={() => toggleSection('follow')}>
              FOLLOW US
              <span className="accordion-icon mobile-only">v</span>
            </h3>
            <div className="social-icons footer-list">
              <a href="#" className="social-icon" aria-label="Instagram">IG</a>
              <a href="#" className="social-icon" aria-label="LinkedIn">IN</a>
            </div>
            
            <h3 className="footer-heading" style={{ marginTop: '40px' }}>mettā muse ACCEPTS</h3>
            <div className="payment-methods">
              <span style={{ display: 'inline-block', background: '#fff', width: '40px', height: '25px', borderRadius: '4px' }}></span>
              <span style={{ display: 'inline-block', background: '#fff', width: '40px', height: '25px', borderRadius: '4px' }}></span>
              <span style={{ display: 'inline-block', background: '#fff', width: '40px', height: '25px', borderRadius: '4px' }}></span>
              <span style={{ display: 'inline-block', background: '#fff', width: '40px', height: '25px', borderRadius: '4px' }}></span>
              <span style={{ display: 'inline-block', background: '#fff', width: '40px', height: '25px', borderRadius: '4px' }}></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
