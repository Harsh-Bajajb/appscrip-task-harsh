import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="container">
      <div className="header-main">
        <div className="header-top-row">
          <div className="header-left-icon">
            <button className="mobile-menu-btn" aria-label="Menu" style={{ marginRight: '10px' }}>
              <Image src="/assets/solar_hamburger-menu-linear.png" alt="Menu" width={24} height={24} />
            </button>
            <Image src="/assets/Logo-1.png" alt="Logo Icon" width={36} height={36} />
          </div>
          
          <div className="logo">LOGO</div>
          
          <div className="header-icons">
            {/* Search Icon */}
            <button aria-label="Search">
              <svg viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20L16 16" />
              </svg>
            </button>
            {/* Heart Icon */}
            <button aria-label="Favorites">
              <svg viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
            {/* Cart Icon */}
            <button aria-label="Cart">
              <svg viewBox="0 0 24 24">
                <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            {/* User Icon */}
            <button aria-label="Profile" className="hidden-mobile">
              <svg viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </button>
            <button aria-label="Language" className="hidden-mobile" style={{ fontSize: '15px', fontWeight: '700', border: 'none', display: 'flex', alignItems: 'center', gap: '5px' }}>
              ENG 
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
          </div>
        </div>
        
        <nav className="header-nav">
          <a href="#">SHOP</a>
          <a href="#">SKILLS</a>
          <a href="#">STORIES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT US</a>
        </nav>
      </div>
    </header>
  );
}
