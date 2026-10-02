"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ArrowRight, Menu, X, Calendar } from "lucide-react";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useTheme } from "@/context/ThemeContext";
import { useBookingModal } from "@/context/BookingModalContext";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const { theme, mounted } = useTheme();
  const { openBookingModal } = useBookingModal();
  const isLight = mounted && theme === "light";

  const isHomePage = pathname === "/";
  const isAboutPage = pathname === "/about";
  const isContactPage = pathname === "/contact";
  const isServicesPage = pathname === "/services";
  const isAreasPage = pathname === "/areas";
  const isAmcPage = pathname === "/amc";
  const isBlogPage = pathname === "/blog";
  const isEnquirePage = pathname === "/enquire";

  const navLinks = [
    { href: "/", label: "Home", active: isHomePage },
    { href: "/about", label: "About", active: isAboutPage },
    { href: "/services", label: "Services", active: isServicesPage },
    { href: "/amc", label: "AMC / CMC", active: isAmcPage },
    { href: "/areas", label: "Areas", active: isAreasPage },
    { href: "/blog", label: "Blog", active: isBlogPage },
    { href: "/contact", label: "Contact", active: isContactPage },
    { href: "/enquire", label: "Enquire", active: isEnquirePage },
  ];

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
      <nav 
        className={`relative w-full sticky top-0 z-50 transition-colors duration-300 ${
          isLight 
            ? "bg-white border-b border-slate-200/80 shadow-xs" 
            : "bg-kk-blue border-b border-white/10"
        }`}
      >
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
                  src={isLight ? "/images/logo_Light_01.png" : "/images/Logo_02.png"} 
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
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className={`text-xs xl:text-sm transition-colors ${
                    link.active 
                      ? isLight
                        ? "font-bold text-[#0b1c3d] relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-kk-teal"
                        : "font-bold text-white relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-full after:h-0.5 after:bg-[var(--kk-active-underline)]"
                      : isLight
                        ? "font-medium text-slate-700 hover:text-kk-teal"
                        : "font-medium text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA & Mobile Actions */}
            <div className="flex items-center justify-end gap-2.5 sm:gap-4 md:gap-6">
              {/* Desktop Direct Phone */}
              <div className="hidden md:flex items-center gap-4 xl:gap-6">
                <a 
                  href="tel:+917823038645" 
                  className={`flex items-center gap-2 font-bold hover:text-kk-teal transition-colors text-xs xl:text-sm ${
                    isLight ? "text-[#0b1c3d]" : "text-white"
                  }`}
                >
                  <Phone className="w-4 h-4 text-kk-teal" />
                  <span className="hidden xl:block">+91 78230 38645</span>
                </a>
                <button 
                  type="button"
                  onClick={() => openBookingModal()}
                  className={`hidden lg:flex px-4 xl:px-6 py-2 xl:py-2.5 rounded-lg font-bold text-xs xl:text-sm transition-all shadow-md hover:shadow-lg items-center gap-2 active:scale-95 cursor-pointer ${
                    isLight
                      ? "bg-kk-teal text-white hover:bg-[#008f84]"
                      : "bg-[var(--kk-nav-cta-bg)] text-[var(--kk-nav-cta-text)] hover:opacity-95"
                  }`}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Service</span>
                </button>
              </div>

              {/* Mobile Quick Call Button */}
              <a 
                href="tel:+917823038645" 
                className="flex lg:hidden items-center justify-center w-9 h-9 rounded-full bg-kk-teal text-white hover:bg-kk-teal-light transition-colors shadow-sm active:scale-90"
                aria-label="Call Now"
              >
                <Phone className="w-4 h-4" />
              </a>
              
              {/* Mobile Menu Button */}
              <button 
                className={`lg:hidden p-2 transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-kk-teal/40 ${
                  isLight ? "text-slate-800 hover:text-kk-teal" : "text-white hover:text-kk-teal"
                }`}
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
            <Image 
              src={isLight ? "/images/logo_Light_01.png" : "/images/Logo_02.png"} 
              alt="KK Multi Services Logo" 
              width={150} 
              height={44} 
              className="h-9 w-auto object-contain" 
            />
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
            <Link 
              href="/enquire" 
              className={`px-4 py-3 rounded-xl text-base transition-colors flex items-center justify-between ${isEnquirePage ? "font-bold text-kk-teal bg-kk-teal/10" : "font-medium text-slate-700 hover:bg-slate-50"}`} 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Enquire & Book</span>
              {isEnquirePage && <span className="w-1.5 h-1.5 rounded-full bg-kk-teal"></span>}
            </Link>
          </div>

          {/* Mobile Theme Switcher */}
          <div className="px-5 pb-4">
            <ThemeSwitcher variant="mobile" />
          </div>
        </div>

        {/* Drawer Bottom Actions */}
        <div className="p-5 border-t border-slate-100 bg-slate-50/50">
          <a 
            href="tel:+917823038645" 
            className="flex items-center gap-3.5 text-slate-700 font-bold hover:text-kk-blue transition-colors mb-4 p-3.5 bg-white border border-slate-200/80 rounded-xl shadow-xs"
          >
            <div className="w-10 h-10 rounded-full bg-kk-teal/10 flex items-center justify-center text-kk-teal shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="text-[11px] text-slate-500 font-medium">24/7 Emergency Service</span>
              <span className="text-base text-slate-900">+91 78230 38645</span>
            </div>
          </a>
          
          <button 
            type="button"
            onClick={() => {
              setIsMobileMenuOpen(false);
              openBookingModal();
            }}
            className="bg-kk-teal hover:bg-kk-teal-light text-white px-5 py-3.5 rounded-xl font-bold text-base transition-all shadow-md flex items-center justify-center gap-2 w-full text-center active:scale-95 cursor-pointer" 
          >
            Book a Service <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}
