import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code2, Zap, Award, Brain, Layout, Server, Filter, X, ChevronLeft, ChevronRight, Clock } from 'lucide-react';

const ProjectsShowcase = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('TODOS');
  const [activeLevel, setActiveLevel] = useState('TODOS');
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1, title: "Scoring Crediticio IA", description: "Sistema de machine learning que predice riesgo crediticio y determina cupo máximo usando XGBoost. Incluye interpretabilidad con SHAP para explicar decisiones a usuarios finales.", problem: "Evaluaciones manuales lentas", solution: "XGBoost + FastAPI automatizado", impact: "67% menos tiempo", stack: ["XGBoost", "FastAPI", "Redis"], category: "IA", level: "AVANZADO", metrics: [{ label: "Precisión", value: "94%" }], time: "3 meses", timeUnit: "meses"
    },
    {
      id: 2, title: "Dashboard Analytics", description: "Dashboard interactivo con WebSockets para visualización de métricas de negocio en tiempo real. Incluye alertas inteligentes y detección de anomalías automática.", problem: "Datos dispersos", solution: "WebSocket + React", impact: "5x detección más rápida", stack: ["React", "D3.js", "WebSocket"], category: "FRONT", level: "INTERMEDIO", metrics: [{ label: "Users", value: "500+" }], time: "6 semanas", timeUnit: "semanas"
    },
    {
      id: 3, title: "OCR Procesamiento", description: "Pipeline automatizado de procesamiento de documentos usando OCR y NLP. Extrae datos de PDFs y facturas con validación inteligente de campos.", problem: "15% error manual", solution: "Tesseract + spaCy", impact: "10K docs/hora", stack: ["Python", "Tesseract", "spaCy"], category: "IA", level: "AVANZADO", metrics: [{ label: "Precisión", value: "98.5%" }], time: "2 meses", timeUnit: "meses"
    },
    {
      id: 4, title: "REST API JWT", description: "API RESTful escalable con autenticación JWT, rate limiting y validaciones robustas. Arquitectura modular con documentación OpenAPI completa.", problem: "Sin auth moderna", solution: "Node + JWT + MongoDB", impact: "100% uptime", stack: ["Node.js", "JWT", "MongoDB"], category: "BACK", level: "INTERMEDIO", metrics: [{ label: "Latencia", value: "200ms" }], time: "1 mes", timeUnit: "mes"
    },
    {
      id: 5, title: "Landing 3D", description: "Landing page moderna con elementos 3D interactivos usando Three.js. Animaciones fluidas con GSAP y diseño responsive optimizado para conversión.", problem: "Presencia digital", solution: "Three.js + GSAP", impact: "8.5% conversión", stack: ["Three.js", "GSAP", "React"], category: "FRONT", level: "AVANZADO", metrics: [{ label: "Score", value: "98/100" }], time: "5 semanas", timeUnit: "semanas"
    },
    {
      id: 6, title: "Todo App", description: "Aplicación de gestión de tareas con React Hooks y Context API. Incluye drag & drop, filtros avanzados y persistencia local con sincronización.", problem: "Aprender React hooks", solution: "Context API + LocalStorage", impact: "50+ commits", stack: ["React", "Context API"], category: "FRONT", level: "BASICO", metrics: [{ label: "Features", value: "8" }], time: "2 semanas", timeUnit: "semanas"
    },
    {
      id: 7, title: "Chatbot NLP", description: "Asistente virtual con procesamiento de lenguaje natural usando GPT-3.5 y LangChain. Memoria conversacional y respuestas contextuales para soporte automatizado.", problem: "Soporte 24/7 costoso", solution: "GPT-3.5 + LangChain", impact: "80% queries auto", stack: ["Python", "LangChain", "OpenAI"], category: "IA", level: "AVANZADO", metrics: [{ label: "Precisión", value: "92%" }], time: "6 semanas", timeUnit: "semanas"
    },
    {
      id: 8, title: "E-commerce", description: "Tienda online completa con Next.js, integración de pagos con Stripe y carrito persistente. Incluye panel de administración y gestión de inventario en tiempo real.", problem: "Ventas offline limitadas", solution: "Next.js + Stripe + Cart", impact: "$50K ventas/mes", stack: ["Next.js", "Stripe", "Prisma"], category: "FRONT", level: "INTERMEDIO", metrics: [{ label: "Ventas", value: "$50K" }], time: "3 meses", timeUnit: "meses"
    },
    {
      id: 9, title: "Microservicios", description: "Arquitectura de microservicios con Docker y Kubernetes. Comunicación gRPC entre servicios, auto-scaling y monitoreo con Prometheus y Grafana.", problem: "Monolito lento", solution: "Docker + K8s + gRPC", impact: "3x más rápido", stack: ["Docker", "K8s", "gRPC"], category: "BACK", level: "AVANZADO", metrics: [{ label: "Speed", value: "3x" }], time: "4 meses", timeUnit: "meses"
    },
    {
      id: 10, title: "Blog CMS", description: "Sistema de gestión de contenido con Express y MySQL. Incluye editor WYSIWYG, sistema de comentarios y SEO optimizado con meta tags dinámicas.", problem: "Aprender CRUD", solution: "Express + MySQL + EJS", impact: "Proyecto fundacional", stack: ["Express", "MySQL", "EJS"], category: "BACK", level: "BASICO", metrics: [{ label: "Posts", value: "100+" }], time: "3 semanas", timeUnit: "semanas"
    },
    {
      id: 11, title: "Portfolio Animado", description: "Sitio web personal con animaciones fluidas usando Framer Motion. Diseño minimalista responsive con modo oscuro y optimización de performance.", problem: "Destacar skills", solution: "React + Framer Motion", impact: "500+ visitas/mes", stack: ["React", "Framer", "Tailwind"], category: "FRONT", level: "BASICO", metrics: [{ label: "Visitas", value: "500+" }], time: "1 semana", timeUnit: "semana"
    },
    {
      id: 12, title: "Clasificador Imágenes", description: "Red neuronal convolucional para clasificación de imágenes usando Transfer Learning con TensorFlow. API REST para predicciones en tiempo real.", problem: "Etiquetado manual lento", solution: "TensorFlow + Transfer Learning", impact: "1000 imgs/min", stack: ["TensorFlow", "Python", "Flask"], category: "IA", level: "AVANZADO", metrics: [{ label: "Acc", value: "96%" }], time: "2 meses", timeUnit: "meses"
    },
    {
      id: 13, title: "GraphQL API", description: "API moderna con GraphQL y Apollo Server. Queries flexibles, subscriptions en tiempo real y sistema de cache optimizado con DataLoader.", problem: "Over-fetching REST", solution: "Apollo + TypeScript", impact: "50% menos requests", stack: ["GraphQL", "Apollo", "TypeScript"], category: "BACK", level: "INTERMEDIO", metrics: [{ label: "Reduce", value: "50%" }], time: "5 semanas", timeUnit: "semanas"
    },
    {
      id: 14, title: "Component Library", description: "Sistema de diseño reutilizable con Storybook. Componentes documentados, testing automatizado con Jest y publicación en NPM para uso interno.", problem: "Inconsistencia UI", solution: "Storybook + React + TS", impact: "40% dev más rápido", stack: ["React", "Storybook", "TS"], category: "FRONT", level: "INTERMEDIO", metrics: [{ label: "Comps", value: "50+" }], time: "2 meses", timeUnit: "meses"
    },
    {
      id: 15, title: "ETL Pipeline", description: "Pipeline de extracción, transformación y carga de datos usando Apache Airflow y Spark. Procesamiento distribuido con monitoreo y alertas automáticas.", problem: "Data silos", solution: "Airflow + Spark", impact: "2TB/día procesados", stack: ["Airflow", "Spark", "Python"], category: "BACK", level: "AVANZADO", metrics: [{ label: "Data", value: "2TB/d" }], time: "3 meses", timeUnit: "meses"
    }
  ];

  const categories = [
    { name: 'TODOS', icon: Filter, color: 'slate' },
    { name: 'IA', icon: Brain, color: 'purple' },
    { name: 'FRONT', icon: Layout, color: 'blue' },
    { name: 'BACK', icon: Server, color: 'green' }
  ];

  const levels = ['TODOS', 'BASICO', 'INTERMEDIO', 'AVANZADO'];

  const filteredProjects = projects.filter(project => {
    const categoryMatch = activeCategory === 'TODOS' || project.category === activeCategory;
    const levelMatch = activeLevel === 'TODOS' || project.level === activeLevel;
    return categoryMatch && levelMatch;
  });

  // Featured projects for slider (first 5)
  const featuredProjects = filteredProjects.slice(0, 5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredProjects.length]);

  const getCategoryColor = (category) => {
    const colors = { IA: 'purple', FRONT: 'blue', BACK: 'green' };
    return colors[category] || 'slate';
  };

  const getLevelColor = (level) => {
    const colors = { BASICO: 'green', INTERMEDIO: 'yellow', AVANZADO: 'red' };
    return colors[level] || 'slate';
  };

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-3 md:p-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full mb-3">
            <Award className="w-3 h-3 text-blue-400" />
            <span className="text-blue-300 text-xs font-medium">Portfolio</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
            Proyectos Destacados
          </h1>
        </div>

        {/* Filters */}
        <div className="mb-6 space-y-3">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(({ name, icon: Icon, color }) => (
              <button
                key={name}
                onClick={() => setActiveCategory(name)}
                className={`
                  flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium text-xs transition-all border backdrop-blur-sm
                  ${activeCategory === name 
                    ? 'bg-blue-500/20 border-blue-500/50 text-blue-300 shadow-lg' 
                    : 'bg-slate-800/50 border-slate-700/50 text-slate-400 hover:border-slate-600'}
                `}
              >
                <Icon className="w-3 h-3" />
                <span>{name}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {levels.map((level) => (
              <button
                key={level}
                onClick={() => setActiveLevel(level)}
                className={`
                  px-3 py-1 rounded-full font-medium text-xs transition-all border backdrop-blur-sm
                  ${activeLevel === level
                    ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300'
                    : 'bg-slate-800/30 border-slate-700/30 text-slate-500 hover:border-slate-600'}
                `}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Slider */}
        {featuredProjects.length > 0 && (
          <div className="mb-8 relative group">
            <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
              {featuredProjects.map((project, idx) => (
                <div
                  key={project.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    idx === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 to-purple-900/40"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.1),transparent_50%)]"></div>
                  
                  <div className="relative h-full p-8 flex flex-col justify-end">
                    <div className="flex gap-2 mb-3">
                      <span className="px-2 py-1 bg-blue-500/30 border border-blue-400/50 rounded-lg text-xs text-blue-200 backdrop-blur-sm">
                        {project.category}
                      </span>
                      <span className="px-2 py-1 bg-purple-500/30 border border-purple-400/50 rounded-lg text-xs text-purple-200 backdrop-blur-sm">
                        {project.level}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h2>
                    <p className="text-blue-100 text-sm mb-4 max-w-2xl">{project.description}</p>
                    
                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-4 py-2 bg-white/90 hover:bg-white text-slate-900 rounded-lg font-medium text-sm transition-all"
                      >
                        Ver detalles
                      </button>
                      <div className="flex gap-2">
                        {project.stack.slice(0, 3).map((tech, i) => (
                          <span key={i} className="px-3 py-2 bg-slate-950/60 backdrop-blur-sm border border-slate-700/50 rounded-lg text-xs text-slate-300">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-950/80 backdrop-blur-sm border border-slate-700 rounded-full flex items-center justify-center text-slate-300 hover:text-white opacity-0 group-hover:opacity-100 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-950/80 backdrop-blur-sm border border-slate-700 rounded-full flex items-center justify-center text-slate-300 hover:text-white opacity-0 group-hover:opacity-100 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {featuredProjects.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentSlide ? 'bg-white w-6' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Bento Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 auto-rows-[120px] gap-2 md:gap-3 mb-6">
          {filteredProjects.map((project, idx) => {
            // Creative sizing patterns
            const sizes = [
              'col-span-2 row-span-2', // Large
              'col-span-1 row-span-1', // Small
              'col-span-1 row-span-2', // Tall
              'col-span-2 row-span-1', // Wide
              'col-span-1 row-span-1', // Small
              'col-span-1 row-span-1', // Small
            ];
            const sizeClass = sizes[idx % 6];
            const isLarge = sizeClass.includes('col-span-2') && sizeClass.includes('row-span-2');
            const isTall = sizeClass.includes('row-span-2') && !sizeClass.includes('col-span-2');
            const isWide = sizeClass.includes('col-span-2') && !sizeClass.includes('row-span-2');

            return (
              <div
                key={project.id}
                className={`${sizeClass} group relative`}
                style={{ 
                  animationDelay: `${idx * 30}ms`,
                  animation: 'fadeInScale 0.5s ease-out forwards',
                  opacity: 0
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div 
                  className={`
                    bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden
                    transition-all duration-500 hover:scale-105 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/20
                    cursor-pointer h-full flex flex-col relative
                    ${hoveredProject === project.id ? 'ring-1 ring-cyan-500/50 z-10' : ''}
                  `}
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Content */}
                  <div className="relative p-2.5 md:p-3 flex-1 flex flex-col min-h-0">
                    {/* Badges */}
                    <div className="flex gap-1 mb-1.5 flex-shrink-0">
                      <span className={`px-1.5 py-0.5 bg-${getCategoryColor(project.category)}-500/20 border border-${getCategoryColor(project.category)}-500/30 rounded text-xs text-${getCategoryColor(project.category)}-300 font-medium`}>
                        {project.category}
                      </span>
                      {(isLarge || isTall) && (
                        <span className={`px-1.5 py-0.5 bg-${getLevelColor(project.level)}-500/20 border border-${getLevelColor(project.level)}-500/30 rounded text-xs text-${getLevelColor(project.level)}-300`}>
                          {project.level}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className={`font-bold text-slate-100 group-hover:text-cyan-400 transition-colors mb-1 flex-shrink-0 ${
                      isLarge ? 'text-sm md:text-base' : 'text-xs'
                    } line-clamp-2`}>
                      {project.title}
                    </h3>

                    {/* Time badge */}
                    <div className="flex items-center gap-1 mb-1.5 flex-shrink-0">
                      <Clock className="w-2.5 h-2.5 md:w-3 md:h-3 text-slate-500" />
                      <span className="text-xs text-slate-500">{project.time}</span>
                    </div>

                    {/* Description - only for larger cards */}
                    {(isLarge || isWide) && (
                      <p className="text-slate-400 text-xs mb-1.5 line-clamp-2 flex-shrink-0">
                        {project.description}
                      </p>
                    )}

                    {/* Stack */}
                    <div className="flex flex-wrap gap-1 mb-1.5 flex-shrink-0">
                      {project.stack.slice(0, isLarge ? 3 : 2).map((tech, i) => (
                        <span 
                          key={i}
                          className="px-1.5 py-0.5 bg-slate-800/50 rounded text-xs text-slate-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Metric */}
                    <div className="mt-auto flex-shrink-0">
                      <div className="flex items-center gap-1.5">
                        <Zap className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                        <span className="text-cyan-400 font-bold text-xs md:text-sm">{project.metrics[0].value}</span>
                        <span className="text-slate-500 text-xs truncate">{project.metrics[0].label}</span>
                      </div>
                    </div>

                    {/* Hover overlay for small cards */}
                    {!isLarge && (
                      <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm p-2.5 md:p-3 opacity-0 group-hover:opacity-100 transition-all flex flex-col">
                        <div className="flex items-center gap-1 mb-1.5 flex-shrink-0">
                          <Clock className="w-3 h-3 text-cyan-400" />
                          <span className="text-xs text-cyan-400">{project.time}</span>
                        </div>
                        <p className="text-slate-300 text-xs mb-2 flex-1 overflow-y-auto line-clamp-4">{project.description}</p>
                        <div className="flex gap-1 flex-shrink-0">
                          <button className="flex-1 px-2 py-1 bg-slate-800 rounded text-xs text-slate-300 hover:bg-slate-700 flex items-center justify-center gap-1">
                            <Github className="w-3 h-3" />
                          </button>
                          <button className="flex-1 px-2 py-1 bg-blue-600 rounded text-xs text-white hover:bg-blue-700 flex items-center justify-center gap-1">
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Filter className="w-12 h-12 text-slate-700 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-400 mb-1">No hay proyectos</h3>
            <p className="text-slate-500 text-sm">Intenta con otros filtros</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex gap-2 mb-2">
                    <span className={`px-2 py-1 bg-${getCategoryColor(selectedProject.category)}-500/20 border border-${getCategoryColor(selectedProject.category)}-500/30 rounded text-xs text-${getCategoryColor(selectedProject.category)}-300`}>
                      {selectedProject.category}
                    </span>
                    <span className={`px-2 py-1 bg-${getLevelColor(selectedProject.level)}-500/20 border border-${getLevelColor(selectedProject.level)}-500/30 rounded text-xs text-${getLevelColor(selectedProject.level)}-300`}>
                      {selectedProject.level}
                    </span>
                    <span className="px-2 py-1 bg-slate-800/50 border border-slate-700/50 rounded text-xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {selectedProject.time}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-slate-100 mb-2">{selectedProject.title}</h2>
                  <p className="text-slate-300 text-sm">{selectedProject.description}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 mb-4">
                <div className="p-3 bg-red-500/5 border border-red-500/20 rounded-lg">
                  <h4 className="text-red-300 font-semibold mb-1 text-xs">Problema</h4>
                  <p className="text-slate-400 text-sm">{selectedProject.problem}</p>
                </div>

                <div className="p-3 bg-green-500/5 border border-green-500/20 rounded-lg">
                  <h4 className="text-green-300 font-semibold mb-1 text-xs">Solución</h4>
                  <p className="text-slate-400 text-sm">{selectedProject.solution}</p>
                </div>

                <div className="p-3 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                  <h4 className="text-blue-300 font-semibold mb-1 text-xs">Impacto</h4>
                  <p className="text-slate-300 text-sm">{selectedProject.impact}</p>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="text-slate-300 font-semibold mb-2 text-sm">Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.stack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded text-xs text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-sm text-slate-300 hover:text-white">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm text-white">
                  <ExternalLink className="w-4 h-4" />
                  <span>Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default ProjectsShowcase;