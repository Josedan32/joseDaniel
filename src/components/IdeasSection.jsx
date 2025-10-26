import React, { useState } from "react";
import { TrendingUp } from "lucide-react";
import { FloatingBackground } from "./FloatingBackground";
import { categories } from "../data/categories";

export const IdeasSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <div className="p-4 md:p-8">
      <FloatingBackground />
      <div className="max-w-7xl mx-auto mb-12" id="ideas">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
            Ideas de Alto Potencial
          </h1>
          <p className="text-xl text-gray-400">Colombia 2025 - Medellín</p>
          <div className="flex items-center justify-center gap-2 mt-4 text-green-400">
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm">
              Mercado en expansión: +19.4% crecimiento e-commerce
            </span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === cat.id
                  ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-lg shadow-pink-500/30"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-gray-700"
              }`}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

//  <div className="p-4 md:p-8">
//         <div className="max-w-7xl mx-auto mb-12" id="ideas">
//         </div>s
//     </div>
