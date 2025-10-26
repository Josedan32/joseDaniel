import { Zap } from "lucide-react";
import { TechCategory } from "./TechCategory";

export const AboutTechStack = ({ compact = false }) => (
  <div className="space-y-4">
    <h3
      className={`font-bold flex items-center gap-3 ${
        compact ? "text-xl mb-4" : "text-2xl mb-6"
      }`}
    >
      <Zap className="w-5 h-5 text-green-400" />
      Stack tecnológico
    </h3>

    <div className="space-y-3">
      <TechCategory compact={compact} title="Backend Frameworks" techs={["Python", "FastAPI", "Django"]} />
      <TechCategory compact={compact} title="Bases de Datos" techs={["PostgreSQL", "Redis", "MongoDB"]} />
      <TechCategory compact={compact} title="DevOps & Cloud" techs={["Docker", "AWS", "CI/CD", "Git"]} />
      <TechCategory compact={compact} title="IA & Machine Learning" techs={["TensorFlow", "OpenAI", "LangChain", "Scikit-learn"]} />
    </div>
  </div>
);
