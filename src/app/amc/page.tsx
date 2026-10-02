import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  Sparkles,
  FileCheck2,
  ChevronRight,
  Check,
  AlertCircle,
  Shield,
  Layers,
  Zap,
  Settings,
  Headphones,
  Calendar,
  MapPin,
  CircleDollarSign,
  ClipboardCheck,
  Ban
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AMC & CMC Maintenance Contracts in Pune | AC & Home Appliances | KK Multi Services",
  description: "Annual Maintenance Contract (AMC) & Comprehensive Maintenance Contract (CMC) Services for AC, Refrigerator, Washing Machine, Microwave, Geysers and Water Purifiers in Pune.",
  keywords: "AMC AC Pune, CMC AC Pune, Annual Maintenance Contract Pune, Comprehensive Maintenance Contract appliances Pune, AC AMC PCMC, Pune home appliance contract"
};

export default function AmcPage() {
  const amcBenefits = [
    { code: "A", title: "Peak Energy Efficiency", desc: "Maintains optimal cooling performance and airflow while reducing power draw." },
    { code: "B", title: "Scheduled Routine Servicing", desc: "Periodic tune-ups prevent unexpected breakdown emergencies during peak season." },
    { code: "C", title: "Lower Electricity Bills", desc: "Clean coils, tuned motors, and balanced pressure reduce monthly power bills." },
    { code: "D", title: "Spare Part Discounts", desc: "Exclusive member-only discounts on all genuine replacement spare parts." },
    { code: "E", title: "Customizable 1–5+ Yr Plans", desc: "Flexible contracts tailored to your exact appliance count, brand, and usage." },
  ];

  const amcIncludes = [
    { code: "1", text: "4 Scheduled Routine Services per Year (Wet & Jet Wash)" },
    { code: "2", text: "Unlimited Breakdown Attendance with ₹0 Technician Visit Fees" },
    { code: "3", text: "Refrigerant Operating Pressure & Ampere Diagnostic Checks" },
    { code: "4", text: "Thermostat, Electrical Wiring & Operating Health Inspection" }
  ];

  const amcExcludes = [
    { code: "•", text: "Refrigerant Gas Charging" },
    { code: "•", text: "Compressor Replacement" },
    { code: "•", text: "Fan Motor & Capacitor" },
    { code: "•", text: "Cooling & Condenser Coils" },
    { code: "•", text: "Electronic PCB Board" },
    { code: "•", text: "Plastic Body & Air Filter" }
  ];

  const cmcIncludes = [
    { code: "1", text: "4 Comprehensive Routine Servicing Visits per Year" },
    { code: "2", text: "Priority Breakdown Attendance with ₹0 Visiting Charge" },
    { code: "3", text: "100% Free Refrigerant Gas Charging & Leak Fixing" },
    { code: "4", text: "Compressor Replacement Covered at Zero Extra Cost" },
    { code: "5", text: "Fan Motor, Capacitor & Electrical Relay Covered" },
    { code: "6", text: "Electronic PCB Board Repair or Replacement Covered" },
    { code: "7", text: "Deep Jet Wash & Chemical Coil Servicing Included" }
  ];

  const cmcExcludes = [
    { code: "•", text: "External Voltage Stabilizer" },
    { code: "•", text: "Physical Plastic Body Damage" },
    { code: "•", text: "External Sheet Metal & Ducting" },
    { code: "•", text: "Tampered or Relocated Units" }
  ];

  const amcVsCmc = [
    {
      feature: "Routine Preventive Services",
      amc: "3 to 4 Wet/Dry Cleans / Year",
      cmc: "4 Comprehensive Services / Year"
    },
    {
      feature: "Labor & Breakdown Visit Charges",
      amc: "100% Free & Unlimited",
      cmc: "100% Free & Unlimited"
    },
    {
      feature: "Minor Electrical Parts (Capacitor/Relay)",
      amc: "Charged at discounted rates",
      cmc: "100% Included & Free"
    },
    {
      feature: "Refrigerant Gas Charging (AC/Fridge)",
      amc: "Discounted spare rates",
      cmc: "100% Covered at No Cost"
    },
    {
      feature: "Compressor Replacement Coverage",
      amc: "Labor free (part charged)",
      cmc: "Full Part & Labor Covered"
    },
    {
      feature: "Emergency Response Priority",
      amc: "Guaranteed within 4–6 Hours",
      cmc: "VIP Priority: within 2–4 Hours"
    },
    {
      feature: "Ideal For",
      amc: "Appliances under 4 years old",
      cmc: "Appliances 3+ years old & heavy usage"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-kk-teal selection:text-white">
      <TopBar />
      <Navbar />

      {/* Main Header / Hero Section - Fully Responsive for Mobile & Laptops */}
      <section className="relative bg-[#07132b] text-white w-full min-h-[460px] md:min-h-[400px] lg:min-h-[380px] xl:min-h-[420px] py-8 sm:py-10 md:py-8 lg:py-10 flex items-center overflow-hidden border-b border-white/10">
        {/* Background Image (Clean visual without baked-in text) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/amc_cmc/hero_02.png"
            alt="AMC & CMC Services in Pune - KK Multi Services"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right md:object-center"
          />
          {/* Subtle text contrast gradient on the left half */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#030a18]/95 via-[#030a18]/85 md:via-[#030a18]/70 lg:via-[#030a18]/60 to-transparent pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 flex items-center justify-between">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Breadcrumb inside Hero Section */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-kk-teal shrink-0" />
              <span className="text-kk-teal">AMC / CMC Services</span>
            </div>

            {/* Top Location Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[10px] sm:text-xs font-bold text-white mb-2.5 backdrop-blur-md shadow-sm max-w-full">
              <MapPin className="w-3.5 h-3.5 text-kk-teal shrink-0" />
              <span className="truncate sm:overflow-visible sm:whitespace-normal">Pune, Maharashtra, India — Customers from Pune ONLY</span>
            </div>

            {/* Headline matching image */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[36px] font-black text-white tracking-tight leading-[1.2] mb-3.5 sm:mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              <span className="text-kk-teal">AMC</span> (Annual Maintenance Contract) / <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-kk-teal via-cyan-300 to-white">
                CMC (Comprehensive Maintenance Contract)
              </span> Services
            </h1>

            {/* 4 Feature Pills matching image */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 sm:mb-5 max-w-xl">
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md shadow-sm">
                <div className="w-5 h-5 rounded-full bg-kk-teal/30 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3 h-3 text-cyan-300" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-white leading-tight">Expert Technicians</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md shadow-sm">
                <div className="w-5 h-5 rounded-full bg-kk-teal/30 flex items-center justify-center shrink-0">
                  <Settings className="w-3 h-3 text-cyan-300" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-white leading-tight">Genuine Spare Parts</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md shadow-sm">
                <div className="w-5 h-5 rounded-full bg-kk-teal/30 flex items-center justify-center shrink-0">
                  <Zap className="w-3 h-3 text-cyan-300" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-white leading-tight">Quick Response</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md shadow-sm">
                <div className="w-5 h-5 rounded-full bg-kk-teal/30 flex items-center justify-center shrink-0">
                  <Headphones className="w-3 h-3 text-cyan-300" />
                </div>
                <span className="text-[10px] sm:text-[11px] font-bold text-white leading-tight">Pune Based Support</span>
              </div>
            </div>

            {/* 2 CTA Buttons matching image */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <Link
                href="/enquire"
                className="bg-gradient-to-r from-kk-teal to-cyan-400 hover:from-kk-teal-light hover:to-cyan-300 text-slate-950 px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl font-black text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(0,169,157,0.5)] hover:shadow-[0_0_28px_rgba(0,169,157,0.8)] hover:-translate-y-0.5 flex items-center justify-center gap-2 active:scale-95 text-center"
              >
                <Calendar className="w-4 h-4 text-slate-950 shrink-0" />
                <span>Click Here for Online Service Booking</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
              <a
                href="tel:+917823038645"
                className="bg-black/40 hover:bg-black/60 text-white border border-white/20 hover:border-kk-teal/50 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 backdrop-blur-md active:scale-95 text-center"
              >
                <Phone className="w-4 h-4 text-cyan-300 shrink-0" />
                <span>Call Hotline</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Quick Action Buttons (visible on small mobile screens for easy touch) */}
      <div className="sm:hidden bg-[#07132b] px-4 py-3 border-b border-white/10 flex items-center gap-2">
        <Link
          href="/enquire"
          className="flex-1 py-2.5 px-3 rounded-xl bg-kk-teal text-white text-xs font-bold text-center shadow-md active:scale-95 flex items-center justify-center gap-1.5"
        >
          <span>Book AMC / CMC Online</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <a
          href="tel:+917823038645"
          className="py-2.5 px-3 rounded-xl bg-white/10 text-white text-xs font-bold border border-white/20 active:scale-95 flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-kk-teal" />
          <span>Call Hotline</span>
        </a>
      </div>

      {/* SECTION 1: AMC (Annual Maintenance Contract) Services */}
      <section id="amc-services" className="relative py-12 sm:py-16 md:py-20 w-full overflow-hidden border-b border-slate-200">
        {/* Background Image: AMC_BG_01.png with soft blue waves and AC unit */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/amc_cmc/AMC_BG_02.png"
            alt="AMC Background Air Conditioner"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top md:object-center"
          />
        </div>

        {/* Content Container - Utilizing Complete Page Space */}
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 flex flex-col gap-6 sm:gap-7">
          {/* Top Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-slate-800 text-[11px] sm:text-xs font-black uppercase tracking-wider mb-2.5 border border-sky-200 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span>STANDARD PREVENTIVE CARE &nbsp;•&nbsp; 1 TO 5+ YEARS TENURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0a1e42] tracking-tight">
              AMC (Annual Maintenance Contract) <span className="text-[#0284c7]">Services</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2 max-w-2xl mx-auto">
              Regular maintenance, comprehensive checkups, deep cleaning, and priority breakdown attendance to ensure optimal appliance performance across Pune.
            </p>
          </div>

          {/* Top Row: Visual Card (Left) & Service Overview + Key Benefits (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7 items-stretch">
            {/* Left Column: Visual Image with Floating Badges and Bottom Bar */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="bg-white/90 p-2 sm:p-2.5 rounded-3xl border border-white/80 shadow-md relative overflow-hidden h-full flex flex-col justify-between group">
                <div className="relative aspect-[4/3] sm:aspect-[4/3.2] lg:aspect-auto lg:h-full min-h-[300px] sm:min-h-[360px] rounded-2xl overflow-hidden shadow-inner bg-slate-100">
                  <Image
                    src="/images/amc_cmc/amc_section_img.png"
                    alt="Professional technician inspecting and servicing air conditioner"
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  {/* Bottom shadow for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Top-Left Floating Badge */}
                  <div className="absolute top-3.5 left-3.5 bg-[#0f4350]/90 backdrop-blur-md text-white rounded-xl p-2 sm:p-2.5 border border-teal-400/30 flex items-center gap-2 shadow-lg">
                    <div className="w-7 h-7 rounded-lg bg-teal-500/20 border border-teal-400/40 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-cyan-300" />
                    </div>
                    <div>
                      <p className="text-[11px] sm:text-xs font-black leading-tight">Professional</p>
                      <p className="text-[10px] sm:text-[11px] font-bold text-teal-100 leading-tight">AC Technicians</p>
                      <p className="text-[9px] text-teal-200/80 leading-tight">Trained &amp; Verified</p>
                    </div>
                  </div>

                  {/* Bottom-Right Floating Badge (Above Bottom Bar) */}
                  <div className="absolute bottom-16 right-3.5 bg-[#00897b]/90 backdrop-blur-md text-white rounded-xl p-2 sm:p-2.5 border border-teal-300/30 flex items-center gap-2 shadow-lg">
                    <div className="w-6 h-6 rounded-md bg-white/20 flex items-center justify-center shrink-0">
                      <Shield className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <p className="text-[11px] font-black leading-tight">Preventive Care</p>
                      <p className="text-[9px] text-teal-100 leading-tight">Better Cooling, Longer Life</p>
                    </div>
                  </div>

                  {/* Bottom Bar Across Image */}
                  <div className="absolute bottom-0 inset-x-0 bg-[#071d49]/95 backdrop-blur-md text-white px-3 sm:px-4 py-2.5 border-t border-white/10 flex items-center justify-between text-center">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Settings className="w-4 h-4 text-cyan-300 shrink-0" />
                      <div className="text-left">
                        <span className="block text-[11px] sm:text-xs font-black text-white leading-tight">4 Routine</span>
                        <span className="block text-[9px] sm:text-[10px] text-slate-300 leading-tight">Services / Year</span>
                      </div>
                    </div>
                    <div className="h-6 w-px bg-white/15" />
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Headphones className="w-4 h-4 text-cyan-300 shrink-0" />
                      <div className="text-left">
                        <span className="block text-[11px] sm:text-xs font-black text-white leading-tight">₹0</span>
                        <span className="block text-[9px] sm:text-[10px] text-slate-300 leading-tight">Breakdown Visit Fee</span>
                      </div>
                    </div>
                    <div className="h-6 w-px bg-white/15" />
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Calendar className="w-4 h-4 text-cyan-300 shrink-0" />
                      <div className="text-left">
                        <span className="block text-[11px] sm:text-xs font-black text-white leading-tight">1-5+ Years</span>
                        <span className="block text-[9px] sm:text-[10px] text-slate-300 leading-tight">Flexible Tenure</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Service Overview + Key Benefits Card */}
            <div className="lg:col-span-7 bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-6 lg:p-7 border border-slate-200/80 shadow-md flex flex-col justify-between">
              <div>
                {/* Service Overview Header */}
                <div className="flex items-center gap-1.5 text-[#0284c7] font-extrabold text-xs uppercase tracking-wider mb-1.5">
                  <Settings className="w-3.5 h-3.5" />
                  <span>SERVICE OVERVIEW</span>
                </div>
                <h3 className="text-base sm:text-lg lg:text-xl font-black text-[#0a1e42] mb-2 leading-snug">
                  What is an Annual Maintenance Contract (AMC)?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3.5">
                  An Annual Maintenance Contract (AMC) is a preventive service plan for your air conditioners and home appliances. It provides regular scheduled maintenance, deep wet-jet cleaning, and priority breakdown attendance with <strong>₹0 technician visit charges</strong> across Pune. Contract tenures are customizable from <strong>1 to 5+ years</strong>.
                </p>

                {/* 4 Green Highlight Pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>4 Routine Services / Year</span>
                  </span>
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>₹0 Breakdown Visit Fee</span>
                  </span>
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Deep Jet Wash Servicing</span>
                  </span>
                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 shadow-2xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>1-5+ Year Flexible Tenure</span>
                  </span>
                </div>

                {/* Key Benefits Header */}
                <div className="flex items-center gap-1.5 text-[#0a1e42] font-extrabold text-xs uppercase tracking-wider mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                  <span>KEY BENEFITS OF OUR AMC PLAN</span>
                </div>

                {/* 4 Benefits Cards (2x2 Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {/* Card 1 */}
                  <div className="p-3 rounded-2xl bg-white border border-slate-200/70 shadow-2xs flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Zap className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">Peak Energy Efficiency</p>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                        Maintains optimal cooling performance and airflow while reducing power draw.
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="p-3 rounded-2xl bg-white border border-slate-200/70 shadow-2xs flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Calendar className="w-4 h-4 text-sky-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">Scheduled Routine Servicing</p>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                        Periodic tune-ups prevent unexpected breakdown and extends appliance life.
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="p-3 rounded-2xl bg-white border border-slate-200/70 shadow-2xs flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
                      <CircleDollarSign className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">Lower Electricity Bills</p>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                        Clean coils, tuned motors, and balanced pressure reduce monthly power bills.
                      </p>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="p-3 rounded-2xl bg-white border border-slate-200/70 shadow-2xs flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Settings className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 leading-tight">Spare Part Discounts</p>
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                        Exclusive member-only discounts on all genuine replacement spare parts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Grid: Scope of Inclusions & Extra Charges Exclude */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 items-stretch">
            {/* Scope of Inclusions Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-emerald-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-emerald-100">
                  <div className="flex items-center gap-2 text-emerald-800 font-black text-xs sm:text-sm tracking-wide uppercase">
                    <ClipboardCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>SCOPE OF INCLUSIONS</span>
                  </div>
                  <span className="bg-emerald-100 text-emerald-900 text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    AMC 1-Year Coverage Scope
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-800">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>4 Scheduled Routine Services per Year (Wet &amp; Jet Wash)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Thermostat, Electrical Wiring &amp; Operating Health Inspection</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Unlimited Breakdown Attendance with ₹0 Technician Visit Fees</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Clean Filters, Drain Line, Blower &amp; Coils</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Refrigerant Operating Pressure &amp; Ampere Diagnostic Checks</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Detailed Service Report after Each Visit</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Extra Charges Exclude Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-5 border border-rose-200/80 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3 pb-2.5 border-b border-rose-100">
                  <div className="flex items-center gap-2 text-rose-800 font-black text-xs sm:text-sm tracking-wide uppercase">
                    <Ban className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>EXTRA CHARGES EXCLUDE</span>
                  </div>
                  <span className="bg-rose-100 text-rose-900 text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full">
                    Billed at discounted member rates
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-800">
                  <div className="bg-white px-3 py-2 rounded-xl border border-rose-100 flex items-center gap-2 shadow-2xs">
                    <span className="w-3.5 h-3.5 rounded bg-rose-100 text-rose-600 font-black flex items-center justify-center shrink-0 text-[10px]">✕</span>
                    <span className="truncate">Refrigerant Gas Charging</span>
                  </div>
                  <div className="bg-white px-3 py-2 rounded-xl border border-rose-100 flex items-center gap-2 shadow-2xs">
                    <span className="w-3.5 h-3.5 rounded bg-rose-100 text-rose-600 font-black flex items-center justify-center shrink-0 text-[10px]">✕</span>
                    <span className="truncate">Compressor Replacement</span>
                  </div>
                  <div className="bg-white px-3 py-2 rounded-xl border border-rose-100 flex items-center gap-2 shadow-2xs">
                    <span className="w-3.5 h-3.5 rounded bg-rose-100 text-rose-600 font-black flex items-center justify-center shrink-0 text-[10px]">✕</span>
                    <span className="truncate">Fan Motor &amp; Capacitor Replacement</span>
                  </div>
                  <div className="bg-white px-3 py-2 rounded-xl border border-rose-100 flex items-center gap-2 shadow-2xs">
                    <span className="w-3.5 h-3.5 rounded bg-rose-100 text-rose-600 font-black flex items-center justify-center shrink-0 text-[10px]">✕</span>
                    <span className="truncate">Cooling &amp; Condenser Coil Replacement</span>
                  </div>
                  <div className="bg-white px-3 py-2 rounded-xl border border-rose-100 flex items-center gap-2 shadow-2xs">
                    <span className="w-3.5 h-3.5 rounded bg-rose-100 text-rose-600 font-black flex items-center justify-center shrink-0 text-[10px]">✕</span>
                    <span className="truncate">Electronic PCB Board Repair</span>
                  </div>
                  <div className="bg-white px-3 py-2 rounded-xl border border-rose-100 flex items-center gap-2 shadow-2xs">
                    <span className="w-3.5 h-3.5 rounded bg-rose-100 text-rose-600 font-black flex items-center justify-center shrink-0 text-[10px]">✕</span>
                    <span className="truncate">Plastic Body &amp; Air Vanes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Navy Bar */}
          <div className="bg-[#071d49] text-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-4.5 px-4 sm:px-6 flex flex-col xl:flex-row items-center justify-between gap-4 shadow-xl border border-white/10">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/15 hidden sm:flex items-center justify-center shrink-0 text-cyan-300">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm md:text-base font-black tracking-tight">
                  Keep Your AC Running Like New — All Year Round!
                </p>
                <p className="text-[11px] sm:text-xs text-slate-300">
                  Reliable service, expert technicians, and priority support across Pune.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 shrink-0">
              <Link
                href="/enquire"
                className="bg-white hover:bg-slate-100 text-[#071d49] font-black px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 active:scale-95 text-center"
              >
                <Calendar className="w-4 h-4 text-[#071d49] shrink-0" />
                <span>Book AMC Service Online</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#071d49] shrink-0" />
              </Link>
              <a
                href="tel:+917823038645"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-3.5 sm:px-4 py-2.5 rounded-xl text-xs sm:text-sm transition-all flex items-center gap-2 active:scale-95 text-center"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
                <span>Call Helpline: +91 78230 38645</span>
              </a>
              <div className="hidden 2xl:flex items-center gap-3 text-[11px] font-semibold text-slate-300 pl-2 border-l border-white/20">
                <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-cyan-300" /> Trusted Technicians</span>
                <span className="flex items-center gap-1"><Sparkles className="w-3.5 h-3.5 text-cyan-300" /> Quick Response</span>
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-300" /> Service Across Pune</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: CMC (Comprehensive Maintenance Contract) Services */}
      <section id="cmc-services" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-slate-50 via-teal-50/20 to-white border-b border-slate-200/90 relative overflow-hidden">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* CMC Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-kk-teal/15 text-kk-teal-dark text-xs font-black uppercase tracking-wider mb-2 border border-kk-teal/20 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-kk-teal" />
              <span>★ Best Complete Care • All-Inclusive Protection</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-kk-blue tracking-tight">
              CMC (Comprehensive Maintenance Contract) Services
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2 max-w-2xl mx-auto">
              Total peace-of-mind coverage including free parts replacement, compressor coverage, refrigerant gas charging, and routine servicing.
            </p>
          </div>

          {/* CMC Two-Column Detailed Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* CMC Left (on desktop): In-depth Explanations, Inclusions, Exclusions & CTA */}
            <div className="lg:col-span-7 flex flex-col gap-4 order-2 lg:order-1">
              {/* Overview Explanation */}
              <div className="p-4 sm:p-5 rounded-2xl bg-teal-50/60 border border-teal-200/80 shadow-2xs">
                <div className="flex items-center gap-2 text-kk-teal mb-1.5">
                  <Shield className="w-4 h-4" />
                  <span className="text-[11px] font-black uppercase tracking-wider">All-Inclusive Coverage</span>
                </div>
                <h3 className="text-sm sm:text-base font-black text-kk-blue mb-2">
                  What is a Comprehensive Maintenance Contract (CMC)?
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium mb-3">
                  A <strong>Comprehensive Maintenance Contract (CMC)</strong> provides 360-degree protection. It covers <strong>both service labor and 100% free spare parts replacement</strong> — including compressor, electric parts, PCB board, fan motor, and refrigerant gas charging, along with 4 routine scheduled services.
                </p>

                {/* Scope Highlight Tags */}
                <div className="flex flex-wrap gap-2 text-[11px] font-bold text-slate-800">
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-teal-200 flex items-center gap-1.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 text-kk-teal" /> 100% Free Parts Replacement
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-teal-200 flex items-center gap-1.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 text-kk-teal" /> Compressor &amp; Motor Covered
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-teal-200 flex items-center gap-1.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 text-kk-teal" /> Free Refrigerant Gas Refills
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white border border-teal-200 flex items-center gap-1.5 shadow-2xs">
                    <Check className="w-3.5 h-3.5 text-kk-teal" /> 2–4 Hr Priority Response SLA
                  </span>
                </div>
              </div>

              {/* CMC Contract Includes Full Coverage */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-teal-50/90 to-emerald-50/70 border border-teal-200 shadow-2xs">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-teal-900 text-[11px] sm:text-xs font-black uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-kk-teal" />
                    <span>Comprehensive Parts &amp; Labor Coverage</span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-kk-teal text-white">
                    100% Free Replacements
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-black text-teal-950 mb-2 leading-snug">
                  Comprehensive CMC Inclusions (Zero Cost for Repairs or Gas):
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {cmcIncludes.map((inc) => (
                    <div
                      key={inc.code}
                      className="flex items-center gap-2 p-2 rounded-xl bg-white/90 border border-teal-100 text-xs text-teal-950 font-bold shadow-2xs"
                    >
                      <span className="w-4 h-4 rounded-full bg-kk-teal text-white text-[10px] font-black flex items-center justify-center shrink-0">
                        ✓
                      </span>
                      <span>{inc.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CMC Extra Charges Excludes */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-rose-50/60 border border-rose-200 shadow-2xs">
                <h5 className="text-xs sm:text-sm font-extrabold text-rose-950 mb-1 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Extra Charges Exclude :</span>
                </h5>
                <p className="text-[11px] text-rose-700 mb-2 font-medium">External non-standard accessories and physical body damage:</p>
                <div className="grid grid-cols-2 gap-1.5 text-[11px] font-semibold text-rose-900">
                  {cmcExcludes.map((exc, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 bg-white/70 px-2 py-1 rounded-lg border border-rose-100">
                      <span className="w-3.5 h-3.5 rounded bg-rose-100 text-rose-700 font-bold flex items-center justify-center shrink-0 text-[9px]">
                        ✕
                      </span>
                      <span className="truncate">{exc.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CMC Actions */}
              <div className="flex flex-col sm:flex-row items-center gap-3 pt-1">
                <Link
                  href="/enquire"
                  className="w-full sm:w-auto flex-1 py-2.5 sm:py-3 px-5 rounded-xl font-bold text-xs sm:text-sm bg-kk-teal hover:bg-kk-teal-light text-white transition-all flex items-center justify-center gap-2 shadow-md shadow-kk-teal/20 hover:shadow-kk-teal/40 active:scale-98 text-center"
                >
                  <span>Book CMC Service Online</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+917823038645"
                  className="w-full sm:w-auto py-2.5 sm:py-3 px-5 rounded-xl font-bold text-xs sm:text-sm bg-white hover:bg-slate-100 text-slate-800 border border-teal-200 transition-all flex items-center justify-center gap-2 active:scale-98 text-center shadow-xs"
                >
                  <Phone className="w-4 h-4 text-kk-teal" />
                  <span>Call CMC Hotline: +91 78230 38645</span>
                </a>
              </div>
            </div>

            {/* CMC Right (on desktop): Visual & Key Metric Cards */}
            <div className="lg:col-span-5 flex flex-col gap-4 order-1 lg:order-2">
              <div className="bg-white p-2.5 sm:p-3 rounded-3xl border-2 border-kk-teal/30 shadow-2xl shadow-kk-teal/10 relative overflow-hidden group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-inner bg-slate-900">
                  <Image
                    src="/images/amc_cmc/cmc_section_img.png"
                    alt="Skilled HVAC technician repairing AC compressor, electrical motor, and testing refrigerant gas under Comprehensive Maintenance Contract (CMC)"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-bold bg-slate-900/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-kk-teal/30">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-kk-teal" />
                      <span>Compressor &amp; Parts Covered</span>
                    </span>
                    <span className="text-cyan-300 font-black">All-Inclusive</span>
                  </div>
                </div>
              </div>

              {/* Quick Benefits Pill Grid */}
              <div className="grid grid-cols-3 gap-2.5 text-center">
                <div className="p-3 rounded-2xl bg-white border border-teal-200/80 shadow-xs">
                  <span className="block text-kk-teal font-black text-sm sm:text-base">100% Free</span>
                  <span className="text-[11px] text-slate-500 font-semibold leading-tight block">Gas Charging</span>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-teal-200/80 shadow-xs">
                  <span className="block text-slate-900 font-black text-sm sm:text-base">Covered</span>
                  <span className="text-[11px] text-slate-500 font-semibold leading-tight block">Compressor &amp; PCB</span>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-teal-200/80 shadow-xs">
                  <span className="block text-kk-teal-dark font-black text-sm sm:text-base">2–4 Hrs</span>
                  <span className="text-[11px] text-slate-500 font-semibold leading-tight block">Priority Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding AMC vs. CMC Comparison Table Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-22 bg-slate-100/70 border-t border-slate-200">
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-kk-teal block mb-1">
              Clear &amp; Honest Feature Matrix
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-kk-blue tracking-tight mb-2 sm:mb-3">
              Understanding AMC vs. CMC
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-slate-600">
              Choose the maintenance tier that fits your appliance age and budget. We believe in complete clarity without hidden fine print.
            </p>
          </div>

          {/* Swipe indicator for mobile screens */}
          <div className="sm:hidden text-center text-[11px] text-slate-500 font-semibold mb-2.5 flex items-center justify-center gap-1.5">
            <span>👉 Swipe horizontally to view full comparison</span>
          </div>

          {/* Comparison Table Container */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[580px] sm:min-w-[640px]">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-3.5 sm:p-5 lg:p-6 text-xs sm:text-sm font-black uppercase tracking-wider w-1/3">
                      Scope &amp; Features
                    </th>
                    <th className="p-3.5 sm:p-5 lg:p-6 text-xs sm:text-sm font-black uppercase tracking-wider w-1/3 bg-slate-800 border-x border-slate-700">
                      <span className="block text-slate-400 text-[10px] sm:text-xs font-semibold lowercase mb-0.5">Basic Preventive</span>
                      AMC (Annual Contract)
                    </th>
                    <th className="p-3.5 sm:p-5 lg:p-6 text-xs sm:text-sm font-black uppercase tracking-wider w-1/3 bg-kk-teal relative">
                      <span className="block text-teal-100 text-[10px] sm:text-xs font-semibold lowercase mb-0.5">All-Inclusive</span>
                      CMC (Comprehensive Contract)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {amcVsCmc.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                      <td className="p-3.5 sm:p-5 lg:p-6 font-bold text-slate-900">
                        {row.feature}
                      </td>
                      <td className="p-3.5 sm:p-5 lg:p-6 text-slate-600 border-x border-slate-100 font-medium">
                        {row.amc}
                      </td>
                      <td className="p-3.5 sm:p-5 lg:p-6 font-bold text-kk-teal-dark bg-kk-teal/5">
                        {row.cmc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Online Booking CTA Banner */}
      <section className="bg-gradient-to-r from-kk-dark via-kk-blue to-kk-dark text-white py-10 sm:py-14 md:py-16 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="w-full max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-kk-teal text-xs font-bold uppercase tracking-wider mb-2 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-kk-teal" />
              <span>Doorstep Booking in Pune</span>
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight">
              Ready to Book AMC / CMC Maintenance Service in Pune?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Contact our team today for doorstep service across all targeted Pune &amp; PCMC locations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 shrink-0 w-full md:w-auto">
            <Link
              href="/enquire"
              className="bg-kk-teal hover:bg-kk-teal-light text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-lg shadow-kk-teal/30 transition-all hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 text-center"
            >
              <span>Click Here Now for Online Booking</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
            <a
              href="tel:+917823038645"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 backdrop-blur-sm active:scale-95 text-center"
            >
              <Phone className="w-4 h-4 text-kk-teal shrink-0" />
              <span>+91 78230 38645</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
