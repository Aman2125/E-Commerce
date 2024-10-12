import React from 'react';
import { Link } from 'react-router-dom';
import '../css/SearchResults.css';

const SearchResults = () => {
  return (
    <div className="search-results-container">
      <h1>Search Results</h1>
      <div className="results-grid">
        {/* Map search results */}
        <p>No results found.</p>
      </div>
    </div>
  );
};

export default SearchResults;
