import React from "react";
import {
  Zap,
  Target,
  TrendingUp,
  Sparkles,
  Globe,
  Calendar,
  DollarSign,
  Users,
} from "lucide-react";
import { FloatingBackground } from "./FloatingBackground";

export const BlogSection2 = () => (
  <div className="relative py-20 md:py-32" id="blog">
    <FloatingBackground />
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-5">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      ></div>
    </div>

    <div className="relative max-w-7xl mx-auto px-4 md:px-8">
      {/* Section Header */}
      <div className="text-center mb-16 animate-fade-in">
        <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-full text-sm font-semibold text-orange-300 inline-block mb-6">
          Conocimiento técnico
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Artículos de{" "}
          <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            ingeniería
          </span>
        </h2>
        <p className="text-xl text-gray-400">
          Notas prácticas sobre arquitectura, IA y backend escalable
        </p>
      </div>

      {/* Featured Article */}
      <div className="mb-12">
        <div className="relative group bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl border border-orange-500/20 overflow-hidden hover:border-orange-500/40 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
            {/* Left: Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-semibold border border-orange-500/30">
                  Destacado
                </span>
                <span className="text-sm text-gray-400">• 8 min lectura</span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold leading-tight group-hover:text-orange-400 transition-colors">
                Pipeline de scoring crediticio con explainability modular
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                Diseñé un sistema de scoring que no solo predice riesgo, sino
                que explica cada decisión. Arquitectura modular con FastAPI,
                feature stores y SHAP values integrados.
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {["FastAPI", "MLOps", "SHAP", "Feature Store", "Python"].map(
                  (tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-xs font-medium border border-gray-700"
                    >
                      #{tag}
                    </span>
                  )
                )}
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-6 pt-4 border-t border-gray-700">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>15 Oct 2024</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>2.4K vistas</span>
                </div>
              </div>

              <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 inline-flex items-center gap-2 group/btn">
                Leer artículo completo
                <span className="group-hover/btn:translate-x-1 transition-transform">
                  →
                </span>
              </button>
            </div>

            {/* Right: Visual/Code Preview */}
            <div className="relative">
              <div className="bg-gray-900 rounded-2xl p-6 border border-gray-700 shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-gray-500 ml-2">
                    scoring_pipeline.py
                  </span>
                </div>
                <pre className="text-xs text-gray-300 leading-relaxed overflow-x-auto">
                  {`# Pipeline modular con explainability
class ScoringPipeline:
    def __init__(self):
        self.feature_store = FeatureStore()
        self.model = XGBClassifier()
        self.explainer = shap.TreeExplainer()
    
    async def predict_with_explanation(
        self, user_id: str
    ) -> ScoringResult:
        features = await self.feature_store
            .get_features(user_id)
        
        prediction = self.model.predict(features)
        shap_values = self.explainer(features)
        
        return ScoringResult(
            score=prediction,
            explanation=shap_values,
            confidence=self.get_confidence()
        )`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Article 1 */}
        <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-blue-500/10">
          <div className="h-48 bg-gradient-to-br from-blue-600 to-cyan-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="w-16 h-16 text-white/80" />
            </div>
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-black/40 backdrop-blur-sm text-white rounded-full text-xs font-semibold">
                Arquitectura
              </span>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>2 Oct 2024</span>
              <span>• 5 min</span>
            </div>

            <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors leading-tight">
              Microservicios con FastAPI: patrones de comunicación
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
              Event-driven architecture vs REST: cuándo usar cada uno.
              Implementación con RabbitMQ y gRPC.
            </p>

            <div className="flex flex-wrap gap-2">
              {["FastAPI", "RabbitMQ", "gRPC"].map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <button className="text-blue-400 hover:text-blue-300 font-semibold text-sm flex items-center gap-2 group/link">
              Leer más
              <span className="group-hover/link:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Article 2 */}
        <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-pink-500/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-pink-500/10">
          <div className="h-48 bg-gradient-to-br from-pink-600 to-purple-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-16 h-16 text-white/80" />
            </div>
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-black/40 backdrop-blur-sm text-white rounded-full text-xs font-semibold">
                IA/ML
              </span>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>18 Sep 2024</span>
              <span>• 7 min</span>
            </div>

            <h3 className="text-xl font-bold group-hover:text-pink-400 transition-colors leading-tight">
              MLOps en producción: versionado de modelos y A/B testing
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
              Cómo implementar deployment canary de modelos ML con MLflow,
              monitoreo de drift y rollback automático.
            </p>

            <div className="flex flex-wrap gap-2">
              {["MLflow", "MLOps", "A/B Testing"].map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <button className="text-pink-400 hover:text-pink-300 font-semibold text-sm flex items-center gap-2 group/link">
              Leer más
              <span className="group-hover/link:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Article 3 */}
        <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-green-500/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-green-500/10">
          <div className="h-48 bg-gradient-to-br from-green-600 to-emerald-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Zap className="w-16 h-16 text-white/80" />
            </div>
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-black/40 backdrop-blur-sm text-white rounded-full text-xs font-semibold">
                Performance
              </span>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>5 Sep 2024</span>
              <span>• 6 min</span>
            </div>

            <h3 className="text-xl font-bold group-hover:text-green-400 transition-colors leading-tight">
              Optimización de queries: de 2s a 50ms con índices estratégicos
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
              Case study real: análisis de query plan, índices compuestos y
              particionamiento en PostgreSQL.
            </p>

            <div className="flex flex-wrap gap-2">
              {["PostgreSQL", "Performance", "Indexing"].map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <button className="text-green-400 hover:text-green-300 font-semibold text-sm flex items-center gap-2 group/link">
              Leer más
              <span className="group-hover/link:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Article 4 */}
        <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-purple-500/10">
          <div className="h-48 bg-gradient-to-br from-purple-600 to-indigo-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Target className="w-16 h-16 text-white/80" />
            </div>
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-black/40 backdrop-blur-sm text-white rounded-full text-xs font-semibold">
                Diseño de APIs
              </span>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>20 Ago 2024</span>
              <span>• 4 min</span>
            </div>

            <h3 className="text-xl font-bold group-hover:text-purple-400 transition-colors leading-tight">
              REST API design: versionado y breaking changes sin dolor
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
              Estrategias de versionado (URL vs Header), deprecation policies y
              compatibilidad hacia atrás.
            </p>

            <div className="flex flex-wrap gap-2">
              {["REST", "API Design", "Versioning"].map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <button className="text-purple-400 hover:text-purple-300 font-semibold text-sm flex items-center gap-2 group/link">
              Leer más
              <span className="group-hover/link:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Article 5 */}
        <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-orange-500/10">
          <div className="h-48 bg-gradient-to-br from-orange-600 to-amber-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <DollarSign className="w-16 h-16 text-white/80" />
            </div>
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-black/40 backdrop-blur-sm text-white rounded-full text-xs font-semibold">
                FinTech
              </span>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>8 Ago 2024</span>
              <span>• 9 min</span>
            </div>

            <h3 className="text-xl font-bold group-hover:text-orange-400 transition-colors leading-tight">
              Sistema de pagos: idempotencia y manejo de estados distribuidos
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
              Cómo diseñar APIs de pago resilientes con idempotency keys, state
              machines y compensating transactions.
            </p>

            <div className="flex flex-wrap gap-2">
              {["Payments", "Distributed Systems", "Idempotency"].map(
                (tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                  >
                    #{tag}
                  </span>
                )
              )}
            </div>

            <button className="text-orange-400 hover:text-orange-300 font-semibold text-sm flex items-center gap-2 group/link">
              Leer más
              <span className="group-hover/link:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Article 6 */}
        <div className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10">
          <div className="h-48 bg-gradient-to-br from-cyan-600 to-blue-600 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Users className="w-16 h-16 text-white/80" />
            </div>
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 bg-black/40 backdrop-blur-sm text-white rounded-full text-xs font-semibold">
                Patrones
              </span>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>22 Jul 2024</span>
              <span>• 5 min</span>
            </div>

            <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors leading-tight">
              CQRS en la práctica: separando lecturas y escrituras
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
              Implementación de Command Query Responsibility Segregation con
              FastAPI, Redis y PostgreSQL.
            </p>

            <div className="flex flex-wrap gap-2">
              {["CQRS", "Redis", "Patterns"].map((tag, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <button className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm flex items-center gap-2 group/link">
              Leer más
              <span className="group-hover/link:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* CTA for Newsletter/More Articles */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 p-8 md:p-12 rounded-3xl border border-orange-500/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Quieres más contenido técnico?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Publico regularmente sobre arquitectura backend, MLOps y mejores
            prácticas en ingeniería de software.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300">
              Ver todos los artículos
            </button>
            <button className="px-8 py-3 bg-gray-800 border border-gray-600 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300">
              Seguir en LinkedIn
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
