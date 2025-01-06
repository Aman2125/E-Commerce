import React from 'react';
import { ProductGrid } from '../../components/products/ProductGrid';
import { FilterSidebar } from '../../components/filters/FilterSidebar';
import { useProducts } from '../../hooks/useProducts';

export const ArtisanalPage = () => {
  const { products, loading, error } = useProducts('artisanal');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <FilterSidebar className="w-full md:w-64" />
        <main className="flex-1">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-text">Artisanal Collection</h1>
            <p className="mt-2 text-text/80">
              Handcrafted pieces with exceptional quality
            </p>
          </header>
          <ProductGrid products={products} loading={loading} error={error} />
        </main>
      </div>
    </div>
  );
};