import React from 'react';
import { Filter } from 'lucide-react';

function EventFilter({ selectedCategory, setSelectedCategory }) {
  return (
    <div className="flex items-center space-x-4 mb-8">
      <Filter className="h-5 w-5 text-gray-500" />
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
      >
        <option value="all">All Categories</option>
        <option value="religious">Religious</option>
        <option value="social">Social</option>
        <option value="charity">Charity</option>
      </select>
    </div>
  );
}

export default EventFilter;