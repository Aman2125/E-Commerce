import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, User } from 'lucide-react';
import { useStore } from '../../store/useStore';

export const NavIcons = () => {
  const { cart, user } = useStore();
  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex items-center space-x-6">
      <Link 
        to="/wishlist" 
        className="text-text hover:text-primary transition-colors relative group"
      >
        <Heart className="h-6 w-6" />
        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Wishlist
        </span>
      </Link>
      
      <Link 
        to="/cart" 
        className="text-text hover:text-primary transition-colors relative group"
      >
        <ShoppingCart className="h-6 w-6" />
        {cartItemsCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
            {cartItemsCount}
          </span>
        )}
        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Cart
        </span>
      </Link>

      {user ? (
        <Link 
          to="/profile" 
          className="text-text hover:text-primary transition-colors relative group"
        >
          <User className="h-6 w-6" />
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Profile
          </span>
        </Link>
      ) : (
        <Link
          to="/login"
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Login
        </Link>
      )}
    </div>
  );
};