import React from "react";

export const FloatingBackground = () => (
  <div className="absolute inset-0 z-0">
    {/* Fondo con gradiente verde */}
    <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-blue-500/10"></div>

    {/* Partículas flotantes verdes */}
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-20"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 5}s`,
        }}
      />
    ))}

    <style jsx>{`
      @keyframes float {
        0% {
          transform: translateY(0) scale(1);
        }
        50% {
          transform: translateY(-20px) scale(1.2);
        }
        100% {
          transform: translateY(0) scale(1);
        }
      }
    `}</style>
  </div>
);
