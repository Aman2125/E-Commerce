import React from 'react';
import '../css/Cart.css';

const Cart = () => {
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {/* Placeholder for cart items */}
        <div className="cart-item">
          <img src="" alt="Cart Item" />
          <div className="cart-details">
            <h3>Men's Shirt</h3>
            <p>Price: $49.99</p>
            <p>Quantity: 1</p>
            <button>Remove</button>
          </div>
        </div>
        {/* More cart items */}
      </div>
      <div className="cart-summary">
        <h2>Order Summary</h2>
        <p>Total: $49.99</p>
        <button>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
