import { Globe, Zap, Store, Calendar, Users, TrendingUp, Target, Sparkles } from 'lucide-react';


export const ideas = [
    {
      id: 1,
      icon: <Globe className="w-8 h-8" />,
      title: "Landing Pages para PYMEs",
      description: "El 76% de empresas colombianas está digitalizándose. Oportunidad perfecta para landing pages profesionales.",
      price: "$300 - $1,500 USD",
      demand: "Alta",
      category: "web",
      color: "pink",
      packages: [
        "Landing básica con contacto",
        "Captura de leads + email marketing",
        "Landing de ventas con pasarela",
        "Servicios profesionales especializados"
      ]
    },
    {
      id: 2,
      icon: <Store className="w-8 h-8" />,
      title: "Tiendas Online Completas",
      description: "Colombia cerrará 2025 con $125.8 billones en e-commerce. Crecimiento del 19.4% anual.",
      price: "$1,200 - $4,000 USD",
      demand: "Muy Alta",
      category: "ecommerce",
      color: "green",
      packages: [
        "Tienda básica Shopify/WooCommerce",
        "Integración PayU, Wompi, Mercado Pago",
        "Inventario avanzado + CRM",
        "Migración físico a online"
      ]
    },
    {
      id: 3,
      icon: <Calendar className="w-8 h-8" />,
      title: "Sistemas de Reservas",
      description: "Para restaurantes, clínicas, salones y profesionales. Automatiza agendamiento y pagos.",
      price: "$800 - $3,000 USD",
      demand: "Alta",
      category: "tools",
      color: "blue",
      packages: [
        "Reservas + pagos anticipados",
        "Portal citas médicas",
        "Plataforma profesores/coaches",
        "Integración videoconferencia"
      ]
    },
    {
      id: 4,
      icon: <Users className="w-8 h-8" />,
      title: "Portales Profesionales",
      description: "Sitios especializados para médicos, abogados, contadores y coaches con herramientas integradas.",
      price: "$600 - $1,200 USD",
      demand: "Media-Alta",
      category: "web",
      color: "orange",
      packages: [
        "Telemedicina para médicos",
        "Consulta virtual abogados",
        "Portal contadores con docs",
        "Agenda online psicólogos"
      ]
    },
    {
      id: 5,
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Marketplaces Multi-vendor",
      description: "Dropshipping con enfoque en nichos especializados y proveedores locales está consolidándose.",
      price: "$3,000 - $8,000 USD",
      demand: "Media",
      category: "ecommerce",
      color: "pink",
      packages: [
        "Marketplace artesanos locales",
        "Plataforma productos orgánicos",
        "Marketplace B2B mayoristas",
        "Servicios del hogar"
      ]
    },
    {
      id: 6,
      icon: <Target className="w-8 h-8" />,
      title: "Sitios Web con SEO Local",
      description: "41.1M de colombianos online buscan servicios locales. Domina Google en tu ciudad.",
      price: "$1,000 - $2,500 USD",
      demand: "Alta",
      category: "web",
      color: "green",
      packages: [
        "Web profesional + blog",
        "SEO local optimizado",
        "Google My Business",
        "Mantenimiento $150-400/mes"
      ]
    },
    {
      id: 7,
      icon: <Zap className="w-8 h-8" />,
      title: "Automatizaciones con IA",
      description: "IA para inventarios, personalización y atención al cliente. Tendencia fuerte en PYMEs.",
      price: "$1,500 - $5,000 USD",
      demand: "Muy Alta",
      category: "tools",
      color: "blue",
      packages: [
        "Chatbots WhatsApp ventas",
        "Facturación electrónica DIAN",
        "CRM personalizado",
        "Dashboards analytics"
      ]
    },
    {
      id: 8,
      icon: <Sparkles className="w-8 h-8" />,
      title: "Landing Pages Eventos",
      description: "Para Hot Sale, lanzamientos de productos y eventos virtuales/híbridos.",
      price: "$400 - $1,000 USD",
      demand: "Media",
      category: "web",
      color: "orange",
      packages: [
        "Hot Sale Colombia",
        "Lanzamientos productos",
        "Eventos virtuales/híbridos",
        "Inscripción con pagos"
      ]
    }
  ];