import { useState, useEffect } from 'react';
import { Product } from '../types';
import { products } from '../data/products';

export const useProduct = (id: string | undefined) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        const foundProduct = products.find(p => p.id === id);
        if (foundProduct) {
          setProduct({
            ...foundProduct,
            images: [
              foundProduct.image,
              'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800',
              'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800',
              'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800'
            ],
            sizes: [
              { size: 'XS', inStock: true },
              { size: 'S', inStock: true },
              { size: 'M', inStock: true },
              { size: 'L', inStock: false },
              { size: 'XL', inStock: true },
            ],
            material: '100% Cotton',
            careInstructions: 'Machine wash cold',
            sku: `PRD-${foundProduct.id}`,
          });
        } else {
          setError('Product not found');
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to load product');
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  return { product, loading, error };
};