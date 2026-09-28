"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Wrench, 
  ShieldCheck, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  ChevronRight,
  ChevronDown,
  Sparkles,
  Zap,
  HelpCircle,
  Award
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface ServiceItem {
  id: string;
  category: "all" | "ac" | "fridge" | "washing" | "microwave" | "geyser";
  title: string;
  tag: string;
  tagColor: string;
  image: string;
  shortDesc: string;
  issues: string[];
  features: string[];
}

const servicesList: ServiceItem[] = [
  {
    id: "ac-repair",
    category: "ac",
    title: "Air Conditioner Repair & Servicing",
    tag: "Most Popular",
    tagColor: "bg-kk-teal text-white",
    image: "/images/appliance_ac_1789636637732.jpg",
    shortDesc: "Complete split & window AC repair, deep jet pump cleaning, gas refilling, and PCB motherboard troubleshooting.",
    issues: [
      "AC not cooling or slow cooling",
      "Water leakage from indoor unit",
      "Gas leak & refrigerant refill (R32 / R410A / R22)",
      "Compressor tripping or loud humming noise",
      "PCB / sensor replacement & error codes"
    ],
    features: ["Jet-pump foam deep wash", "90-day warranty on spare parts", "Multi-brand certified technicians"]
  },
  {
    id: "ac-install",
    category: "ac",
    title: "AC Installation & Uninstallation",
    tag: "Express Service",
    tagColor: "bg-kk-blue text-white",
    image: "/images/hero_banner_ac.png",
    shortDesc: "Safe, precision wall mounting, vacuum piping, electrical wiring, and relocation of split and inverter ACs.",
    issues: [
      "New split / window AC installation",
      "AC relocation & uninstallation",
      "Copper pipe extension & insulation",
      "Outdoor unit heavy bracket mounting",
      "Pre-installation site inspection"
    ],
    features: ["Precision vacuum testing", "Heavy-duty rust-free brackets", "Vibration-free silent mount"]
  },
  {
    id: "fridge-repair",
    category: "fridge",
    title: "Refrigerator & Freezer Repair",
    tag: "High Demand",
    tagColor: "bg-kk-teal text-white",
    image: "/images/appliance_fridge_1789636595538.jpg",
    shortDesc: "Expert solutions for single door, double door, frost-free, and side-by-side inverter refrigerators.",
    issues: [
      "Refrigerator not cooling or freezer over-freezing",
      "Compressor not turning on or clicking noise",
      "Gas leakage & capillary choke repair",
      "Water pooling inside vegetable tray or bottom",
      "Thermostat, timer, and bi-metal sensor faults"
    ],
    features: ["Genuine compressor & relays", "100% genuine gas recharge", "90-day cooling assurance"]
  },
  {
    id: "washing-repair",
    category: "washing",
    title: "Washing Machine Repair & Service",
    tag: "Top Rated",
    tagColor: "bg-kk-red text-white",
    image: "/images/appliance_washing_machine_1789636610541.jpg",
    shortDesc: "Comprehensive repair for front-load, top-load, and semi-automatic washing machines of all leading brands.",
    issues: [
      "Machine drum not spinning or rotating",
      "Excessive vibration, shaking, or loud noise",
      "Water draining issue or E2 / OE error code",
      "Door lock jammed or door gasket torn",
      "Motor, belt, and motherboard PCB failure"
    ],
    features: ["Original shockers & spider arms", "Genuine drain pumps & valves", "Complete descaling & drum check"]
  },
  {
    id: "microwave-repair",
    category: "microwave",
    title: "Microwave Oven Repair",
    tag: "Same Day Visit",
    tagColor: "bg-amber-500 text-white",
    image: "/images/appliance_microwave_1789636624228.jpg",
    shortDesc: "Safe and certified diagnosis for solo, grill, and convection microwaves. Magnetron and touch-panel replacement.",
    issues: [
      "Microwave runs but food doesn't heat",
      "Sparking inside heating chamber",
      "Turntable glass plate not rotating",
      "Touch keypad buttons unresponsive",
      "Blown high-voltage fuse or diode failure"
    ],
    features: ["Certified high-voltage testing", "Genuine magnetrons & diodes", "Door safety interlock checks"]
  },
  {
    id: "geyser-repair",
    category: "geyser",
    title: "Geyser & Water Heater Service",
    tag: "Instant Visit",
    tagColor: "bg-kk-teal text-white",
    image: "/images/appliance_geyser.jpg",
    shortDesc: "Specialized maintenance for instant and storage electric geysers. Heating element descaling and thermostat replacement.",
    issues: [
      "Water not heating or lukewarm temperature",
      "Electric shock or MCB tripping when switched on",
      "Water leaking from tank or safety valve",
      "Heavy scale buildup on heating coil",
      "Thermostat and thermal cutout replacement"
    ],
    features: ["Heavy-duty copper elements", "High-pressure valve testing", "Earth leakage electrical safety check"]
  }
];

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

