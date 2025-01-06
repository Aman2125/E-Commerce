import React from 'react';
import { useStore } from '../../../store/useStore';
import { ProductCard } from '../../../components/ProductCard';
import { Heart } from 'lucide-react';

export const WishlistTab = () => {
  const { wishlist } = useStore();

  if (wishlist.length === 0) {
    return (
      <div className="text-center py-12">
        <Heart className="h-12 w-12 text-text/50 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-text mb-2">Your Wishlist is Empty</h3>
        <p className="text-text/70">Save items you love to your wishlist</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {wishlist.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};