import React from 'react';
import { ProductGrid } from '../../../components/products/ProductGrid';
import { FilterSidebar } from '../../../components/filters/FilterSidebar';
import { getProductsBySubcategory } from '../../../data/products';

export const BlousesPage = () => {
  const products = getProductsBySubcategory('tops', 'blouses');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <FilterSidebar className="w-full md:w-64" />
        <main className="flex-1">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-text">Blouses</h1>
            <p className="mt-2 text-text/80">
              Elegant and versatile blouses for any occasion
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                Office Wear
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                New Arrivals
              </span>
            </div>
          </header>
          <ProductGrid products={products} loading={false} error={null} />
        </main>
      </div>
    </div>
  );
};