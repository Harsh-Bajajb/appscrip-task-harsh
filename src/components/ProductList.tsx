'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
}

const SORT_OPTIONS = [
  'RECOMMENDED',
  'NEWEST FIRST',
  'POPULAR',
  'PRICE: HIGH TO LOW',
  'PRICE: LOW TO HIGH'
];

export default function ProductList({ initialProducts }: { initialProducts: Product[] }) {
  const [showFilters, setShowFilters] = useState(true);
  const [sortOrder, setSortOrder] = useState('RECOMMENDED');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Simple sorting logic
  const products = [...initialProducts].sort((a, b) => {
    if (sortOrder === 'PRICE: HIGH TO LOW') return b.price - a.price;
    if (sortOrder === 'PRICE: LOW TO HIGH') return a.price - b.price;
    return 0; 
  });

  return (
    <>
      <div className="filter-bar">
        <div className="filter-bar-left">
          <span style={{ fontSize: '18px', fontWeight: '800' }}>3425 ITEMS</span>
          <button 
            className="toggle-filter-btn hidden-mobile" 
            onClick={() => setShowFilters(!showFilters)}
            style={{ fontWeight: '600' }}
          >
            {showFilters ? '< HIDE FILTER' : '> SHOW FILTER'}
          </button>
          <button 
            className="toggle-filter-btn mobile-only" 
            onClick={() => setShowFilters(!showFilters)}
            style={{ fontWeight: '700' }}
          >
            FILTER
          </button>
        </div>
        
        <div className="filter-bar-right" ref={dropdownRef}>
          <div className="sort-dropdown-container">
            <button 
              className="sort-toggle"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {sortOrder} 
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d={dropdownOpen ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} />
              </svg>
            </button>
            
            {dropdownOpen && (
              <div className="sort-menu">
                {SORT_OPTIONS.map(option => (
                  <div 
                    key={option} 
                    className={`sort-option ${sortOrder === option ? 'selected' : ''}`}
                    onClick={() => {
                      setSortOrder(option);
                      setDropdownOpen(false);
                    }}
                  >
                    {sortOrder === option && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    )}
                    {sortOrder !== option && <span style={{ width: '16px' }}></span>}
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="content-wrapper">
        {/* Sidebar Filters */}
        <aside className={`sidebar ${!showFilters ? 'hidden' : ''}`}>
          <div className="filter-group" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <input type="checkbox" id="customizable" />
            <label htmlFor="customizable" style={{ fontWeight: '700', fontSize: '16px' }}>CUSTOMIZABLE</label>
          </div>
          
          <FilterSection title="IDEAL FOR" options={['Men', 'Women', 'Baby & Kids']} />
          <FilterSection title="OCCASION" options={[]} />
          <FilterSection title="WORK" options={[]} />
          <FilterSection title="FABRIC" options={[]} />
          <FilterSection title="SEGMENT" options={[]} />
          <FilterSection title="SUITABLE FOR" options={[]} />
          <FilterSection title="RAW MATERIALS" options={[]} />
          <FilterSection title="PATTERN" options={[]} />
        </aside>

        {/* Product Grid */}
        <div className="product-grid">
          {products.map(product => (
            <div className="product-card" key={product.id}>
              <div className="product-image-container">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  fill
                  className="product-image"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  priority={product.id <= 4}
                />
              </div>
              <div className="product-info">
                <div className="product-title-row">
                  <h2 className="product-title">{product.title}</h2>
                  <button className="like-btn" aria-label={`Like ${product.title}`}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                  </button>
                </div>
                <div className="product-meta">
                  <a href="#">Sign in</a> or Create an account to see pricing
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Simple internal component for filter sections
function FilterSection({ title, options }: { title: string, options: string[] }) {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="filter-group">
      <div className="filter-title" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d={open ? "M18 15l-6-6-6 6" : "M6 9l6 6 6-6"} />
        </svg>
      </div>
      {open && (
        <div className="filter-options">
          <div style={{ color: '#888', fontSize: '14px', marginBottom: '15px', textDecoration: 'underline', cursor: 'pointer' }}>
            Unselect all
          </div>
          {options.length > 0 ? options.map(opt => (
            <label key={opt}>
              <input type="checkbox" /> {opt}
            </label>
          )) : <div style={{ color: '#888', fontSize: '15px' }}>All</div>}
        </div>
      )}
    </div>
  );
}
