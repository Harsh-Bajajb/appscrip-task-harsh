import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductList from '@/components/ProductList';

// 3. We would like to see if you are aware of Server Side Rendering ( SSR )
// Using Server Component to fetch data for SSR
async function getProducts() {
  try {
    const res = await fetch('https://fakestoreapi.com/products', {
      cache: 'no-store',
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; MyApp/1.0)',
        Accept: 'application/json',
      },
    });

    if (!res.ok) {
      console.error('Products fetch failed:', res.status);
      return [];
    }

    return await res.json();
  } catch (err) {
    console.error('Products fetch error:', err);
    return [];
  }
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
