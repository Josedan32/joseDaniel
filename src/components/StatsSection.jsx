import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { TrendingUp, Code, Brain, Server } from 'lucide-react';

export const StatsSection = () => {
  const stats = [
    { name: 'APIs Desplegadas', value: 24 },
    { name: 'Modelos de IA Entrenados', value: 7 },
    { name: 'Clientes B2B', value: 12 },
    { name: 'Proyectos en Producción', value: 18 },
  ];

  const highlights = [
    { icon: <Code className="w-6 h-6 text-pink-400" />, label: 'Experiencia en Backend', value: '+2 años' },
    { icon: <Brain className="w-6 h-6 text-blue-400" />, label: 'Proyectos con IA', value: '7 entregados' },
    { icon: <Server className="w-6 h-6 text-green-400" />, label: 'Infraestructura cloud', value: 'AWS / GCP' },
  ];

  return (
    <section id="estadísticas" className="relative py-24 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-pink-500/20 to-blue-500/20 border border-pink-500/30 rounded-2xl">
              <TrendingUp className="w-8 h-8 text-pink-400" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Estadísticas & Impacto</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Métricas clave que reflejan mi trayectoria profesional y la solidez técnica de los proyectos que desarrollo.
          </p>
        </div>

        {/* KPIs rápidos */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-900/70 border border-gray-800 rounded-2xl p-8 text-center hover:border-pink-500/40 hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.label}</h3>
              <p className="text-gray-400">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Gráfico de barras */}
        <div className="bg-gray-900/70 border border-gray-800 rounded-3xl p-8 hover:border-pink-500/30 transition-all duration-300">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stats}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2f2f2f" />
              <XAxis dataKey="name" stroke="#888" tick={{ fill: '#bbb', fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1a1a1a',
                  border: '1px solid #333',
                  color: '#fff',
                }}
              />
              <Bar dataKey="value" fill="url(#grad)" radius={[10, 10, 0, 0]} />
              <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#ec4899" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};
