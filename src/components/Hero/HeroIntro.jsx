import { HeroCTA } from "./HeroCTA";
import { HeroStat } from "./HeroStat";

export const HeroIntro = () => (
  <div className="space-y-5 animate-fade-in">
    <div className="inline-block">
      <span className="px-3 py-1.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-xs font-semibold text-green-300">
        Backend Developer & IA Specialist
      </span>
    </div>

    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
      Soy{" "}
      <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-blue-500 bg-clip-text text-transparent">
        Daniel
      </span>
    </h1>

    <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
      Especializado en{" "}
      <span className="text-green-400 font-semibold">APIs escalables</span> y
      soluciones impulsadas por{" "}
      <span className="text-emerald-400 font-semibold">IA</span>.
    </p>

    <p className="text-base text-gray-400 max-w-lg">
      Convierto ideas en sistemas robustos y medibles que impulsan negocios
      hacia el futuro digital.
    </p>

    <HeroCTA />

    <div className="flex flex-wrap gap-6 pt-6 border-t border-gray-800">
      <HeroStat value="10+" label="Proyectos completados" color="text-green-400" />
      <HeroStat value="98%" label="Satisfacción clientes" color="text-emerald-400" />
      <HeroStat value="2 años" label="Experiencia" color="text-blue-400" />
    </div>
  </div>
);
