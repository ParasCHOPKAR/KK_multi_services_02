"use client";

import { useState, useEffect, useRef } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const languages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "hi", name: "Hindi", nativeName: "हिंदी" },
  { code: "mr", name: "Marathi", nativeName: "मराठी" },
];

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const { theme, mounted } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isLight = mounted && theme === "light";

  useEffect(() => {
    // Check for existing googtrans cookie
    const getCookie = (name: string) => {
      const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      if (match) return match[2];
      return null;
    };
    
    const langCookie = getCookie("googtrans");
    if (langCookie) {
      const parts = decodeURIComponent(langCookie).split("/");
      if (parts.length === 3) {
        setSelectedLang(parts[2]);
      }
    }

    // Click outside to close
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    setSelectedLang(langCode);
    setIsOpen(false);
    
    // Set googtrans cookie. Using /en/${langCode} assumes the original language is English
    if (langCode === 'en') {
      document.cookie = `googtrans=/en/en; path=/; max-age=0`;
      document.cookie = `googtrans=/en/en; path=/; domain=${window.location.hostname}; max-age=0`;
    } else {
      document.cookie = `googtrans=/en/${langCode}; path=/;`;
      document.cookie = `googtrans=/en/${langCode}; path=/; domain=${window.location.hostname};`;
    }
    
    // Reload page to apply translation
    window.location.reload();
  };

  const currentLang = languages.find(l => l.code === selectedLang) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border transition-all ${
          isLight 
            ? "border-slate-300 hover:bg-slate-100 text-slate-700" 
            : "border-white/20 hover:bg-white/10 text-white"
        }`}
        aria-label="Select Language"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium hidden sm:inline-block">{currentLang.name}</span>
        <ChevronDown className={`w-4 h-4 opacity-70 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className={`absolute top-full right-0 mt-2 w-48 rounded-xl shadow-xl overflow-hidden z-[100] animate-in fade-in zoom-in-95 duration-200 ${
          isLight ? "bg-white border border-slate-100" : "bg-[#0f295e] border border-white/10 shadow-black/50"
        }`}>
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center justify-between px-4 py-2.5 text-left transition-colors ${
                  selectedLang === lang.code
                    ? (isLight ? "bg-kk-teal/10 text-kk-teal" : "bg-white/10 text-cyan-300")
                    : (isLight ? "text-slate-700 hover:bg-slate-50" : "text-slate-200 hover:bg-white/5")
                }`}
              >
                <div>
                  <div className="text-sm font-bold">{lang.name}</div>
                  <div className={`text-xs ${selectedLang === lang.code ? (isLight ? "text-kk-teal/80" : "text-cyan-300/80") : (isLight ? "text-slate-500" : "text-slate-400")}`}>
                    {lang.nativeName}
                  </div>
                </div>
                {selectedLang === lang.code && <Check className="w-4 h-4" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
