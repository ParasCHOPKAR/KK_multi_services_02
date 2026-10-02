"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  MessageCircle,
  HelpCircle,
  ChevronDown,
  Calendar,
  ArrowRight,
  Sparkles
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
    <main className="min-h-screen bg-slate-50 font-sans flex flex-col justify-between">
      <div>
        <TopBar />
        <Navbar />

        {/* Hero Section - Responsive 16:4 on Desktop with Mobile Proportions */}
        <section
          className="relative bg-kk-blue text-white w-full min-h-[270px] xs:min-h-[290px] sm:min-h-[340px] md:min-h-[380px] lg:min-h-[340px] xl:min-h-[390px] 2xl:min-h-[440px] aspect-[16/7] xs:aspect-[16/6] sm:aspect-[16/5] lg:aspect-[16/4] flex items-center justify-center overflow-hidden border-b border-white/10"
        >
          {/* Layer 1: Office Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/contact_page_background_img.png"
              alt="KK Multi Services Office & Customer Support"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Subtle center vignette to enhance contrast behind text */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#030c1d]/50 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(3,12,29,0.55)_0%,_transparent_75%)] pointer-events-none" />
          </div>

          {/* Layer 2: Animated Cutout Figures (Woman on phone left, Support Technician right with speech bubbles) */}
          <div className="absolute inset-0 z-10 pointer-events-none animate-contact-entrance">
            <div className="relative w-full h-full animate-contact-float">
              <Image
                src="/images/contact.png"
                alt="Customer calling KK Multi Services support technician"
                fill
                priority
                sizes="100vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>

          {/* Layer 3: Center Hero Content */}
          <div className="relative z-20 max-w-xl sm:max-w-2xl lg:max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center py-4 sm:py-6 lg:py-8">
            {/* Top Breadcrumb */}
            <div className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 sm:mb-3 drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400 shrink-0" />
              <span className="text-cyan-400 font-bold">Contact Us</span>
            </div>

            {/* Center Main Headline */}
            <h1 className="font-black tracking-tight leading-[1.15]">
              <span className="block text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-[48px] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                Call Us For Your
              </span>
              <span className="hidden md:block text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[52px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-kk-teal to-cyan-100 drop-shadow-[0_0_30px_rgba(0,242,254,0.6)] mt-0.5 sm:mt-1">
                Repairing Requirements
              </span>
            </h1>
          </div>
        </section>

        {/* Quick Contact Cards */}
        <section className="relative -mt-4 sm:-mt-6 lg:-mt-8 z-20 max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            
            {/* Card 1: Emergency Call */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg shadow-slate-900/5 border border-slate-100 hover:border-kk-teal/40 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-kk-blue/5 group-hover:bg-kk-blue text-kk-blue group-hover:text-white flex items-center justify-center transition-colors mb-2.5">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-kk-red">Call Us 24/7</span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 mb-1">Emergency Hotline</h3>
              <p className="text-xs text-slate-500 mb-2.5">Instant connection with our duty support coordinator.</p>
              <a
                href="tel:+919823919814"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-kk-blue group-hover:text-kk-teal transition-colors"
              >
                +91 98239 19814 <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 2: WhatsApp Chat */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg shadow-slate-900/5 border border-slate-100 hover:border-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 group-hover:bg-[#25D366] text-emerald-600 group-hover:text-white flex items-center justify-center transition-colors mb-2.5">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-600">Quick Chat</span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 mb-1">WhatsApp Helpdesk</h3>
              <p className="text-xs text-slate-500 mb-2.5">Send a photo of the faulty appliance for an instant quote.</p>
              <a
                href="https://wa.me/919823919814"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-600 group-hover:text-emerald-700 transition-colors"
              >
                Chat on WhatsApp <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 3: Email Support */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg shadow-slate-900/5 border border-slate-100 hover:border-kk-teal/40 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-kk-teal/10 group-hover:bg-kk-teal text-kk-teal group-hover:text-white flex items-center justify-center transition-colors mb-2.5">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-kk-teal">Email Support</span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 mb-1">Service Inquiries</h3>
              <p className="text-xs text-slate-500 mb-2.5">For commercial AMC contracts and corporate servicing.</p>
              <a
                href="mailto:support@kkmulti.com"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-slate-800 group-hover:text-kk-teal transition-colors"
              >
                support@kkmulti.com <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Card 4: Our Address */}
            <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-lg shadow-slate-900/5 border border-slate-100 hover:border-kk-blue/40 hover:-translate-y-0.5 transition-all duration-300 group">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-100 group-hover:bg-kk-blue text-slate-700 group-hover:text-white flex items-center justify-center transition-colors mb-2.5">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">Our Address</span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 mt-0.5 mb-1">Heavenly Homes, Balewadi</h3>
              <p className="text-xs text-slate-500 mb-2.5 leading-relaxed">
                Unit 04, Next To Cummins India &amp; IRIS High Street, Balewadi, Pune- 411045
              </p>
              <a
                href="#map-section"
                className="inline-flex items-center gap-1.5 text-xs font-extrabold text-kk-blue group-hover:text-kk-teal transition-colors"
              >
                View Location Map <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </section>

        {/* Operating Hours & Assistance Section */}
        <section className="py-10 sm:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* Working Hours Card */}
            <div className="bg-gradient-to-br from-kk-blue to-kk-dark text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden flex flex-col justify-between">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-4 translate-y-4">
                <Clock className="w-36 h-36" />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-kk-teal" /> Service Hours &amp; Availability
                </h3>

                <div className="space-y-3 text-xs sm:text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-slate-300">Monday – Saturday</span>
                    <span className="font-bold text-white">8:00 AM – 10:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-slate-300">Sunday &amp; Holidays</span>
                    <span className="font-bold text-white">8:00 AM – 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-300">Emergency Breakdown</span>
                    <span className="font-bold text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span> 24/7 Available
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href="tel:+919823919814"
                  className="w-full py-3 bg-white hover:bg-slate-100 text-kk-blue rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95"
                >
                  <Phone className="w-4 h-4 text-kk-red" /> Call Direct: +91 98239 19814
                </a>
              </div>
            </div>

            {/* Direct Connect Helpdesk Card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg shadow-slate-900/5 border border-slate-200/80 flex flex-col justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-kk-blue mb-2 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-kk-teal" /> Need Instant Assistance?
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-6 leading-relaxed">
                  Skip the queue and connect with our duty technician immediately for instant troubleshooting advice or quotes.
                </p>
                <div className="space-y-3">
                  <a
                    href="https://wa.me/919823919814"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 px-4 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-between transition-colors border border-emerald-200"
                  >
                    <span className="flex items-center gap-2.5">
                      <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" /> WhatsApp Quick Chat
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:support@kkmulti.com"
                    className="w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-between transition-colors border border-slate-200"
                  >
                    <span className="flex items-center gap-2.5">
                      <Mail className="w-4 h-4 text-kk-teal shrink-0" /> Email: support@kkmulti.com
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                Average phone response time: <strong className="text-slate-800">Under 60 seconds</strong>
              </div>
            </div>

            {/* Online Service Enquiry Card */}
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg shadow-teal-900/5 border border-teal-200/80 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kk-teal/15 text-kk-teal text-xs font-bold uppercase tracking-wider mb-3">
                  <Calendar className="w-3.5 h-3.5" /> Online Booking
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  Want to Book a Service?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                  Submit your appliance repair request online via our dedicated Enquiry Form. Guaranteed technician arrival in under 90 minutes.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-teal-200/60">
                <Link
                  href="/enquire"
                  className="w-full py-3.5 px-5 rounded-xl bg-kk-teal hover:bg-kk-teal-light text-white font-bold text-xs sm:text-sm shadow-md shadow-kk-teal/20 transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <span>Go to Enquiry Form</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </section>

        {/* Map Section */}
        <section id="map-section" className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-xl shadow-slate-900/5 border border-slate-200/80">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-kk-teal uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5" /> Workshop &amp; Service Center
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-kk-blue">Our Address</h3>
                <div className="mt-1.5 space-y-0.5 max-w-2xl">
                  <p className="text-xs font-mono text-slate-400">
                    N 186 25°S8.229534°E 73°47&apos;40.80768&quot;
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    Unit 04, Heavenly Homes, Next To Cummins India and IRIS High Street, Balewadi, Pune- 411045, Maharashtra, India.
                  </p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Heavenly+Homes+Balewadi+Pune"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-kk-blue hover:bg-kk-blue-light text-white text-xs sm:text-sm font-bold transition-all shadow-md shrink-0 active:scale-95"
              >
                Open in Google Maps <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            <div className="w-full h-64 sm:h-80 md:h-96 rounded-xl sm:rounded-2xl overflow-hidden shadow-inner border border-slate-200">
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
        <section className="py-10 sm:py-14 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kk-teal/10 text-kk-teal text-xs font-bold mb-2 uppercase tracking-wider">
                <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-kk-blue">
                Common Questions Before Booking
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-4 sm:p-5 text-left flex justify-between items-center gap-4 bg-slate-50/60 hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-bold text-slate-800 text-xs sm:text-base">{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-kk-teal" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 sm:p-5 pt-0 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
