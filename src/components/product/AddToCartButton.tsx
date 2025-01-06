import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product, Size } from '../../types';
import { useStore } from '../../store/useStore';

interface AddToCartButtonProps {
  product: Product;
  selectedSize: Size | null;
  className?: string;
}

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  product,
  selectedSize,
  className = '',
}) => {
  const { addToCart } = useStore();

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addToCart(product, selectedSize);
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`flex items-center justify-center gap-2 bg-primary text-white py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors ${className}`}
    >
      <ShoppingCart className="h-5 w-5" />
      Add to Cart
    </button>
  );
};