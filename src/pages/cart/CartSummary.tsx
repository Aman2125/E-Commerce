import React from 'react';
import { useStore } from '../../store/useStore';

export const CartSummary = () => {
  const { cart } = useStore();
  
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;

  return (
    <div className="w-full lg:w-96">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-text mb-4">Order Summary</h2>
        
        <div className="space-y-3">
          <div className="flex justify-between text-text/70">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          
          <div className="flex justify-between text-text/70">
            <span>Shipping</span>
            <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
          </div>
          
          <div className="border-t pt-3">
            <div className="flex justify-between font-semibold text-text">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        <button
          className="w-full mt-6 bg-primary text-white py-3 rounded-lg hover:bg-primary/90"
        >
          Proceed to Checkout
        </button>
        
        {shipping > 0 && (
          <p className="mt-4 text-sm text-text/70 text-center">
            Add ${(100 - subtotal).toFixed(2)} more for free shipping
          </p>
        )}
      </div>
    </div>
  );
};