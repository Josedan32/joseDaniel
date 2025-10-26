export const AboutAdditionalSkills = () => (
  <div className="bg-gradient-to-br from-green-500/10 to-emerald-600/10 p-5 rounded-xl border border-green-500/20 mt-6">
    <h4 className="text-sm font-semibold text-green-300 mb-3">Especialidades adicionales</h4>
    <div className="flex flex-wrap gap-2">
      {[
        "REST APIs",
        "GraphQL",
        "Microservicios",
        "Testing",
        "Arquitectura",
        "Optimización",
      ].map((skill, i) => (
        <span
          key={i}
          className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-medium"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);
