import React, { useState } from "react";
import { ArticleCard } from "./ArticleCard";
import {
  Calendar,
  Globe,
  Sparkles,
  Zap,
  Target,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";


const articles = [
  {
    icon: Globe,
    title: "Microservicios con FastAPI",
    desc: "Patrones de comunicación y despliegue con RabbitMQ y gRPC.",
    color: "from-blue-600 to-cyan-600",
    date: "2 Oct 2024",
    time: "5 min",
  },
  {
    icon: Sparkles,
    title: "MLOps en producción",
    desc: "Versionado y testing de modelos con MLflow y CI/CD.",
    color: "from-pink-600 to-purple-600",
    date: "18 Sep 2024",
    time: "7 min",
  },
  {
    icon: Zap,
    title: "Optimización de queries",
    desc: "De 2s a 50ms con índices estratégicos y caché.",
    color: "from-green-600 to-emerald-600",
    date: "5 Sep 2024",
    time: "6 min",
  },
  {
    icon: Target,
    title: "Diseño de APIs REST",
    desc: "Versionado, backward compatibility y mejores prácticas.",
    color: "from-purple-600 to-indigo-600",
    date: "20 Ago 2024",
    time: "4 min",
  },
];

export const ArticleSlider = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % articles.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + articles.length) % articles.length);

  return (
    <div className="relative flex flex-col items-center justify-start bg-gray-900/40 rounded-2xl border border-gray-700 p-3 md:p-4">
      <h3 className="text-sm md:text-base font-semibold text-green-400 mb-3">
        Más artículos
      </h3>
      <button
        onClick={prevSlide}
        className="text-gray-400 hover:text-green-400 transition-colors p-1 mb-2"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
      <div className="relative flex-1 w-full overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 40, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -40, opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="absolute w-full"
          >
            <ArticleCard article={articles[index]} />
          </motion.div>
        </AnimatePresence>
      </div>
      <button
        onClick={nextSlide}
        className="text-gray-400 hover:text-green-400 transition-colors p-1 mt-2"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
      <div className="flex gap-1 mt-2">
        {articles.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === index ? "bg-green-400" : "bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};