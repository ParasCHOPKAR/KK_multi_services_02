"use client";

import React, { useState, useEffect, useMemo } from "react";
import { 
  X, 
  Wrench, 
  Send, 
  CheckCircle2, 
  Phone, 
  User, 
  MapPin, 
  Sparkles, 
  FileText,
  ShieldCheck,
  Clock,
  MessageCircle,
  ExternalLink,
  AlertCircle
} from "lucide-react";
import type { AreaBookingData } from "@/context/BookingModalContext";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialAreaDetails?: AreaBookingData | null;
}

export const serviceList = [
  "AC Repair & Servicing",
  "AC Installation / Relocation",
  "Cassette AC Service & Repair",
  "Central HVAC / VRV / VRF",
  "Refrigerator & Freezer Repair",
  "Washing Machine Repair",
  "Microwave & Oven Repair",
  "Water Geyser Repair",
  "AMC / CMC Maintenance",
  "Other Appliance Service"
];

export const areaList = [
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

export default function BookingModal({
  isOpen,
  onClose,
  initialService = "AC Repair & Servicing",
  initialAreaDetails = null,
}: BookingModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(initialService || "AC Repair & Servicing");
  const [area, setArea] = useState(initialAreaDetails?.name || "Balewadi");
  const [areaDetails, setAreaDetails] = useState<AreaBookingData | null>(initialAreaDetails || null);
  const [notes, setNotes] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState("");
  const [waUrl, setWaUrl] = useState("");

  // Sync service if initialService changes
  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  // Sync area details if initialAreaDetails changes
  useEffect(() => {
    if (initialAreaDetails) {
      setAreaDetails(initialAreaDetails);
      if (initialAreaDetails.name) {
        setArea(initialAreaDetails.name);
      }
    } else {
      setAreaDetails(null);
    }
  }, [initialAreaDetails]);

  // Combined area options ensuring selected area card is listed
  const fullAreaList = useMemo(() => {
    if (areaDetails?.name && !areaList.includes(areaDetails.name)) {
      return [areaDetails.name, ...areaList];
    }
    return areaList;
  }, [areaDetails]);

  // Lock scroll when open & handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Handle name input: strictly no numbers allowed
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    // Disallow numbers
    const cleanVal = rawVal.replace(/[0-9]/g, "");
    setName(cleanVal);
    if (nameError) setNameError("");
  };

  // Handle phone input: strictly digits only, max 10 digits
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    // Disallow non-digit characters, limit to 10 digits
    const cleanVal = rawVal.replace(/\D/g, "").slice(0, 10);
    setPhone(cleanVal);
    if (phoneError) setPhoneError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let hasError = false;

    // Validate name
    const trimmedName = name.trim();
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

    // Validate phone: exactly 10 digits, numbers only
    if (!phone) {
      setPhoneError("Please enter your contact number.");
      hasError = true;
    } else if (phone.length !== 10) {
      setPhoneError("Contact number must be exactly 10 digits (no more, no less).");
      hasError = true;
    }

    if (hasError) return;

    setIsSubmitting(true);

    const generatedId = `KK-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingId(generatedId);

    // Format WhatsApp pre-filled text with complete area details
    const lines = [
      `*New Service Booking - KK Multi Services*`,
      ``,
      `👤 *Customer Name:* ${trimmedName}`,
      `📞 *Contact Number:* ${phone.trim()}`,
      `🔧 *Service Required:* ${service}`,
      `📍 *Area / Locality:* ${area}${areaDetails?.pincode ? ` (PIN: ${areaDetails.pincode})` : ""}`,
    ];

    if (areaDetails?.zoneLabel || areaDetails?.subZone) {
      lines.push(`🏙️ *Zone:* ${[areaDetails.zoneLabel, areaDetails.subZone].filter(Boolean).join(" • ")}`);
    }

    // Landmarks empty as requested
    lines.push(`🗺️ *Landmarks:* `);

    if (notes.trim()) {
      lines.push(`📝 *Problem Details:* ${notes.trim()}`);
    }

    lines.push(``);
    lines.push(`🆔 *Ref ID:* #${generatedId}`);
    lines.push(`_Sent from website booking form_`);

    const fullText = lines.join("\n");
    const targetUrl = `https://wa.me/919823919814?text=${encodeURIComponent(fullText)}`;
    setWaUrl(targetUrl);

    // Send to backend server log asynchronously with complete area metadata
    fetch("/api/book", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        bookingId: generatedId,
        name: trimmedName,
        phone: phone.trim(),
        service,
        area,
        pincode: areaDetails?.pincode,
        zoneLabel: areaDetails?.zoneLabel,
        subZone: areaDetails?.subZone,
        landmarks: areaDetails?.landmarks,
        responseTime: areaDetails?.responseTime,
        notes: notes.trim(),
      }),
    }).catch(console.error);

    // Automatically open WhatsApp with pre-filled message
    try {
      window.open(targetUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.error("Popup blocked:", err);
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setName("");
    setPhone("");
    setNotes("");
    setNameError("");
    setPhoneError("");
    setBookingId("");
    setWaUrl("");
    setAreaDetails(null);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
      onClick={handleResetAndClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden transform transition-all animate-hero-fade-up max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-kk-blue via-[#0d234d] to-kk-dark text-white px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-kk-red flex items-center justify-center text-white shadow-md shadow-kk-red/30 shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase text-kk-teal-light">
                <Sparkles className="w-3 h-3" /> Quick Doorstep Booking
              </div>
              <h2 id="modal-title" className="text-lg sm:text-xl font-extrabold text-white leading-tight">
                Book a Service
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={handleResetAndClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors active:scale-90"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-4 sm:py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#25D366]/15 text-[#25D366] flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-2">
                  Reference: #{bookingId}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-1.5">
                  Booking Ready on WhatsApp!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{name || "Valued Customer"}</strong>. Your booking details were prepared for WhatsApp.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-left text-xs sm:text-sm space-y-2">
                <div className="flex justify-between items-center text-slate-600">
                  <span>Service:</span>
                  <span className="font-bold text-slate-900">{service}</span>
                </div>
                <div className="flex justify-between items-center text-slate-600">
                  <span>Locality:</span>
                  <span className="font-bold text-slate-900">
                    {area} {areaDetails?.pincode ? `(PIN: ${areaDetails.pincode})` : ""}
                  </span>
                </div>
                {areaDetails?.landmarks && (
                  <div className="flex justify-between items-start text-slate-600 text-[11px] gap-2">
                    <span className="shrink-0">Landmark:</span>
                    <span className="font-medium text-slate-800 text-right">{areaDetails.landmarks}</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-slate-600">
                  <span>Contact:</span>
                  <span className="font-bold text-slate-900">{phone}</span>
                </div>
              </div>

              {/* Open WhatsApp Button */}
              {waUrl && (
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/25 transition-all active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Open WhatsApp to Send Message</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {/* Status Note */}
              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-700 bg-slate-100 p-3 rounded-xl border border-slate-200">
                <Clock className="w-4 h-4 text-kk-teal shrink-0" />
                <span>Our technician coordinator will respond to your WhatsApp message immediately!</span>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-2.5 justify-center">
                <a
                  href="tel:+919823919814"
                  className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-kk-red" /> Direct Call: +91 98239 19814
                </a>
                <button
                  type="button"
                  onClick={handleResetAndClose}
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs sm:text-sm transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Complete Area Details Card (from clicked area card) */}
              {areaDetails && (
                <div className="bg-gradient-to-br from-cyan-50/90 via-sky-50/80 to-blue-50/90 border border-kk-teal/30 rounded-2xl p-3.5 sm:p-4 text-left shadow-xs">
                  <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-kk-blue text-white">
                        {areaDetails.zoneLabel || "Serviced Area"}
                      </span>
                      {areaDetails.subZone && (
                        <span className="text-[10px] font-bold text-slate-600 bg-white/90 border border-slate-200 px-2 py-0.5 rounded-md">
                          {areaDetails.subZone}
                        </span>
                      )}
                    </div>
                    {areaDetails.responseTime && (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/90 px-2.5 py-0.5 rounded-full shrink-0">
                        <Clock className="w-3 h-3 text-emerald-600" /> {areaDetails.responseTime} Express Arrival
                      </span>
                    )}
                  </div>

                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="text-sm sm:text-base font-extrabold text-slate-900 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-kk-teal shrink-0" />
                      <span>{areaDetails.name}</span>
                    </h4>
                    {areaDetails.pincode && (
                      <span className="text-xs font-bold text-slate-500 shrink-0">
                        PIN {areaDetails.pincode}
                      </span>
                    )}
                  </div>

                  {areaDetails.landmarks && (
                    <p className="text-xs text-slate-600 mt-1 pl-5.5 leading-relaxed">
                      {areaDetails.landmarks}
                    </p>
                  )}
                </div>
              )}

              {/* Name (strictly no numbers) */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Name <span className="text-kk-red">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={handleNameChange}
                    placeholder="e.g. Rahul Sharma"
                    className={`w-full pl-10 pr-3.5 py-2.5 sm:py-3 bg-slate-50 border rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      nameError 
                        ? "border-red-400 focus:ring-red-400 bg-red-50/20" 
                        : "border-slate-200 focus:ring-kk-teal focus:border-transparent"
                    }`}
                  />
                </div>
                {nameError && (
                  <p className="mt-1 text-[11px] font-semibold text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{nameError}</span>
                  </p>
                )}
              </div>

              {/* Contact Number (digits only, strictly 10 digits) */}
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Contact Number <span className="text-kk-red">*</span>
                  </label>
                  <span className={`text-[11px] font-mono ${phone.length === 10 ? "text-emerald-600 font-bold" : "text-slate-400"}`}>
                    {phone.length}/10 digits
                  </span>
                </div>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    required
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="10-digit mobile number"
                    className={`w-full pl-10 pr-3.5 py-2.5 sm:py-3 bg-slate-50 border rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 transition-all ${
                      phoneError 
                        ? "border-red-400 focus:ring-red-400 bg-red-50/20" 
                        : "border-slate-200 focus:ring-kk-teal focus:border-transparent"
                    }`}
                  />
                </div>
                {phoneError && (
                  <p className="mt-1 text-[11px] font-semibold text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{phoneError}</span>
                  </p>
                )}
              </div>

              {/* Service Required Dropdown */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Service Required <span className="text-kk-red">*</span>
                </label>
                <div className="relative">
                  <Wrench className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-kk-teal focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    {serviceList.map((srv) => (
                      <option key={srv} value={srv}>
                        {srv}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Area Dropdown */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Select Area / Locality <span className="text-kk-red">*</span>
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={area}
                    onChange={(e) => {
                      const selectedVal = e.target.value;
                      setArea(selectedVal);
                      if (areaDetails && selectedVal !== areaDetails.name) {
                        setAreaDetails(null);
                      }
                    }}
                    className="w-full pl-10 pr-3.5 py-2.5 sm:py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-kk-teal focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    {fullAreaList.map((ar) => (
                      <option key={ar} value={ar}>
                        {ar}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Issue / Appliance Details <span className="text-slate-400 font-normal lowercase">(optional)</span>
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. AC cooling issue or water leakage"
                    className="w-full pl-10 pr-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-kk-teal focus:border-transparent transition-all resize-none"
                  />
                </div>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 text-[11px] text-slate-600 border border-slate-100">
                <ShieldCheck className="w-4 h-4 text-kk-teal shrink-0" />
                <span>No advance payment needed • Pay only after inspection</span>
              </div>

              {/* WhatsApp Submit Button without number in text */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all flex items-center justify-center gap-2 active:scale-98 cursor-pointer disabled:opacity-75"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Send Booking to WhatsApp</span>
                  <Send className="w-4 h-4 ml-1" />
                </button>
                <p className="text-[11px] text-center text-slate-400 mt-2">
                  Opens WhatsApp with pre-filled details to send directly to KK Multi Services
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
