import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';

export const CartPage = () => {
  const { cart } = useStore();
  
  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-text mb-4">Your Cart is Empty</h2>
          <p className="text-text/70 mb-8">Add some items to your cart to get started</p>
          <Link
            to="/"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-text mb-8">Shopping Cart</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-md p-6 space-y-4">
            {cart.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>
        </div>
        
        <CartSummary />
      </div>
    </div>
  );
};