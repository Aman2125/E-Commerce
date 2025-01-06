import React from 'react';
import { Heart } from 'lucide-react';
import { Product } from '../../types';
import { useStore } from '../../store/useStore';

interface WishlistButtonProps {
  product: Product;
  className?: string;
}

export const WishlistButton: React.FC<WishlistButtonProps> = ({
  product,
  className = '',
}) => {
  const { toggleWishlist, wishlist } = useStore();
  const isWishlisted = wishlist.some(item => item.id === product.id);

  return (
    <button
      onClick={() => toggleWishlist(product)}
      className={`flex items-center justify-center p-3 rounded-lg border-2 border-primary hover:bg-primary/10 transition-colors ${className}`}
      aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-primary text-primary' : 'text-primary'}`} />
    </button>
  );
};