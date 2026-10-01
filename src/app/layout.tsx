import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Discover Our Products | Appscrip E-commerce',
  description: 'Shop the latest collection of premium products at Appscrip E-commerce. High quality, great design.',
  keywords: 'ecommerce, shop, online shopping, appscrip',
  openGraph: {
    title: 'Discover Our Products | Appscrip E-commerce',
    description: 'Shop the latest collection of premium products at Appscrip E-commerce.',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Appscrip E-commerce",
              "url": "https://www.yourdomain.com/"
            })
          }}
        />
      </head>
      <body>
        <div className="top-bar">
          <div className="top-bar-item">
            <i>◈</i> Lorem ipsum dolor
          </div>
          <div className="top-bar-item hidden-mobile">
            <i>◈</i> Lorem ipsum dolor
          </div>
          <div className="top-bar-item hidden-mobile">
            <i>◈</i> Lorem ipsum dolor
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
