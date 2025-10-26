import { Calendar } from "lucide-react";

export const HeroCTA = () => (
  <div className="flex flex-wrap gap-3 pt-4">
    <button className="group px-6 py-3 text-sm bg-gradient-to-r from-green-400 to-emerald-500 rounded-full font-semibold hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300 transform hover:scale-105 flex items-center gap-1.5">
      Contrátame ahora
      <span className="group-hover:translate-x-1 transition-transform">→</span>
    </button>
    <button className="px-6 py-3 text-sm bg-gray-800/80 backdrop-blur-sm border border-green-600 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300 flex items-center gap-1.5">
      <Calendar className="w-4 h-4 text-green-400" />
      Reserva consultoría
    </button>
  </div>
);
