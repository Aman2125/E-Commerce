import React from 'react';
import { Search } from 'lucide-react';

export const SearchBar = () => (
  <div className="relative flex-1 max-w-lg">
    <input
      type="text"
      placeholder="Search for products, brands, and more..."
      className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
    />
    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
  </div>
);