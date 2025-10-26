import React, { useState } from "react";
import { DollarSign } from "lucide-react";
import { FloatingBackground } from "./FloatingBackground";
import { ideas } from "../data/ideas";
import {getColorClasses} from "../utils/colors"

export const IdeasGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
    const filteredIdeas =
    selectedCategory === "all"
      ? ideas
      : ideas.filter((idea) => idea.category === selectedCategory);
  return (
    <div className="p-4 md:p-8">
      <div className="max-w-7xl mx-auto mb-12" id="ideas">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIdeas.map((idea, index) => {
            const colorClasses = getColorClasses(idea.color);
            const isHovered = hoveredCard === idea.id;

            return (
              <div
                key={idea.id}
                onMouseEnter={() => setHoveredCard(idea.id)}
                onMouseLeave={() => {
                  setHoveredCard(null);
                  setActiveCard(null);
                }}
                onMouseMove={(e) => handleMouseMove(e, idea.id)}
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 transition-all duration-500 cursor-pointer overflow-hidden ${colorClasses.hover}`}
                style={{
                  animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                  boxShadow: isHovered
                    ? `0 20px 60px -15px ${
                        idea.color === "pink"
                          ? "rgba(236, 72, 153, 0.5)"
                          : idea.color === "green"
                          ? "rgba(34, 197, 94, 0.5)"
                          : idea.color === "blue"
                          ? "rgba(59, 130, 246, 0.5)"
                          : "rgba(249, 115, 22, 0.5)"
                      }, 0 10px 30px -10px ${
                        idea.color === "pink"
                          ? "rgba(236, 72, 153, 0.3)"
                          : idea.color === "green"
                          ? "rgba(34, 197, 94, 0.3)"
                          : idea.color === "blue"
                          ? "rgba(59, 130, 246, 0.3)"
                          : "rgba(249, 115, 22, 0.3)"
                      }`
                    : "none",
                }}
              >
                {/* Cursor Follow Effect with Shadow */}
                {activeCard === idea.id && (
                  <>
                    {/* Glow effect that follows cursor */}
                    <div
                      className="absolute w-40 h-40 rounded-full pointer-events-none transition-opacity duration-300 blur-2xl"
                      style={{
                        left: `${hoverPosition.x}px`,
                        top: `${hoverPosition.y}px`,
                        transform: "translate(-50%, -50%)",
                        background: `radial-gradient(circle, ${
                          idea.color === "pink"
                            ? "rgba(236, 72, 153, 0.6)"
                            : idea.color === "green"
                            ? "rgba(34, 197, 94, 0.6)"
                            : idea.color === "blue"
                            ? "rgba(59, 130, 246, 0.6)"
                            : "rgba(249, 115, 22, 0.6)"
                        } 0%, transparent 70%)`,
                        opacity: isHovered ? 1 : 0,
                        filter: "blur(40px)",
                      }}
                    />
                    {/* Inner glow */}
                    <div
                      className="absolute w-24 h-24 rounded-full pointer-events-none transition-opacity duration-200"
                      style={{
                        left: `${hoverPosition.x}px`,
                        top: `${hoverPosition.y}px`,
                        transform: "translate(-50%, -50%)",
                        background: `radial-gradient(circle, ${
                          idea.color === "pink"
                            ? "rgba(236, 72, 153, 0.4)"
                            : idea.color === "green"
                            ? "rgba(34, 197, 94, 0.4)"
                            : idea.color === "blue"
                            ? "rgba(59, 130, 246, 0.4)"
                            : "rgba(249, 115, 22, 0.4)"
                        } 0%, transparent 70%)`,
                        opacity: isHovered ? 1 : 0,
                      }}
                    />
                  </>
                )}

                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    colorClasses.gradient
                  } rounded-2xl opacity-0 transition-opacity duration-500 ${
                    isHovered ? "opacity-100" : ""
                  }`}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`${
                        colorClasses.text
                      } transform transition-transform duration-500 ${
                        isHovered ? "scale-110 rotate-6" : ""
                      }`}
                    >
                      {idea.icon}
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${colorClasses.badge}`}
                    >
                      {idea.demand}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3">{idea.title}</h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {idea.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <DollarSign className={`w-5 h-5 ${colorClasses.text}`} />
                    <span className="font-bold text-lg">{idea.price}</span>
                  </div>

                  {/* Packages - Show on Hover */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isHovered ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="border-t border-gray-700 pt-4 mt-4">
                      <p className="text-sm font-semibold mb-2 text-gray-300">
                        Paquetes incluidos:
                      </p>
                      <ul className="space-y-2">
                        {idea.packages.map((pkg, i) => (
                          <li
                            key={i}
                            className="text-xs text-gray-400 flex items-start gap-2"
                          >
                            <span className={`${colorClasses.text} mt-0.5`}>
                              →
                            </span>
                            <span>{pkg}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
