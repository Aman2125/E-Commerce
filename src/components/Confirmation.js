import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Confirmation.css';

const Confirmation = () => {
  return (
    <div className="confirmation-container">
      <h1>Thank You for Your Purchase!</h1>
      <p>Your order has been placed successfully. You will receive an email confirmation shortly.</p>
      <button>Continue Shopping</button>
    </div>
  );
};

export default Confirmation;
