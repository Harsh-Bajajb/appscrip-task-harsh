import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductList from '@/components/ProductList';
import ProductFilters from '@/components/ProductFilters';

// 3. We would like to see if you are aware of Server Side Rendering ( SSR )
// Using Server Component to fetch data for SSR
async function getProducts() {
  const res = await fetch('https://fakestoreapi.com/products', {
    // Next.js cache configuration for SSR behavior
    cache: 'no-store' // ensures fresh data on each request (SSR)
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <Header />
      
      <main className="container">
        <div className="breadcrumbs mobile-only">HOME &nbsp;|&nbsp; <span>SHOP</span></div>
        <section className="banner">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
          </p>
        </section>

        <section className="main-layout">
          {/* Client component for interactive filtering/sorting */}
          <ProductList initialProducts={products} />
        </section>
      </main>

      <Footer />
    </>
  );
}
