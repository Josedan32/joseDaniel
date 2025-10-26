import { IdeaCard } from "./Card";

export const IdeasGrid = ({
  filteredIdeas,
  hoveredCard,
  setHoveredCard,
  activeCard,
  setActiveCard,
  hoverPosition,
  handleMouseMove,
  getColorClasses
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {filteredIdeas.map((idea, index) => (
      <IdeaCard
        key={idea.id}
        idea={idea}
        index={index}
        hoveredCard={hoveredCard}
        setHoveredCard={setHoveredCard}
        activeCard={activeCard}
        setActiveCard={setActiveCard}
        hoverPosition={hoverPosition}
        handleMouseMove={handleMouseMove}
        getColorClasses={getColorClasses}
      />
    ))}
  </div>
);
