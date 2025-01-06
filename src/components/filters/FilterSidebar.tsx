import React from 'react';
import { useFilters } from '../../hooks/useFilters';

interface FilterSidebarProps {
  className?: string;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({ className }) => {
  const { filters, updateFilter } = useFilters();

  return (
    <aside className={className}>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
        
        {/* Price Range */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Price Range</h3>
          <input
            type="range"
            min="0"
            max="1000"
            value={filters.maxPrice}
            onChange={(e) => updateFilter('maxPrice', Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-text/70">
            <span>$0</span>
            <span>${filters.maxPrice}</span>
          </div>
        </div>

        {/* Rating Filter */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Minimum Rating</h3>
          <select
            value={filters.minRating}
            onChange={(e) => updateFilter('minRating', Number(e.target.value))}
            className="w-full p-2 border rounded-md"
          >
            <option value="0">All Ratings</option>
            {[4, 3, 2, 1].map((rating) => (
              <option key={rating} value={rating}>
                {rating}+ Stars
              </option>
            ))}
          </select>
        </div>

        {/* Availability */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Availability</h3>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.inStock}
              onChange={(e) => updateFilter('inStock', e.target.checked)}
              className="rounded text-primary"
            />
            <span className="ml-2 text-sm">In Stock</span>
          </label>
        </div>
      </div>
    </aside>
  );
};