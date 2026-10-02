"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Clock,
  Wrench,
  CheckCircle2,
  Award,
  Phone,
  ArrowRight,
  Sparkles,
  Zap,
  ThumbsUp,
  Tag,
  Headphones,
  Settings,
  CalendarCheck,
  BadgeDollarSign,
  CheckCircle,
  Smile,
  ChevronRight,
  Building,
  Home,
  Star,
  Play,
  Users,
  FileText,
  PhoneCall,
  Calendar
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const brandLogos = [
    { name: "LG", src: "/images/logos/lg_01.png" },
    { name: "Samsung", src: "/images/logos/samsung.png" },
    { name: "Whirlpool", src: "/images/logos/Whirlpool_0111.jpg" },
    { name: "Daikin", src: "/images/logos/daikin.png" },
    { name: "Voltas", src: "/images/logos/voltas.png" },
    { name: "Godrej", src: "/images/logos/godrej_01.jfif" },
    { name: "Bosch", src: "/images/logos/bosch.png" },
    { name: "Haier", src: "/images/logos/Haier-Logo.png" },
    { name: "Hitachi", src: "/images/logos/Hitachi-Logo_011.png" },
    { name: "Blue Star", src: "/images/logos/Blue_Star_Infotech_logo.svg.webp" },
    { name: "Panasonic", src: "/images/logos/Panasonic_logo.webp" },
    { name: "Mitsubishi Electric", src: "/images/logos/mitsubishi-electric.png" },
    { name: "Onida", src: "/images/logos/Onida_Electronics.webp" }
  ];

  const coreBenefits = [
    {
      title: "Satisfied Service",
      desc: "We Provide Satisfied Solution For Your products",
      icon: <ThumbsUp className="w-7 h-7 text-kk-teal" />,
      badgeColor: "bg-kk-teal/10 text-kk-teal"
    },
    {
      title: "Affordable Price",
      desc: "We Provide Cost Effective Solution For You",
      icon: <Tag className="w-7 h-7 text-kk-blue" />,
      badgeColor: "bg-kk-blue/10 text-kk-blue"
    },
    {
      title: "Expert Technician",
      desc: "Provide you the high quality work that meets your expectation",
      icon: <Wrench className="w-7 h-7 text-kk-red" />,
      badgeColor: "bg-kk-red/10 text-kk-red"
    },
    {
      title: "Support Centre",
      desc: "90 Days KK Multi Services Spare Parts warranty on replacement",
      icon: <Headphones className="w-7 h-7 text-amber-500" />,
      badgeColor: "bg-amber-500/10 text-amber-600"
    }
  ];

  const whatYouGet = [
    "Skilled technicians",
    "Get services at affordable prices",
    "Up fronting prices before any work begins so there are no surprise on your final bill",
    "100% cashback guarantee",
    "Warranty on repaired / installed part",
    "No need of technician for minute repair; can be solved by on call only",
    "The team offers proper assistance and suggests regular servicing tips to increase the life of your appliance"
  ];

  const coreServices = [
    {
      title: "Installation",
      desc: "Our technicians are experts in every installation of various home appliances. Every brand needs an expert with specific knowledge.",
      icon: <Settings className="w-8 h-8 text-kk-teal" />
    },
    {
      title: "Repairs",
      desc: "Our warranty plans will secure your devices from defects and failures year after year. We offer all kind of electric services.",
      icon: <Wrench className="w-8 h-8 text-kk-red" />
    },
    {
      title: "Maintenance",
      desc: "We are an experts in Electronics repairing. Don't panic when your device is not working, we are waiting for your call with our best technicians to help you for your daily needs.",
      icon: <ShieldCheck className="w-8 h-8 text-kk-blue" />
    }
  ];

  const workflowSteps = [
    {
      num: "01",
      title: "Booking Online",
      desc: "Select your appliance & problem online or call us directly. Schedule a visit time that fits your day.",
      icon: <CalendarCheck className="w-6 h-6 text-kk-teal" />
    },
    {
      num: "02",
      title: "Discuss Budget",
      desc: "We offer an upfront, transparent price quote before any work begins with zero hidden charges.",
      icon: <BadgeDollarSign className="w-6 h-6 text-kk-blue" />
    },
    {
      num: "03",
      title: "Get Confirmation",
      desc: "Uniformed technician is dispatched with genuine spares and arrives punctually at your doorstep.",
      icon: <CheckCircle className="w-6 h-6 text-kk-red" />
    },
    {
      num: "04",
      title: "Happy Services",
      desc: "Flawless repair testing run, 90-day parts warranty card, and post-service maintenance tips.",
      icon: <Smile className="w-6 h-6 text-amber-500" />
    }
  ];

  const metrics = [
    { label: "Repair Quality", value: 90, color: "from-kk-teal to-teal-400" },
    { label: "Happy Customer", value: 80, color: "from-kk-blue to-blue-500" },
    { label: "Support Centre", value: 90, color: "from-kk-red to-orange-500" }
  ];

  return (
    <main id="top" className="min-h-screen font-sans bg-slate-50 text-slate-900 flex flex-col selection:bg-kk-teal selection:text-white">
      {/* Top Header Bar */}
      <TopBar />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Header */}
      <section
        className="relative bg-kk-blue text-white w-full min-h-[460px] md:min-h-[400px] lg:min-h-[380px] xl:min-h-[420px] py-6 sm:py-8 lg:py-10 flex items-center overflow-hidden border-b border-white/10"
      >
        {/* Ambient background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-kk-teal/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 left-10 w-80 h-80 bg-kk-red/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          {/* Breadcrumb & Service Scope Switcher */}
          <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3 sm:mb-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-kk-teal" />
              <span className="text-kk-teal">About Us</span>
            </div>

            {/* Quick Service Links */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-[11px] sm:text-xs font-bold text-white transition-colors backdrop-blur-sm"
              >
                <Home className="w-3 h-3 text-kk-teal" />
                <span>Residential Services</span>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-[11px] sm:text-xs font-bold text-white transition-colors backdrop-blur-sm"
              >
                <Building className="w-3 h-3 text-cyan-300" />
                <span>Commercial Services</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white/10 border border-white/15 text-[11px] sm:text-xs font-bold text-kk-teal mb-2 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-kk-teal" />
                <span>KK Multi Services • Pune</span>
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[38px] font-black text-white tracking-tight leading-[1.15] mb-2 sm:mb-2.5">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-kk-teal to-teal-300">KK Multi Services</span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-200 font-normal leading-relaxed mb-2">
                Contact us if your valuable appliances at home or at work aren&apos;t working properly. We&apos;re here to supply you with high-quality, low-cost services that fit into your schedule. We&apos;ll be there for you whenever you need us!
              </p>

              <p className="text-xs sm:text-xs text-slate-300 leading-relaxed mb-4">
                Our techs are all friendly and will arrive in uniform with upfront price quotes before any work begins.
              </p>

              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <Link
                  href="/contact"
                  className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-kk-teal hover:bg-kk-teal-light text-white font-bold text-xs sm:text-sm shadow-lg hover:shadow-kk-teal/30 hover:-translate-y-0.5 transition-all flex items-center gap-2 active:scale-95"
                >
                  <span>Contact Now</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>
                <a
                  href="tel:+917823038645"
                  className="px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 backdrop-blur-sm"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-kk-teal" />
                  <span>Call: +91 78230 38645</span>
                </a>
              </div>
            </div>

            {/* Right Video Showcase Card (5 Cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-[16/9] max-h-[220px] lg:max-h-[240px] xl:max-h-[260px] bg-slate-900 group">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  poster="/images/about_ac_repair_1789636581927.jpg"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                >
                  <source src="/about_hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Floating Live Working Badge */}
                <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/15 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">Live On-Site Action</span>
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 text-white">
                  <div className="flex items-center gap-1.5 text-kk-teal text-xs font-bold uppercase tracking-wider mb-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-kk-teal" />
                    <span>Over 10 Years&apos; Experience</span>
                  </div>
                  <p className="text-[11px] text-slate-200 font-medium line-clamp-1">
                    Delivering verified doorstep appliance diagnostics across Pune &amp; PCMC.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Brand Compatibility Double Marquee Slider */}
      <section className="py-12 sm:py-16 bg-slate-100/70 border-b border-slate-200/90 overflow-hidden relative w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-8 sm:mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-kk-teal block mb-2">
            100% GENUINE OEM SPARES
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-kk-blue tracking-tight">
            Factory-Compliant Diagnosis Across All Brands
          </h2>
        </div>

        {/* Gradient edge overlays for smooth fade effect */}
        <div className="relative w-full overflow-hidden space-y-4 sm:space-y-5">
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-slate-100/95 via-slate-100/70 to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-slate-100/95 via-slate-100/70 to-transparent z-10 pointer-events-none" />

          {/* Top Marquee Slider: Left to Right */}
          <div className="flex overflow-hidden select-none">
            <div className="animate-marquee-right flex items-center">
              {[...brandLogos, ...brandLogos].map((brand, idx) => (
                <div
                  key={`top-${brand.name}-${idx}`}
                  className="h-16 sm:h-20 w-36 sm:w-44 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-kk-teal/50 hover:scale-105 transition-all duration-300 flex items-center justify-center shrink-0 mx-2 sm:mx-3 cursor-pointer group"
                  title={brand.name}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={brand.src}
                      alt={`${brand.name} Logo`}
                      width={130}
                      height={50}
                      className="max-h-9 sm:max-h-11 w-auto max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Marquee Slider: Right to Left */}
          <div className="flex overflow-hidden select-none">
            <div className="animate-marquee-left flex items-center">
              {[...brandLogos, ...brandLogos].map((brand, idx) => (
                <div
                  key={`bottom-${brand.name}-${idx}`}
                  className="h-16 sm:h-20 w-36 sm:w-44 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-kk-teal/50 hover:scale-105 transition-all duration-300 flex items-center justify-center shrink-0 mx-2 sm:mx-3 cursor-pointer group"
                  title={brand.name}
                >
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={brand.src}
                      alt={`${brand.name} Logo`}
                      width={130}
                      height={50}
                      className="max-h-9 sm:max-h-11 w-auto max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AMC / CMC Maintenance Contracts Section */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 overflow-hidden border-b border-slate-200/90">
        {/* Background Image: AMC_CMC_Section.png */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/about_us/AMC_CMC_Section.png"
            alt="AMC and CMC Maintenance Services Background"
            fill
            className="object-cover object-right lg:object-center"
            priority
          />
          {/* Subtle mobile/tablet readability overlay on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent lg:hidden" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8 sm:space-y-10 lg:space-y-12">
          {/* Top Row: Left Content & Right Appliances Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-teal-50/90 border border-teal-200/80 text-kk-teal text-[11px] sm:text-xs font-black uppercase tracking-wider backdrop-blur-xs">
                <Settings className="w-3.5 h-3.5 text-kk-teal" />
                <span>ANNUAL & COMPREHENSIVE MAINTENANCE SERVICES</span>
              </div>

              {/* Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-3xl xl:text-4xl 2xl:text-[40px] font-black text-kk-blue tracking-tight leading-[1.18]">
                AMC (Annual <span className="text-kk-teal">Maintenance</span><br />
                Contract) / CMC (Comprehensive<br />
                <span className="text-kk-teal">Maintenance Contract</span>) Services
              </h2>

              {/* Description */}
              <p className="text-xs sm:text-sm lg:text-[15px] text-slate-700 leading-relaxed font-normal max-w-2xl">
                We undertake <strong>AMC (Annual Maintenance Contract)</strong> and <strong>CMC (Comprehensive Maintenance Contract)</strong> services for Air Conditioners (AC), Refrigerators (Fridge), Washing Machines, Microwave Ovens, Electric Geysers, Water Heaters, and Water Purifiers (Aquaguard) for all major brands across Pune, Maharashtra. Safeguarding your appliances and keeping them in top operating condition is our highest priority.
              </p>

              {/* 4 Feature Pills Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-1 sm:pt-2 max-w-xl">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    All Major<br /><span className="text-slate-500 font-normal">Brands</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    Expert<br /><span className="text-slate-500 font-normal">Technicians</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center shrink-0">
                    <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    Quick<br /><span className="text-slate-500 font-normal">Response</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
                    <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    Genuine<br /><span className="text-slate-500 font-normal">Spare Parts</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Spacer so the background appliances graphic displays cleanly */}
            <div className="hidden lg:block lg:col-span-5 min-h-[220px]" />
          </div>

          {/* Bottom Row: 3 Columns (AMC Card, CMC Card, 3 Stacked Stat Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 xl:gap-6 items-stretch">
            {/* Column 1: AMC Card (5 Cols) */}
            <div className="lg:col-span-5 bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-5 xl:p-7 border border-slate-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 sm:gap-3.5 mb-3.5 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-kk-blue text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-kk-blue">
                    AMC — Annual<br />Maintenance Contract
                  </h3>
                </div>

                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed mb-4 sm:mb-5">
                  <strong>AMC</strong> refers to <strong>Annual Maintenance Contract</strong>. Under an AMC, clients avail scheduled routine health check-ups (3 to 4 visits/year) including deep pressure wet-jet pump cleaning, condenser and coil inspection, thermostat check, and piping safety.
                </p>

                {/* 2-Column Checklist */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-2 border-t border-slate-100 text-xs text-slate-700 font-medium">
                  <div className="space-y-2 sm:space-y-2.5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-500 shrink-0" />
                      <span>Scheduled service visits (3–4 per year)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-500 shrink-0" />
                      <span>Deep cleaning & performance check</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-500 shrink-0" />
                      <span>Covers all labor charges</span>
                    </div>
                  </div>

                  <div className="space-y-2 sm:space-y-2.5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-500 shrink-0" />
                      <span>Zero inspection fees</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-500 shrink-0" />
                      <span>Contract period: 1 to 5 years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: CMC Card (4 Cols) */}
            <div className="lg:col-span-4 bg-[#edfbf9] rounded-2xl sm:rounded-3xl p-5 sm:p-7 lg:p-5 xl:p-7 border border-teal-200 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 sm:gap-3.5 mb-3.5 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-kk-teal text-white flex items-center justify-center shrink-0 shadow-sm">
                    <Settings className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-kk-blue">
                    CMC — Comprehensive<br />Maintenance Contract
                  </h3>
                </div>

                <p className="text-xs sm:text-[13px] text-slate-700 leading-relaxed mb-4 sm:mb-5">
                  <strong>CMC</strong> refers to <strong>Comprehensive Maintenance Contract</strong>. A CMC provides 360° total protection covering all scheduled services, unlimited complaint resolutions, plus complete coverage for spare parts, electric parts, and compressor replacement.
                </p>

                {/* 1-Column Checklist */}
                <div className="space-y-2 pt-2 border-t border-teal-100 text-xs text-slate-800 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                    <span>Complete coverage (labor + spare parts + electric parts)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                    <span>Unlimited service visits & complaint resolutions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                    <span>Compressor replacement included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                    <span><strong>100% free</strong> refrigerant gas charging</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
                    <span>Zero surprise repair bills for the entire contract year</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: 3 Stacked Stat Cards (3 Cols) */}
            <div className="lg:col-span-3 flex flex-col justify-between gap-3 sm:gap-3.5">
              {/* Stat 1 */}
              <div className="bg-emerald-50/80 border border-emerald-100 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 lg:p-3 xl:p-5 flex items-center gap-3 sm:gap-3.5 shadow-xs flex-1">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-black text-slate-900 leading-tight">20K+</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">Happy Customers</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-blue-50/80 border border-blue-100 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 lg:p-3 xl:p-5 flex items-center gap-3 sm:gap-3.5 shadow-xs flex-1">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-blue-100/90 text-blue-700 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-black text-slate-900 leading-tight">9+</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">Years of Experience</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="bg-orange-50/80 border border-orange-100 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 lg:p-3 xl:p-5 flex items-center gap-3 sm:gap-3.5 shadow-xs flex-1">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-orange-100/90 text-orange-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-lg sm:text-2xl font-black text-slate-900 leading-tight">100%</div>
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">Service Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto">
            <Link
              href="/amc"
              className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-kk-teal hover:bg-kk-teal-light text-white font-bold text-xs sm:text-sm shadow-lg shadow-kk-teal/25 flex items-center justify-center gap-2.5 transition-all hover:-translate-y-0.5 active:scale-95 text-center"
            >
              <span>View Full AMC / CMC Plans</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/enquire"
              className="px-5 sm:px-7 py-3 sm:py-3.5 rounded-full bg-kk-blue hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2.5 transition-all hover:-translate-y-0.5 active:scale-95 text-center"
            >
              <Calendar className="w-4 h-4 text-slate-300" />
              <span>Book Maintenance Contract</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4 Core Value Pillars */}
      <section className="py-6 pb-14 sm:pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {coreBenefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-5 sm:p-6 lg:p-5 xl:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-kk-teal/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl ${item.badgeColor} flex items-center justify-center mb-4 sm:mb-5`}>
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Home Appliances Repair Services All Brands (3 Pillars) */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full border-t border-slate-200/80">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-kk-teal block mb-2">
            Installation • Repairs • Maintenance
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-kk-blue tracking-tight">
            Home Appliances Repair Services All Brands
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-6 xl:gap-8">
          {coreServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 lg:p-6 xl:p-8 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-kk-teal/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-kk-blue mb-2.5 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Making technology again working for you (4-step workflow) */}
      <section className="py-12 sm:py-16 md:py-20 bg-kk-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-kk-teal block mb-2">
              Simple 4-Step Process
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
              Making Technology Again Working For You
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {workflowSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-3xl p-5 sm:p-6 lg:p-5 xl:p-6 backdrop-blur-sm hover:bg-white/10 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 sm:mb-5">
                    <span className="text-2xl font-black text-kk-teal">{step.num}</span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/10 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fastest Modern Repair Service in Town + Progress Metrics */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 lg:p-10 xl:p-12 border border-slate-200/90 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
            {/* Left side text */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-kk-teal block">
                Top Rated in Pune
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-kk-blue tracking-tight">
                Fastest Modern Repair Service in Town
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                We provide reliable repair services for Washing Machines, Refrigerators, Air Conditioners, Microwave Ovens. For more than ten years, K K Multi Services has made houses more comfortable and appealing.
              </p>
              <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                Refrigeration Home Services also handles specialist commercial and domestic home appliances, such as refrigerators, washing machines, air conditioners, and microwave geysers, so we can freshen your home with a simple adjustment. We also offer free in-home consultations, a project coordinator that oversees all phases of the process, and a satisfaction guarantee.
              </p>
            </div>

            {/* Right side stats */}
            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-5 sm:p-6 lg:p-6 xl:p-7 border border-slate-200 space-y-5 sm:space-y-6">
              <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Performance Benchmarks
              </h3>

              {metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1.5 sm:space-y-2">
                  <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-slate-800">
                    <span>{metric.label}</span>
                    <span className="text-kk-teal font-extrabold">{metric.value}%</span>
                  </div>
                  <div className="h-2.5 sm:h-3 w-full bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${metric.color} transition-all duration-1000`}
                      style={{ width: `${metric.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why KK Multiservices & What You Will Get */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-50 overflow-hidden border-y border-slate-200/80">
        {/* Background Image: why_bg_img.png */}
        <div className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/about_us/why_bg_img.png"
            alt="Why Choose KK Multi Services Background"
            fill
            className="object-cover object-right lg:object-center"
            priority
          />
          {/* Subtle mobile/tablet readability overlay on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent lg:hidden" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
            {/* Left Column: Heading, description, buttons, bottom stats (7 Cols) */}
            <div className="lg:col-span-7 xl:col-span-7 space-y-5 sm:space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-kk-teal/30 text-kk-teal text-xs font-bold uppercase tracking-wider shadow-xs backdrop-blur-sm">
                <Star className="w-3.5 h-3.5 fill-kk-teal text-kk-teal" />
                <span>The Trusted Choice</span>
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black text-kk-blue tracking-tight leading-[1.15]">
                Why KK <span className="text-kk-teal">Multiservices ?</span>
              </h2>

              {/* Paragraphs */}
              <p className="text-xs sm:text-sm md:text-[15px] text-slate-700 leading-relaxed font-normal max-w-xl">
                KK Multiservices makes the services easily available by saving your money and time, by connecting it with the experts. You get all sorts of repairing done by the engineers.
              </p>
              <p className="text-xs sm:text-sm md:text-[15px] text-slate-700 leading-relaxed font-normal max-w-xl">
                When you call us to report a faulty appliance, you will be speaking to our friendly office team who have knowledge about handling appliance emergencies. Our technicians carry spare parts which allows them to get your appliance fixed fast and securely. The technicians chosen are well qualified to deliver the most satisfactory service at your doorstep.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-5 pt-2">
                <Link
                  href="/enquire"
                  className="w-full sm:w-auto justify-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-kk-teal hover:bg-kk-teal-light text-white font-bold text-xs sm:text-sm shadow-lg shadow-kk-teal/30 flex items-center gap-3 transition-all hover:-translate-y-0.5 active:scale-95 group text-center"
                >
                  <span>Book Doorstep Visit</span>
                  <span className="w-6 h-6 rounded-full bg-white text-kk-teal flex items-center justify-center font-bold text-xs group-hover:translate-x-0.5 transition-transform shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 text-kk-teal" />
                  </span>
                </Link>

                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center sm:justify-start gap-3 group cursor-pointer"
                >
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white shadow-md border border-slate-200/80 flex items-center justify-center text-kk-teal group-hover:scale-105 group-hover:border-kk-teal/50 transition-all shrink-0">
                    <Play className="w-4 h-4 fill-kk-teal text-kk-teal ml-0.5" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-kk-teal transition-colors">How It Works</span>
                    <span className="text-[11px] sm:text-xs text-slate-500 font-medium">Watch Our Process</span>
                  </div>
                </a>
              </div>

              {/* Bottom 4 Benchmarks Row */}
              <div className="pt-5 sm:pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-600 flex items-center justify-center shrink-0">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base lg:text-lg font-black text-slate-900 leading-tight">20K+</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">Happy Customers</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base lg:text-lg font-black text-slate-900 leading-tight">98%</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">Service Success</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base lg:text-lg font-black text-slate-900 leading-tight">9+</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">Years of Experience</div>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-emerald-600" />
                  </div>
                  <div>
                    <div className="text-sm sm:text-base lg:text-lg font-black text-slate-900 leading-tight">4.8/5</div>
                    <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-tight">Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: "What You Will Get" floating card (5 Cols) */}
            <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end w-full">
              <div className="bg-white rounded-3xl p-5 sm:p-7 shadow-2xl border border-slate-200/90 relative z-20 max-w-md w-full">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-kk-blue mb-3 sm:mb-4 pb-2.5 sm:pb-3 border-b border-slate-100 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-kk-teal" />
                  <span>What You <span className="text-kk-teal">Will Get</span></span>
                </h3>

                <div className="divide-y divide-slate-100">
                  {/* 1. Skilled Technicians */}
                  <div className="py-2 sm:py-2.5 first:pt-0 last:pb-0 flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-cyan-50 border border-cyan-100/70 text-cyan-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Skilled Technicians</h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">Trained and experienced professionals</p>
                    </div>
                  </div>

                  {/* 2. Affordable Prices */}
                  <div className="py-2 sm:py-2.5 first:pt-0 last:pb-0 flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-50 border border-blue-100/70 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Tag className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Affordable Prices</h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">Get services at genuine and transparent prices</p>
                    </div>
                  </div>

                  {/* 3. Upfront Pricing */}
                  <div className="py-2 sm:py-2.5 first:pt-0 last:pb-0 flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-50 border border-amber-100/70 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                      <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Upfront Pricing</h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">No surprise charges, know the cost before work begins</p>
                    </div>
                  </div>

                  {/* 4. 100% Cashback Guarantee */}
                  <div className="py-2 sm:py-2.5 first:pt-0 last:pb-0 flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-emerald-50 border border-emerald-100/70 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">100% Cashback Guarantee</h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">Your satisfaction is our priority</p>
                    </div>
                  </div>

                  {/* 5. Warranty on Repaired / Installed Part */}
                  <div className="py-2 sm:py-2.5 first:pt-0 last:pb-0 flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-purple-50 border border-purple-100/70 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Warranty on Repaired / Installed Part</h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">Genuine parts with warranty</p>
                    </div>
                  </div>

                  {/* 6. On-Call Support */}
                  <div className="py-2 sm:py-2.5 first:pt-0 last:pb-0 flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-rose-50 border border-rose-100/70 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">On-Call Support</h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">No need to wait for a technician, many issues can be solved over a call</p>
                    </div>
                  </div>

                  {/* 7. Expert Guidance */}
                  <div className="py-2 sm:py-2.5 first:pt-0 last:pb-0 flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-50 border border-amber-100/70 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Settings className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-tight">Expert Guidance</h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5 leading-snug">We also suggest regular servicing tips to increase your appliance&apos;s life</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Call-To-Action */}
      <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-r from-kk-blue via-kk-blue-light to-kk-dark text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 border border-white/10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-kk-teal/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl text-center md:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kk-teal/20 text-kk-teal border border-kk-teal/30 text-xs font-bold mb-3 sm:mb-4 uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" /> Book Your Doorstep Visit
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black mb-2 sm:mb-3">
              Experience Hassle-Free Appliance Repair
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-slate-300">
              Get an expert technician at your door in 90 minutes. No advance payment required.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-3.5 shrink-0 w-full md:w-auto">
            <Link
              href="/enquire"
              className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-kk-teal hover:bg-kk-teal-light text-white font-bold text-xs sm:text-sm transition-all shadow-lg flex items-center justify-center gap-2 text-center"
            >
              <span>Book Service Online</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+917823038645"
              className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-slate-100 text-kk-blue font-bold text-xs sm:text-sm transition-all shadow-lg flex items-center justify-center gap-2 text-center"
            >
              <Phone className="w-4 h-4 text-kk-red" />
              <span>Call +91 78230 38645</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
