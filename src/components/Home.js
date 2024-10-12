import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Home.css';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/images/6949751.jpg",
    "slider2.jpg",
    "slider3.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Slide changes every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [slides.length]);

  return (
    <div className="home-container">
      {/* Top Header Section */}
      <header className="top-header">
        <div className="logo">
          <h1>Sanskar Collection</h1>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search for products..." />
          <button>Search</button>
        </div>
        <div className="top-right-buttons">
          <Link to="/cart" className="cart-btn">Go to Cart</Link>
          <Link to="/login" className="login-btn">Login</Link>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/wishlist">Wishlist</Link></li>
          <li><Link to="/order-history">Order History</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
          <li><Link to="/customer-support">Customer Support</Link></li>
          <li><Link to="/deals-offers">Deals & Offers</Link></li>
        </ul>
      </nav>

      {/* Slider Section */}
      <section className="slider">
        <div className="slide">
          <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="placeholder1.jpg" alt="Product 1" />
            <h3>Product 1</h3>
            <p>Men's T-shirt</p>
            <Link to="/product/1" className="view-details">View Details</Link>
          </div>
          <div className="product-card">
            <img src="placeholder2.jpg" alt="Product 2" />
            <h3>Product 2</h3>
            <p>Women's Dress</p>
            <Link to="/product/2" className="view-details">View Details</Link>
          </div>
          <div className="product-card">
            <img src="placeholder3.jpg" alt="Product 3" />
            <h3>Product 3</h3>
            <p>Kids' Jacket</p>
            <Link to="/product/3" className="view-details">View Details</Link>
          </div>
        </div>
      </section>

      {/* Shop by Categories Section */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <Link to="/products?category=men" className="category-item">Men</Link>
          <Link to="/products?category=women" className="category-item">Women</Link>
          <Link to="/products?category=kids" className="category-item">Kids</Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="home-footer">
        <nav>
          <ul>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/order-history">Order History</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/customer-support">Customer Support</Link></li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Home;