const faqs = [
  {
    q: "How does KK Multi Services pricing work?",
    a: "We believe in 100% transparent pricing. Our certified technician diagnoses your appliance on-site and provides an upfront, honest quote before beginning any repair work. When you approve the service estimate, the inspection charge is waived! You only pay for the repair and genuine replacement parts."
  },
  {
    q: "What warranty do you provide on repairs?",
    a: "All repairs and replacement components carry up to a 90-day warranty. If any issue reoccurs within the warranty period, our technician visits and rectifies it at zero additional labor cost."
  },
  {
    q: "Do you use original brand spare parts?",
    a: "Yes, exclusively. We source original OEM spare parts directly from verified manufacturers and authorized distributors for LG, Samsung, Whirlpool, Daikin, Bosch, IFB, and other brands."
  },
  {
    q: "Can I get an emergency technician visit on weekends?",
    a: "Yes! Our technicians are on duty 7 days a week, including Saturdays, Sundays, and public holidays from 8:00 AM to 10:00 PM."
  },
  {
    q: "Do you service all areas across Pune?",
    a: "Yes, our mobile service units cover Wakad, Hinjawadi, Baner, Aundh, Kothrud, Pimple Saudagar, Pimpri-Chinchwad, Hadapsar, Viman Nagar, Kharadi, and surrounding localities."
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredServices = activeTab === "all" 
    ? servicesList 
    : servicesList.filter(s => s.category === activeTab);

  return (
    <main id="top" className="min-h-screen font-sans bg-slate-50 text-slate-900 flex flex-col">
      {/* Top Header Bar */}
      <TopBar />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Header - 16:4 Aspect Ratio */}
      <section 
        className="relative bg-kk-blue text-white w-full aspect-[16/4] min-h-[460px] md:min-h-0 flex items-center overflow-hidden border-b border-white/10"
        style={{ aspectRatio: "16 / 4" }}
      >
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-kk-teal/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 left-10 w-80 h-80 bg-kk-red/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-4 sm:py-6 md:py-6 lg:py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 sm:mb-2.5">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-kk-teal" />
            <span className="text-kk-teal">Services</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 sm:py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-white mb-2 sm:mb-2.5 backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-kk-teal" />
                <span>Multi-Brand Certified Appliance Repair</span>
              </div>

              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] font-black text-white tracking-tight leading-[1.15] mb-2 sm:mb-2.5">
                Expert Home Appliance <span className="text-transparent bg-clip-text bg-gradient-to-r from-kk-teal via-cyan-300 to-white">Repair & Maintenance</span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-3 sm:mb-4 max-w-2xl">
                Fast, certified doorstep repair solutions for all major household appliances across Pune & PCMC. 90-minute arrival promise, genuine spare parts, and a 90-day peace-of-mind warranty.
              </p>

              {/* Quick trust metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2.5 sm:pt-3 border-t border-white/10 max-w-2xl">
                <div>
                  <div className="text-lg sm:text-xl font-black text-kk-teal leading-tight">90 Mins</div>
                  <div className="text-[11px] text-slate-400 font-medium">Doorstep Response</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black text-white leading-tight">90 Days</div>
                  <div className="text-[11px] text-slate-400 font-medium">Service Warranty</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black text-cyan-300 leading-tight">5,000+</div>
                  <div className="text-[11px] text-slate-400 font-medium">Appliances Fixed</div>
                </div>
                <div>
                  <div className="text-lg sm:text-xl font-black text-white leading-tight">100%</div>
                  <div className="text-[11px] text-slate-400 font-medium">Genuine Parts</div>
                </div>
              </div>
            </div>

            {/* Right Quick Action Box */}
            <div className="hidden lg:flex lg:col-span-4 flex-col gap-3 justify-center items-end">
              <div className="bg-white/10 backdrop-blur-md border border-white/15 p-4 rounded-2xl w-full max-w-xs shadow-lg">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">Technicians On Duty</span>
                </div>
                <p className="text-xs text-slate-300 mb-3">Available 8:00 AM - 10:00 PM across all Pune & PCMC localities.</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="tel:+919876543210"
                    className="w-full py-2 px-3 rounded-xl bg-kk-teal hover:bg-kk-teal-light text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call: +91 98765 43210
                  </a>
                  <Link
                    href="/contact#book"
                    className="w-full py-2 px-3 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-white/20"
                  >
                    Book Inspection <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-[68px] md:top-[76px] z-40 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {[
              { id: "all", label: "All Services" },
              { id: "ac", label: "Air Conditioner (AC)" },
              { id: "fridge", label: "Refrigerator" },
              { id: "washing", label: "Washing Machine" },
              { id: "microwave", label: "Microwave Oven" },
              { id: "geyser", label: "Geyser & Heater" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-kk-blue text-white shadow-md shadow-kk-blue/20"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-3xl border border-slate-200/80 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:border-kk-teal/30 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col group"
            >
              {/* Image & Badge */}
              <div className="relative w-full h-56 bg-slate-50 overflow-hidden flex items-center justify-center p-6 border-b border-slate-100">
                <span className={`absolute top-4 left-4 z-10 text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-sm ${service.tagColor}`}>
                  {service.tag}
                </span>

                <div className="relative w-full h-full">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
              </div>

              {/* Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-grow">
                <div className="flex items-baseline justify-between gap-2 mb-2">
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-kk-blue transition-colors">
                    {service.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 mb-5 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Common Issues Checklist */}
                <div className="mb-6 bg-slate-50/80 rounded-2xl p-4 border border-slate-100">
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 block mb-2.5">
                    Common Problems Fixed:
                  </span>
                  <ul className="space-y-1.5">
                    {service.issues.map((issue, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-kk-teal shrink-0 mt-0.5" />
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {service.features.map((feat, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-kk-teal/5 text-kk-teal text-[11px] font-bold border border-kk-teal/15">
                      {feat}
                    </span>
                  ))}
                </div>

                {/* Guarantee & Action CTA */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-kk-teal shrink-0" />
                    <span className="text-xs font-bold text-slate-700">90-Day Warranty</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <a 
                      href="tel:+919876543210"
                      className="p-2.5 sm:p-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-kk-blue transition-colors"
                      aria-label={`Call for ${service.title}`}
                      title="Call Specialist"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                    <Link 
                      href={`/contact#book`}
                      className="px-4 py-2.5 rounded-xl bg-kk-teal hover:bg-kk-teal-light text-white text-xs font-bold transition-all shadow-md hover:shadow-lg flex items-center gap-1.5"
                    >
                      Book Now <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Multi-Brand Compatibility */}
      <section className="py-14 sm:py-16 bg-slate-50/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-kk-teal block mb-2">
            Multi-Brand Compatibility
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#0b1c3d] tracking-tight mb-8 sm:mb-10">
            Certified Repair Across All Leading Appliance Brands
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-5xl mx-auto">
            {brandLogos.map((brand) => (
              <div 
                key={brand.name}
                className="h-16 sm:h-20 w-32 sm:w-40 px-3.5 sm:px-4 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-kk-teal/50 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
                title={brand.name}
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image 
                    src={brand.src} 
                    alt={`${brand.name} Logo`} 
                    width={130} 
                    height={50} 
                    className="max-h-9 sm:max-h-11 w-auto max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300" 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Step Repair Process */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kk-teal/10 text-kk-teal text-xs font-bold mb-3 uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" /> How It Works
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b1c3d] tracking-tight">
            Our 4-Step Express Service
          </h2>
          <p className="text-sm text-slate-500 mt-3">
            Getting your appliance repaired has never been this seamless and reliable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Quick Booking",
              desc: "Select your appliance service and convenient time slot online or over phone call."
            },
            {
              step: "02",
              title: "90-Min Arrival",
              desc: "A verified local technician arrives equipped with precision diagnostic instruments."
            },
            {
              step: "03",
              title: "Genuine Repair",
              desc: "Upfront price quotation with factory-genuine replacement parts and professional fitting."
            },
            {
              step: "04",
              title: "Testing & Warranty",
              desc: "Full functional testing before payment, accompanied by a 90-day warranty card."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xl shadow-slate-900/5 relative">
              <span className="text-4xl font-black text-slate-200 block mb-4">{item.step}</span>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Emergency CTA Banner */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-gradient-to-r from-kk-blue via-kk-blue-light to-[#071329] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
          <div className="absolute top-0 right-0 w-80 h-80 bg-kk-teal/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kk-red/20 text-kk-red-light border border-kk-red/30 text-xs font-bold mb-4 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-kk-red animate-ping"></span> Urgent Breakdown
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black mb-3">
              Need Appliance Repair Right Now?
            </h3>
            <p className="text-sm sm:text-base text-slate-300">
              Speak directly with our on-duty technician for rapid doorstep dispatch in under 90 minutes.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row gap-3.5 shrink-0 w-full md:w-auto">
            <a 
              href="tel:+919876543210"
              className="px-6 py-4 rounded-xl bg-kk-red hover:bg-kk-red-light text-white font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call Hotline: +91 98765 43210
            </a>
            <a 
              href="https://wa.me/917276748645"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#1DA851] text-white font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kk-teal/10 text-kk-teal text-xs font-bold mb-3 uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" /> Services FAQ
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c3d]">
              Frequently Asked Questions About Repairs
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-5 text-left font-bold text-slate-800 flex justify-between items-center gap-4 hover:text-kk-blue transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-kk-teal shrink-0 transition-transform duration-200 ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
