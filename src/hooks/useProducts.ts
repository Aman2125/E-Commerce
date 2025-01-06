import { useState, useEffect } from 'react';
import { Product } from '../types';
import { products as mockProducts } from '../data/products';

export const useProducts = (category: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        const filteredProducts = category
          ? mockProducts.filter(p => p.category === category)
          : mockProducts;
        setProducts(filteredProducts);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return { products, loading, error };
};