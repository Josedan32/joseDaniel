import React, { useState } from "react";
import { Navbar } from '../components/Nav/Navbar';
import { Footer } from '../components/Footer';
import { Header } from '../components/Ideas/Header';
import { CategoryFilters }  from '../components/Ideas/CategoryFilters';
import { IdeasGrid }  from '../components/Ideas/Grid';
import { categories } from '../data/categories';
import { ideas } from '../data/ideas';
import { getColorClasses } from '../utils/colors'


export default function ServicesPages() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);

  const handleMouseMove = (e, cardId) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHoverPosition({ x, y });
    setActiveCard(cardId);
  };

  const filteredIdeas =
    selectedCategory === "all"
      ? ideas
      : ideas.filter((idea) => idea.category === selectedCategory);

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen">
      <Navbar />
      
      {/* Contenedor principal con padding lateral y margin top */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 md:mt-24">
        <Header />

        <CategoryFilters
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <IdeasGrid
          filteredIdeas={filteredIdeas}
          hoveredCard={hoveredCard}
          setHoveredCard={setHoveredCard}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
          hoverPosition={hoverPosition}
          handleMouseMove={handleMouseMove}
          getColorClasses={getColorClasses}
        />
      </div>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}
