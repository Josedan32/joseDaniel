import React from "react";
import { ValueCard } from "./ValuesCard";

export const ValuesGrid = ({ values }) => (
  <div className="max-w-5xl mx-auto px-4 md:px-8 grid sm:grid-cols-3 gap-3 mb-6">
    {values.map((value) => (
      <ValueCard key={value.title} {...value} />
    ))}
  </div>
);
