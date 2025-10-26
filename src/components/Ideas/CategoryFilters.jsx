export const CategoryFilters = ({ categories, selectedCategory, setSelectedCategory }) => (
  <div className="flex flex-wrap justify-center gap-3 mb-8">
    {categories.map((cat) => (
      <button
        key={cat.id}
        onClick={() => setSelectedCategory(cat.id)}
        className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
          selectedCategory === cat.id
            ? "bg-gradient-to-r from-green-800 via-emerald-700 to-green-700 text-white shadow-lg shadow-green-900/30"
            : "bg-gray-800/50 text-gray-400 hover:bg-green-700/50 border border-green-800"
        }`}
      >
        {cat.icon}
        {cat.name}
      </button>
    ))}
  </div>
);
