import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductList from '@/components/ProductList';

// 3. We would like to see if you are aware of Server Side Rendering ( SSR )
// Using Server Component to fetch data for SSR
const FALLBACK_PRODUCTS = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlTa._AC_UX679_.jpg"
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
  }
];

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
      return FALLBACK_PRODUCTS;
    }

    const data = await res.json();
    if (!data || data.length === 0) return FALLBACK_PRODUCTS;
    return data;
  } catch (err) {
    console.error('Products fetch error:', err);
    return FALLBACK_PRODUCTS;
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
