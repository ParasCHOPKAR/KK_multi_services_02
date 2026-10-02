"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowRight, Phone, CheckCircle2, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useBookingModal } from "@/context/BookingModalContext";

interface HeroSlide {
  id: string;
  tagline: string;
  title: React.ReactNode;
  desc: string;
  desktopVideo: string;
  mobileVideo: string;
  label: string;
  badge: string;
  primaryLink: string;
}

const slides: HeroSlide[] = [
  {
    id: "home-care",
    tagline: "Trusted Home Appliance Repair Experts",
    title: (
      <>
        Your Comfort <br />
        <span className="text-kk-teal">Is Our Priority</span>
      </>
    ),
    desc: "Fast, reliable and professional home appliance repair services in Pune. We fix your appliances, so you can get back to what matters most.",
    desktopVideo: "/images/home/homehero_dungri.mp4",
    mobileVideo: "/images/home/homepaagemobille_dungri.mp4",
    label: "All Appliances",
    badge: "Full Home Care",
    primaryLink: "/enquire",
  },
  {
    id: "cassette-ac",
    tagline: "Commercial & Luxury Cooling",
    title: (
      <>
        Expert Cassette AC <br />
        <span className="text-kk-teal">Repair &amp; Service</span>
      </>
    ),
    desc: "Specialized Cassette AC installation, jet-pump deep cleaning, gas charging, and master diagnostics for luxury homes & commercial spaces.",
    desktopVideo: "/images/home/CASSETTE_DESKTOP_VD0033.mp4",
    mobileVideo: "/images/home/CASSETTE_MOBILE_VDO_033.mp4",
    label: "Cassette AC",
    badge: "Ceiling Inverter",
    primaryLink: "/services#ac",
  },
  {
    id: "hvac-systems",
    tagline: "Central Cooling & Ventilation",
    title: (
      <>
        Advanced HVAC <br />
        <span className="text-kk-teal">Systems &amp; Maintenance</span>
      </>
    ),
    desc: "Comprehensive central HVAC repair, duct maintenance, compressor overhauling, and reliable annual maintenance contracts (AMC).",
    desktopVideo: "/images/home/HVC_DESKTOP_VDO_0022.mp4",
    mobileVideo: "/images/home/HVC_MOBILEV_VDO_022.mp4",
    label: "HVAC Systems",
    badge: "Central Cooling",
    primaryLink: "/services#ac",
  },
  {
    id: "vrv-systems",
    tagline: "Next-Gen Multi-Zone Technology",
    title: (
      <>
        VRV &amp; VRF AC <br />
        <span className="text-kk-teal">Sales &amp; Solutions</span>
      </>
    ),
    desc: "Certified VRV and VRF inverter multi-split repair, gas leakage detection, electronic expansion valve, and PCB board servicing.",
    desktopVideo: "/images/home/VRV%20_DESKTOP_VDO011.mp4",
    mobileVideo: "/images/home/VRV_DESKTOP_VDO_0111.mp4",
    label: "VRV / VRF",
    badge: "Multi-Zone AC",
    primaryLink: "/services#ac",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { theme, mounted } = useTheme();
  const { openBookingModal } = useBookingModal();
  const isLight = mounted && theme === "light";

  const desktopVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const mobileVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const cleanupTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isTransitioningRef = useRef<boolean>(false);
  const safetyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth switch function: starts incoming video before crossfade,
  // crossfades both videos over 1000ms, then pauses outgoing video after transition.
  const changeSlide = useCallback((nextIndex: number) => {
    isTransitioningRef.current = true;

    setCurrentSlide((prevIndex) => {
      if (nextIndex === prevIndex) {
        isTransitioningRef.current = false;
        return prevIndex;
      }

      // Start playing the incoming video immediately from beginning
      const nextDesktop = desktopVideoRefs.current[nextIndex];
      if (nextDesktop) {
        nextDesktop.currentTime = 0;
        nextDesktop.play().catch(() => {});
      }
      const nextMobile = mobileVideoRefs.current[nextIndex];
      if (nextMobile) {
        nextMobile.currentTime = 0;
        nextMobile.play().catch(() => {});
      }

      // Schedule pausing and resetting outgoing video after crossfade duration (1100ms)
      if (cleanupTimerRef.current) {
        clearTimeout(cleanupTimerRef.current);
      }
      cleanupTimerRef.current = setTimeout(() => {
        const prevDesktop = desktopVideoRefs.current[prevIndex];
        if (prevDesktop) {
          prevDesktop.pause();
          prevDesktop.currentTime = 0;
        }
        const prevMobile = mobileVideoRefs.current[prevIndex];
        if (prevMobile) {
          prevMobile.pause();
          prevMobile.currentTime = 0;
        }
        isTransitioningRef.current = false;
      }, 1100);

      return nextIndex;
    });
  }, []);

  // When a video nears completion (~0.8s before ending), trigger smooth transition to the next video
  const handleTimeUpdate = (index: number, e: React.SyntheticEvent<HTMLVideoElement>) => {
    if (index !== currentSlide || isTransitioningRef.current) return;
    const video = e.currentTarget;
    if (video.duration && !isNaN(video.duration) && video.duration > 1) {
      if (video.currentTime >= video.duration - 0.8) {
        changeSlide((index + 1) % slides.length);
      }
    }
  };

  // Fallback when video ends
  const handleVideoEnded = (index: number) => {
    if (index === currentSlide && !isTransitioningRef.current) {
      changeSlide((index + 1) % slides.length);
    }
  };

  // Initial play on mount
  useEffect(() => {
    const d0 = desktopVideoRefs.current[0];
    if (d0) {
      d0.currentTime = 0;
      d0.play().catch(() => {});
    }
    const m0 = mobileVideoRefs.current[0];
    if (m0) {
      m0.currentTime = 0;
      m0.play().catch(() => {});
    }
  }, []);

  // Fallback safety timer in case video stalls or fails to auto-advance
  useEffect(() => {
    if (safetyTimeoutRef.current) {
      clearTimeout(safetyTimeoutRef.current);
    }
    safetyTimeoutRef.current = setTimeout(() => {
      changeSlide((currentSlide + 1) % slides.length);
    }, 11000);

    return () => {
      if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
    };
  }, [currentSlide, changeSlide]);

  const activeSlide = slides[currentSlide];

  return (
    <section className="relative overflow-hidden bg-slate-900 transition-all duration-700 ease-in-out select-none">
      {/* Background Videos - Desktop (hidden on mobile, auto loops to next video) */}
      {slides.map((slide, index) => {
        const isActive = currentSlide === index;
        return (
          <video
            key={`desktop-video-${slide.id}`}
            ref={(el) => {
              desktopVideoRefs.current[index] = el;
            }}
            muted
            playsInline
            preload="auto"
            onTimeUpdate={(e) => handleTimeUpdate(index, e)}
            onEnded={() => handleVideoEnded(index)}
            className={`hidden md:block absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-[1]" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <source src={slide.desktopVideo} type="video/mp4" />
          </video>
        );
      })}

      {/* Background Videos - Mobile (visible on mobile only, auto loops to next video) */}
      {slides.map((slide, index) => {
        const isActive = currentSlide === index;
        return (
          <video
            key={`mobile-video-${slide.id}`}
            ref={(el) => {
              mobileVideoRefs.current[index] = el;
            }}
            muted
            playsInline
            preload="auto"
            onTimeUpdate={(e) => handleTimeUpdate(index, e)}
            onEnded={() => handleVideoEnded(index)}
            className={`block md:hidden absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-[1]" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <source src={slide.mobileVideo} type="video/mp4" />
          </video>
        );
      })}

      {/* Dynamic Overlay: Crisp white gradient in Light Mode, Classic deep navy in Current Mode */}
      <div 
        className={`absolute inset-0 transition-all duration-700 z-[2] pointer-events-none ${
          isLight
            ? "bg-gradient-to-t from-white/95 via-white/85 to-white/35 md:bg-gradient-to-r md:from-white md:via-white/95 md:to-transparent lg:w-3/4"
            : "bg-gradient-to-t from-kk-blue/95 via-kk-blue/80 to-kk-blue/40 md:bg-gradient-to-r md:from-kk-blue md:via-kk-blue/90 md:to-transparent lg:w-3/4"
        }`}
      />

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Content & Interactive Controls */}
          <div className="lg:col-span-8 pt-8 pb-10 sm:pt-12 sm:pb-14 lg:pt-14 lg:pb-16 min-h-[460px] sm:min-h-[500px] flex flex-col justify-center">
            
            {/* Animated Text Cards with Smooth Crossfade Transition */}
            <div className="relative min-h-[190px] xs:min-h-[180px] sm:min-h-[200px] md:min-h-[210px] lg:min-h-[220px] mb-4 sm:mb-6">
              {slides.map((slide, index) => {
                const isActive = currentSlide === index;
                return (
                  <div
                    key={`slide-text-${slide.id}`}
                    className={`transition-all duration-700 ease-out ${
                      isActive
                        ? "opacity-100 translate-y-0 relative z-10 pointer-events-auto"
                        : "opacity-0 -translate-y-2 absolute inset-0 z-0 pointer-events-none"
                    }`}
                  >
                    {/* Tagline & Category Badge */}
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 mb-2.5 sm:mb-4">
                      <span className="inline-block w-5 sm:w-8 h-0.5 bg-kk-teal"></span>
                      <span 
                        className={`text-[11px] sm:text-xs md:text-sm font-bold tracking-wider uppercase ${
                          isLight ? "text-kk-teal font-extrabold" : "text-kk-teal-light"
                        }`}
                      >
                        {slide.tagline}
                      </span>
                      <span className="text-[10px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 rounded-full bg-kk-teal/15 text-kk-teal border border-kk-teal/30">
                        {slide.badge}
                      </span>
                    </div>

                    {/* Main Headline */}
                    <h1 
                      className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.15] mb-3 sm:mb-4 ${
                        isLight ? "text-[#0b1c3d]" : "text-white"
                      }`}
                    >
                      {slide.title}
                    </h1>

                    {/* Description */}
                    <p 
                      className={`text-xs sm:text-base lg:text-lg max-w-xl leading-relaxed ${
                        isLight ? "text-slate-600" : "text-slate-200/90"
                      }`}
                    >
                      {slide.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8 w-full sm:w-auto">
              <button 
                type="button"
                onClick={() => openBookingModal(activeSlide.label)} 
                className="bg-kk-teal hover:bg-kk-teal-light text-white px-5 sm:px-7 lg:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-md font-bold transition-all shadow-md text-center flex items-center justify-center gap-2 active:scale-95 text-sm sm:text-base cursor-pointer"
              >
                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white rounded-sm flex items-center justify-center opacity-90">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-sm" />
                </div>
                Book a Service <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <a 
                href="tel:+917823038645" 
                className={`px-5 sm:px-7 lg:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-md font-bold transition-all text-center flex items-center justify-center gap-2 active:scale-95 text-sm sm:text-base cursor-pointer ${
                  isLight
                    ? "bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 shadow-xs hover:border-kk-teal"
                    : "bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white text-white backdrop-blur-sm"
                }`}
              >
                <Phone className={`w-4 h-4 sm:w-5 sm:h-5 ${isLight ? "text-kk-teal" : "text-kk-teal-light"}`} /> Call Now
              </a>
            </div>

            {/* Feature Highlights */}
            <div 
              className={`grid grid-cols-2 gap-2 sm:gap-3 lg:flex lg:flex-wrap lg:gap-4 xl:gap-5 text-[11px] sm:text-xs md:text-sm mb-6 sm:mb-8 ${
                isLight ? "text-slate-800" : "text-white"
              }`}
            >
              <div 
                className={`flex items-center gap-1.5 sm:gap-2 p-2 sm:px-3 rounded-lg backdrop-blur-xs ${
                  isLight 
                    ? "bg-white/80 border border-teal-100/80 shadow-xs font-semibold" 
                    : "bg-white/5 sm:bg-transparent border border-white/10 sm:border-none font-medium"
                }`}
              >
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-kk-teal shrink-0" />
                <span className={isLight ? "text-slate-800" : "opacity-90"}>Skilled Technicians</span>
              </div>

              <div 
                className={`flex items-center gap-1.5 sm:gap-2 p-2 sm:px-3 rounded-lg backdrop-blur-xs ${
                  isLight 
                    ? "bg-white/80 border border-teal-100/80 shadow-xs font-semibold" 
                    : "bg-white/5 sm:bg-transparent border border-white/10 sm:border-none font-medium"
                }`}
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-kk-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className={isLight ? "text-slate-800" : "opacity-90"}>Genuine Parts</span>
              </div>

              <div 
                className={`flex items-center gap-1.5 sm:gap-2 p-2 sm:px-3 rounded-lg backdrop-blur-xs ${
                  isLight 
                    ? "bg-white/80 border border-teal-100/80 shadow-xs font-semibold" 
                    : "bg-white/5 sm:bg-transparent border border-white/10 sm:border-none font-medium"
                }`}
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-kk-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span className={isLight ? "text-slate-800" : "opacity-90"}>Affordable Rates</span>
              </div>

              <div 
                className={`flex items-center gap-1.5 sm:gap-2 p-2 sm:px-3 rounded-lg backdrop-blur-xs ${
                  isLight 
                    ? "bg-white/80 border border-teal-100/80 shadow-xs font-semibold" 
                    : "bg-white/5 sm:bg-transparent border border-white/10 sm:border-none font-medium"
                }`}
              >
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-kk-teal shrink-0" />
                <span className={isLight ? "text-slate-800" : "opacity-90"}>Same-Day Service</span>
              </div>
            </div>

            {/* 4 Video Interactive Tabs / Navigation Bar */}
            <div className="pt-4 border-t border-slate-200/50 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
              
              {/* Slide Selector Pills */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {slides.map((slide, index) => {
                  const isActive = currentSlide === index;
                  return (
                    <button
                      key={`pill-${slide.id}`}
                      onClick={() => changeSlide(index)}
                      className={`relative overflow-hidden group flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full transition-all duration-300 text-xs font-bold cursor-pointer ${
                        isActive
                          ? "bg-kk-teal text-white shadow-md shadow-kk-teal/30 scale-102"
                          : isLight
                            ? "bg-white/90 text-slate-700 hover:bg-slate-100 border border-slate-200/80 shadow-2xs"
                            : "bg-white/10 text-white/85 hover:bg-white/20 border border-white/15 backdrop-blur-xs"
                      }`}
                      aria-label={`View video: ${slide.label}`}
                    >
                      {/* Active indicator dot with pulse */}
                      <span className="relative flex h-2 w-2">
                        {isActive && (
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                        )}
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${isActive ? "bg-white" : "bg-kk-teal"}`}></span>
                      </span>

                      <span className="whitespace-nowrap">{slide.label}</span>

                      {/* Smooth Progress Bar inside the active pill */}
                      {isActive && (
                        <span 
                          key={`progress-${currentSlide}`}
                          className="absolute bottom-0 left-0 h-[2px] bg-white/90 animate-slide-progress"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Slide Counter & Next/Prev Controls */}
              <div className="flex items-center gap-2 ml-auto sm:ml-0">
                <span className={`text-xs font-mono font-bold px-2 py-1 rounded ${
                  isLight ? "text-slate-600 bg-slate-100" : "text-white/80 bg-white/10"
                }`}>
                  0{currentSlide + 1} / 0{slides.length}
                </span>

                <button
                  onClick={() => changeSlide((currentSlide - 1 + slides.length) % slides.length)}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 ${
                    isLight 
                      ? "bg-white border border-slate-200 text-slate-700 hover:bg-kk-teal hover:text-white hover:border-kk-teal shadow-2xs" 
                      : "bg-white/10 border border-white/20 text-white hover:bg-kk-teal hover:border-kk-teal backdrop-blur-xs"
                  }`}
                  aria-label="Previous video"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={() => changeSlide((currentSlide + 1) % slides.length)}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95 ${
                    isLight 
                      ? "bg-white border border-slate-200 text-slate-700 hover:bg-kk-teal hover:text-white hover:border-kk-teal shadow-2xs" 
                      : "bg-white/10 border border-white/20 text-white hover:bg-kk-teal hover:border-kk-teal backdrop-blur-xs"
                  }`}
                  aria-label="Next video"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

          {/* Right Column (empty spacer to let background video shine through clearly) */}
          <div className="lg:col-span-4 hidden lg:block pointer-events-none min-h-[400px]" />

        </div>
      </div>
    </section>
  );
}
