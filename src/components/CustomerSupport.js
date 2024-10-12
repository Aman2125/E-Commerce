import React from 'react';
import { Link } from 'react-router-dom';

import '../css/CustomerSupport.css';

const CustomerSupport = () => {
  return (
    <div className="customer-support-container">
      <h1>Customer Support</h1>
      <form className="support-form">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" />

        <label>Message</label>
        <textarea placeholder="Enter your message"></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CustomerSupport;
