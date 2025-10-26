import React from "react";
import { FloatingBackground } from "../FloatingBackground";
import { ServiceHeader } from "./Header";
import { ServicesGrid } from "./ServicesGrid";
import { ValuesGrid } from "./ValuesGrid";
import { services, values } from "../../data/services";

export const ServiceSection = () => {


  return (
    <section
      id="servicios"
      className="relative py-8 md:py-12 bg-gray-950 overflow-hidden"
    >
      <FloatingBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-950/80 to-gray-950/90 z-0 pointer-events-none"></div>

      <div className="relative z-10">
        <ServiceHeader />
        <ServicesGrid services={services} />
        <ValuesGrid values={values} />

        <div className="text-center mt-6">
          <button className="px-6 py-2 md:px-7 md:py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-semibold text-sm md:text-base text-white hover:shadow-md hover:shadow-green-500/30 transition-all duration-300">
            Ver todos los servicios
          </button>
        </div>
      </div>
    </section>
  );
};
