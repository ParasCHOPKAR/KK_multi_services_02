"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { 
  MapPin, 
  Search, 
  Phone, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight, 
  CheckCircle2, 
  Sparkles, 
  HelpCircle, 
  ChevronDown, 
  Navigation,
  Wrench,
  Zap
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PuneArea {
  name: string;
  pincode: string;
  zone: "west" | "pcmc" | "east" | "central";
  zoneLabel: string;
  responseTime: string;
  landmarks: string;
  popularFor: string[];
}

const puneLocalities: PuneArea[] = [
  // West Pune
  { name: "Wakad", pincode: "411057", zone: "west", zoneLabel: "West Pune", responseTime: "45–60 Mins", landmarks: "Dutt Mandir, Bhumkar Chowk, Kaspate Vasti", popularFor: ["AC Repair", "Washing Machine", "Fridge"] },
  { name: "Hinjawadi Phase 1, 2 & 3", pincode: "411057", zone: "west", zoneLabel: "West Pune", responseTime: "45–60 Mins", landmarks: "Rajiv Gandhi Infotech Park, Megapolis", popularFor: ["AC Servicing", "Microwave", "Refrigerator"] },
  { name: "Baner", pincode: "411045", zone: "west", zoneLabel: "West Pune", responseTime: "45–60 Mins", landmarks: "Baner Road, High Street, Pancard Club Road", popularFor: ["All Appliances", "Inverter AC", "Front Load"] },
  { name: "Balewadi", pincode: "411045", zone: "west", zoneLabel: "West Pune", responseTime: "45–60 Mins", landmarks: "Balewadi High Street, Sports Complex", popularFor: ["AC Installation", "Washing Machine", "Geyser"] },
  { name: "Aundh", pincode: "411007", zone: "west", zoneLabel: "West Pune", responseTime: "45–60 Mins", landmarks: "DP Road, Parihar Chowk, Medipoint", popularFor: ["Refrigerator", "AC Deep Clean", "Microwave"] },
  { name: "Pashan & Sus", pincode: "411021", zone: "west", zoneLabel: "West Pune", responseTime: "45–60 Mins", landmarks: "Pashan Lake, Sus Road, Abhinav College", popularFor: ["Geyser Repair", "Washing Machine", "AC"] },
  { name: "Bavdhan", pincode: "411021", zone: "west", zoneLabel: "West Pune", responseTime: "45–60 Mins", landmarks: "Chandani Chowk, NDA Road", popularFor: ["Refrigerator", "AC Repair", "Water Heater"] },
  { name: "Mahalunge", pincode: "411045", zone: "west", zoneLabel: "West Pune", responseTime: "45–60 Mins", landmarks: "Godrej Hillside, VTP Township", popularFor: ["AC Repair", "Washing Machine", "Fridge"] },
  { name: "Punawale & Tathawade", pincode: "411033", zone: "west", zoneLabel: "West Pune", responseTime: "45–60 Mins", landmarks: "JSPM College, Mumbai-Bangalore Highway", popularFor: ["AC Service", "Washing Machine", "Geyser"] },

  // PCMC
  { name: "Pimple Saudagar", pincode: "411027", zone: "pcmc", zoneLabel: "PCMC", responseTime: "45–60 Mins", landmarks: "Kunial Chowk, Linear Garden, Govind Garden", popularFor: ["AC Gas Refill", "Front Load Washer", "Fridge"] },
  { name: "Pimple Nilakh", pincode: "411027", zone: "pcmc", zoneLabel: "PCMC", responseTime: "45–60 Mins", landmarks: "Vishal Nagar, Kranti Chowk", popularFor: ["All Appliances", "Washing Machine", "AC"] },
  { name: "Pimple Gurav", pincode: "411061", zone: "pcmc", zoneLabel: "PCMC", responseTime: "45–60 Mins", landmarks: "Dinosaur Park, Kate Puram Chowk", popularFor: ["Refrigerator", "Geyser", "Microwave"] },
  { name: "Rahatani & Kalewadi", pincode: "411017", zone: "pcmc", zoneLabel: "PCMC", responseTime: "45–60 Mins", landmarks: "Jyoti Chowk, Shivar Garden", popularFor: ["Washing Machine", "AC Repair", "Fridge"] },
  { name: "Chinchwad", pincode: "411033", zone: "pcmc", zoneLabel: "PCMC", responseTime: "45–60 Mins", landmarks: "Chapekar Chowk, Elpro City Square", popularFor: ["Industrial AC", "Home Appliances", "Geyser"] },
  { name: "Pimpri", pincode: "411018", zone: "pcmc", zoneLabel: "PCMC", responseTime: "45–60 Mins", landmarks: "Finolex Chowk, Deluxe Cinema, Market", popularFor: ["Refrigerator Repair", "AC Installation", "Washer"] },
  { name: "Akurdi & Pradhikaran", pincode: "411044", zone: "pcmc", zoneLabel: "PCMC", responseTime: "45–60 Mins", landmarks: "DY Patil College, Railway Station", popularFor: ["AC Repair", "Washing Machine", "Microwave"] },
  { name: "Nigdi & Yamuna Nagar", pincode: "411044", zone: "pcmc", zoneLabel: "PCMC", responseTime: "45–60 Mins", landmarks: "Bhakti Shakti, Appu Ghar", popularFor: ["Fridge Cooling", "AC Servicing", "Geyser"] },
  { name: "Ravet & Kiwale", pincode: "412101", zone: "pcmc", zoneLabel: "PCMC", responseTime: "45–60 Mins", landmarks: "Mukhai Chowk, Express Highway Exit", popularFor: ["AC Repair", "Washing Machine", "Refrigerator"] },
  { name: "Bhosari", pincode: "411026", zone: "pcmc", zoneLabel: "PCMC", responseTime: "60–90 Mins", landmarks: "MIDC, Landewadi, Dighi Road", popularFor: ["Commercial AC", "Home Fridge", "Washing Machine"] },
  { name: "Moshi & Alandi Road", pincode: "412105", zone: "pcmc", zoneLabel: "PCMC", responseTime: "60–90 Mins", landmarks: "Spine Road, Toll Plaza", popularFor: ["AC Service", "Washing Machine", "Geyser"] },
  { name: "Chakan", pincode: "410501", zone: "pcmc", zoneLabel: "PCMC", responseTime: "60–90 Mins", landmarks: "Talegaon Chowk, MIDC Phase 1 & 2", popularFor: ["Industrial AC", "Appliance AMC", "Water Coolers"] },

  // East Pune
  { name: "Kharadi", pincode: "411014", zone: "east", zoneLabel: "East Pune", responseTime: "45–60 Mins", landmarks: "EON Free Zone, World Trade Center", popularFor: ["Inverter AC", "Side-by-Side Fridge", "Washer"] },
  { name: "Viman Nagar", pincode: "411014", zone: "east", zoneLabel: "East Pune", responseTime: "45–60 Mins", landmarks: "Phoenix Marketcity, Symbiosis", popularFor: ["AC Servicing", "Microwave", "Washing Machine"] },
  { name: "Kalyani Nagar", pincode: "411006", zone: "east", zoneLabel: "East Pune", responseTime: "45–60 Mins", landmarks: "East Avenue, Joggers Park, Trump Towers", popularFor: ["Premium Appliances", "AC Maintenance", "Fridge"] },
  { name: "Magarpatta City", pincode: "411028", zone: "east", zoneLabel: "East Pune", responseTime: "45–60 Mins", landmarks: "Cybercity, Seasons Mall, Destination Centre", popularFor: ["Split AC", "Front Load Washer", "Microwave"] },
  { name: "Hadapsar", pincode: "411028", zone: "east", zoneLabel: "East Pune", responseTime: "45–60 Mins", landmarks: "Gadital, Solapur Road, Amanora Park Town", popularFor: ["Washing Machine", "Refrigerator", "AC Service"] },
  { name: "Wadgaon Sheri", pincode: "411014", zone: "east", zoneLabel: "East Pune", responseTime: "45–60 Mins", landmarks: "Somnath Nagar, Kalyani Nagar Bridge", popularFor: ["AC Repair", "Fridge Gas Refill", "Geyser"] },
  { name: "Koregaon Park", pincode: "411001", zone: "east", zoneLabel: "East Pune", responseTime: "45–60 Mins", landmarks: "North Main Road, South Main Road, Osho", popularFor: ["All Premium Brands", "AC Jet Cleaning", "Washer"] },
  { name: "Yerawada", pincode: "411006", zone: "east", zoneLabel: "East Pune", responseTime: "45–60 Mins", landmarks: "Commerzone, Golf Course", popularFor: ["Fridge", "Washing Machine", "AC Repair"] },
  { name: "Chandan Nagar & Mundhwa", pincode: "411014", zone: "east", zoneLabel: "East Pune", responseTime: "45–60 Mins", landmarks: "Mundhwa Bridge, Kharadi Bypass", popularFor: ["AC Service", "Washing Machine", "Geyser"] },
  { name: "Wagholi", pincode: "412207", zone: "east", zoneLabel: "East Pune", responseTime: "60–90 Mins", landmarks: "Bakori Road, Raisoni College, Lexicon", popularFor: ["AC Repair", "Refrigerator", "Washing Machine"] },

  // Central & South Pune
  { name: "Kothrud", pincode: "411038", zone: "central", zoneLabel: "Central & South", responseTime: "45–60 Mins", landmarks: "MIT College, Vanaz Corner, Paud Road", popularFor: ["AC Deep Clean", "Washing Machine", "Fridge"] },
  { name: "Karve Nagar & Warje", pincode: "411052", zone: "central", zoneLabel: "Central & South", responseTime: "45–60 Mins", landmarks: "Cummins College, Warje Flyover", popularFor: ["Geyser", "Refrigerator", "AC Service"] },
  { name: "Deccan & FC Road", pincode: "411004", zone: "central", zoneLabel: "Central & South", responseTime: "45–60 Mins", landmarks: "Goodluck Chowk, Fergusson College", popularFor: ["All Appliances", "Microwave", "AC"] },
  { name: "Shivajinagar & Model Colony", pincode: "411005", zone: "central", zoneLabel: "Central & South", responseTime: "45–60 Mins", landmarks: "Agricultural College, Deep Bungalow Chowk", popularFor: ["AC Repair", "Washing Machine", "Fridge"] },
  { name: "Camp & MG Road", pincode: "411001", zone: "central", zoneLabel: "Central & South", responseTime: "45–60 Mins", landmarks: "East Street, Aurora Towers, Pune Station", popularFor: ["AC Repair", "Refrigerator", "Washer"] },
  { name: "Swargate & Mukund Nagar", pincode: "411042", zone: "central", zoneLabel: "Central & South", responseTime: "45–60 Mins", landmarks: "Swargate Bus Depot, Laxmi Narayan", popularFor: ["Washing Machine", "Fridge Gas", "Geyser"] },
  { name: "Bibwewadi & Sahakar Nagar", pincode: "411037", zone: "central", zoneLabel: "Central & South", responseTime: "45–60 Mins", landmarks: "Padmavati Temple, Market Yard", popularFor: ["AC Installation", "Refrigerator", "Washer"] },
  { name: "Katraj & Dhankawadi", pincode: "411046", zone: "central", zoneLabel: "Central & South", responseTime: "60–90 Mins", landmarks: "Katraj Zoo, Bharati Vidyapeeth", popularFor: ["Geyser Repair", "Washing Machine", "Fridge"] },
  { name: "Sinhagad Road & Nanded City", pincode: "411041", zone: "central", zoneLabel: "Central & South", responseTime: "45–60 Mins", landmarks: "Nanded City Gate, Manik Baug", popularFor: ["AC Repair", "Washing Machine", "Fridge"] },
  { name: "Wanowrie & Kondhwa", pincode: "411048", zone: "central", zoneLabel: "Central & South", responseTime: "45–60 Mins", landmarks: "Salunke Vihar, NIBM Road, Ruby Hall", popularFor: ["All Appliances", "Inverter AC", "Washer"] },
  { name: "Undri & Mohammed Wadi", pincode: "411060", zone: "central", zoneLabel: "Central & South", responseTime: "60–90 Mins", landmarks: "Corinthians Club, Bishop's School", popularFor: ["AC Service", "Washing Machine", "Geyser"] }
];

