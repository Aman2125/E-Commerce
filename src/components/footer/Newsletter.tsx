import React from 'react';

export const Newsletter = () => (
  <div>
    <h3 className="font-semibold text-lg mb-4 text-text">Stay Updated</h3>
    <p className="text-text/80 mb-4">Subscribe to our newsletter for exclusive offers and updates</p>
    <form className="flex gap-2">
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
      />
      <button
        type="submit"
        className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
      >
        Subscribe
      </button>
    </form>
  </div>
);