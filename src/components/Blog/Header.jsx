export const Header = () => (
  <div className="text-left mb-6 max-w-lg">
    <span className="px-4 py-1.5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-xs font-semibold text-green-300 inline-block mb-3">
      Blog Técnico
    </span>
    <h2 className="text-3xl md:text-4xl font-bold mb-1">
      Últimos{" "}
      <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
        artículos
      </span>
    </h2>
    <p className="text-gray-400 text-xs md:text-sm">
      Arquitectura, IA, rendimiento y mejores prácticas backend
    </p>
  </div>
);