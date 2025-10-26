import {
  Calendar
} from "lucide-react";

export const ArticleCard = ({ article }) => {
  const { icon: Icon, title, desc, color, date, time } = article;
  return (
    <div className="group p-4 rounded-xl border border-gray-700 bg-gray-900/60 hover:border-green-500/40 transition-all duration-300 hover:shadow-md hover:shadow-green-500/10 flex flex-col justify-between">
      <div>
        <div
          className={`h-20 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center mb-2`}
        >
          <Icon className="w-7 h-7 text-white/80" />
        </div>
        <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-1">
          <Calendar className="w-3 h-3" />
          <span>{date}</span>•<span>{time}</span>
        </div>
        <h4 className="text-sm font-semibold mb-1 group-hover:text-green-400 transition-colors">
          {title}
        </h4>
        <p className="text-[11px] text-gray-400 line-clamp-2 mb-3">{desc}</p>
      </div>
      <button className="px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-semibold text-xs text-white hover:shadow-md hover:shadow-green-500/30 transition-all duration-300 self-start">
        Ver artículo
      </button>
    </div>
  );
};