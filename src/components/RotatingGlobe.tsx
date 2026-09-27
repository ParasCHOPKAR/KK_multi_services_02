"use client";

import React from "react";
import { MapPin, Navigation, Sparkles } from "lucide-react";

export default function RotatingGlobe() {
  return (
    <div className="relative flex items-center justify-center select-none py-2">
      {/* Outer ambient teal glow */}
      <div className="absolute w-72 h-72 rounded-full bg-kk-teal/20 blur-2xl pointer-events-none -z-10" />

      {/* Orbit Ring 1 (Tilted dashed ellipse) */}
      <div className="absolute w-[290px] h-[130px] rounded-full border border-dashed border-teal-400/30 rotate-[-25deg] pointer-events-none animate-orbit-cw">
        {/* Orbiting Satellite Dot */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_12px_#22d3ee] flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
        </div>
      </div>

      {/* Orbit Ring 2 (Counter-tilted thin ring) */}
      <div className="absolute w-[310px] h-[110px] rounded-full border border-teal-300/15 rotate-[35deg] pointer-events-none" />

      {/* The 3D Spherical Globe Container */}
      <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden shadow-[0_0_50px_rgba(0,169,157,0.35),inset_-25px_-25px_45px_rgba(0,0,0,0.9),inset_15px_15px_30px_rgba(32,194,183,0.3)] border-2 border-teal-400/40 bg-[#061226]">
        
        {/* Rotating World Texture Layer (Duplicates side-by-side for seamless infinite rotation) */}
        <div className="absolute top-0 left-0 h-full w-[200%] flex animate-globe-rotate">
          {/* Half 1 */}
          <div className="w-1/2 h-full relative">
            <svg
              viewBox="0 0 400 200"
              className="w-full h-full object-cover"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Latitude Grid Lines */}
              <line x1="0" y1="30" x2="400" y2="30" stroke="#00A99D" strokeOpacity="0.2" strokeWidth="0.8" />
              <line x1="0" y1="65" x2="400" y2="65" stroke="#00A99D" strokeOpacity="0.25" strokeWidth="0.8" />
              <line x1="0" y1="100" x2="400" y2="100" stroke="#20C2B7" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="0" y1="135" x2="400" y2="135" stroke="#00A99D" strokeOpacity="0.25" strokeWidth="0.8" />
              <line x1="0" y1="170" x2="400" y2="170" stroke="#00A99D" strokeOpacity="0.2" strokeWidth="0.8" />

              {/* Longitude Grid Lines */}
              <line x1="50" y1="0" x2="50" y2="200" stroke="#00A99D" strokeOpacity="0.2" strokeWidth="0.8" />
              <line x1="100" y1="0" x2="100" y2="200" stroke="#00A99D" strokeOpacity="0.2" strokeWidth="0.8" />
              <line x1="150" y1="0" x2="150" y2="200" stroke="#00A99D" strokeOpacity="0.2" strokeWidth="0.8" />
              <line x1="200" y1="0" x2="200" y2="200" stroke="#00A99D" strokeOpacity="0.25" strokeWidth="0.8" />
              <line x1="250" y1="0" x2="250" y2="200" stroke="#00A99D" strokeOpacity="0.2" strokeWidth="0.8" />
              <line x1="300" y1="0" x2="300" y2="200" stroke="#00A99D" strokeOpacity="0.2" strokeWidth="0.8" />
              <line x1="350" y1="0" x2="350" y2="200" stroke="#00A99D" strokeOpacity="0.2" strokeWidth="0.8" />

              {/* Continents Vector Outlines / Stylized Landmasses */}
              {/* Eurasia / India / South Asia */}
              <path
                d="M170,45 Q195,35 230,40 Q255,48 270,70 Q255,85 240,90 Q225,120 220,135 Q212,125 210,110 Q195,105 185,95 Q175,70 170,45 Z"
                fill="#00A99D"
                fillOpacity="0.45"
                stroke="#20C2B7"
                strokeWidth="1.2"
              />
              {/* Africa */}
              <path
                d="M135,75 Q160,70 175,85 Q180,115 165,145 Q150,170 140,155 Q130,130 125,100 Z"
                fill="#00A99D"
                fillOpacity="0.4"
                stroke="#20C2B7"
                strokeWidth="1.2"
              />
              {/* Americas */}
              <path
                d="M45,35 Q70,40 65,70 Q55,95 65,115 Q75,135 60,165 Q45,150 48,125 Q40,95 35,65 Z"
                fill="#00A99D"
                fillOpacity="0.38"
                stroke="#20C2B7"
                strokeWidth="1.2"
              />
              {/* Australia / East Asia Islands */}
              <path
                d="M280,120 Q310,115 315,135 Q305,155 285,150 Q275,135 280,120 Z"
                fill="#00A99D"
                fillOpacity="0.4"
                stroke="#20C2B7"
                strokeWidth="1.2"
              />
              {/* Dot clusters for tech aesthetic */}
              <circle cx="218" cy="115" r="3.5" fill="#38bdf8" />
              <circle cx="218" cy="115" r="7" stroke="#38bdf8" strokeWidth="0.8" fill="none" opacity="0.6" />
              <circle cx="225" cy="110" r="1.5" fill="#67e8f9" />
              <circle cx="212" cy="120" r="1.5" fill="#67e8f9" />
              <circle cx="160" cy="85" r="2" fill="#5eead4" />
              <circle cx="250" cy="65" r="2" fill="#5eead4" />
              <circle cx="60" cy="80" r="2" fill="#5eead4" />
            </svg>
          </div>

          {/* Half 2 (Exact Duplicate for continuous loop) */}
          <div className="w-1/2 h-full relative">
            <svg
              viewBox="0 0 400 200"
              className="w-full h-full object-cover"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Latitude Grid Lines */}
              <line x1="0" y1="30" x2="400" y2="30" stroke="#00A99D" strokeOpacity="0.2" strokeWidth="0.8" />
              <line x1="0" y1="65" x2="400" y2="65" stroke="#00A99D" strokeOpacity="0.25" strokeWidth="0.8" />
              <line x1="0" y1="100" x2="400" y2="100" stroke="#20C2B7" strokeOpacity="0.35" strokeWidth="1" strokeDasharray="3 3" />
              <line x1="0" y1="135" x2="400" y2="135" stroke="#00A99D" strokeOpacity="0.25" strokeWidth="0.8" />
              <line x1="0" y1="170" x2="400" y2="170" stroke="#00A99D" strokeOpacity="0.2" strokeWidth="0.8" />

              {/* Longitude Grid Lines */}
              <line x1="50" y1="0" x2="50" y2="200" stroke="#00A99D" strokeOpacity="0.2" strokeWidth="0.8" />
              <line x1="100" y1="0" x2="100" y2="200" stroke="#00A99D" strokeOpacity="0.2" strokeWidth="0.8" />
              <line x1="150" y1="0" x2="150" y2="200" stroke="#00A99D" strokeOpacity="0.2" strokeWidth="0.8" />
              <line x1="200" y1="0" x2="200" y2="200" stroke="#00A99D" strokeOpacity="0.25" strokeWidth="0.8" />
              <line x1="250" y1="0" x2="250" y2="200" stroke="#00A99D" strokeOpacity="0.2" strokeWidth="0.8" />
              <line x1="300" y1="0" x2="300" y2="200" stroke="#00A99D" strokeOpacity="0.2" strokeWidth="0.8" />
              <line x1="350" y1="0" x2="350" y2="200" stroke="#00A99D" strokeOpacity="0.2" strokeWidth="0.8" />

              {/* Continents Vector Outlines / Stylized Landmasses */}
              <path
                d="M170,45 Q195,35 230,40 Q255,48 270,70 Q255,85 240,90 Q225,120 220,135 Q212,125 210,110 Q195,105 185,95 Q175,70 170,45 Z"
                fill="#00A99D"
                fillOpacity="0.45"
                stroke="#20C2B7"
                strokeWidth="1.2"
              />
              <path
                d="M135,75 Q160,70 175,85 Q180,115 165,145 Q150,170 140,155 Q130,130 125,100 Z"
                fill="#00A99D"
                fillOpacity="0.4"
                stroke="#20C2B7"
                strokeWidth="1.2"
              />
              <path
                d="M45,35 Q70,40 65,70 Q55,95 65,115 Q75,135 60,165 Q45,150 48,125 Q40,95 35,65 Z"
                fill="#00A99D"
                fillOpacity="0.38"
                stroke="#20C2B7"
                strokeWidth="1.2"
              />
              <path
                d="M280,120 Q310,115 315,135 Q305,155 285,150 Q275,135 280,120 Z"
                fill="#00A99D"
                fillOpacity="0.4"
                stroke="#20C2B7"
                strokeWidth="1.2"
              />
              <circle cx="218" cy="115" r="3.5" fill="#38bdf8" />
              <circle cx="218" cy="115" r="7" stroke="#38bdf8" strokeWidth="0.8" fill="none" opacity="0.6" />
              <circle cx="225" cy="110" r="1.5" fill="#67e8f9" />
              <circle cx="212" cy="120" r="1.5" fill="#67e8f9" />
              <circle cx="160" cy="85" r="2" fill="#5eead4" />
              <circle cx="250" cy="65" r="2" fill="#5eead4" />
              <circle cx="60" cy="80" r="2" fill="#5eead4" />
            </svg>
          </div>
        </div>

        {/* 3D Glass Specular Reflection (Light source top-left) */}
        <div 
          className="absolute inset-0 pointer-events-none rounded-full"
          style={{
            background: "radial-gradient(circle at 28% 22%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.08) 35%, transparent 65%)"
          }}
        />

        {/* 3D Spherical Shadow (Darkens lower-right and edges) */}
        <div 
          className="absolute inset-0 pointer-events-none rounded-full"
          style={{
            background: "radial-gradient(circle at 65% 65%, transparent 35%, rgba(4,10,24,0.6) 70%, rgba(4,10,24,0.92) 100%)"
          }}
        />

        {/* Center Target Marker: Pune Hub */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none z-10">
          <div className="relative flex items-center justify-center">
            <span className="absolute w-8 h-8 rounded-full bg-kk-teal/40 animate-ping" />
            <span className="w-3.5 h-3.5 rounded-full bg-kk-teal border-2 border-white shadow-[0_0_12px_#00A99D]" />
          </div>
          <div className="mt-1 px-2.5 py-0.5 rounded-full bg-slate-950/85 border border-teal-400/50 backdrop-blur-md text-[10px] font-black text-white whitespace-nowrap shadow-lg flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>PUNE • PCMC</span>
          </div>
        </div>
      </div>

      {/* Floating Badge 1: Top-Right (Express Arrival) */}
      <div className="absolute -top-1 sm:top-1 -right-2 sm:right-0 bg-slate-900/90 border border-teal-400/40 rounded-full px-3 py-1 text-[11px] font-bold text-white shadow-xl backdrop-blur-md flex items-center gap-1.5 animate-bounce [animation-duration:4s]">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span>45–60m Express</span>
      </div>

      {/* Floating Badge 2: Bottom-Left (40+ Localities) */}
      <div className="absolute -bottom-1 sm:bottom-1 -left-2 sm:left-0 bg-slate-900/90 border border-white/20 rounded-full px-3 py-1 text-[11px] font-bold text-slate-100 shadow-xl backdrop-blur-md flex items-center gap-1.5">
        <MapPin className="w-3 h-3 text-kk-teal" />
        <span>40+ Pune Hubs</span>
      </div>
    </div>
  );
}
