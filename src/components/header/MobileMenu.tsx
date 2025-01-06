import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { categories } from '../../data/products';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const { cart, user } = useStore();
  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white border-t border-gray-200">
      <div className="px-2 pt-2 pb-3 space-y-1">
        <div className="p-2">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300"
          />
        </div>
        
        {categories.map(category => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            onClick={onClose}
            className="block px-3 py-2 text-text hover:text-primary hover:bg-gray-50 rounded-lg"
          >
            {category.name}
          </Link>
        ))}

        <Link
          to="/wishlist"
          onClick={onClose}
          className="block px-3 py-2 text-text hover:text-primary hover:bg-gray-50 rounded-lg"
        >
          Wishlist
        </Link>
        
        <Link
          to="/cart"
          onClick={onClose}
          className="block px-3 py-2 text-text hover:text-primary hover:bg-gray-50 rounded-lg"
        >
          Cart ({cartItemsCount})
        </Link>
        
        {user ? (
          <Link
            to="/profile"
            onClick={onClose}
            className="block px-3 py-2 text-text hover:text-primary hover:bg-gray-50 rounded-lg"
          >
            Profile
          </Link>
        ) : (
          <Link
            to="/login"
            onClick={onClose}
            className="block px-3 py-2 bg-primary text-white rounded-lg text-center"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};