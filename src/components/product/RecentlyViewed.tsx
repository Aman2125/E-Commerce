import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { useStore } from '../../store/useStore';

export const RecentlyViewed: React.FC = () => {
  const { recentlyViewed } = useStore();

  if (recentlyViewed.length === 0) return null;

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-text mb-6">Recently Viewed</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {recentlyViewed.map((product: Product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group"
          >
            <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="mt-2 text-sm font-medium text-text group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-text/70">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};