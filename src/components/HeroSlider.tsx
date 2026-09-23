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
      {/* Mobile Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="md:hidden absolute inset-0 w-full h-full object-cover object-center z-0"
      >
        <source src="/images/herovide0_mobile_02.mp4" type="video/mp4" />
      </video>
      
      {/* Desktop Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="hidden md:block absolute inset-0 w-full h-full object-cover object-center z-0"
      >
        <source src="/images/Hero_01_bg_img.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-kk-blue via-kk-blue/90 to-transparent lg:w-3/4 z-0 transition-opacity duration-1000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="pt-12 pb-14 lg:pt-16 lg:pb-24 min-h-[450px] flex flex-col justify-center">
            
            <div className="min-h-[140px]">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-sm font-bold tracking-wider text-slate-300 uppercase transition-opacity duration-500">
                  {slides[currentSlide].tagline}
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-4 transition-all duration-500">
                {slides[currentSlide].title}
              </h1>
            </div>

            <p className="text-base lg:text-lg text-slate-300 mb-8 max-w-lg leading-relaxed">
              Fast, reliable and professional home appliance repair services in Pune. We fix your appliances, so you can get back to what matters most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href="#" className="bg-kk-teal hover:bg-kk-teal-light text-white px-6 py-3 lg:px-8 lg:py-4 rounded-md font-bold transition-all shadow-md text-center flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white rounded-sm flex items-center justify-center opacity-80"><div className="w-2 h-2 bg-white rounded-sm"></div></div>
                Book a Service <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
              <a href="#" className="bg-transparent border border-slate-500 hover:border-white text-white px-6 py-3 lg:px-8 lg:py-4 rounded-md font-medium transition-all text-center flex items-center justify-center gap-2">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5" /> Call Now
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-white text-xs lg:text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-kk-teal" />
                <span className="opacity-80">Skilled Technicians</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-kk-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="opacity-80">Genuine Parts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-kk-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>
                <span className="opacity-80">Affordable Pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-kk-teal" />
                <span className="opacity-80">Same-Day Service</span>
              </div>
            </div>

            {/* Removed the old happy customers and dots because it matches the mockup now */}
            
          </div>

          <div className="relative h-full min-h-[450px] hidden lg:block">
            {/* Empty right column to allow background image to be visible */}
          </div>
        </div>
      </div>
    </section>
  );
}
