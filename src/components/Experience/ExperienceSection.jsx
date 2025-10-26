import React from "react";
import { FloatingBackground } from "../FloatingBackground";
import { ExperienceHeader } from "./ExperienceHeader";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { ExperienceSummary } from "./ExperienceSummary";

export const ExperienceSection = () => (
  <section
    id="experiencia"
    className="relative py-10 md:py-16 bg-gray-950 overflow-hidden"
  >
    <FloatingBackground />
    <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-950/80 to-gray-950/90 z-0 pointer-events-none"></div>

    <div className="relative max-w-6xl mx-auto px-4 md:px-8">
      <ExperienceHeader />
      <ExperienceTimeline />
      <ExperienceSummary />
    </div>
  </section>
);
