"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  CheckCircle2, 
  Send, 
  ShieldCheck, 
  Phone, 
  ArrowRight,
  Sparkles,
  MessageCircle
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serviceOptions = [
  "AC Repair & Servicing",
  "AC Installation / Relocation",
  "Cassette AC Service & Repair",
  "Central HVAC & Chiller Service",
  "VRV / VRF System Repair",
  "Refrigerator & Freezer Repair",
  "Washing Machine Repair",
  "Microwave & Oven Repair",
  "Water Geyser Repair",
  "Annual Maintenance Contract (AMC)",
  "Other Appliance Inquiry"
];

const puneAreas = [
  "Balewadi",
  "PCMC (Pimpri-Chinchwad)",
  "PMC (Pune City)",
  "Wakad / Hinjewadi",
  "Baner / Aundh",
  "Kothrud / Bavdhan",
  "Viman Nagar / Kalyani Nagar",
  "Hadapsar / Magarpatta",
  "Kharadi / Wagholi",
  "Pimple Saudagar / Pimple Gurav",
  "Ravet / Punawale / Tathawade",
  "Other Area in Pune / PCMC"
];

export default function EnquirePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "AC Repair & Servicing",
    area: "Balewadi",
    timeSlot: "Urgent (Within 90 Mins)",
    date: "",
    notes: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [lastWaUrl, setLastWaUrl] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      setNameError("Please enter your name.");
      hasError = true;
    } else if (/\d/.test(trimmedName)) {
      setNameError("Numbers are not allowed in the name field.");
      hasError = true;
    } else if (trimmedName.length < 2) {
      setNameError("Name must be at least 2 characters.");
      hasError = true;
    }

    if (!formData.phone) {
      setPhoneError("Please enter your phone number.");
      hasError = true;
    } else if (formData.phone.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits (no more, no less).");
      hasError = true;
    }

    if (hasError) return;

    setIsSubmitting(true);

    const generatedId = `KK-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingId(generatedId);

    const lines = [
      `*New Service Enquiry - KK Multi Services*`,
      ``,
      `👤 *Name:* ${formData.name.trim()}`,
      `📞 *Contact Number:* ${formData.phone.trim()}`,
      formData.email.trim() ? `✉️ *Email:* ${formData.email.trim()}` : "",
      `🔧 *Service Required:* ${formData.service}`,
      `📍 *Area:* ${formData.area}`,
      formData.date ? `📅 *Preferred Date:* ${formData.date}` : "",
      `⏰ *Time Slot:* ${formData.timeSlot}`,
      formData.notes.trim() ? `📝 *Problem Details:* ${formData.notes.trim()}` : "",
      ``,
      `🆔 *Ref ID:* #${generatedId}`,
      `_Submitted via website enquiry page_`
    ].filter(Boolean);

    const waText = lines.join("\n");
    const waUrl = `https://wa.me/919823919814?text=${encodeURIComponent(waText)}`;
    setLastWaUrl(waUrl);

    fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bookingId: generatedId,
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        service: formData.service,
        area: formData.area,
        notes: formData.notes.trim(),
      }),
    }).catch(console.error);

    try {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.error(err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 font-sans flex flex-col justify-between">
      {/* Top Bar & Navigation */}
      <div>
        <TopBar />
        <Navbar />

        {/* Dedicated Enquiry Section */}
        <section className="py-10 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
          
          {/* Card Container */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 xs:p-7 sm:p-10 shadow-xl shadow-slate-900/5 border border-slate-200/80">
            
            {/* Header */}
            <div className="mb-6 sm:mb-8 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kk-teal/10 text-kk-teal text-xs font-bold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" /> Fast Doorstep Service
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-kk-blue tracking-tight mb-2">
                Service Enquiry Form
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 max-w-xl">
                Fill in your details below and our expert service team will confirm your technician booking within 10 minutes.
              </p>
            </div>

            {/* Form or Confirmation */}
            {isSubmitted ? (
              <div className="p-6 sm:p-10 bg-emerald-50 rounded-2xl border border-emerald-200 text-center animate-hero-fade-up">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-emerald-950 mb-1.5">
                  Enquiry Ready on WhatsApp!
                </h2>
                <p className="text-emerald-800 text-xs sm:text-sm max-w-md mx-auto mb-4 leading-relaxed">
                  Thank you, <span className="font-bold">{formData.name || "Customer"}</span>! Your service enquiry has been assigned Reference ID{" "}
                  <strong className="bg-emerald-200/80 text-emerald-950 px-2 py-0.5 rounded font-mono">
                    #{bookingId || "KK-SERVICE"}
                  </strong>.
                </p>
                {lastWaUrl && (
                  <div className="mb-5 max-w-sm mx-auto">
                    <a
                      href={lastWaUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all active:scale-95"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Open WhatsApp Chat Again</span>
                    </a>
                  </div>
                )}
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <a
                    href="tel:+919823919814"
                    className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md active:scale-95"
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
                    className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer active:scale-95"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-kk-red">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => {
                        const clean = e.target.value.replace(/[0-9]/g, "");
                        setFormData({ ...formData, name: clean });
                        if (nameError) setNameError("");
                      }}
                      className={`w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border text-sm sm:text-base bg-slate-50/50 focus:outline-none focus:ring-2 transition-all ${
                        nameError ? "border-red-400 focus:ring-red-400" : "border-slate-200 focus:ring-kk-teal focus:border-transparent"
                      }`}
                    />
                    {nameError && (
                      <p className="mt-1 text-[11px] font-semibold text-red-500">{nameError}</p>
                    )}
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider">
                        Phone Number <span className="text-kk-red">*</span>
                      </label>
                      <span className={`text-[11px] font-mono ${formData.phone.length === 10 ? "text-emerald-600 font-bold" : "text-slate-400"}`}>
                        {formData.phone.length}/10 digits
                      </span>
                    </div>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-400">+91</span>
                      <input
                        type="tel"
                        inputMode="numeric"
                        maxLength={10}
                        required
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={(e) => {
                          const clean = e.target.value.replace(/\D/g, "").slice(0, 10);
                          setFormData({ ...formData, phone: clean });
                          if (phoneError) setPhoneError("");
                        }}
                        className={`w-full pl-12 pr-3.5 py-2.5 sm:py-3 rounded-xl border text-sm sm:text-base bg-slate-50/50 focus:outline-none focus:ring-2 transition-all ${
                          phoneError ? "border-red-400 focus:ring-red-400" : "border-slate-200 focus:ring-kk-teal focus:border-transparent"
                        }`}
                      />
                    </div>
                    {phoneError && (
                      <p className="mt-1 text-[11px] font-semibold text-red-500">{phoneError}</p>
                    )}
                  </div>
                </div>

                {/* Email Address & Service Option */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-5">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-kk-teal focus:border-transparent text-sm sm:text-base bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Select Appliance Service <span className="text-kk-red">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-kk-teal focus:border-transparent text-sm sm:text-base bg-slate-50/50"
                    >
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Location, Preferred Date, and Time Slot */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-5">
                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Area in Pune <span className="text-kk-red">*</span>
                    </label>
                    <select
                      value={formData.area}
                      onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-kk-teal focus:border-transparent text-sm sm:text-base bg-slate-50/50"
                    >
                      {puneAreas.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-kk-teal focus:border-transparent text-sm sm:text-base bg-slate-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Time Slot
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-kk-teal focus:border-transparent text-sm sm:text-base bg-slate-50/50"
                    >
                      <option value="Urgent (Within 90 Mins)">Urgent (Within 90 Mins)</option>
                      <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                      <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                      <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Problem Description */}
                <div>
                  <label className="block text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Issue Description / Problem Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe the issue with your appliance (e.g. AC cooling issue, refrigerator not freezing, strange noise, error code)..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-kk-teal focus:border-transparent text-sm sm:text-base bg-slate-50/50 resize-none"
                  ></textarea>
                </div>

                {/* Guarantee Banner */}
                <div className="flex items-start xs:items-center gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600">
                  <ShieldCheck className="w-4 h-4 text-kk-teal shrink-0 mt-0.5 xs:mt-0" />
                  <span>No advance payment required. Full inspection and functional testing before payment.</span>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 sm:py-4 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/25 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 active:scale-[0.99]"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Send Enquiry to WhatsApp</span>
                  <Send className="w-4 h-4 ml-1" />
                </button>

              </form>
            )}

          </div>

        </section>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
