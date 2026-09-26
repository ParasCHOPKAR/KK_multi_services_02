"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ShieldCheck, 
  Clock, 
  Wrench, 
  CheckCircle2, 
  Award, 
  Users, 
  HeartHandshake, 
  ChevronRight, 
  Phone, 
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  Compass,
  Star
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  const brandLogos = [
    "LG", "Samsung", "Whirlpool", "Daikin", "Voltas", "Godrej", 
    "Bosch", "IFB", "Panasonic", "Haier", "Carrier", "Hitachi", "Blue Star"
  ];

  const teamSpecialties = [
    {
      role: "HVAC & AC Specialists",
      experience: "8+ Yrs Avg Experience",
      desc: "Experts in inverter split systems, precision vacuum piping, leak detection, and high-efficiency refrigerant charging.",
      icon: <Zap className="w-6 h-6 text-kk-teal" />
    },
    {
      role: "Refrigeration Engineers",
      experience: "10+ Yrs Avg Experience",
      desc: "Specialized in frost-free, multi-door, and inverter refrigerator compressors, defrost systems, and gas line repairs.",
      icon: <ShieldCheck className="w-6 h-6 text-kk-blue" />
    },
    {
      role: "Washing Machine Technicians",
      experience: "7+ Yrs Avg Experience",
      desc: "Certified on European front-load drums, top-load agitation mechanisms, motor inverters, and drain pumps.",
      icon: <Wrench className="w-6 h-6 text-kk-red" />
    },
    {
      role: "Kitchen & Heating Technicians",
      experience: "6+ Yrs Avg Experience",
      desc: "High-voltage microwave magnetron diagnostics, electric geysers, thermal cutouts, and safe scale removal.",
      icon: <Award className="w-6 h-6 text-amber-500" />
    }
  ];

  const reviews = [
    {
      name: "Rahul Sharma",
      area: "Wakad, Pune",
      text: "The technician arrived at our apartment within 45 minutes of booking. Diagnosed a faulty AC capacitor and fixed it on the spot with an original part. Transparent pricing and very courteous!",
      rating: 5,
      appliance: "Split AC Repair"
    },
    {
      name: "Pooja Deshmukh",
      area: "Baner, Pune",
      text: "Our double door refrigerator suddenly stopped cooling on a Sunday morning. KK Multi Services was the only service that picked up immediately and dispatched an engineer by noon. Lifesaver!",
      rating: 5,
      appliance: "Refrigerator Repair"
    },
    {
      name: "Amitabh Kulkarni",
      area: "Kothrud, Pune",
      text: "Fixed a loud drum spinning issue in my IFB front load washing machine. Reasonable charges and they provided a 90-day warranty card. Highly recommended for home repairs.",
      rating: 5,
      appliance: "Washing Machine Service"
    }
  ];

  return (
    <main id="top" className="min-h-screen font-sans bg-slate-50 text-slate-900 flex flex-col">
      {/* Top Header Bar */}
      <TopBar />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Header */}
      <section className="relative bg-kk-blue text-white py-14 sm:py-16 md:py-20 overflow-hidden border-b border-white/10">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-kk-teal/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 left-10 w-80 h-80 bg-kk-red/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-kk-teal" />
            <span className="text-kk-teal">About Us</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-white mb-6 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-kk-teal" />
                <span>Pune's Premier Appliance Care Partner</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
                Dedicated to Keeping Your Home <span className="text-transparent bg-clip-text bg-gradient-to-r from-kk-teal via-cyan-300 to-white">Running Smoothly</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8">
                Founded with a mission to eliminate the uncertainty, inflated bills, and delays in home appliance repair. We bring certified master technicians, 100% genuine spare parts, and 90-minute doorstep service to families across Pune & PCMC.
              </p>

              {/* Core Statistics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-kk-teal">10+ Yrs</div>
                  <div className="text-xs text-slate-400 font-medium mt-1">Service Excellence</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">5,000+</div>
                  <div className="text-xs text-slate-400 font-medium mt-1">Happy Households</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-cyan-300">25+</div>
                  <div className="text-xs text-slate-400 font-medium mt-1">Certified Technicians</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">4.9 ★</div>
                  <div className="text-xs text-slate-400 font-medium mt-1">Over 1,200+ Reviews</div>
                </div>
              </div>
            </div>

            {/* Right Video Showcase (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-slate-900 group aspect-[4/3] sm:aspect-video lg:aspect-[4/3] w-full">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                >
                  <source src="/about_hero.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Subtle vignette & live status overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c3d]/90 via-transparent to-black/20 pointer-events-none"></div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-bold text-white bg-kk-blue/80 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/15 shadow-lg">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Appliance Repair in Action</span>
                  </div>
                  <span className="text-kk-teal font-extrabold">Pune & PCMC</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Our Story & Mission Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Side */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3]">
              <Image 
                src="/images/about_ac_repair_1789636581927.jpg" 
                alt="KK Multi Services Engineer repairing AC" 
                fill 
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold text-kk-teal uppercase tracking-widest block mb-1">On-Site Excellence</span>
                <p className="text-sm font-semibold">Equipped with precision testing instruments and genuine parts in every van.</p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-kk-blue text-white p-5 rounded-2xl shadow-2xl border border-white/10 hidden sm:flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-kk-teal flex items-center justify-center text-white shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-black">10+ Years</div>
                <div className="text-xs text-slate-300">Trusted in Pune & PCMC</div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-kk-teal">
              <span className="w-2 h-2 rounded-full bg-kk-teal"></span> Who We Are
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b1c3d] tracking-tight leading-tight">
              A Company Built on Transparency, Speed, and Technical Mastery
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              When an essential appliance breaks down — whether your refrigerator in the middle of summer or a washing machine full of laundry — you need immediate, dependable help. You shouldn't have to wait days or worry about hidden charges.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              KK Multi Services was established to bring enterprise-grade professionalism to home doorstep repairs. With strategic mobile units stationed across East, West, Central, and PCMC zones, we reach you in under 90 minutes with factory-genuine parts and upfront, fixed pricing.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-kk-teal/10 flex items-center justify-center text-kk-teal mb-3">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm mb-1">Our Mission</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Provide honest, doorstep appliance repairs within 90 minutes, eliminating anxiety and inflated bills.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-kk-blue/10 flex items-center justify-center text-kk-blue mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm mb-1">Our Vision</h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  To be Maharashtra's most trusted household service brand, celebrated for precision, safety, and speed.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4 Pillars of Our Service */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-kk-teal block mb-2">
              Our Core Commitments
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0b1c3d] tracking-tight">
              Why 5,000+ Pune Families Trust Us
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-kk-teal/30 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-kk-teal/10 flex items-center justify-center text-kk-teal mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">90-Min Rapid Arrival</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Local mobile vans across Pune ensure your emergency repair is handled on the very same day without delay.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-kk-teal/30 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-kk-blue/10 flex items-center justify-center text-kk-blue mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">100% Genuine Spares</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                We only install authentic, brand-approved parts backed by a comprehensive 90-day replacement warranty.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-kk-teal/30 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-kk-red/10 flex items-center justify-center text-kk-red mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Background Verified</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                All engineers carry official company IDs and police-verified credentials for complete safety in gated societies.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-kk-teal/30 hover:bg-white hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Zero Advance Payment</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Pay only after your appliance is thoroughly tested and running flawlessly to your total satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialist Engineering Teams */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kk-teal/10 text-kk-teal text-xs font-bold mb-3 uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" /> Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b1c3d] tracking-tight">
            Specialized Engineering Departments
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Every appliance type is handled by technicians specialized specifically in that category.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamSpecialties.map((dept, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md shadow-slate-900/5 hover:shadow-xl hover:border-kk-teal/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-4">
                  {dept.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider text-kk-teal block mb-1">
                  {dept.experience}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                  {dept.role}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {dept.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-kk-blue">
                <span>Multi-Brand Certified</span>
                <CheckCircle2 className="w-4 h-4 text-kk-teal" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Multi-Brand Compatibility Wall */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-kk-teal block mb-2">
            Multi-Brand Compatibility
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-[#0b1c3d] tracking-tight mb-8">
            Factory-Compliant Diagnosis Across All Brands
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-4xl mx-auto">
            {brandLogos.map((brand) => (
              <span 
                key={brand}
                className="px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm font-extrabold text-slate-700 shadow-sm hover:border-kk-teal hover:text-kk-teal transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-kk-teal block mb-2">
            Real Customer Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b1c3d] tracking-tight">
            Trusted by Families Across Pune
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Read what homeowners in Wakad, Baner, Kothrud, and Hinjawadi say about our doorstep service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-md shadow-slate-900/5 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                  "{rev.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{rev.name}</h4>
                  <span className="text-xs text-slate-400">{rev.area}</span>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded bg-kk-teal/10 text-kk-teal">
                  {rev.appliance}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency Call-To-Action */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-r from-kk-blue via-kk-blue-light to-[#071329] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-kk-teal/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kk-teal/20 text-kk-teal border border-kk-teal/30 text-xs font-bold mb-4 uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" /> Book Your Doorstep Visit
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3">
              Experience Hassle-Free Appliance Repair
            </h3>
            <p className="text-sm sm:text-base text-slate-300">
              Get an expert technician at your door in 90 minutes. No advance payment required.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3.5 shrink-0 w-full md:w-auto">
            <Link 
              href="/contact#book"
              className="px-6 py-4 rounded-xl bg-kk-teal hover:bg-kk-teal-light text-white font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
            >
              Book Service Online <ArrowRight className="w-4 h-4" />
            </Link>
            <a 
              href="tel:+919876543210"
              className="px-6 py-4 rounded-xl bg-white hover:bg-slate-100 text-kk-blue font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-kk-red" /> Call +91 98765 43210
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
