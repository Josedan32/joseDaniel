export const TechCategory = ({ color = "green", title, techs, compact = false }) => {
  const colorMap = {
    green: {
      border: "border-green-500/30",
      text: "text-green-300",
      bg: "bg-green-500/20",
      hover: "hover:bg-green-500/30",
      dot: "bg-green-400",
    },
    blue: {
      border: "border-blue-500/30",
      text: "text-blue-300",
      bg: "bg-blue-500/20",
      hover: "hover:bg-blue-500/30",
      dot: "bg-blue-400",
    },
    orange: {
      border: "border-emerald-500/30",
      text: "text-emerald-300",
      bg: "bg-emerald-500/20",
      hover: "hover:bg-emerald-500/30",
      dot: "bg-emerald-400",
    },
  };

  const c = colorMap[color] || colorMap.green;

  return (
    <div
      className={`bg-gray-800/40 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 group ${
        compact ? "p-3" : "p-5"
      }`}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-2 h-2 ${c.dot} rounded-full group-hover:animate-pulse`}></div>
        <h4
          className={`font-semibold text-gray-400 uppercase tracking-wide ${
            compact ? "text-xs" : "text-sm"
          }`}
        >
          {title}
        </h4>
      </div>
      <div className={`flex flex-wrap gap-2 ${compact ? "gap-y-1" : ""}`}>
        {techs.map((tech, i) => (
          <span
            key={i}
            className={`${
              compact
                ? "px-2 py-1 text-xs"
                : "px-4 py-2 text-sm"
            } ${c.bg} ${c.text} rounded-lg font-medium ${c.border} ${c.hover} transition-colors`}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};
