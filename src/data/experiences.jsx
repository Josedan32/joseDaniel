import { Briefcase, Sparkles, Globe } from "lucide-react";

export const experiences = [
    {
      company: "Cyclop Inc",
      role: "Desarrollador Backend - IA Developer Trainee",
      date: "Sept 2024 - Actualidad",
      color: "teal",
      icon: Sparkles,
      description:
        "Desarrollé modelos de scoring crediticio y detección de fraude usando ML.Diseñé y mantuve APIs escalables (Python, FastAPI) para proyectos internos y externos, implementando funcionalidades avanzadas como manejo de cuotas, consumo de servicios de Inteligencia Artificial y gestión de acceso.",
      tech: ["Python", "TensorFlow", "XGBoost","Pandas", "Numpy", "OpenTelemetry" ,"Scikit-learn", "Docker" , "FastAPI", "PostgreSQL", "Django", "Redis", "AWS", "IBM", "AZURE", "DynamoDB", "Test", "Git"],
      achievements: [
        "Modelo de scoring con 92% de precisión",
        "Pipeline de reentrenamiento automático cada 48h",
      ],
    },
    {
      company: "Urcube S.A.S",
      role: "Desarrollador Backend Junior",
      date: "Feb 2023 - Abr 2024",
      color: "green",
      icon: Globe,
      description:
        "Desarrollé y mantuve la arquitectura backend de aplicaciones empresariales. Implementé soluciones escalables que resultaron en una mejora tangible en el rendimiento y la capacidad de respuesta de las aplicaciones.",
      tech: ["Python", "PostgreSQL", "Docker", "Git", "FastAPI", "SCSS", "Js", "Jinja", "HTML"],
      achievements: [
        "Desarrollo de +15 endpoints RESTful documentados con Swagger",
      ],
    },
  ];