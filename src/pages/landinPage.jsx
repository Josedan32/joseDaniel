import React, { useState } from "react";
import {
  TrendingUp,
  Store,
  Calendar,
  Users,
  Globe,
  Zap,
  Target,
  DollarSign,
  Sparkles,
  Menu,
  X,
  Briefcase,
  Mail,
  Phone,
} from "lucide-react";

const IdeasNegocio = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const [activeCard, setActiveCard] = useState(null);
  const [projectLevel, setProjectLevel] = useState("all");
  const [projectType, setProjectType] = useState("all");

  const handleMouseMove = (e, cardId) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setHoverPosition({ x, y });
    setActiveCard(cardId);
  };

  const projects = [
    {
      id: 1,
      title: "E-commerce con IA",
      description:
        "Tienda online completa con recomendaciones personalizadas usando machine learning y chatbot integrado.",
      level: "avanzado",
      types: ["ia", "frontend", "backend"],
      tech: ["React", "Node.js", "TensorFlow", "Stripe"],
      time: "6-8 semanas",
      price: "$3,500 - $6,000",
      color: "pink",
      features: [
        "Recomendaciones IA",
        "Chatbot inteligente",
        "Pasarela de pago",
        "Panel admin",
      ],
    },
    {
      id: 2,
      title: "Landing Page Moderna",
      description:
        "Landing page responsive con animaciones avanzadas, formularios y optimización SEO.",
      level: "principiante",
      types: ["frontend"],
      tech: ["React", "Tailwind", "Framer Motion"],
      time: "1-2 semanas",
      price: "$400 - $800",
      color: "green",
      features: [
        "Animaciones fluidas",
        "Responsive design",
        "SEO optimizado",
        "Formulario contacto",
      ],
    },
    {
      id: 3,
      title: "Sistema de Reservas",
      description:
        "Plataforma completa de agendamiento con notificaciones, pagos y gestión de clientes.",
      level: "intermedio",
      types: ["frontend", "backend"],
      tech: ["Next.js", "PostgreSQL", "Stripe", "SendGrid"],
      time: "4-5 semanas",
      price: "$1,500 - $2,500",
      color: "blue",
      features: [
        "Calendario interactivo",
        "Pagos online",
        "Email notifications",
        "Dashboard",
      ],
    },
    {
      id: 4,
      title: "API REST Escalable",
      description:
        "Backend robusto con autenticación, base de datos optimizada y documentación completa.",
      level: "intermedio",
      types: ["backend"],
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      time: "3-4 semanas",
      price: "$1,200 - $2,000",
      color: "orange",
      features: [
        "Auth seguro",
        "Rate limiting",
        "Documentación API",
        "Tests unitarios",
      ],
    },
    {
      id: 5,
      title: "Dashboard con Analytics IA",
      description:
        "Panel de control con visualización de datos, predicciones con IA y reportes automáticos.",
      level: "avanzado",
      types: ["ia", "frontend", "backend"],
      tech: ["React", "Python", "TensorFlow", "D3.js"],
      time: "5-7 semanas",
      price: "$2,800 - $5,000",
      color: "pink",
      features: [
        "Predicciones ML",
        "Gráficos interactivos",
        "Exportar reportes",
        "Alertas automáticas",
      ],
    },
    {
      id: 6,
      title: "Portfolio Interactivo",
      description:
        "Sitio web personal con animaciones 3D, proyectos destacados y blog integrado.",
      level: "principiante",
      types: ["frontend"],
      tech: ["React", "Three.js", "Tailwind"],
      time: "2-3 semanas",
      price: "$500 - $1,000",
      color: "green",
      features: [
        "Animaciones 3D",
        "Blog CMS",
        "Galería proyectos",
        "Contacto directo",
      ],
    },
    {
      id: 7,
      title: "Chatbot Inteligente",
      description:
        "Asistente virtual con procesamiento de lenguaje natural y aprendizaje continuo.",
      level: "avanzado",
      types: ["ia", "backend"],
      tech: ["Python", "OpenAI", "FastAPI", "Redis"],
      time: "4-6 semanas",
      price: "$2,000 - $4,000",
      color: "blue",
      features: [
        "NLP avanzado",
        "Aprendizaje continuo",
        "Multi-idioma",
        "Integración WhatsApp",
      ],
    },
    {
      id: 8,
      title: "CRM Personalizado",
      description:
        "Sistema de gestión de clientes con automatizaciones, seguimiento y analytics.",
      level: "intermedio",
      types: ["frontend", "backend"],
      tech: ["Vue.js", "Laravel", "MySQL"],
      time: "5-6 semanas",
      price: "$2,200 - $3,500",
      color: "orange",
      features: [
        "Gestión leads",
        "Automatizaciones",
        "Reportes ventas",
        "Email marketing",
      ],
    },
    {
      id: 9,
      title: "App de Delivery",
      description:
        "Plataforma completa para pedidos online con tracking en tiempo real y pagos.",
      level: "avanzado",
      types: ["frontend", "backend"],
      tech: ["React Native", "Node.js", "Socket.io", "Google Maps"],
      time: "8-10 semanas",
      price: "$4,000 - $7,000",
      color: "pink",
      features: [
        "Tracking tiempo real",
        "Multi-restaurantes",
        "Pasarela pago",
        "App móvil",
      ],
    },
    {
      id: 10,
      title: "Blog con CMS",
      description:
        "Blog profesional con gestor de contenidos, SEO avanzado y newsletter.",
      level: "principiante",
      types: ["frontend", "backend"],
      tech: ["Next.js", "Strapi", "Markdown"],
      time: "2-3 semanas",
      price: "$600 - $1,200",
      color: "green",
      features: ["CMS headless", "SEO optimizado", "Newsletter", "Comentarios"],
    },
    {
      id: 11,
      title: "Sistema de Facturación",
      description:
        "Plataforma de facturación electrónica integrada con DIAN y contabilidad.",
      level: "intermedio",
      types: ["backend", "frontend"],
      tech: ["Angular", "Java Spring", "PostgreSQL"],
      time: "6-8 semanas",
      price: "$2,500 - $4,500",
      color: "blue",
      features: [
        "Integración DIAN",
        "Multi-empresa",
        "Reportes contables",
        "Inventario",
      ],
    },
    {
      id: 12,
      title: "Detector de Imágenes IA",
      description:
        "Sistema de clasificación y detección de objetos en imágenes usando deep learning.",
      level: "avanzado",
      types: ["ia", "backend"],
      tech: ["Python", "TensorFlow", "FastAPI", "OpenCV"],
      time: "5-7 semanas",
      price: "$2,800 - $5,500",
      color: "orange",
      features: [
        "Detección objetos",
        "Clasificación ML",
        "API REST",
        "Procesamiento batch",
      ],
    },
  ];

  const ideas = [
    {
      id: 1,
      icon: <Globe className="w-8 h-8" />,
      title: "Landing Pages para PYMEs",
      description:
        "El 76% de empresas colombianas está digitalizándose. Oportunidad perfecta para landing pages profesionales.",
      price: "$300 - $1,500 USD",
      demand: "Alta",
      category: "web",
      color: "pink",
      packages: [
        "Landing básica con contacto",
        "Captura de leads + email marketing",
        "Landing de ventas con pasarela",
        "Servicios profesionales especializados",
      ],
    },
    {
      id: 2,
      icon: <Store className="w-8 h-8" />,
      title: "Tiendas Online Completas",
      description:
        "Colombia cerrará 2025 con $125.8 billones en e-commerce. Crecimiento del 19.4% anual.",
      price: "$1,200 - $4,000 USD",
      demand: "Muy Alta",
      category: "ecommerce",
      color: "green",
      packages: [
        "Tienda básica Shopify/WooCommerce",
        "Integración PayU, Wompi, Mercado Pago",
        "Inventario avanzado + CRM",
        "Migración físico a online",
      ],
    },
    {
      id: 3,
      icon: <Calendar className="w-8 h-8" />,
      title: "Sistemas de Reservas",
      description:
        "Para restaurantes, clínicas, salones y profesionales. Automatiza agendamiento y pagos.",
      price: "$800 - $3,000 USD",
      demand: "Alta",
      category: "tools",
      color: "blue",
      packages: [
        "Reservas + pagos anticipados",
        "Portal citas médicas",
        "Plataforma profesores/coaches",
        "Integración videoconferencia",
      ],
    },
    {
      id: 4,
      icon: <Users className="w-8 h-8" />,
      title: "Portales Profesionales",
      description:
        "Sitios especializados para médicos, abogados, contadores y coaches con herramientas integradas.",
      price: "$600 - $1,200 USD",
      demand: "Media-Alta",
      category: "web",
      color: "orange",
      packages: [
        "Telemedicina para médicos",
        "Consulta virtual abogados",
        "Portal contadores con docs",
        "Agenda online psicólogos",
      ],
    },
    {
      id: 5,
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Marketplaces Multi-vendor",
      description:
        "Dropshipping con enfoque en nichos especializados y proveedores locales está consolidándose.",
      price: "$3,000 - $8,000 USD",
      demand: "Media",
      category: "ecommerce",
      color: "pink",
      packages: [
        "Marketplace artesanos locales",
        "Plataforma productos orgánicos",
        "Marketplace B2B mayoristas",
        "Servicios del hogar",
      ],
    },
    {
      id: 6,
      icon: <Target className="w-8 h-8" />,
      title: "Sitios Web con SEO Local",
      description:
        "41.1M de colombianos online buscan servicios locales. Domina Google en tu ciudad.",
      price: "$1,000 - $2,500 USD",
      demand: "Alta",
      category: "web",
      color: "green",
      packages: [
        "Web profesional + blog",
        "SEO local optimizado",
        "Google My Business",
        "Mantenimiento $150-400/mes",
      ],
    },
    {
      id: 7,
      icon: <Zap className="w-8 h-8" />,
      title: "Automatizaciones con IA",
      description:
        "IA para inventarios, personalización y atención al cliente. Tendencia fuerte en PYMEs.",
      price: "$1,500 - $5,000 USD",
      demand: "Muy Alta",
      category: "tools",
      color: "blue",
      packages: [
        "Chatbots WhatsApp ventas",
        "Facturación electrónica DIAN",
        "CRM personalizado",
        "Dashboards analytics",
      ],
    },
    {
      id: 8,
      icon: <Sparkles className="w-8 h-8" />,
      title: "Landing Pages Eventos",
      description:
        "Para Hot Sale, lanzamientos de productos y eventos virtuales/híbridos.",
      price: "$400 - $1,000 USD",
      demand: "Media",
      category: "web",
      color: "orange",
      packages: [
        "Hot Sale Colombia",
        "Lanzamientos productos",
        "Eventos virtuales/híbridos",
        "Inscripción con pagos",
      ],
    },
  ];

  const categories = [
    { id: "all", name: "Todas", icon: <Globe className="w-4 h-4" /> },
    { id: "web", name: "Sitios Web", icon: <Globe className="w-4 h-4" /> },
    {
      id: "ecommerce",
      name: "E-commerce",
      icon: <Store className="w-4 h-4" />,
    },
    { id: "tools", name: "Herramientas", icon: <Zap className="w-4 h-4" /> },
  ];

  const getColorClasses = (color) => {
    const colors = {
      pink: {
        hover: "hover:border-pink-500 hover:shadow-pink-500/50",
        gradient: "from-pink-500/20 to-transparent",
        text: "text-pink-400",
        badge: "bg-pink-500/20 text-pink-300",
      },
      green: {
        hover: "hover:border-green-500 hover:shadow-green-500/50",
        gradient: "from-green-500/20 to-transparent",
        text: "text-green-400",
        badge: "bg-green-500/20 text-green-300",
      },
      blue: {
        hover: "hover:border-blue-500 hover:shadow-blue-500/50",
        gradient: "from-blue-500/20 to-transparent",
        text: "text-blue-400",
        badge: "bg-blue-500/20 text-blue-300",
      },
      orange: {
        hover: "hover:border-orange-500 hover:shadow-orange-500/50",
        gradient: "from-orange-500/20 to-transparent",
        text: "text-orange-400",
        badge: "bg-orange-500/20 text-orange-300",
      },
    };
    return colors[color];
  };

  const filteredIdeas =
    selectedCategory === "all"
      ? ideas
      : ideas.filter((idea) => idea.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      <div className="p-4 md:p-8">
        {/* Header */}
        <div className="max-w-7xl mx-auto mb-12" id="ideas">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 bg-clip-text text-transparent">
              Ideas de Alto Potencial
            </h1>
            <p className="text-xl text-gray-400">Colombia 2025 - Medellín</p>
            <div className="flex items-center justify-center gap-2 mt-4 text-green-400">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm">
                Mercado en expansión: +19.4% crecimiento e-commerce
              </span>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-lg shadow-pink-500/30"
                    : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-gray-700"
                }`}
              >
                {cat.icon}
                {cat.name}
              </button>
            ))}
          </div>

          {/* Ideas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIdeas.map((idea, index) => {
              const colorClasses = getColorClasses(idea.color);
              const isHovered = hoveredCard === idea.id;

              return (
                <div
                  key={idea.id}
                  onMouseEnter={() => setHoveredCard(idea.id)}
                  onMouseLeave={() => {
                    setHoveredCard(null);
                    setActiveCard(null);
                  }}
                  onMouseMove={(e) => handleMouseMove(e, idea.id)}
                  className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 transition-all duration-500 cursor-pointer overflow-hidden ${colorClasses.hover}`}
                  style={{
                    animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                    boxShadow: isHovered
                      ? `0 20px 60px -15px ${
                          idea.color === "pink"
                            ? "rgba(236, 72, 153, 0.5)"
                            : idea.color === "green"
                            ? "rgba(34, 197, 94, 0.5)"
                            : idea.color === "blue"
                            ? "rgba(59, 130, 246, 0.5)"
                            : "rgba(249, 115, 22, 0.5)"
                        }, 0 10px 30px -10px ${
                          idea.color === "pink"
                            ? "rgba(236, 72, 153, 0.3)"
                            : idea.color === "green"
                            ? "rgba(34, 197, 94, 0.3)"
                            : idea.color === "blue"
                            ? "rgba(59, 130, 246, 0.3)"
                            : "rgba(249, 115, 22, 0.3)"
                        }`
                      : "none",
                  }}
                >
                  {/* Cursor Follow Effect with Shadow */}
                  {activeCard === idea.id && (
                    <>
                      {/* Glow effect that follows cursor */}
                      <div
                        className="absolute w-40 h-40 rounded-full pointer-events-none transition-opacity duration-300 blur-2xl"
                        style={{
                          left: `${hoverPosition.x}px`,
                          top: `${hoverPosition.y}px`,
                          transform: "translate(-50%, -50%)",
                          background: `radial-gradient(circle, ${
                            idea.color === "pink"
                              ? "rgba(236, 72, 153, 0.6)"
                              : idea.color === "green"
                              ? "rgba(34, 197, 94, 0.6)"
                              : idea.color === "blue"
                              ? "rgba(59, 130, 246, 0.6)"
                              : "rgba(249, 115, 22, 0.6)"
                          } 0%, transparent 70%)`,
                          opacity: isHovered ? 1 : 0,
                          filter: "blur(40px)",
                        }}
                      />
                      {/* Inner glow */}
                      <div
                        className="absolute w-24 h-24 rounded-full pointer-events-none transition-opacity duration-200"
                        style={{
                          left: `${hoverPosition.x}px`,
                          top: `${hoverPosition.y}px`,
                          transform: "translate(-50%, -50%)",
                          background: `radial-gradient(circle, ${
                            idea.color === "pink"
                              ? "rgba(236, 72, 153, 0.4)"
                              : idea.color === "green"
                              ? "rgba(34, 197, 94, 0.4)"
                              : idea.color === "blue"
                              ? "rgba(59, 130, 246, 0.4)"
                              : "rgba(249, 115, 22, 0.4)"
                          } 0%, transparent 70%)`,
                          opacity: isHovered ? 1 : 0,
                        }}
                      />
                    </>
                  )}

                  {/* Gradient Overlay on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${
                      colorClasses.gradient
                    } rounded-2xl opacity-0 transition-opacity duration-500 ${
                      isHovered ? "opacity-100" : ""
                    }`}
                  />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`${
                          colorClasses.text
                        } transform transition-transform duration-500 ${
                          isHovered ? "scale-110 rotate-6" : ""
                        }`}
                      >
                        {idea.icon}
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${colorClasses.badge}`}
                      >
                        {idea.demand}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3">{idea.title}</h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {idea.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-center gap-2 mb-4">
                      <DollarSign className={`w-5 h-5 ${colorClasses.text}`} />
                      <span className="font-bold text-lg">{idea.price}</span>
                    </div>

                    {/* Packages - Show on Hover */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isHovered ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="border-t border-gray-700 pt-4 mt-4">
                        <p className="text-sm font-semibold mb-2 text-gray-300">
                          Paquetes incluidos:
                        </p>
                        <ul className="space-y-2">
                          {idea.packages.map((pkg, i) => (
                            <li
                              key={i}
                              className="text-xs text-gray-400 flex items-start gap-2"
                            >
                              <span className={`${colorClasses.text} mt-0.5`}>
                                →
                              </span>
                              <span>{pkg}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Projects Section */}
          <div className="mt-24" id="proyectos">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Proyectos Disponibles
              </h2>
              <p className="text-xl text-gray-400">
                Encuentra el proyecto perfecto para tu negocio
              </p>
            </div>

            {/* Project Filters */}
            <div className="mb-8">
              {/* Level Filters */}
              <div className="mb-6">
                <p className="text-sm text-gray-400 mb-3 font-semibold">
                  Nivel de complejidad:
                </p>
                <div className="flex flex-wrap gap-3">
                  {["all", "principiante", "intermedio", "avanzado"].map(
                    (level) => (
                      <button
                        key={level}
                        onClick={() => setProjectLevel(level)}
                        className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                          projectLevel === level
                            ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg shadow-green-500/30"
                            : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-gray-700"
                        }`}
                      >
                        {level === "all"
                          ? "Todos"
                          : level.charAt(0).toUpperCase() + level.slice(1)}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Type Filters */}
              <div>
                <p className="text-sm text-gray-400 mb-3 font-semibold">
                  Tipo de proyecto:
                </p>
                <div className="flex flex-wrap gap-3">
                  {["all", "frontend", "backend", "ia"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setProjectType(type)}
                      className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                        projectType === type
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                          : "bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-gray-700"
                      }`}
                    >
                      {type === "all"
                        ? "Todos"
                        : type === "ia"
                        ? "IA"
                        : type.charAt(0).toUpperCase() + type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter((project) => {
                  const levelMatch =
                    projectLevel === "all" || project.level === projectLevel;
                  const typeMatch =
                    projectType === "all" ||
                    project.types.includes(projectType);
                  return levelMatch && typeMatch;
                })
                .map((project, index) => {
                  const colorClasses = getColorClasses(project.color);

                  return (
                    <div
                      key={project.id}
                      className="group bg-gray-800 rounded-2xl border border-gray-700 transition-all duration-300 hover:border-gray-600 overflow-hidden"
                      style={{
                        animation: `slideUp 0.6s ease-out ${index * 0.1}s both`,
                      }}
                    >
                      {/* Image/Header Section */}
                      <div
                        className={`h-40 bg-gradient-to-br ${
                          project.color === "pink"
                            ? "from-pink-600 to-purple-600"
                            : project.color === "green"
                            ? "from-green-600 to-teal-600"
                            : project.color === "blue"
                            ? "from-blue-600 to-cyan-600"
                            : "from-orange-600 to-red-600"
                        } p-6 flex flex-col justify-between`}
                      >
                        <div className="flex items-start justify-between">
                          <span className="px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-xs font-semibold text-white">
                            {project.level.charAt(0).toUpperCase() +
                              project.level.slice(1)}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-white">
                          {project.title}
                        </h3>
                      </div>

                      {/* Content Section */}
                      <div className="p-6">
                        {/* Type Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.types.map((type, i) => (
                            <span
                              key={i}
                              className={`px-3 py-1 rounded-full text-xs font-medium ${
                                type === "frontend"
                                  ? "bg-blue-500/20 text-blue-300 border border-blue-500/30"
                                  : type === "backend"
                                  ? "bg-green-500/20 text-green-300 border border-green-500/30"
                                  : "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                              }`}
                            >
                              {type === "ia"
                                ? "IA"
                                : type.charAt(0).toUpperCase() + type.slice(1)}
                            </span>
                          ))}
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 bg-gray-700 rounded text-xs text-gray-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Time & Price */}
                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-700">
                          <div className="text-sm">
                            <span className="text-gray-500">Tiempo:</span>
                            <p className="text-gray-300 font-medium">
                              {project.time}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="text-gray-500 text-xs">Desde</span>
                            <p className={`font-bold ${colorClasses.text}`}>
                              {project.price}
                            </p>
                          </div>
                        </div>

                        {/* Features Preview */}
                        <div className="mb-4">
                          <p className="text-sm font-semibold mb-2 text-gray-300">
                            Incluye:
                          </p>
                          <ul className="space-y-1">
                            {project.features.slice(0, 3).map((feature, i) => (
                              <li
                                key={i}
                                className="text-xs text-gray-400 flex items-start gap-2"
                              >
                                <span className={`${colorClasses.text} mt-0.5`}>
                                  ✓
                                </span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* View More Button */}
                        <button
                          className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                            project.color === "pink"
                              ? "bg-pink-600 hover:bg-pink-500 text-white"
                              : project.color === "green"
                              ? "bg-green-600 hover:bg-green-500 text-white"
                              : project.color === "blue"
                              ? "bg-blue-600 hover:bg-blue-500 text-white"
                              : "bg-orange-600 hover:bg-orange-500 text-white"
                          } group-hover:shadow-lg group-hover:scale-105`}
                        >
                          Ver más detalles
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>

            {/* No results message */}
            {projects.filter((project) => {
              const levelMatch =
                projectLevel === "all" || project.level === projectLevel;
              const typeMatch =
                projectType === "all" || project.types.includes(projectType);
              return levelMatch && typeMatch;
            }).length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">
                  No se encontraron proyectos con estos filtros
                </p>
                <button
                  onClick={() => {
                    setProjectLevel("all");
                    setProjectType("all");
                  }}
                  className="mt-4 px-6 py-2 bg-gray-800 border border-gray-600 rounded-full text-sm hover:bg-gray-700 transition-all"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>

          {/* Stats Section */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            id="estadisticas"
          >
            <div className="bg-gradient-to-br from-pink-500/10 to-transparent p-6 rounded-2xl border border-pink-500/20">
              <div className="text-3xl font-bold text-pink-400 mb-2">76%</div>
              <p className="text-gray-400 text-sm">
                Empresas digitalizándose en 2025
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-transparent p-6 rounded-2xl border border-green-500/20">
              <div className="text-3xl font-bold text-green-400 mb-2">
                $125.8B
              </div>
              <p className="text-gray-400 text-sm">
                Valor e-commerce Colombia 2025
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-transparent p-6 rounded-2xl border border-blue-500/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">41.1M</div>
              <p className="text-gray-400 text-sm">
                Colombianos usando Internet
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div
            className="mt-12 text-center bg-gradient-to-r from-pink-500/10 via-blue-500/10 to-green-500/10 p-8 rounded-2xl border border-gray-700"
            id="contacto"
          >
            <h2 className="text-3xl font-bold mb-4">¿Listo para empezar?</h2>
            <p className="text-gray-400 mb-6">
              Ventaja competitiva: Entrega rápida (3-7 días), precios
              competitivos, capacitación incluida
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full font-semibold hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform hover:scale-105">
                Comenzar ahora
              </button>
              <button className="px-8 py-3 bg-gray-800 border border-gray-600 rounded-full font-semibold hover:bg-gray-700 transition-all duration-300">
                Ver estrategia completa
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-pink-400" />
                <span>contacto@devcolombia.co</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span>+57 300 123 4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default IdeasNegocio;
