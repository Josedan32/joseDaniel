import React from 'react';

export const CategoryFilters = ({ selectedFilter, onFilterChange }) => {
  const filters = [
    { label: 'Todos', value: 'all' },
    { label: 'E-commerce', value: 'ecommerce' },
    { label: 'Educación', value: 'educacion' },
    { label: 'Turismo', value: 'turismo' },
    { label: 'IA', value: 'ia' },
    { label: 'Fintech', value: 'fintech' },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onFilterChange(filter.value)}
          className={`px-6 py-2 rounded-full border text-sm font-semibold transition-all duration-300
            ${
              selectedFilter === filter.value
                ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white border-transparent shadow-lg shadow-pink-500/30'
                : 'bg-gray-800/50 text-gray-300 border-gray-700 hover:border-pink-500 hover:text-white'
            }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};
