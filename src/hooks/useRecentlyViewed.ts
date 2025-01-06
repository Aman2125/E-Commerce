import { useEffect } from 'react';
import { useStore } from '../store/useStore';
import { Product } from '../types';

const MAX_RECENT_ITEMS = 10;

export const useRecentlyViewed = (product: Product | null) => {
  const { addToRecentlyViewed } = useStore();

  useEffect(() => {
    if (product) {
      addToRecentlyViewed(product);
    }
  }, [product, addToRecentlyViewed]);
};