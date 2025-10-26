import React from "react";
import { ExperienceItem } from "./ExperienceItem";
import { experiences } from "../../data/experiences";
export const ExperienceTimeline = () => {
  

  return (
    <div className="relative">
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-emerald-500 via-green-500 to-lime-500"></div>

      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <ExperienceItem key={i} {...exp} index={i} />
        ))}
      </div>
    </div>
  );
};
