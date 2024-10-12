import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Wishlist.css';

const Wishlist = () => {
  return (
    <div className="wishlist-container">
      <h1>Your Wishlist</h1>
      <div className="wishlist-items">
        <p>No items in your wishlist.</p>
      </div>
    </div>
  );
};

export default Wishlist;
