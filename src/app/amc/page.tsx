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
  MapPin
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
    { code: "a", title: "Efficient performance", desc: "Keeps your appliances operating at peak thermal and electrical efficiency year-round." },
    { code: "b", title: "Regular and reliable service", desc: "Scheduled routine servicing visits so you never face sudden breakdown emergencies." },
    { code: "c", title: "Have an positive effect in the bills", desc: "Well-maintained coils and motors reduce power consumption and save on electricity bills." },
    { code: "d", title: "Discounts & Offers for fresher + regular customers", desc: "Special pricing advantages and priority concessions for new and long-term clients." },
    { code: "e", title: "Customize the AMC as per your need", desc: "Flexible contracts tailored to your exact appliance count, brand, and usage volume." },
  ];

  const amcIncludes = [
    { code: "a", text: "Four routine services" },
    { code: "b", text: "Immediate attendance of breakdown, if any" }
  ];

  const amcExcludes = [
    { code: "a", text: "Plastic Items" },
    { code: "b", text: "Air filter" },
    { code: "c", text: "Refrigerant gas charging" },
    { code: "d", text: "Remote Control" },
    { code: "e", text: "Compressor" },
    { code: "f", text: "Condenser & Evaporator Coils" },
    { code: "g", text: "Fan Motor" },
    { code: "h", text: "Magnetic Switch" },
    { code: "i", text: "Circuit breaker" },
    { code: "j", text: "PCB" },
    { code: "k", text: "Transformer" }
  ];

  const cmcIncludes = [
    { code: "a", text: "Four routine services" },
    { code: "b", text: "Immediate attendance of breakdown, if any" },
    { code: "c", text: "Refrigerant gas charging, if necessary" },
    { code: "d", text: "Compressor" },
    { code: "e", text: "Fan Motor" },
    { code: "f", text: "PCB" },
    { code: "g", text: "Condenser & Evaporator Coils" }
  ];

  const cmcExcludes = [
    { code: "a", text: "Plastic Items" },
    { code: "b", text: "Air filter" },
    { code: "c", text: "Voltage Stabilizers & Scanners" },
    { code: "d", text: "Circuit breaker" }
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

      {/* Main Header / Hero Section - 16:4 Aspect Ratio with Content from Image */}
      <section
        className="relative bg-[#07132b] text-white w-full aspect-[16/4] min-h-[460px] md:min-h-0 flex items-center overflow-hidden border-b border-white/10"
        style={{ aspectRatio: "16 / 4" }}
      >
        {/* Background Image (Clean visual without baked-in text) */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/amc_cmc/hero_02.png"
            alt="AMC & CMC Services in Pune - KK Multi Services"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Subtle text contrast gradient on the left half */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[62%] lg:w-[50%] bg-gradient-to-r from-[#030a18]/92 via-[#030a18]/65 to-transparent pointer-events-none" />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10 w-full py-4 sm:py-6 md:py-6 lg:py-8 flex items-center justify-between">
          <div className="max-w-2xl">
            {/* Breadcrumb inside Hero Section */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-kk-teal" />
              <span className="text-kk-teal">AMC / CMC Services</span>
            </div>

            {/* Top Location Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] sm:text-xs font-bold text-white mb-2 backdrop-blur-md shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-kk-teal" />
              <span>Pune, Maharashtra, India — Customers from Pune ONLY</span>
            </div>

            {/* Headline matching image */}
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-[30px] xl:text-[34px] font-black text-white tracking-tight leading-[1.18] mb-4 sm:mb-5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
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
                <span className="text-[11px] font-bold text-white whitespace-nowrap">Expert Technicians</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md shadow-sm">
                <div className="w-5 h-5 rounded-full bg-kk-teal/30 flex items-center justify-center shrink-0">
                  <Settings className="w-3 h-3 text-cyan-300" />
                </div>
                <span className="text-[11px] font-bold text-white whitespace-nowrap">Genuine Spare Parts</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md shadow-sm">
                <div className="w-5 h-5 rounded-full bg-kk-teal/30 flex items-center justify-center shrink-0">
                  <Zap className="w-3 h-3 text-cyan-300" />
                </div>
                <span className="text-[11px] font-bold text-white whitespace-nowrap">Quick Response</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-md shadow-sm">
                <div className="w-5 h-5 rounded-full bg-kk-teal/30 flex items-center justify-center shrink-0">
                  <Headphones className="w-3 h-3 text-cyan-300" />
                </div>
                <span className="text-[11px] font-bold text-white whitespace-nowrap">Pune Based Support</span>
              </div>
            </div>

            {/* 2 CTA Buttons matching image */}
            <div className="flex flex-wrap items-center gap-3">
              <Link 
                href="/contact#book" 
                className="bg-gradient-to-r from-kk-teal to-cyan-400 hover:from-kk-teal-light hover:to-cyan-300 text-slate-950 px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl font-black text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(0,169,157,0.5)] hover:shadow-[0_0_28px_rgba(0,169,157,0.8)] hover:-translate-y-0.5 flex items-center gap-2 active:scale-95"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Click Here for Online Service Booking</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a 
                href="tel:+919876543210" 
                className="bg-black/40 hover:bg-black/60 text-white border border-white/20 hover:border-kk-teal/50 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 backdrop-blur-md active:scale-95"
              >
                <Phone className="w-4 h-4 text-cyan-300" />
                <span>Call Hotline</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Quick Action Buttons (visible on small mobile screens for easy touch) */}
      <div className="sm:hidden bg-[#07132b] px-4 py-3 border-b border-white/10 flex items-center gap-2">
        <Link
          href="/contact#book"
          className="flex-1 py-2.5 px-3 rounded-xl bg-kk-teal text-white text-xs font-bold text-center shadow-md active:scale-95 flex items-center justify-center gap-1.5"
        >
          <span>Book AMC / CMC Online</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
        <a
          href="tel:+919876543210"
          className="py-2.5 px-3 rounded-xl bg-white/10 text-white text-xs font-bold border border-white/20 active:scale-95 flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-kk-teal" />
          <span>Call Hotline</span>
        </a>
      </div>

      {/* AMC & CMC Core Details Cards */}
      <section className="py-14 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-kk-teal block mb-1">
            Doorstep Appliance Protection
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#0b1c3d] tracking-tight">
            Compare Our Contract Tiers
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Detailed breakdown of inclusions, exclusions, and maintenance scope for Pune households.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">

          {/* AMC Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative group">
            {/* Top Slate Accent Line */}
            <div className="h-2 w-full bg-slate-800" />

            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-extrabold uppercase tracking-wider">
                  <FileCheck2 className="w-3.5 h-3.5 text-kk-teal" />
                  <span>Standard Coverage</span>
                </span>
                <span className="text-xs font-semibold text-slate-400">1 to 5+ Years Tenure</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#0b1c3d] mb-3">
                AMC (Annual Maintenance Contract)
              </h3>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-6">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  AMC refers to Annual Maintenance Contract. In this, client can avail services like changing of fan or compressor or remote, replacing condenser coils, problem in the thermostat, etc. to the guarantee period written in AC AMC contract. It includes all sorts of minor replacements, cleaning, changing. The period of AMC can vary among one year to five or more years. The AMC format can vary from brand to brand, location to location, etc. This service is like a regular routine check up to a certain guarantee period. The AMC can be for: repairs, wet AC repairs, deep cleaning, piping related services, etc.
                </p>
              </div>

              {/* Benefits of having AMC */}
              <div className="mb-7">
                <h4 className="text-sm font-black text-[#0b1c3d] uppercase tracking-wide mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-kk-teal" />
                  <span>Benefits of having AMC :</span>
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {amcBenefits.map((b) => (
                    <div
                      key={b.code}
                      className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100 hover:border-slate-300 transition-colors shadow-2xs"
                    >
                      <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-800 font-extrabold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {b.code}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-slate-900">{b.title}</p>
                        <p className="text-xs text-slate-500 mt-0.5 leading-snug">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AMC Contract Includes */}
              <div className="mb-6 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/60 shadow-2xs">
                <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Routine Maintenance Scope</span>
                </div>
                <h5 className="text-xs sm:text-sm font-extrabold text-emerald-950 mb-3 leading-snug">
                  AMC contract include one year and four time services &amp; complaint. Non Comprehensive AMC Includes :
                </h5>
                <ul className="space-y-2">
                  {amcIncludes.map((inc) => (
                    <li key={inc.code} className="flex items-start gap-2.5 text-xs sm:text-sm text-emerald-900 font-semibold">
                      <span className="w-5 h-5 rounded-full bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span><strong>{inc.code})</strong> {inc.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AMC Extra Charges Excludes */}
              <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200/60 shadow-2xs">
                <h5 className="text-xs sm:text-sm font-extrabold text-rose-950 mb-3 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Extra Charges Excludes :</span>
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-rose-900">
                  {amcExcludes.map((exc) => (
                    <div key={exc.code} className="flex items-center gap-2 bg-white/70 px-2.5 py-1.5 rounded-lg border border-rose-100">
                      <span className="w-4 h-4 rounded bg-rose-100 text-rose-700 font-bold flex items-center justify-center shrink-0 text-[10px]">
                        {exc.code}
                      </span>
                      <span className="truncate">{exc.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <Link
                href="/contact#book"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-slate-900 hover:bg-kk-teal text-white transition-all flex items-center justify-center gap-2 shadow-sm active:scale-98"
              >
                <span>Book AMC Service Online</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* CMC Card - Premium Highlighted */}
          <div className="bg-white rounded-3xl border-2 border-kk-teal/30 shadow-lg shadow-kk-teal/5 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative group">
            {/* Top Teal Gradient Accent Line */}
            <div className="h-2 w-full bg-gradient-to-r from-kk-teal via-cyan-400 to-teal-500" />

            <div className="p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kk-teal/15 text-kk-teal-dark text-xs font-black uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 text-kk-teal" />
                  <span>All-Inclusive Protection</span>
                </span>
                <span className="text-xs font-bold text-kk-teal uppercase tracking-wider">★ Best Complete Care</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#0b1c3d] mb-3">
                CMC (Comprehensive Maintenance Contract)
              </h3>

              <div className="p-4 rounded-2xl bg-teal-50/50 border border-teal-100 mb-6">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  CMC refers to Comprehensive Maintenance Contract. CMC contract include one year warranty for air-conditions, electric parts, gas charging &amp; compressor with four times service &amp; complaint.
                </p>
              </div>

              {/* CMC Contract Includes */}
              <div className="mb-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-teal-50/80 to-emerald-50/60 border border-teal-200 shadow-2xs">
                <div className="flex items-center gap-1.5 text-teal-900 text-xs font-extrabold uppercase tracking-wider mb-1.5">
                  <ShieldCheck className="w-4 h-4 text-kk-teal" />
                  <span>Comprehensive Parts &amp; Labor Coverage</span>
                </div>
                <h5 className="text-xs sm:text-sm font-black text-teal-950 mb-3.5 leading-snug">
                  Comprehensive CMC Includes :
                </h5>
                <div className="grid grid-cols-1 gap-2">
                  {cmcIncludes.map((inc) => (
                    <div key={inc.code} className="flex items-center gap-2.5 p-2 rounded-lg bg-white/80 border border-teal-100 text-xs sm:text-sm text-teal-950 font-bold">
                      <span className="w-5 h-5 rounded-full bg-kk-teal text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                        ✓
                      </span>
                      <span><strong>{inc.code})</strong> {inc.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CMC Extra Charges Excludes */}
              <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200/60 shadow-2xs">
                <h5 className="text-xs sm:text-sm font-extrabold text-rose-950 mb-3 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Extra Charges Excludes :</span>
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-rose-900">
                  {cmcExcludes.map((exc) => (
                    <div key={exc.code} className="flex items-center gap-2 bg-white/70 px-2.5 py-1.5 rounded-lg border border-rose-100">
                      <span className="w-4 h-4 rounded bg-rose-100 text-rose-700 font-bold flex items-center justify-center shrink-0 text-[10px]">
                        {exc.code}
                      </span>
                      <span className="truncate">{exc.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <Link
                href="/contact#book"
                className="w-full py-3.5 px-4 rounded-xl font-bold text-sm bg-kk-teal hover:bg-kk-teal-light text-white transition-all flex items-center justify-center gap-2 shadow-md shadow-kk-teal/20 hover:shadow-kk-teal/40 active:scale-98"
              >
                <span>Book CMC Service Online</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Understanding AMC vs. CMC Comparison Table Section */}
      <section className="py-14 md:py-22 bg-slate-100/70 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-kk-teal block mb-1">
              Clear &amp; Honest Feature Matrix
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0b1c3d] tracking-tight mb-3">
              Understanding AMC vs. CMC
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Choose the maintenance tier that fits your appliance age and budget. We believe in complete clarity without hidden fine print.
            </p>
          </div>

          {/* Comparison Table Container */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 sm:p-6 text-xs sm:text-sm font-black uppercase tracking-wider w-1/3">
                      Scope &amp; Features
                    </th>
                    <th className="p-4 sm:p-6 text-xs sm:text-sm font-black uppercase tracking-wider w-1/3 bg-slate-800 border-x border-slate-700">
                      <span className="block text-slate-400 text-xs font-semibold lowercase mb-0.5">Basic Preventive</span>
                      AMC (Annual Contract)
                    </th>
                    <th className="p-4 sm:p-6 text-xs sm:text-sm font-black uppercase tracking-wider w-1/3 bg-kk-teal relative">
                      <span className="block text-teal-100 text-xs font-semibold lowercase mb-0.5">All-Inclusive</span>
                      CMC (Comprehensive Contract)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                  {amcVsCmc.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                      <td className="p-4 sm:p-6 font-bold text-slate-900">
                        {row.feature}
                      </td>
                      <td className="p-4 sm:p-6 text-slate-600 border-x border-slate-100 font-medium">
                        {row.amc}
                      </td>
                      <td className="p-4 sm:p-6 font-bold text-kk-teal-dark bg-kk-teal/5">
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
      <section className="bg-gradient-to-r from-[#061224] via-[#0b1c3d] to-[#061224] text-white py-12 md:py-16 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-kk-teal text-xs font-bold uppercase tracking-wider mb-2 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-kk-teal" />
              <span>Doorstep Booking in Pune</span>
            </span>
            <h3 className="text-xl sm:text-3xl font-black tracking-tight">
              Ready to Book AMC / CMC Maintenance Service in Pune?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Contact our team today for doorstep service across all targeted Pune &amp; PCMC locations.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/contact#book"
              className="bg-kk-teal hover:bg-kk-teal-light text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-kk-teal/30 transition-all hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
            >
              <span>Click Here Now for Online Booking</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+919876543210"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 backdrop-blur-sm active:scale-95"
            >
              <Phone className="w-4 h-4 text-kk-teal" />
              <span>+91 98765 43210</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
