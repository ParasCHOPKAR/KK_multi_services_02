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
  const isAmcPage = pathname === "/amc";
  const isBlogPage = pathname === "/blog";

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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

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
          <div className="flex justify-between items-center py-2.5 md:py-3">
            {/* Logo */}
            <div className="flex shrink-0">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/images/Logo_02.png" 
                  alt="KK Multi Services Logo" 
                  width={240} 
                  height={70} 
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain" 
                  priority 
                />
              </Link>
            </div>

            {/* Nav Links - Desktop */}
            <div className="hidden lg:flex flex-1 justify-center items-center space-x-3.5 xl:space-x-6 2xl:space-x-7">
              <Link 
                href="/" 
                className={`text-xs xl:text-sm transition-colors ${isHomePage ? "font-bold text-white relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-kk-teal" : "font-medium text-slate-300 hover:text-white"}`}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className={`text-xs xl:text-sm transition-colors ${isAboutPage ? "font-bold text-white relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-kk-teal" : "font-medium text-slate-300 hover:text-white"}`}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className={`text-xs xl:text-sm transition-colors ${isServicesPage ? "font-bold text-white relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-kk-teal" : "font-medium text-slate-300 hover:text-white"}`}
              >
                Services
              </Link>
              <Link 
                href="/amc" 
                className={`text-xs xl:text-sm transition-colors ${isAmcPage ? "font-bold text-white relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-kk-teal" : "font-medium text-slate-300 hover:text-white"}`}
              >
                AMC / CMC
              </Link>
              <Link 
                href="/areas" 
                className={`text-xs xl:text-sm transition-colors ${isAreasPage ? "font-bold text-white relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-kk-teal" : "font-medium text-slate-300 hover:text-white"}`}
              >
                Areas
              </Link>
              <Link 
                href="/blog" 
                className={`text-xs xl:text-sm transition-colors ${isBlogPage ? "font-bold text-white relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-kk-teal" : "font-medium text-slate-300 hover:text-white"}`}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className={`text-xs xl:text-sm transition-colors ${isContactPage ? "font-bold text-white relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-kk-teal" : "font-medium text-slate-300 hover:text-white"}`}
              >
                Contact
              </Link>
            </div>

            {/* CTA & Mobile Actions */}
            <div className="flex items-center justify-end gap-2.5 sm:gap-4 md:gap-6">
              {/* Desktop Direct Phone */}
              <div className="hidden md:flex items-center gap-4 xl:gap-6">
                <a href="tel:+919876543210" className="flex items-center gap-2 text-white font-bold hover:text-kk-teal transition-colors text-xs xl:text-sm">
                  <Phone className="w-4 h-4 text-kk-teal" />
                  <span className="hidden xl:block">+91 98765 43210</span>
                </a>
                <Link href="/contact#book" className="hidden lg:flex bg-kk-teal hover:bg-kk-teal-light text-white px-4 xl:px-6 py-2 xl:py-2.5 rounded-md font-bold text-xs xl:text-sm transition-all shadow-md hover:shadow-lg items-center gap-2 active:scale-95">
                  <div className="w-4 h-4 border-2 border-white rounded-sm flex items-center justify-center opacity-80"><div className="w-1.5 h-1.5 bg-white rounded-sm"></div></div>
                  Book a Service
                </Link>
              </div>

              {/* Mobile Quick Call Button */}
              <a 
                href="tel:+919876543210" 
                className="flex lg:hidden items-center justify-center w-9 h-9 rounded-full bg-kk-teal text-white hover:bg-kk-teal-light transition-colors shadow-sm active:scale-90"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4" />
              </a>
              
              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden p-2 text-white hover:text-kk-teal transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-kk-teal/40"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open navigation menu"
              >
                <Menu className="w-6 h-6 sm:w-7 sm:h-7" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-xs lg:hidden transition-opacity" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Sidebar Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[70] transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} shadow-2xl flex flex-col justify-between overflow-y-auto`}
      >
        <div>
          <div className="flex justify-between items-center p-5 border-b border-slate-100">
            <Image src="/images/Logo_02.png" alt="KK Multi Services Logo" width={150} height={44} className="h-9 w-auto object-contain" />
            <button 
              className="p-2 text-slate-500 hover:text-kk-red transition-colors bg-slate-100 hover:bg-slate-200 rounded-full"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex flex-col p-5 space-y-1.5">
            <Link 
              href="/" 
              className={`px-4 py-3 rounded-xl text-base transition-colors flex items-center justify-between ${isHomePage ? "font-bold text-kk-teal bg-kk-teal/10" : "font-medium text-slate-700 hover:bg-slate-50"}`} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Home</span>
              {isHomePage && <span className="w-1.5 h-1.5 rounded-full bg-kk-teal"></span>}
            </Link>
            <Link 
              href="/about" 
              className={`px-4 py-3 rounded-xl text-base transition-colors flex items-center justify-between ${isAboutPage ? "font-bold text-kk-teal bg-kk-teal/10" : "font-medium text-slate-700 hover:bg-slate-50"}`} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>About Us</span>
              {isAboutPage && <span className="w-1.5 h-1.5 rounded-full bg-kk-teal"></span>}
            </Link>
            <Link 
              href="/services" 
              className={`px-4 py-3 rounded-xl text-base transition-colors flex items-center justify-between ${isServicesPage ? "font-bold text-kk-teal bg-kk-teal/10" : "font-medium text-slate-700 hover:bg-slate-50"}`} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Services</span>
              {isServicesPage && <span className="w-1.5 h-1.5 rounded-full bg-kk-teal"></span>}
            </Link>
            <Link 
              href="/amc" 
              className={`px-4 py-3 rounded-xl text-base transition-colors flex items-center justify-between ${isAmcPage ? "font-bold text-kk-teal bg-kk-teal/10" : "font-medium text-slate-700 hover:bg-slate-50"}`} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>AMC / CMC Services</span>
              {isAmcPage && <span className="w-1.5 h-1.5 rounded-full bg-kk-teal"></span>}
            </Link>
            <Link 
              href="/areas" 
              className={`px-4 py-3 rounded-xl text-base transition-colors flex items-center justify-between ${isAreasPage ? "font-bold text-kk-teal bg-kk-teal/10" : "font-medium text-slate-700 hover:bg-slate-50"}`} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Areas We Serve</span>
              {isAreasPage && <span className="w-1.5 h-1.5 rounded-full bg-kk-teal"></span>}
            </Link>
            <Link 
              href="/blog" 
              className={`px-4 py-3 rounded-xl text-base transition-colors flex items-center justify-between ${isBlogPage ? "font-bold text-kk-teal bg-kk-teal/10" : "font-medium text-slate-700 hover:bg-slate-50"}`} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Appliance Blog & Tips</span>
              {isBlogPage && <span className="w-1.5 h-1.5 rounded-full bg-kk-teal"></span>}
            </Link>
            <Link 
              href="/contact" 
              className={`px-4 py-3 rounded-xl text-base transition-colors flex items-center justify-between ${isContactPage ? "font-bold text-kk-teal bg-kk-teal/10" : "font-medium text-slate-700 hover:bg-slate-50"}`} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Contact Us</span>
              {isContactPage && <span className="w-1.5 h-1.5 rounded-full bg-kk-teal"></span>}
            </Link>
          </div>
        </div>

        {/* Drawer Bottom Actions */}
        <div className="p-5 border-t border-slate-100 bg-slate-50/50">
          <a 
            href="tel:+919876543210" 
            className="flex items-center gap-3.5 text-slate-700 font-bold hover:text-kk-blue transition-colors mb-4 p-3.5 bg-white border border-slate-200/80 rounded-xl shadow-xs"
          >
            <div className="w-10 h-10 rounded-full bg-kk-teal/10 flex items-center justify-center text-kk-teal shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-slate-500 font-medium">24/7 Emergency Service</span>
              <span className="text-base text-slate-900">+91 98765 43210</span>
            </div>
          </a>
          
          <Link 
            href="/contact#book" 
            className="bg-kk-teal hover:bg-kk-teal-light text-white px-5 py-3.5 rounded-xl font-bold text-base transition-all shadow-md flex items-center justify-center gap-2 w-full text-center active:scale-95" 
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Book a Service <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
