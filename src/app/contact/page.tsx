"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  Wrench, 
  ChevronRight,
  MessageCircle,
  Sparkles,
  Calendar,
  AlertCircle,
  HelpCircle,
  ChevronDown
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "AC Repair & Servicing",
    area: "Wakad / Hinjewadi",
    timeSlot: "Urgent (Within 90 Mins)",
    date: "",
    notes: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const serviceOptions = [
    "AC Repair & Servicing",
    "AC Installation / Uninstallation",
    "Refrigerator / Fridge Repair",
    "Washing Machine Repair",
    "Microwave Oven Repair",
    "RO Water Purifier Repair",
    "Geyser / Water Heater Repair",
    "Other Appliance Service"
  ];

  const puneAreas = [
    "Wakad",
    "Hinjawadi",
    "Baner",
    "Aundh",
    "Kothrud",
    "Pimple Saudagar",
    "Pimpri-Chinchwad",
    "Kharadi",
    "Viman Nagar",
    "Hadapsar",
    "Magarpatta",
    "Kalyani Nagar",
    "Bavdhan",
    "Ravet"
  ];

  const faqs = [
    {
      q: "How fast can a technician reach my doorstep?",
      a: "Our technicians are stationed across major zones in Pune and PCMC. Under our express service, a certified technician will typically arrive at your home within 60 to 90 minutes of your booking confirmation."
    },
    {
      q: "What are your inspection and visiting charges?",
      a: "We have a transparent nominal visiting fee of ₹199, which is completely waived off if you proceed with the repair service with us!"
    },
    {
      q: "Do you use genuine spare parts and offer warranty?",
      a: "Yes, 100%! All replacement components are genuine, factory-certified parts. We provide up to a 90-day warranty on both parts and service labor."
    },
    {
      q: "Are emergency weekend and late-night repairs available?",
      a: "Yes. Our 24/7 hotline and emergency team operate 7 days a week, including all public holidays and weekends, with no hidden surge pricing."
    }
  ];

  return (
    <main id="top" className="min-h-screen font-sans bg-slate-50 text-slate-900 flex flex-col">
      {/* Top Header Bar */}
      <TopBar />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Section - 16:4 Aspect Ratio */}
      <section 
        className="relative bg-kk-blue text-white w-full aspect-[16/4] min-h-[380px] md:min-h-0 flex items-center overflow-hidden border-b border-white/10"
        style={{ aspectRatio: "16 / 4" }}
      >
        {/* Glow Effects */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-kk-teal/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 left-10 w-80 h-80 bg-kk-red/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-4 sm:py-6 md:py-6 lg:py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-kk-teal" />
            <span className="text-kk-teal">Contact Us</span>
          </div>

          <div className="max-w-3xl">
            {/* Live status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-white mb-2 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>24/7 Emergency Repair Dispatch Active</span>
            </div>

            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] font-black text-white tracking-tight leading-[1.15] mb-2">
              Get In Touch With Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-kk-teal via-cyan-300 to-white">Repair Specialists</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-2xl">
              Have a broken appliance or need routine maintenance? Reach out right now. Our certified technicians provide prompt doorstep visits within 90 minutes across Pune &amp; PCMC.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="relative -mt-6 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Emergency Call */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg shadow-slate-900/5 border border-slate-100 hover:border-kk-teal/40 hover:-translate-y-0.5 transition-all duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-kk-blue/5 group-hover:bg-kk-blue text-kk-blue group-hover:text-white flex items-center justify-center transition-colors mb-2.5">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-kk-red">Call Us 24/7</span>
            <h3 className="text-base font-bold text-slate-900 mt-0.5 mb-1">Emergency Hotline</h3>
            <p className="text-xs text-slate-500 mb-2.5">Instant connection with our duty support coordinator.</p>
            <a 
              href="tel:+919876543210" 
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-kk-blue group-hover:text-kk-teal transition-colors"
            >
              +91 98765 43210 <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 2: WhatsApp Chat */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg shadow-slate-900/5 border border-slate-100 hover:border-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 group-hover:bg-[#25D366] text-emerald-600 group-hover:text-white flex items-center justify-center transition-colors mb-2.5">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">Quick Chat</span>
            <h3 className="text-base font-bold text-slate-900 mt-0.5 mb-1">WhatsApp Helpdesk</h3>
            <p className="text-xs text-slate-500 mb-2.5">Send a photo of the faulty appliance for an instant quote.</p>
            <a 
              href="https://wa.me/917276748645" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-600 group-hover:text-emerald-700 transition-colors"
            >
              Chat on WhatsApp <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 3: Email Support */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg shadow-slate-900/5 border border-slate-100 hover:border-kk-teal/40 hover:-translate-y-0.5 transition-all duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-kk-teal/10 group-hover:bg-kk-teal text-kk-teal group-hover:text-white flex items-center justify-center transition-colors mb-2.5">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-kk-teal">Email Support</span>
            <h3 className="text-base font-bold text-slate-900 mt-0.5 mb-1">Service Inquiries</h3>
            <p className="text-xs text-slate-500 mb-2.5">For commercial AMC contracts and corporate servicing.</p>
            <a 
              href="mailto:support@kkmulti.com" 
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-800 group-hover:text-kk-teal transition-colors"
            >
              support@kkmulti.com <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 4: Service Center */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg shadow-slate-900/5 border border-slate-100 hover:border-kk-blue/40 hover:-translate-y-0.5 transition-all duration-300 group">
            <div className="w-10 h-10 rounded-xl bg-slate-100 group-hover:bg-kk-blue text-slate-700 group-hover:text-white flex items-center justify-center transition-colors mb-2.5">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Main Workshop</span>
            <h3 className="text-base font-bold text-slate-900 mt-0.5 mb-1">Pune Central Hub</h3>
            <p className="text-xs text-slate-500 mb-2.5">Open Mon–Sun: 8:00 AM – 10:00 PM</p>
            <a 
              href="#map-section" 
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-kk-blue group-hover:text-kk-teal transition-colors"
            >
              View Location Map <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </section>

      {/* Main Content: Booking Form + Details */}
      <section id="book" className="py-10 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Interactive Booking Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-900/5 border border-slate-100 relative">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="w-2.5 h-2.5 rounded-full bg-kk-teal"></div>
              <span className="text-xs font-black uppercase tracking-widest text-kk-teal">Book A Technician</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0b1c3d] tracking-tight mb-2">
              Schedule Your Home Service
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Fill in your details below and our service team will confirm your booking in under 10 minutes.
            </p>

            {isSubmitted ? (
              <div className="p-6 sm:p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center animate-fadeIn">
                <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg shadow-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-1.5">Booking Request Received!</h3>
                <p className="text-emerald-800 text-xs sm:text-sm max-w-md mx-auto mb-5">
                  Thank you, <span className="font-bold">{formData.name || "Customer"}</span>! Your service request has been assigned Reference ID <strong className="bg-emerald-100 px-2 py-0.5 rounded text-emerald-900">#KK-{(Math.floor(Math.random() * 8999) + 1000)}</strong>. Our nearest technician will call you shortly.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a 
                    href="tel:+919876543210" 
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md"
                  >
                    <Phone className="w-4 h-4" /> Call For Urgent Status
                  </a>
                  <button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: "",
                        phone: "",
                        email: "",
                        service: "AC Repair & Servicing",
                        area: "Wakad / Hinjewadi",
                        timeSlot: "Urgent (Within 90 Mins)",
                        date: "",
                        notes: ""
                      });
                    }}
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all"
                  >
                    Book Another Service
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-kk-red">*</span>
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-kk-teal focus:border-transparent text-sm bg-slate-50/50"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-kk-red">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">+91</span>
                      <input 
                        type="tel" 
                        required
                        placeholder="98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-12 pr-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-kk-teal focus:border-transparent text-sm bg-slate-50/50"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input 
                      type="email" 
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-kk-teal focus:border-transparent text-sm bg-slate-50/50"
                    />
                  </div>

                  {/* Service Needed */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Select Appliance Service <span className="text-kk-red">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-kk-teal focus:border-transparent text-sm bg-slate-50/50"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Area */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Location / Area <span className="text-kk-red">*</span>
                    </label>
                    <select
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-kk-teal focus:border-transparent text-sm bg-slate-50/50"
                    >
                      {puneAreas.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Date */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Date
                    </label>
                    <input 
                      type="date" 
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-kk-teal focus:border-transparent text-sm bg-slate-50/50"
                    />
                  </div>

                  {/* Time Slot */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Time Slot
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-kk-teal focus:border-transparent text-sm bg-slate-50/50"
                    >
                      <option value="Urgent (Within 90 Mins)">Urgent (Within 90 Mins)</option>
                      <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                      <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                      <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Problem description */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Issue Description / Appliance Symptoms
                  </label>
                  <textarea 
                    rows={2}
                    placeholder="Describe the issue (e.g. AC not cooling, strange noise from washing machine, water leakage...)"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-kk-teal focus:border-transparent text-sm bg-slate-50/50 resize-none"
                  ></textarea>
                </div>

                {/* Guarantee Banner */}
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-kk-teal shrink-0" />
                  <span>No advance payment required. Inspect and test your appliance before making payment.</span>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 bg-gradient-to-r from-kk-teal to-teal-600 hover:from-kk-teal-light hover:to-teal-500 text-white rounded-xl font-bold text-sm shadow-md shadow-kk-teal/25 hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Dispatching Request...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Confirm & Book Technician</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Operating Hours & Direct Connect (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Working Hours Card */}
            <div className="bg-gradient-to-br from-kk-blue to-[#071329] text-white rounded-3xl p-6 sm:p-7 shadow-xl relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-4 translate-y-4">
                <Clock className="w-40 h-40" />
              </div>

              <h3 className="text-base sm:text-lg font-bold mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-kk-teal" /> Service Hours & Availability
              </h3>

              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-slate-300">Monday – Saturday</span>
                  <span className="font-bold text-white">8:00 AM – 10:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-white/10">
                  <span className="text-slate-300">Sunday & Holidays</span>
                  <span className="font-bold text-white">8:00 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-slate-300">Emergency Breakdown</span>
                  <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span> 24/7 Available
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/10">
                <a 
                  href="tel:+919876543210"
                  className="w-full py-2.5 bg-white hover:bg-slate-100 text-kk-blue rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Phone className="w-4 h-4 text-kk-red" /> Call Direct: +91 98765 43210
                </a>
              </div>
            </div>

            {/* Direct Connect Helpdesk Card */}
            <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-lg shadow-slate-900/5 border border-slate-100">
              <h3 className="text-sm sm:text-base font-bold text-[#0b1c3d] mb-1.5 flex items-center gap-2">
                <Phone className="w-4 h-4 text-kk-teal" /> Need Instant Assistance?
              </h3>
              <p className="text-xs text-slate-500 mb-3.5 leading-relaxed">
                Skip the form and connect with our duty technician immediately for instant advice.
              </p>
              <div className="space-y-2">
                <a
                  href="https://wa.me/917276748645"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-3.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl font-bold text-xs flex items-center justify-between transition-colors border border-emerald-200"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-emerald-600" /> WhatsApp Quick Chat
                  </span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href="mailto:support@kkmulti.com"
                  className="w-full py-2.5 px-3.5 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl font-bold text-xs flex items-center justify-between transition-colors border border-slate-200"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-kk-teal" /> Email: support@kkmulti.com
                  </span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Map Section */}
      <section id="map-section" className="py-8 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-xl shadow-slate-900/5 border border-slate-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-kk-teal uppercase tracking-wider mb-0.5">
                <MapPin className="w-3.5 h-3.5" /> Workshop & Service Center
              </div>
              <h3 className="text-xl font-extrabold text-[#0b1c3d]">Find KK Multi Services</h3>
              <p className="text-xs text-slate-500 mt-0.5">123 Repair Street, Sector 45, Pune, Maharashtra 411057</p>
            </div>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-kk-blue hover:bg-kk-blue-light text-white text-xs font-bold transition-all shadow-md shrink-0"
            >
              Open in Google Maps <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden shadow-inner border border-slate-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0921705646447!2d73.7721601!3d18.5698829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf1ba5c42d25%3A0xae3383c823833690!2sKK%20Multi%20Services!5e0!3m2!1sen!2sin!4v1789969080377!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 sm:py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kk-teal/10 text-kk-teal text-xs font-bold mb-2 uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#0b1c3d]">
              Common Questions Before Booking
            </h3>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-5 py-3.5 text-left font-bold text-slate-800 flex justify-between items-center gap-4 hover:text-kk-blue transition-colors"
                >
                  <span className="text-xs sm:text-sm">{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-kk-teal shrink-0 transition-transform duration-200 ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
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
