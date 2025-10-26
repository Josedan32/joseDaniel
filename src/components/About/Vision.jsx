import { Sparkles } from "lucide-react";

export const AboutVision = () => (
  <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 p-6 rounded-2xl border border-green-500/20">
    <div className="flex items-center gap-3 mb-4">
      <Sparkles className="w-6 h-6 text-green-400" />
      <h3 className="text-xl font-bold text-white">Visión de futuro</h3>
    </div>
    <p className="text-gray-300 leading-relaxed">
      Quiero{" "}
      <span className="text-green-400 font-semibold">
        liderar soluciones de IA aplicadas a automatización empresarial
      </span>, creando sistemas que no solo optimicen procesos, sino que transformen la forma en que las empresas toman decisiones estratégicas.
    </p>
  </div>
);
