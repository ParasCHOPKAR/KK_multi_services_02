"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Sparkles, 
  Clock, 
  ChevronRight, 
  ArrowRight, 
  Phone, 
  Send, 
  CheckCircle2, 
  BookOpen, 
  Wrench, 
  ShieldCheck, 
  Lightbulb 
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const upcomingTopics = [
    { title: "AC Cooling & Seasonal Servicing Guides", icon: "❄️" },
    { title: "Washing Machine Error Codes & Drum Care", icon: "🧺" },
    { title: "Refrigerator Compressor Health & Food Safety", icon: "🧊" },
    { title: "Inverter PCB Diagnostics & Power Safety", icon: "⚡" },
    { title: "Microwave & RO Water Purifier Maintenance", icon: "♨️" },
    { title: "Annual Maintenance Contracts (AMC vs CMC) Explained", icon: "📋" },
  ];

  return (
    <main id="top" className="min-h-screen font-sans bg-slate-50 text-slate-900 flex flex-col selection:bg-kk-teal selection:text-white">
      {/* Top Header Bar */}
      <TopBar />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Coming Soon Hero */}
      <section className="relative bg-kk-blue text-white py-8 sm:py-10 md:py-12 overflow-hidden border-b border-white/10">
        {/* Ambient decorative lighting */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-kk-teal/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-kk-red/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/50 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
          {/* Breadcrumb */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-kk-teal" />
            <span className="text-kk-teal">Blog & Insights</span>
          </div>

          {/* Coming Soon Badge */}
          <div className="flex justify-center mb-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-kk-teal backdrop-blur-md shadow-inner">
              <span className="w-2 h-2 rounded-full bg-kk-teal animate-pulse" />
              <span className="tracking-wider uppercase">Under Development</span>
              <span className="text-white/40">•</span>
              <span className="text-white">Coming Soon</span>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.14] mb-3 max-w-4xl mx-auto">
            Appliance Care & Repair Insights <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-kk-teal via-cyan-300 to-teal-200">
              Coming Very Soon!
            </span>
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm md:text-base text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto mb-6">
            We are curating expert diagnostic guides, DIY maintenance checklists, and troubleshooting tutorials written by our certified appliance technicians across Pune.
          </p>

          {/* Notify Me / Stay Tuned Form */}
          <div className="max-w-md mx-auto mb-6">
            {subscribed ? (
              <div className="p-3.5 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 flex items-center justify-center gap-2.5 animate-fadeIn text-xs sm:text-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold">Thank you! We will notify you once our blog launches.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 bg-white/5 border border-white/15 p-1.5 rounded-2xl backdrop-blur-md">
                <input
                  type="email"
                  required
                  placeholder="Enter your email for updates..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-white/10 text-white placeholder:text-slate-400 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-kk-teal border border-transparent"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-kk-teal hover:bg-kk-teal-light text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-kk-teal/25 flex items-center justify-center gap-2 active:scale-95 shrink-0"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Get Notified</span>
                </button>
              </form>
            )}
          </div>

          {/* Quick Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <Link
              href="/contact#book"
              className="px-6 py-2.5 sm:py-3 rounded-full bg-kk-teal hover:bg-kk-teal-light text-white font-bold text-xs sm:text-sm shadow-lg shadow-kk-teal/30 hover:-translate-y-0.5 transition-all flex items-center gap-2 active:scale-95"
            >
              <Wrench className="w-4 h-4" />
              <span>Book A Service Visit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href="/services"
              className="px-5 py-2.5 sm:py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm transition-all flex items-center gap-2 backdrop-blur-sm hover:-translate-y-0.5"
            >
              <BookOpen className="w-4 h-4 text-cyan-300" />
              <span>Explore All Services</span>
            </Link>

            <a
              href="tel:+919876543210"
              className="px-5 py-2.5 sm:py-3 rounded-full bg-white text-kk-blue hover:bg-slate-100 font-bold text-xs sm:text-sm transition-all flex items-center gap-2 shadow-md hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4 text-kk-red" />
              <span>Call: +91 98765 43210</span>
            </a>
          </div>
        </div>
      </section>

      {/* Upcoming Topics Preview Section */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200/80 text-kk-teal text-xs font-black uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-kk-teal" /> What to expect
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#0b1c3d] tracking-tight">
              Topics We Are Preparing For You
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Insightful DIY advice, maintenance schedules, and warning signals direct from Pune&apos;s leading technicians.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {upcomingTopics.map((topic, idx) => (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200/80 hover:border-kk-teal/40 hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-teal-50 border border-slate-200 group-hover:border-teal-200 text-xl flex items-center justify-center shrink-0 shadow-xs transition-colors">
                  {topic.icon}
                </div>
                <div>
                  <span className="text-[11px] font-bold text-kk-teal uppercase tracking-wider">Upcoming Article</span>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug mt-0.5 group-hover:text-kk-blue transition-colors">
                    {topic.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Need Urgent Appliance Repair Banner */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2 text-kk-teal text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-kk-teal" />
              <span>Doorstep Appliance Repair Across Pune & PCMC</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black">Need Urgent Appliance Diagnostics Today?</h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Our technicians arrive within 90 minutes. 90-day parts warranty included.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <Link
              href="/contact#book"
              className="px-6 py-3 rounded-xl bg-kk-teal hover:bg-kk-teal-light text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
            >
              Book Service Online
            </Link>
            <a
              href="tel:+919876543210"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs sm:text-sm transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-kk-teal" />
              <span>+91 98765 43210</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
