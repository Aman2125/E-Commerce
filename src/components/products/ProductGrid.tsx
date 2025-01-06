import React from 'react';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types';
import { Loader } from '../ui/Loader';
import { ErrorMessage } from '../ui/ErrorMessage';

interface ProductGridProps {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, loading, error }) => {
  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};