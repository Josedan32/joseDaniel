import React from "react";
import { FloatingBackground } from "../FloatingBackground";
import { AboutHeader } from "./Header";
import { AboutPhilosophy } from "./Philosophy";
import { AboutExperience } from "./Experience";
import { AboutVision } from "./Vision";
import { AboutTechStack } from "./TechStack";
import { AboutAdditionalSkills } from "./AdditionalSkills";

export const AboutSection = () => (
  <div className="relative py-8 md:py-12 overflow-hidden bg-gray-950" id="aboutMe">
    {/* Fondo animado */}
    <FloatingBackground />

    {/* Gradiente suave, translúcido */}
    <div className="absolute inset-0 bg-gradient-to-b from-gray-950/90 via-gray-950/80 to-gray-950/90 z-0 pointer-events-none"></div>

    {/* Patrón tenue */}
    <div className="absolute inset-0 opacity-[0.04] z-0 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      ></div>
    </div>

    {/* Contenido */}
    <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
      <AboutHeader compact />

      <div className="grid md:grid-cols-[1.1fr_1fr] gap-8 items-start">
        {/* Columna izquierda: filosofía + experiencia + visión */}
        <div className="space-y-5">
          <AboutPhilosophy compact />
          <AboutExperience compact />
          <AboutVision compact />
        </div>

        {/* Columna derecha: stack tecnológico + skills */}
        <div className="space-y-4">
          <AboutTechStack compact />
          <AboutAdditionalSkills compact />
        </div>
      </div>
    </div>
  </div>
);
