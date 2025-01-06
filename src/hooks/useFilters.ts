import { useState, useCallback } from 'react';

interface Filters {
  maxPrice: number;
  minRating: number;
  inStock: boolean;
}

export const useFilters = () => {
  const [filters, setFilters] = useState<Filters>({
    maxPrice: 1000,
    minRating: 0,
    inStock: false,
  });

  const updateFilter = useCallback((key: keyof Filters, value: number | boolean) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  return { filters, updateFilter };
};