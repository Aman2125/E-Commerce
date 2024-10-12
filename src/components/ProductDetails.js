import React from 'react';
import { Link } from 'react-router-dom';
import '../css/ProductDetails.css';

const ProductDetail = () => {
  return (
    <div className="product-detail-container">
      <h1>Men's Shirt</h1>
      <div className="product-detail">
        <img src="" alt="Product" />
        <div className="details">
          <p>Price: $49.99</p>
          <p>Description: High-quality men's shirt made from breathable fabric.</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
