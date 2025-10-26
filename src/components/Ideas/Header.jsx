import { TrendingUp } from "lucide-react";

export const Header = () => (
  <div className="text-center mb-8 animate-fade-in">
    <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-green-800 via-emerald-700 to-green-700 bg-clip-text text-transparent">
      Ideas de Alto Potencial
    </h1>
    <p className="text-xl text-gray-400">Colombia 2025 - Medellín</p>
    <div className="flex items-center justify-center gap-2 mt-4 text-green-300">
      <TrendingUp className="w-5 h-5" />
      <span className="text-sm">
        Mercado en expansión: +19.4% crecimiento e-commerce
      </span>
    </div>
  </div>
);
