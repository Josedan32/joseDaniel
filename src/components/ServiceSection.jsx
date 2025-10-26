import React from "react";
import { Zap, Target, Users, TrendingUp, Globe, Sparkles, DollarSign } from "lucide-react";
import { FloatingBackground } from "./FloatingBackground";

export const ServiceSection = () => (
    <div className="relative py-20 md:py-32" id="servicios">
        <FloatingBackground/>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm font-semibold text-purple-300 inline-block mb-6">
              Servicios
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Soluciones{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                profesionales
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Desde MVPs hasta sistemas enterprise de alto rendimiento
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Service 1: Backend Development */}
            <div className="group bg-gradient-to-br from-blue-500/5 to-cyan-500/5 p-8 rounded-3xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold">
                  Popular
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3">Desarrollo Backend</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                APIs RESTful y GraphQL escalables, arquitectura de
                microservicios y pipelines de datos optimizados para alto
                rendimiento.
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {[
                  "APIs RESTful con documentación completa",
                  "Arquitectura de microservicios",
                  "Integración de terceros (Stripe, AWS, etc)",
                  "Pipelines de datos y ETL",
                  "Testing automatizado y CI/CD",
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <div className="w-5 h-5 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Pricing Tiers */}
              <div className="space-y-2 pt-6 border-t border-gray-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Básico (API simple)</span>
                  <span className="font-bold text-blue-400">$800 - $1,500</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">
                    Avanzado (Microservicios)
                  </span>
                  <span className="font-bold text-blue-400">
                    $2,500 - $5,000
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">
                    Enterprise (Sistema completo)
                  </span>
                  <span className="font-bold text-blue-400">$8,000+</span>
                </div>
              </div>
            </div>

            {/* Service 2: AI/ML Models */}
            <div className="group bg-gradient-to-br from-pink-500/5 to-purple-500/5 p-8 rounded-3xl border border-pink-500/20 hover:border-pink-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-pink-500/50 group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-xs font-semibold">
                  IA/ML
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3">Modelos de IA</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Machine Learning aplicado a problemas reales: scoring,
                predicción de demanda, NLP y análisis de datos con deep
                learning.
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {[
                  "Modelos de scoring y clasificación",
                  "Predicción de demanda y series temporales",
                  "NLP y análisis de sentimientos",
                  "Computer Vision (detección de objetos)",
                  "Chatbots inteligentes con LLMs",
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <div className="w-5 h-5 bg-pink-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Pricing Tiers */}
              <div className="space-y-2 pt-6 border-t border-gray-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Básico (Modelo simple)</span>
                  <span className="font-bold text-pink-400">
                    $1,500 - $3,000
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Avanzado (ML/NLP)</span>
                  <span className="font-bold text-pink-400">
                    $4,000 - $8,000
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">
                    Enterprise (Deep Learning)
                  </span>
                  <span className="font-bold text-pink-400">$12,000+</span>
                </div>
              </div>
            </div>

            {/* Service 3: Technical Consulting */}
            <div className="group bg-gradient-to-br from-green-500/5 to-emerald-500/5 p-8 rounded-3xl border border-green-500/20 hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/20">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/50 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-xs font-semibold">
                  Consultoría
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3">Consultoría Técnica</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Diseño de arquitectura, optimización de sistemas legacy y
                estrategia de integración de IA en tu infraestructura actual.
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {[
                  "Auditoría de arquitectura existente",
                  "Diseño de sistemas escalables",
                  "Optimización de performance y costos",
                  "Estrategia de migración a cloud",
                  "Integración de IA en workflows",
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <div className="w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Pricing Tiers */}
              <div className="space-y-2 pt-6 border-t border-gray-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Sesión única (2h)</span>
                  <span className="font-bold text-green-400">$200 - $400</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Auditoría completa</span>
                  <span className="font-bold text-green-400">
                    $1,500 - $3,500
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Retainer mensual</span>
                  <span className="font-bold text-green-400">
                    $2,000 - $5,000/mes
                  </span>
                </div>
              </div>
            </div>

            {/* Service 4: Fullstack Development */}
            <div className="group bg-gradient-to-br from-orange-500/5 to-amber-500/5 p-8 rounded-3xl border border-orange-500/20 hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/50 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-xs font-semibold">
                  Fullstack
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-3">Desarrollo Fullstack</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                MVPs funcionales, dashboards interactivos y paneles
                administrativos completos. De la idea al producto en semanas.
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {[
                  "MVPs con React/Next.js + FastAPI",
                  "Dashboards con visualización de datos",
                  "Paneles administrativos (CRM, ERP)",
                  "Autenticación y roles de usuario",
                  "Responsive design y PWA",
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm text-gray-300"
                  >
                    <div className="w-5 h-5 bg-orange-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                    </div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Pricing Tiers */}
              <div className="space-y-2 pt-6 border-t border-gray-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">
                    Básico (Landing + Backend)
                  </span>
                  <span className="font-bold text-orange-400">
                    $1,200 - $2,500
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Avanzado (MVP completo)</span>
                  <span className="font-bold text-orange-400">
                    $3,500 - $7,000
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Enterprise (Plataforma)</span>
                  <span className="font-bold text-orange-400">$10,000+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold mb-2">Entrega Rápida</h4>
              <p className="text-sm text-gray-400">
                Prototipos en 1 semana, MVPs en 3-4 semanas
              </p>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold mb-2">Precios Competitivos</h4>
              <p className="text-sm text-gray-400">
                Calidad enterprise a precios accesibles
              </p>
            </div>
            <div className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold mb-2">Soporte Continuo</h4>
              <p className="text-sm text-gray-400">
                Capacitación y mantenimiento incluidos
              </p>
            </div>
          </div>
        </div>
      </div>
);
