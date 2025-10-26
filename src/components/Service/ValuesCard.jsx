import React from "react";

export const ValueCard = ({ icon: Icon, title, desc, color }) => {
  const colors = {
    green: "bg-gradient-to-br from-green-500 to-emerald-500",
    cyan: "bg-gradient-to-br from-blue-500 to-cyan-500",
    purple: "bg-gradient-to-br from-purple-500 to-pink-500",
  };

  const gradient = colors[color] || colors.green;

  return (
    <div className="bg-gray-800/30 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-gray-700 text-center hover:border-gray-600 transition-all duration-300">
      <div
        className={`w-8 h-8 md:w-9 md:h-9 rounded-lg flex items-center justify-center mx-auto mb-1.5 shadow ${gradient}`}
      >
        <Icon className="w-4 h-4 md:w-4.5 md:h-4.5 text-white" />
      </div>
      <h4 className="font-semibold text-[11px] md:text-sm mb-0.5 text-white">
        {title}
      </h4>
      <p className="text-[10px] md:text-xs text-gray-400 leading-snug">
        {desc}
      </p>
    </div>
  );
};
