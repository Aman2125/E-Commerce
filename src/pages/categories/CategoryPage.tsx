import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductGrid } from '../../components/products/ProductGrid';
import { FilterSidebar } from '../../components/filters/FilterSidebar';
import { useProducts } from '../../hooks/useProducts';
import { categories } from '../../data/products';

export const CategoryPage = () => {
  const { categoryId } = useParams();
  const { products, loading, error } = useProducts(categoryId || '');
  const category = categories.find(c => c.id === categoryId);

  if (!category) return <div>Category not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <FilterSidebar className="w-full md:w-64" />
        <main className="flex-1">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-text">{category.name}</h1>
            <p className="mt-2 text-text/80">{category.description}</p>
          </header>
          <ProductGrid products={products} loading={loading} error={error} />
        </main>
      </div>
    </div>
  );
};