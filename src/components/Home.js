import React from 'react';
import '../css/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to Sanskar Collection</h1>
        <p>Exclusive Clothing for All Age Groups</p>
      </header>
      <section className="home-featured">
        <h2>Featured Collections</h2>
        <div className="featured-grid">
          {/* Placeholder for featured products */}
          <div className="featured-item">Men's Fashion</div>
          <div className="featured-item">Women's Fashion</div>
          <div className="featured-item">Kids' Wear</div>
          <div className="featured-item">Traditional Wear</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
