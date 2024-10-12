import React from 'react';
import { Link } from 'react-router-dom';
import '../css/OrderHistory.css';

const OrderHistory = () => {
  return (
    <div className="order-history-container">
      <h1>Your Order History</h1>
      <div className="order-list">
        {/* Placeholder for orders */}
        <p>No orders yet.</p>
      </div>
    </div>
  );
};

export default OrderHistory;
