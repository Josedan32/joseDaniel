import { Brain } from "lucide-react";

export const Logo = ({ title = "Jose Daniel" }) => (
  <div className="flex items-center gap-2">
    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
      <Brain className="w-6 h-6 text-white" />
    </div>
    <span className="font-bold text-xl text-white">{title}</span>
  </div>
);
