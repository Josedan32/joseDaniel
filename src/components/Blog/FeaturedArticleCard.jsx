export const FeaturedArticleCard = () => (
  <div className="relative bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20 p-6 md:p-8 flex flex-col justify-between overflow-hidden group hover:border-green-500/40 transition-all duration-500">
    <div>
      <div className="flex items-center gap-3 mb-3">
        <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-[11px] font-semibold border border-green-500/30">
          Destacado
        </span>
        <span className="text-[11px] text-gray-400">• 8 min lectura</span>
        <span className="text-[11px] text-gray-400">• 2 Oct 2024</span>
      </div>
      <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-green-400 transition-colors">
        Cómo diseñar arquitecturas backend modulares y escalables
      </h3>
      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">
        Una guía práctica sobre cómo estructurar tus proyectos para escalar sin
        fricción. Principios de DDD, modularización y comunicación eficiente
        entre microservicios. Se incluyen ejemplos de diseño, patrones de
        microservicios, estrategias de testing y despliegue para mantener alta
        disponibilidad y escalabilidad.
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        {[
          "FastAPI",
          "Microservicios",
          "Arquitectura",
          "DDD",
          "Testing",
          "CI/CD",
        ].map((tag, i) => (
          <span
            key={i}
            className="px-2.5 py-1 bg-gray-800 text-gray-300 rounded-md text-[11px] border border-gray-700"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
    <button className="px-5 py-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-semibold text-sm text-white hover:shadow-md hover:shadow-green-500/30 transition-all duration-300 inline-flex items-center gap-2 self-start">
      Leer artículo completo
      <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
    </button>
  </div>
);