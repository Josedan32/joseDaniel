import React from "react";

export const ServiceHeader = () => (
  <div className="max-w-6xl mx-auto px-4 md:px-8 text-center mb-6">
    <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-sm font-semibold text-green-300 inline-block mb-6">
      Servicios
    </span>
    <h2 className="text-3xl md:text-4xl font-bold mb-1">
      Soluciones{" "}
      <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
        profesionales
      </span>
    </h2>
    <p className="text-gray-400 text-sm md:text-base">
      Desde MVPs hasta sistemas empresariales de alto rendimiento.
    </p>
  </div>
);
