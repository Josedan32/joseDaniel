import { Briefcase } from "lucide-react";

export const AboutExperience = () => (
  <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-green-700/40">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
        <Briefcase className="w-5 h-5 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white">Experiencia</h3>
    </div>
    <p className="text-gray-300 leading-relaxed">
      <span className="text-green-400 font-semibold">2 años</span> desarrollando soluciones backend robustas con enfoque en{" "}
      <span className="text-emerald-400 font-semibold">Inteligencia Artificial</span> y arquitecturas escalables.  
      Especializado en convertir requisitos de negocio en sistemas que generan valor medible.
    </p>
  </div>
);
