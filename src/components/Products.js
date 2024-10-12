import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Products.css';

const Products = () => {
  return (
    <div className="products-container">
      <h1>Our Clothing Collection</h1>
      <div className="product-grid">
        {/* Placeholder for product cards */}
        <div className="product-card">
          <img src="" alt="Product" />
          <h3>Men's Shirt</h3>
          <p>Price: $49.99</p>
          <button>Add to Cart</button>
        </div>
        {/* More product cards */}
      </div>
    </div>
  );
};

export default Products;
