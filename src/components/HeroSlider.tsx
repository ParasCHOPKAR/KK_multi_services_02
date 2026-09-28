"use client";

import { useState, useEffect } from "react";
import { Wrench, Clock, CreditCard, ArrowRight, Phone, CheckCircle2 } from "lucide-react";

const slides = [
  {
    tagline: "Trusted Home Appliance Repair Experts",
    title: <>Your Comfort <br /><span className="text-kk-teal">Is Our Priority</span></>,
  },
  {
    tagline: "Professional AC Cooling Solutions",
    title: <>Expert AC <br /><span className="text-kk-teal">Repair &</span> Service.</>,
  },
  {
    tagline: "Fast & Reliable Fridge Service",
    title: <>Premium Fridge <br /><span className="text-kk-teal">Repair</span> Service.</>,
  },
  {
    tagline: "Quick Microwave Fixing",
    title: <>Expert Microwave <br /><span className="text-kk-teal">Repair</span> Solutions.</>,
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      className="relative overflow-hidden transition-all duration-1000 ease-in-out"
    >
      {/* Background Hero Video - Desktop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-center z-0"
      >
        <source src="/images/home/kk_home_page_hero_011111.mp4" type="video/mp4" />
      </video>

      {/* Background Hero Video - Mobile */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="block md:hidden absolute inset-0 w-full h-full object-cover object-center z-0"
      >
        <source src="/images/home/herovide0_mobile_02.mp4" type="video/mp4" />
      </video>

      {/* Overlay: balanced vertical gradient on mobile for text contrast without obscuring video, lateral gradient on desktop */}
      <div className="absolute inset-0 bg-gradient-to-t from-kk-blue/95 via-kk-blue/75 to-kk-blue/30 md:bg-gradient-to-r md:from-kk-blue md:via-kk-blue/90 md:to-transparent lg:w-3/4 z-0 transition-opacity duration-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-24 min-h-[380px] sm:min-h-[440px] lg:min-h-[500px] flex flex-col justify-center">
            
            <div className="min-h-[90px] sm:min-h-[110px] md:min-h-[130px] lg:min-h-[140px]">
              <div className="flex items-center gap-2.5 sm:gap-4 mb-2.5 sm:mb-4">
                <span className="inline-block w-5 sm:w-8 h-0.5 bg-kk-teal"></span>
                <span className="text-[11px] sm:text-xs md:text-sm font-bold tracking-wider text-kk-teal-light uppercase transition-opacity duration-500">
                  {slides[currentSlide].tagline}
                </span>
              </div>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.15] mb-3 sm:mb-4 transition-all duration-500">
                {slides[currentSlide].title}
              </h1>
            </div>

            <p className="text-xs sm:text-base lg:text-lg text-slate-200/90 mb-6 sm:mb-8 max-w-lg leading-relaxed">
              Fast, reliable and professional home appliance repair services in Pune. We fix your appliances, so you can get back to what matters most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 w-full sm:w-auto">
              <a href="/contact#book" className="bg-kk-teal hover:bg-kk-teal-light text-white px-5 sm:px-7 lg:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-md font-bold transition-all shadow-md text-center flex items-center justify-center gap-2 active:scale-95 text-sm sm:text-base">
                <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white rounded-sm flex items-center justify-center opacity-90"><div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-sm"></div></div>
                Book a Service <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="tel:+919876543210" className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white text-white px-5 sm:px-7 lg:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-md font-bold transition-all text-center flex items-center justify-center gap-2 backdrop-blur-sm active:scale-95 text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-kk-teal-light" /> Call Now
              </a>
            </div>

            {/* Feature highlights: 2-column grid on mobile, flex-wrap on tablet/desktop */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:flex lg:flex-wrap lg:gap-4 xl:gap-6 text-white text-[11px] sm:text-xs md:text-sm">
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 sm:bg-transparent p-2 sm:p-0 rounded-lg backdrop-blur-xs sm:backdrop-blur-none border border-white/10 sm:border-none">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-kk-teal shrink-0" />
                <span className="opacity-90 font-medium leading-tight">Skilled Technicians</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 sm:bg-transparent p-2 sm:p-0 rounded-lg backdrop-blur-xs sm:backdrop-blur-none border border-white/10 sm:border-none">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-kk-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="opacity-90 font-medium leading-tight">Genuine Parts</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 sm:bg-transparent p-2 sm:p-0 rounded-lg backdrop-blur-xs sm:backdrop-blur-none border border-white/10 sm:border-none">
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-kk-teal shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                <span className="opacity-90 font-medium leading-tight">Affordable Rates</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 bg-white/5 sm:bg-transparent p-2 sm:p-0 rounded-lg backdrop-blur-xs sm:backdrop-blur-none border border-white/10 sm:border-none">
                <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-kk-teal shrink-0" />
                <span className="opacity-90 font-medium leading-tight">Same-Day Service</span>
              </div>
            </div>
            
          </div>

          <div className="relative h-full min-h-[450px] hidden lg:block">
            {/* Empty right column to allow background image/video to be visible */}
          </div>
        </div>
      </div>
    </section>
  );
}
