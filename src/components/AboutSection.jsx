import React from "react";
import { Zap, Target, Briefcase, Sparkles } from "lucide-react";
import { FloatingBackground } from "./FloatingBackground";

export const AboutSection = () => (
  <div className="relative py-20 md:py-32 overflow-hidden">
    <FloatingBackground/>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent"></div>
    <div className="absolute inset-0 opacity-5">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      ></div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-16 animate-fade-in">
        <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 border border-blue-500/30 rounded-full text-sm font-semibold text-blue-300 inline-block mb-6">
          Sobre mí
        </span>
        <h2 className="text-4xl md:text-4xl font-bold mb-4">
          Backend con{" "}
          <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            visión de negocio
          </span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Philosophy & Vision */}
        <div className="space-y-8">
          {/* Philosophy Quote */}
          <div className="relative bg-gradient-to-br from-blue-500/10 to-green-500/10 p-8 rounded-2xl border border-blue-500/20">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/50">
              <Target className="w-6 h-6 text-white" />
            </div>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium italic">
              "Creo en diseñar sistemas que{" "}
              <span className="text-blue-400">entiendan al negocio</span> antes
              de procesar datos."
            </p>
          </div>

          {/* Experience Summary */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">Experiencia</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              <span className="text-green-400 font-semibold">2 años</span>{" "}
              desarrollando soluciones backend robustas con enfoque en
              <span className="text-blue-400 font-semibold">
                {" "}
                Inteligencia Artificial
              </span>{" "}
              y arquitecturas escalables. Especializado en convertir requisitos
              de negocio en sistemas que generan valor medible.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 p-6 rounded-2xl border border-pink-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-pink-400" />
              <h3 className="text-xl font-bold">Visión de futuro</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Quiero{" "}
              <span className="text-pink-400 font-semibold">
                liderar soluciones de IA aplicadas a finanzas y automatización
                empresarial
              </span>
              , creando sistemas que no solo optimicen procesos, sino que
              transformen la forma en que las empresas toman decisiones
              estratégicas.
            </p>
          </div>
        </div>

        {/* Right: Tech Stack */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Zap className="w-6 h-6 text-yellow-400" />
            Stack tecnológico
          </h3>

          {/* Tech Categories */}
          <div className="space-y-4">
            {/* Backend Frameworks */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full group-hover:animate-pulse"></div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                  Backend Frameworks
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Python", "FastAPI", "Django"].map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm font-medium border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-green-400 rounded-full group-hover:animate-pulse"></div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                  Bases de Datos
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "Redis", "MongoDB"].map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-green-500/20 text-green-300 rounded-lg text-sm font-medium border border-green-500/30 hover:bg-green-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* DevOps & Cloud */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-orange-400 rounded-full group-hover:animate-pulse"></div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                  DevOps & Cloud
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Docker", "AWS", "CI/CD", "Git"].map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-orange-500/20 text-orange-300 rounded-lg text-sm font-medium border border-orange-500/30 hover:bg-orange-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* AI & ML */}
            <div className="bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-pink-500/50 transition-all duration-300 group">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full group-hover:animate-pulse"></div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                  IA & Machine Learning
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {["TensorFlow", "OpenAI", "LangChain", "Scikit-learn"].map(
                  (tech, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-pink-500/20 text-pink-300 rounded-lg text-sm font-medium border border-pink-500/30 hover:bg-pink-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Additional Skills */}
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 p-5 rounded-xl border border-purple-500/20 mt-6">
            <h4 className="text-sm font-semibold text-purple-300 mb-3">
              Especialidades adicionales
            </h4>
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
                  className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
