"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isAboutPage = pathname === "/about";
  const isContactPage = pathname === "/contact";
  const isServicesPage = pathname === "/services";
  const isAreasPage = pathname === "/areas";

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop || window.scrollY || 0;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (windowHeight > 0) {
        const progress = (totalScroll / windowHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="relative w-full bg-kk-blue border-b border-white/10 sticky top-0 z-50">
        {/* Scroll Progress Line */}
        <div 
          className="absolute top-0 left-0 w-full h-[3px] md:h-1 bg-white/10 pointer-events-none overflow-hidden" 
          role="progressbar" 
          aria-valuenow={Math.round(scrollProgress)} 
          aria-valuemin={0} 
          aria-valuemax={100}
          aria-label="Scroll progress indicator"
        >
          <div 
            className="h-full bg-gradient-to-r from-kk-teal via-kk-teal-light to-cyan-300 transition-[width] duration-75 ease-out shadow-[0_0_10px_rgba(0,169,157,0.8)]"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex justify-between items-center py-2 md:py-3">
            {/* Logo */}
            <div className="flex shrink-0">
              <Link href="/" className="flex items-center">
                <Image src="/images/Logo_02.png" alt="KK Multi Services Logo" width={240} height={70} className="h-12 md:h-14 w-auto object-contain" priority />
              </Link>
            </div>

            {/* Nav Links - Desktop */}
            <div className="hidden lg:flex flex-1 justify-center items-center space-x-6 xl:space-x-8">
              <Link 
                href="/" 
                className={`text-sm transition-colors ${isHomePage ? "font-bold text-white relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-kk-teal" : "font-medium text-slate-300 hover:text-white"}`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`text-sm transition-colors ${isAboutPage ? "font-bold text-white relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-kk-teal" : "font-medium text-slate-300 hover:text-white"}`}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className={`text-sm transition-colors ${isServicesPage ? "font-bold text-white relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-kk-teal" : "font-medium text-slate-300 hover:text-white"}`}
              >
                Services
              </Link>
              <Link 
                href="/areas" 
                className={`text-sm transition-colors ${isAreasPage ? "font-bold text-white relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-kk-teal" : "font-medium text-slate-300 hover:text-white"}`}
              >
                Areas
              </Link>
              <Link 
                href="/contact" 
                className={`text-sm transition-colors ${isContactPage ? "font-bold text-white relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-kk-teal" : "font-medium text-slate-300 hover:text-white"}`}
              >
                Contact
              </Link>
            </div>

            {/* CTA & Mobile Toggle */}
            <div className="flex items-center justify-end gap-4 md:gap-6">
              <div className="hidden md:flex items-center gap-6">
                <a href="tel:+919876543210" className="flex items-center gap-2 text-white font-bold hover:text-kk-teal transition-colors">
                  <Phone className="w-4 h-4 text-kk-teal" />
                  <span className="hidden xl:block">+91 98765 43210</span>
                </a>
                <Link href="/contact#book" className="hidden lg:flex bg-kk-teal hover:bg-kk-teal-light text-white px-6 py-2.5 rounded-md font-bold text-sm transition-all shadow-md hover:shadow-lg items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white rounded-sm flex items-center justify-center opacity-80"><div className="w-1.5 h-1.5 bg-white rounded-sm"></div></div>
                  Book a Service
                </Link>
              </div>
              
              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2 text-white hover:text-kk-teal transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
              >
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-black/50 lg:hidden" onClick={() => setIsMobileMenuOpen(false)}></div>
      )}

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[70] transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} shadow-2xl`}>
        <div className="flex justify-between items-center p-5 border-b border-slate-100">
          <Image src="/images/Logo_02.png" alt="KK Multi Services Logo" width={150} height={44} className="h-10 w-auto object-contain" />
          <button 
            className="p-2.5 text-slate-500 hover:text-kk-red transition-colors bg-slate-50 hover:bg-slate-100 rounded-full"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex flex-col p-6 space-y-1">
          <Link href="/" className={`text-lg py-3 border-b border-slate-50 ${isHomePage ? "font-bold text-kk-blue" : "font-medium text-slate-600 hover:text-kk-blue"}`} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/about" className={`text-lg py-3 border-b border-slate-50 ${isAboutPage ? "font-bold text-kk-blue" : "font-medium text-slate-600 hover:text-kk-blue"}`} onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link href="/services" className={`text-lg py-3 border-b border-slate-50 ${isServicesPage ? "font-bold text-kk-blue" : "font-medium text-slate-600 hover:text-kk-blue"}`} onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
          <Link href="/areas" className={`text-lg py-3 border-b border-slate-50 ${isAreasPage ? "font-bold text-kk-blue" : "font-medium text-slate-600 hover:text-kk-blue"}`} onClick={() => setIsMobileMenuOpen(false)}>Areas We Serve</Link>
          <Link href="/contact" className={`text-lg py-3 border-b border-slate-50 ${isContactPage ? "font-bold text-kk-blue" : "font-medium text-slate-600 hover:text-kk-blue"}`} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          
          <div className="pt-8 mt-4">
            <a href="tel:+919876543210" className="flex items-center gap-4 text-slate-700 font-bold hover:text-kk-blue transition-colors mb-6 p-4 bg-slate-50 rounded-xl">
              <div className="w-12 h-12 rounded-full bg-kk-blue/10 flex items-center justify-center text-kk-blue shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-slate-500 font-medium">Call Us Now</span>
                <span className="text-lg">+91 98765 43210</span>
              </div>
            </a>
            <Link href="/contact#book" className="bg-kk-red hover:bg-kk-red-light text-white px-6 py-4 rounded-xl font-bold text-base transition-all shadow-md flex items-center justify-center gap-2 w-full text-center" onClick={() => setIsMobileMenuOpen(false)}>
              Book a Service <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