const faqs = [
  {
    q: "Do you charge extra travel fees for distant locations like Hinjawadi Phase 3 or Chakan?",
    a: "Never! We maintain mobile service vans with technicians stationed locally in West Pune, PCMC, East Pune, and Central Pune. There are zero extra travel or distance surcharge fees anywhere within our service radius."
  },
  {
    q: "How fast can a technician arrive at my home?",
    a: "In key hubs like Wakad, Hinjawadi, Baner, Pimple Saudagar, Kharadi, Kothrud, and Viman Nagar, our average arrival time is 45 to 60 minutes. In peripheral areas, we guarantee doorstep arrival within 90 minutes."
  },
  {
    q: "Are your technicians permitted in private high-rise societies?",
    a: "Yes. All our technicians carry official KK Multi Services company ID cards, uniform attire, and complete background-verified credentials required by society security and MyGate / NoBrokerHood gate passes."
  },
  {
    q: "What if my specific society or locality is not listed?",
    a: "If your area is anywhere in Pune, PCMC, or within 35 km of the metropolitan area, we service it! Simply call our hotline or submit an online request and we will dispatch the nearest technician."
  }
];

export default function AreasPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedZone, setSelectedZone] = useState<string>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filteredLocalities = useMemo(() => {
    return puneLocalities.filter((item) => {
      const matchesZone = selectedZone === "all" || item.zone === selectedZone;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.pincode.includes(query) ||
        item.landmarks.toLowerCase().includes(query) ||
        item.zoneLabel.toLowerCase().includes(query);
      return matchesZone && matchesSearch;
    });
  }, [searchQuery, selectedZone]);

  return (
    <main id="top" className="min-h-screen font-sans bg-slate-50 text-slate-900 flex flex-col">
      {/* Top Header Bar */}
      <TopBar />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Header */}
      <section className="relative bg-kk-blue text-white py-16 md:py-24 overflow-hidden border-b border-white/10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-kk-teal/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-20 left-10 w-80 h-80 bg-kk-red/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-kk-teal" />
            <span className="text-kk-teal">Areas We Serve</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-white mb-6 backdrop-blur-sm">
              <Navigation className="w-3.5 h-3.5 text-kk-teal" />
              <span>Pune & PCMC Rapid Doorstep Coverage</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
              Appliance Repair In Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-kk-teal via-cyan-300 to-white">Corner of Pune</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal mb-8">
              We operate dedicated mobile service vans across 40+ Pune & PCMC neighborhoods. Enjoy 45–60 minute express arrival, zero distance surcharges, and factory-genuine spare parts.
            </p>

            {/* Quick search input in hero */}
            <div className="relative max-w-xl">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                placeholder="Search your area or pincode (e.g. Wakad, Hinjawadi, 411057, Kharadi)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none shadow-2xl shadow-slate-950/20"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700 bg-slate-100 px-2 py-1 rounded"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Zone Filters Bar */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-[68px] md:top-[76px] z-40 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
              {[
                { id: "all", label: `All Zones (${puneLocalities.length})` },
                { id: "west", label: "West Pune & IT Hub" },
                { id: "pcmc", label: "PCMC & Pimpri" },
                { id: "east", label: "East Pune & Kharadi" },
                { id: "central", label: "Central & South Pune" }
              ].map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(zone.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                    selectedZone === zone.id
                      ? "bg-kk-blue text-white shadow-md shadow-kk-blue/20"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {zone.label}
                </button>
              ))}
            </div>

            <div className="text-xs font-bold text-slate-500 shrink-0">
              Showing <span className="text-kk-blue font-extrabold">{filteredLocalities.length}</span> serviced locations
            </div>

          </div>
        </div>
      </section>

      {/* Localities Grid */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        {filteredLocalities.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 max-w-lg mx-auto">
            <MapPin className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">No exact locality match for "{searchQuery}"</h3>
            <p className="text-xs text-slate-500 mb-5">
              Don't worry! We cover all areas across Pune & PCMC. Call our dispatch manager directly to book your technician.
            </p>
            <a 
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-kk-teal text-white font-bold text-sm shadow-md hover:bg-kk-teal-light transition-all"
            >
              <Phone className="w-4 h-4" /> Call +91 98765 43210
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLocalities.map((item) => (
              <div 
                key={item.name}
                className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md shadow-slate-900/5 hover:shadow-xl hover:border-kk-teal/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badge & Time */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-kk-blue/5 text-kk-blue border border-kk-blue/10">
                      {item.zoneLabel}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                      <Clock className="w-3 h-3" /> {item.responseTime}
                    </span>
                  </div>

                  {/* Title & Pin */}
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-kk-blue transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-xs font-bold text-slate-400">
                      PIN {item.pincode}
                    </span>
                  </div>

                  {/* Landmark */}
                  <p className="text-xs text-slate-500 mb-4 flex items-start gap-1.5 leading-relaxed">
                    <MapPin className="w-3.5 h-3.5 text-kk-teal shrink-0 mt-0.5" />
                    <span>{item.landmarks}</span>
                  </p>

                  {/* Popular Services Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.popularFor.map((srv, idx) => (
                      <span key={idx} className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <a 
                    href="tel:+919876543210"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-kk-blue transition-colors"
                    aria-label={`Call technician for ${item.name}`}
                  >
                    <Phone className="w-4 h-4" />
                  </a>

                  <Link 
                    href={`/contact#book`}
                    className="flex-1 text-center py-2.5 px-4 rounded-xl bg-kk-teal hover:bg-kk-teal-light text-white text-xs font-bold transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-1.5"
                  >
                    Book in {item.name.split(" ")[0]} <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Coverage Promise Banner */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-kk-teal/10 flex items-center justify-center text-kk-teal shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-base mb-1">Local Dedicated Service Vans</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Technicians are stationed directly within each Pune zone, cutting commute delays and guaranteeing 45–60 min doorstep arrival.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-kk-blue/10 flex items-center justify-center text-kk-blue shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-base mb-1">Zero Distance Surcharge</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Whether you reside in central Kothrud, Hinjawadi Phase 3, or peripheral Moshi, our standard low inspection fee applies equally.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-base mb-1">Gated Community Security Compliant</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  All repair specialists carry verified identity cards and comply with society entry protocols on MyGate and NoBrokerHood.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-900/5 border border-slate-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-kk-teal uppercase tracking-wider block mb-1">
                Central Operations & Hub
              </span>
              <h3 className="text-2xl font-black text-[#0b1c3d]">Pune Metropolitan Service Network</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">Dispatched daily from Sector 45 Central Service Hub across all 4 zones.</p>
            </div>
            <a 
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-kk-blue hover:bg-kk-blue-light text-white text-xs font-bold transition-all shadow-md shrink-0"
            >
              <Phone className="w-4 h-4 text-kk-teal" /> Call Dispatch Desk
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden shadow-inner border border-slate-200">
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
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kk-teal/10 text-kk-teal text-xs font-bold mb-3 uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" /> Pune Service FAQ
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0b1c3d]">
              Frequently Asked Questions About Local Coverage
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm"
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
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
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
