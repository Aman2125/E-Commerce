import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, User, Search, Menu, X } from 'lucide-react';
import { useStore } from '../store/useStore';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, user } = useStore();
  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            ShopHub
          </Link>

          <div className="hidden md:flex items-center flex-1 justify-between">
            <div className="flex-1 max-w-lg mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <Link to="/wishlist" className="text-text hover:text-primary">
                <Heart className="h-6 w-6" />
              </Link>
              <Link to="/cart" className="text-text hover:text-primary relative">
                <ShoppingCart className="h-6 w-6" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
              {user ? (
                <Link to="/profile" className="text-text hover:text-primary">
                  <User className="h-6 w-6" />
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90"
                >
                  Login
                </Link>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-text hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div className="p-2">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300"
              />
            </div>
            <Link
              to="/wishlist"
              className="block px-3 py-2 text-text hover:text-primary"
            >
              Wishlist
            </Link>
            <Link
              to="/cart"
              className="block px-3 py-2 text-text hover:text-primary"
            >
              Cart ({cartItemsCount})
            </Link>
            {user ? (
              <Link
                to="/profile"
                className="block px-3 py-2 text-text hover:text-primary"
              >
                Profile
              </Link>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 bg-primary text-white rounded-lg text-center"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};