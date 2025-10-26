import React from "react";
import { ServiceCard } from "./Card";

export const ServicesGrid = ({ services }) => (
  <div className="max-w-6xl mx-auto px-4 md:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
    {services.map((service) => (
      <ServiceCard key={service.title} {...service} />
    ))}
  </div>
);
