import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form className="checkout-form">
        <label>Name</label>
        <input type="text" placeholder="Enter your name" />

        <label>Address</label>
        <input type="text" placeholder="Enter your address" />

        <label>Payment Method</label>
        <select>
          <option>Credit Card</option>
          <option>PayPal</option>
          <option>Cash on Delivery</option>
        </select>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
