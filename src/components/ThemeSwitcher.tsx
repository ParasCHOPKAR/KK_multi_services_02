"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Palette, Check } from "lucide-react";

interface ThemeSwitcherProps {
  variant?: "topbar" | "mobile" | "floating";
  className?: string;
}

export default function ThemeSwitcher({ variant = "topbar", className = "" }: ThemeSwitcherProps) {
  const { theme, setTheme, toggleTheme, mounted } = useTheme();
  // Safe theme state: fallback to 'current' during SSR before mounting
  const activeTheme = mounted ? theme : "current";

  // 1. TopBar variant: Matches screenshot exactly
  if (variant === "topbar") {
    return (
      <div className={`inline-flex items-center bg-black/25 backdrop-blur-sm p-0.5 rounded-full border border-white/20 text-xs shadow-inner ${className}`}>
        <button
          type="button"
          onClick={() => setTheme("light")}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-bold transition-all duration-200 cursor-pointer ${
            activeTheme === "light"
              ? "bg-white text-slate-900 shadow-md font-extrabold"
              : "text-white/80 hover:text-white hover:bg-white/10"
          }`}
          title="Switch to Light Theme"
        >
          <Sun className={`w-3.5 h-3.5 ${activeTheme === "light" ? "text-amber-500 fill-amber-400" : "text-white/80"}`} />
          <span>{activeTheme === "light" ? "Light Theme" : ""}</span>
        </button>

        <button
          type="button"
          onClick={() => setTheme("current")}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-bold transition-all duration-200 cursor-pointer ${
            activeTheme === "current"
              ? "bg-[#0b1c3d] text-white shadow-md font-extrabold"
              : "text-white/80 hover:text-white hover:bg-white/10"
          }`}
          title="Switch to Current Theme (Classic Navy)"
        >
          <Moon className={`w-3.5 h-3.5 ${activeTheme === "current" ? "text-cyan-300 fill-cyan-300" : "text-white/80"}`} />
          <span>{activeTheme === "current" ? "Current Theme" : ""}</span>
        </button>
      </div>
    );
  }

  // 2. Mobile Drawer variant
  if (variant === "mobile") {
    return (
      <div className={`bg-slate-50 border border-slate-200 rounded-2xl p-3.5 ${className}`}>
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Palette className="w-3.5 h-3.5 text-kk-teal" /> Website Theme
          </span>
          <span className="text-[11px] font-semibold text-kk-teal">
            {activeTheme === "light" ? "Light Theme" : "Current (Classic Navy)"}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setTheme("light")}
            className={`p-2.5 rounded-xl border text-left flex flex-col gap-1 transition-all cursor-pointer ${
              activeTheme === "light"
                ? "bg-white border-[#00A896] shadow-sm ring-2 ring-[#00A896]/25"
                : "bg-white/70 border-slate-200 hover:bg-white"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-amber-400 ring-1 ring-amber-300" />
                <span className="w-3 h-3 rounded-full bg-[#00A896]" />
              </div>
              {activeTheme === "light" && <Check className="w-3.5 h-3.5 text-[#00A896]" />}
            </div>
            <span className="text-xs font-bold text-slate-800">Light Theme</span>
            <span className="text-[10px] text-slate-500 leading-tight">Crisp White & Teal</span>
          </button>

          <button
            type="button"
            onClick={() => setTheme("current")}
            className={`p-2.5 rounded-xl border text-left flex flex-col gap-1 transition-all cursor-pointer ${
              activeTheme === "current"
                ? "bg-white border-[#0b1c3d] shadow-sm ring-2 ring-[#0b1c3d]/20"
                : "bg-white/70 border-slate-200 hover:bg-white"
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="w-3 h-3 rounded-full bg-[#0b1c3d]" />
                <span className="w-3 h-3 rounded-full bg-[#a81c25]" />
              </div>
              {activeTheme === "current" && <Check className="w-3.5 h-3.5 text-[#0b1c3d]" />}
            </div>
            <span className="text-xs font-bold text-slate-800">Current Theme</span>
            <span className="text-[10px] text-slate-500 leading-tight">Classic Navy & Red</span>
          </button>
        </div>
      </div>
    );
  }

  // 3. Fallback toggle button
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`fixed bottom-6 right-6 z-40 bg-white/95 backdrop-blur-md text-slate-900 border border-slate-200 shadow-xl px-4 py-2.5 rounded-full flex items-center gap-2.5 text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer ${className}`}
      title="Click to toggle theme"
    >
      {activeTheme === "light" ? (
        <>
          <Sun className="w-4 h-4 text-amber-500" />
          <span>Light Theme</span>
        </>
      ) : (
        <>
          <Moon className="w-4 h-4 text-cyan-500" />
          <span>Current Theme</span>
        </>
      )}
    </button>
  );
}
