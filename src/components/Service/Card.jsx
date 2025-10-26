import React from "react";

export const ServiceCard = ({ icon: Icon, title, color, desc }) => {
  const colors = {
    green: {
      bg: "from-green-500/5 to-emerald-500/5",
      border: "border-green-500/20 hover:border-green-500/50 hover:shadow-green-500/20",
      icon: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    blue: {
      bg: "from-blue-500/5 to-cyan-500/5",
      border: "border-blue-500/20 hover:border-blue-500/50 hover:shadow-blue-500/20",
      icon: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    purple: {
      bg: "from-purple-500/5 to-pink-500/5",
      border: "border-purple-500/20 hover:border-purple-500/50 hover:shadow-purple-500/20",
      icon: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    amber: {
      bg: "from-amber-500/5 to-orange-500/5",
      border: "border-amber-500/20 hover:border-amber-500/50 hover:shadow-amber-500/20",
      icon: "bg-gradient-to-br from-amber-500 to-orange-500",
    },
  };

  const c = colors[color] || colors.green;

  return (
    <div
      className={`group p-5 rounded-2xl border transition-all duration-300 bg-gradient-to-br ${c.bg} ${c.border} hover:shadow-lg`}
    >
      <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 shadow-md ${c.icon}`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <h3 className="text-sm md:text-base font-semibold mb-1 text-white">
        {title}
      </h3>
      <p className="text-xs text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
};
