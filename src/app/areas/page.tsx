"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
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
  Navigation
} from "lucide-react";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useBookingModal } from "@/context/BookingModalContext";

interface HeroMapPin {
  name: string;
  x: number;
  y: number;
  delay: number;
  pulsePeriod: number;
}

const heroMapPins: HeroMapPin[] = [
  { name: "Ravet", x: 57.5, y: 16.5, delay: 0.15, pulsePeriod: 3.2 },
  { name: "Nigdi", x: 65.5, y: 16.0, delay: 0.75, pulsePeriod: 2.8 },
  { name: "Akurdi", x: 62.0, y: 24.0, delay: 0.35, pulsePeriod: 3.6 },
  { name: "Punawale", x: 54.5, y: 29.0, delay: 1.15, pulsePeriod: 3.0 },
  { name: "Chinchwad", x: 66.0, y: 32.5, delay: 0.45, pulsePeriod: 2.9 },
  { name: "Pimpri", x: 73.0, y: 31.0, delay: 0.95, pulsePeriod: 3.5 },
  { name: "Mahalunge", x: 52.5, y: 40.0, delay: 0.6, pulsePeriod: 3.1 },
  { name: "Wakad", x: 61.0, y: 40.0, delay: 0.2, pulsePeriod: 2.7 },
  { name: "Aundh", x: 68.5, y: 43.5, delay: 1.35, pulsePeriod: 3.4 },
  { name: "Baner", x: 58.0, y: 47.0, delay: 0.5, pulsePeriod: 3.7 },
  { name: "Balewadi", x: 58.5, y: 55.0, delay: 0.25, pulsePeriod: 2.8 },
  { name: "Pashan & Sus", x: 57.5, y: 64.0, delay: 0.85, pulsePeriod: 3.3 },
  { name: "Bavdhan", x: 66.0, y: 67.5, delay: 1.25, pulsePeriod: 3.0 },
];

export interface PuneArea {
  name: string;
  pincode: string;
  zone: "balewadi" | "pcmc" | "pmc" | "pmrda";
  zoneLabel: string;
  subZone: string;
  responseTime: string;
  landmarks: string;
  popularFor: string[];
}

export const puneLocalities: PuneArea[] = [
  // ==========================================
  // 1. BALEWADI & SURROUNDING POCKETS (West Pune Commercial/Residential Core)
  // ==========================================
  {
    name: "Balewadi High Street (BHS)",
    pincode: "411045",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "Commercial & Lifestyle Hub",
    responseTime: "30–45 Mins",
    landmarks: "Main commercial & lifestyle strip, cafes, retail, luxury high-rises and corporate hubs",
    popularFor: ["Inverter AC", "Side-by-Side Fridge", "Front Load Washer"]
  },
  {
    name: "Balewadi Stadium Area",
    pincode: "411045",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "Sports City & Mahalunge Link",
    responseTime: "30–45 Mins",
    landmarks: "Shree Shiv Chhatrapati Sports Complex & Mahalunge road connections",
    popularFor: ["AC Repair", "Washing Machine", "Geyser Repair"]
  },
  {
    name: "Balewadi Gaon",
    pincode: "411045",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "Central Settlement",
    responseTime: "30–45 Mins",
    landmarks: "Central village, old settlement, and main local market area",
    popularFor: ["Refrigerator Repair", "Washing Machine", "Microwave"]
  },
  {
    name: "Patil Nagar & Laxman Nagar",
    pincode: "411045",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "High-Density Residential",
    responseTime: "30–45 Mins",
    landmarks: "High-density residential societies, family apartments & gated societies",
    popularFor: ["AC Deep Clean", "Front Load Washer", "Geyser"]
  },
  {
    name: "MITCON / Balewadi Phata",
    pincode: "411045",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "Expressway Entry",
    responseTime: "30–45 Mins",
    landmarks: "Entry junction from Baner Road / Mumbai-Bengaluru Highway corridor",
    popularFor: ["AC Installation", "Refrigerator", "RO Purifier"]
  },
  {
    name: "Cummins India & IRIS High Street Corridor",
    pincode: "411045",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "HQ & Corporate Zone",
    responseTime: "30–45 Mins",
    landmarks: "Heavenly Homes, Balewadi road, Cummins India campus, IRIS High Street",
    popularFor: ["Commercial AC", "Inverter AC", "All Home Appliances"]
  },
  {
    name: "Moze College & Datta Mandir Road",
    pincode: "411045",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "Educational & Residential",
    responseTime: "30–45 Mins",
    landmarks: "Educational & residential pocket, Datta Mandir, student & family societies",
    popularFor: ["AC Service", "Washing Machine", "Microwave"]
  },
  {
    name: "Samarth Colony & Ganraj Chowk",
    pincode: "411045",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "Premium Neighborhood",
    responseTime: "30–45 Mins",
    landmarks: "Premium residential neighborhood & internal avenues towards Baner",
    popularFor: ["Split AC", "Washing Machine", "Water Heater"]
  },
  {
    name: "Balewadi–Wakad Bridge Belt",
    pincode: "411045",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "PCMC Connecting Corridor",
    responseTime: "30–45 Mins",
    landmarks: "Connects Balewadi directly to PCMC (Wakad) across the Mula River",
    popularFor: ["AC Repair", "Refrigerator Gas Refill", "Washer"]
  },
  {
    name: "Amar Tech Park & Orchid Hotel Zone",
    pincode: "411045",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "Corporate Bypass Belt",
    responseTime: "30–45 Mins",
    landmarks: "Corporate tech parks, Orchid Hotel corridor along the Pune-Bangalore bypass",
    popularFor: ["Commercial AC", "Appliance AMC", "Chiller Repair"]
  },
  {
    name: "Ram Nagar & Dasra Chowk",
    pincode: "411045",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "Baner Border Residential",
    responseTime: "30–45 Mins",
    landmarks: "Internal residential networks connecting Balewadi to Baner",
    popularFor: ["AC Servicing", "Washing Machine", "Fridge"]
  },
  {
    name: "Kapil Malhar Area",
    pincode: "411045",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "Established Residential",
    responseTime: "30–45 Mins",
    landmarks: "Established residential societies border and green residential belts",
    popularFor: ["AC Repair", "Geyser", "Front Load Washer"]
  },
  {
    name: "Sutarwadi",
    pincode: "411021",
    zone: "balewadi",
    zoneLabel: "Balewadi Core",
    subZone: "Pashan & Highway Pocket",
    responseTime: "35–50 Mins",
    landmarks: "Connecting pocket between Balewadi, Pashan, and the Highway",
    popularFor: ["Washing Machine", "Fridge", "AC Gas Refill"]
  },

  // ==========================================
  // 2. PCMC (Pimpri-Chinchwad Municipal Corporation)
  // ==========================================
  // A. Western & Expressway Corridors (Adjacent to IT Parks & Highway)
  {
    name: "Wakad",
    pincode: "411057",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Western & Expressway",
    responseTime: "45–60 Mins",
    landmarks: "Datta Mandir, Kaspate Vasti, Bhumkar Chowk, Shankar Kalat Nagar, Mankar Chowk, Wakad Gaon",
    popularFor: ["AC Repair", "Washing Machine", "Fridge"]
  },
  {
    name: "Pimple Saudagar",
    pincode: "411027",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Western & Expressway",
    responseTime: "45–60 Mins",
    landmarks: "Kunai Icon Road, Roseland Residency, Govind Garden, PK Chowk, Rahatani Link Road",
    popularFor: ["Inverter AC", "Front Load Washer", "Side-by-Side Fridge"]
  },
  {
    name: "Pimple Nilakh",
    pincode: "411027",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Western & Expressway",
    responseTime: "45–60 Mins",
    landmarks: "Vishal Nagar, Kranti Nagar, Jagtap Dairy Chowk, Rakshak Society",
    popularFor: ["AC Servicing", "Washing Machine", "Refrigerator"]
  },
  {
    name: "Pimple Gurav",
    pincode: "411061",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Western & Expressway",
    responseTime: "45–60 Mins",
    landmarks: "Kate Puram, Sudarshan Nagar, Jawalkar Nagar, Srushti Chowk",
    popularFor: ["Refrigerator", "Geyser Repair", "Microwave"]
  },
  {
    name: "Thergaon",
    pincode: "411033",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Western & Expressway",
    responseTime: "45–60 Mins",
    landmarks: "Dange Chowk, 16 Number, Pawar Nagar, Belthika Nagar",
    popularFor: ["AC Repair", "Washing Machine", "Geyser"]
  },
  {
    name: "Tathawade",
    pincode: "411033",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Western & Expressway",
    responseTime: "45–60 Mins",
    landmarks: "JSPM College road, Mumbai Highway, Jeevan Nagar, Ashok Nagar",
    popularFor: ["AC Maintenance", "Washing Machine", "Fridge"]
  },
  {
    name: "Punawale",
    pincode: "411033",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Western & Expressway",
    responseTime: "45–60 Mins",
    landmarks: "Koyte Vasti, Malwadi, Kate Wasti, 18 Latitude area",
    popularFor: ["AC Installation", "Washer", "Refrigerator"]
  },
  {
    name: "Ravet",
    pincode: "411044",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Western & Expressway",
    responseTime: "45–60 Mins",
    landmarks: "Shinde Vasti, Kiwale-Ravet BRTS corridor, Basket Bridge, Bhadavale Vasti, Mukai Chowk",
    popularFor: ["AC Repair", "Washing Machine", "Water Heater"]
  },
  {
    name: "Kiwale & Mamurdi",
    pincode: "412101",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Western & Expressway",
    responseTime: "45–60 Mins",
    landmarks: "Expressway entry points, Symbiosis Skills University area",
    popularFor: ["AC Servicing", "Fridge Gas Refill", "Geyser"]
  },

  // B. Central & Pradhikaran Zones
  {
    name: "Pimpri",
    pincode: "411018",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Central & Pradhikaran",
    responseTime: "45–60 Mins",
    landmarks: "Pimpri Camp, Deluxe Chowk, Morwadi, Finolex Chowk, Sai Chowk, Shagun Chowk, Pimpri Waghere, Kharalwadi",
    popularFor: ["Refrigerator", "AC Deep Clean", "Washer"]
  },
  {
    name: "Chinchwad",
    pincode: "411033",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Central & Pradhikaran",
    responseTime: "45–60 Mins",
    landmarks: "Chinchwad Gaon, Chinchwad Station, Chaphekar Chowk, Elpro Mall area, Darshan Hall area, Thermax Chowk",
    popularFor: ["Industrial AC", "Appliance AMC", "Washing Machine"]
  },
  {
    name: "Akurdi",
    pincode: "411044",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Central & Pradhikaran",
    responseTime: "45–60 Mins",
    landmarks: "Akurdi Railway Station, Khandoba Mal, D.Y. Patil College area, Ganganagar, Pradhikaran Sector 29",
    popularFor: ["AC Repair", "Washing Machine", "Microwave"]
  },
  {
    name: "Nigdi & Pradhikaran",
    pincode: "411044",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Central & Pradhikaran",
    responseTime: "45–60 Mins",
    landmarks: "Sectors 24 to 28, Bhakti-Shakti Chowk, Appu Ghar, Yamuna Nagar, Rupee Nagar, Ota Scheme",
    popularFor: ["Fridge Cooling", "AC Servicing", "Geyser"]
  },
  {
    name: "Kalewadi",
    pincode: "411017",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Central & Pradhikaran",
    responseTime: "45–60 Mins",
    landmarks: "Kalewadi Phata, Vijayanagar, Jyotiba Garden, Nadhe Nagar",
    popularFor: ["Washing Machine", "AC Repair", "Fridge"]
  },
  {
    name: "Rahatani",
    pincode: "411017",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Central & Pradhikaran",
    responseTime: "45–60 Mins",
    landmarks: "Shivar Garden, Nakhate Vasti, Kalewadi Link Road",
    popularFor: ["Front Load Washer", "AC Gas Refill", "Refrigerator"]
  },
  {
    name: "Sangvi (Old & New)",
    pincode: "411027",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Central & Pradhikaran",
    responseTime: "45–60 Mins",
    landmarks: "Old Sangvi, New Sangvi, Dapodi-Sangvi Bridge area, Shitole Nagar",
    popularFor: ["AC Service", "Washing Machine", "Geyser"]
  },

  // C. Industrial & North PCMC Corridors
  {
    name: "Bhosari",
    pincode: "411026",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Industrial & North PCMC",
    responseTime: "60–90 Mins",
    landmarks: "Bhosari Gaon, MIDC, Landewadi, Dighi Road, Shantinagar, Indrayani Nagar, Gavali Matha, Nehrunagar",
    popularFor: ["Commercial AC", "Home Fridge", "Washing Machine"]
  },
  {
    name: "Moshi",
    pincode: "412105",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Industrial & North PCMC",
    responseTime: "60–90 Mins",
    landmarks: "Spine Road, Moshi Toll Plaza, International Exhibition Centre (PIECC), Borhadewadi, Dudulgaon, Gandharva Nagari",
    popularFor: ["AC Deep Clean", "Washing Machine", "Geyser"]
  },
  {
    name: "Chikhali",
    pincode: "411062",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Industrial & North PCMC",
    responseTime: "60–90 Mins",
    landmarks: "Kudalwadi, Jadhavwadi, Patilnagar, Moi, Nighoje auto cluster borders",
    popularFor: ["Refrigerator", "Washing Machine", "AC Repair"]
  },
  {
    name: "Talawade",
    pincode: "411062",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Industrial & North PCMC",
    responseTime: "60–90 Mins",
    landmarks: "Talawade IT Park (Capgemini, Fujitsu), Triveninagar",
    popularFor: ["AC Maintenance", "Water Cooler", "Appliance AMC"]
  },
  {
    name: "Charholi Budruk, Dighi & Bopkhel",
    pincode: "412105",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Industrial & North PCMC",
    responseTime: "60–90 Mins",
    landmarks: "Alandi Road corridor, Wadmukhwadi, Chovisawadi, Magazine Chowk",
    popularFor: ["AC Servicing", "Washing Machine", "Fridge"]
  },
  {
    name: "Dapodi, Kasarwadi & Phugewadi",
    pincode: "411012",
    zone: "pcmc",
    zoneLabel: "PCMC Limits",
    subZone: "Industrial & North PCMC",
    responseTime: "45–60 Mins",
    landmarks: "Old Pune-Mumbai Highway belt, Kundan Nagar, Nashik Phata",
    popularFor: ["AC Repair", "Refrigerator", "Washer"]
  },

  // ==========================================
  // 3. PMC (Pune Municipal Corporation)
  // ==========================================
  // A. West Pune (Highway, Foothills & Bordering Balewadi)
  {
    name: "Baner",
    pincode: "411045",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "West Pune",
    responseTime: "30–45 Mins",
    landmarks: "Baner Road, Pan Card Club Road, Veerbhadra Nagar, Pallod Farms, Baner Pashan Link Road (BPLR), Prabhat Nagar",
    popularFor: ["All Appliances", "Inverter AC", "Front Load Washer"]
  },
  {
    name: "Aundh",
    pincode: "411007",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "West Pune",
    responseTime: "30–45 Mins",
    landmarks: "Parihar Chowk, ITI Road, DP Road, Sindh Society, National Society, Bremen Chowk, Sanewadi",
    popularFor: ["Refrigerator", "AC Deep Clean", "Microwave"]
  },
  {
    name: "Pashan",
    pincode: "411021",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "West Pune",
    responseTime: "30–45 Mins",
    landmarks: "Pashan Lake, Sus Road, Abhimanshree Society, Pashan Gaon, NDA Road (North end)",
    popularFor: ["Geyser Repair", "Washing Machine", "AC"]
  },
  {
    name: "Sus & Mahalunge",
    pincode: "411021",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "West Pune",
    responseTime: "30–45 Mins",
    landmarks: "Sus Gaon, Sus-Hinjawadi Link Road, Nande, Chande, Godrej Hillside area",
    popularFor: ["AC Repair", "Washing Machine", "Fridge"]
  },
  {
    name: "Bavdhan",
    pincode: "411021",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "West Pune",
    responseTime: "30–45 Mins",
    landmarks: "Bavdhan Khurd, Bavdhan Budruk, Chandani Chowk, Bhunde Vasti, Ram Nadi area",
    popularFor: ["Refrigerator", "AC Repair", "Water Heater"]
  },
  {
    name: "Kothrud",
    pincode: "411038",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "West Pune",
    responseTime: "45–60 Mins",
    landmarks: "Paud Road, Karve Road, MIT College, Mayur Colony, Vanaz, Ideal Colony, Dahanukar Colony, Bhusari Colony, Mahatma Society, Rambaug Colony, Gandhi Bhavan",
    popularFor: ["AC Deep Clean", "Washing Machine", "Fridge"]
  },
  {
    name: "Karve Nagar & Warje",
    pincode: "411052",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "West Pune",
    responseTime: "45–60 Mins",
    landmarks: "Warje Malwadi, Kakade City, Cummins College, Dahanukar Circle, Rajaram Bridge area",
    popularFor: ["Geyser", "Refrigerator", "AC Service"]
  },
  {
    name: "Shivane, Uttamnagar & Kopare",
    pincode: "411023",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "West Pune",
    responseTime: "45–60 Mins",
    landmarks: "NDA approach road extensions, Canal Road residential clusters",
    popularFor: ["Washing Machine", "AC Repair", "Refrigerator"]
  },
  {
    name: "Erandwane & Law College Road",
    pincode: "411004",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "West Pune",
    responseTime: "45–60 Mins",
    landmarks: "Film Institute (FTII), Nal Stop, Bhandarkar Road, Mehendale Garage",
    popularFor: ["AC Servicing", "Front Load Washer", "Fridge"]
  },

  // B. Central Pune, Core City & Cantonments
  {
    name: "Shivajinagar",
    pincode: "411005",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "Central & Cantonments",
    responseTime: "45–60 Mins",
    landmarks: "FC Road, JM Road, SPPU (Pune University), Model Colony, BMCC Road, Senapati Bapat Road (SB Road), Wakdewadi, Patil Estate",
    popularFor: ["AC Repair", "Washing Machine", "Fridge"]
  },
  {
    name: "Deccan Gymkhana & Prabhat Road",
    pincode: "411004",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "Central & Cantonments",
    responseTime: "45–60 Mins",
    landmarks: "Kamala Nehru Park, PYC Hindu Gymkhana, Bhandarkar Road",
    popularFor: ["All Appliances", "Microwave", "AC"]
  },
  {
    name: "Historic Peths (Old Pune Core)",
    pincode: "411030",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "Central & Cantonments",
    responseTime: "45–60 Mins",
    landmarks: "Sadashiv Peth, Narayan Peth, Shaniwar Peth, Kasba Peth, Budhwar Peth, Shukrawar Peth, Raviwar Peth, Somwar Peth, Mangalwar Peth, Rasta Peth, Bhavani Peth, Nana Peth, Ganj Peth, Ghorpade Peth",
    popularFor: ["Refrigerator", "Washer", "Geyser Repair"]
  },
  {
    name: "Swargate & Parvati",
    pincode: "411009",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "Central & Cantonments",
    responseTime: "45–60 Mins",
    landmarks: "Parvati Darshan, Parvati Paytha, Saras Baug, Mukund Nagar, Maharshi Nagar",
    popularFor: ["Washing Machine", "Fridge Gas Refill", "Geyser"]
  },
  {
    name: "Pune Cantonment (Camp)",
    pincode: "411001",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "Central & Cantonments",
    responseTime: "45–60 Mins",
    landmarks: "MG Road, East Street, SGS Mall, Pune Railway Station area, Sassoon, Race Course",
    popularFor: ["AC Repair", "Refrigerator", "Washer"]
  },
  {
    name: "Khadki (Kirkee) Cantonment",
    pincode: "411003",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "Central & Cantonments",
    responseTime: "45–60 Mins",
    landmarks: "Khadki Bazar, Range Hills, Ammunition Factory area, Mula Road",
    popularFor: ["AC Servicing", "Washing Machine", "Fridge"]
  },
  {
    name: "Bund Garden & Boat Club Road",
    pincode: "411001",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "Central & Cantonments",
    responseTime: "45–60 Mins",
    landmarks: "Premium central corporate & residential riverfront, Bund Garden Road",
    popularFor: ["Premium Appliances", "Inverter AC", "Side-by-Side Fridge"]
  },

  // C. East Pune & Kharadi Belt
  {
    name: "Viman Nagar",
    pincode: "411014",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "East Pune & Kharadi",
    responseTime: "45–60 Mins",
    landmarks: "Phoenix Marketcity area, Dutta Mandir Chowk, Symbiosis Campus road, Rohan Mithila",
    popularFor: ["AC Servicing", "Microwave", "Washing Machine"]
  },
  {
    name: "Kalyani Nagar",
    pincode: "411006",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "East Pune & Kharadi",
    responseTime: "45–60 Mins",
    landmarks: "East Avenue, Central Avenue, Jogger’s Park, Gold Adlabs area, Ramwadi",
    popularFor: ["Premium Appliances", "AC Maintenance", "Fridge"]
  },
  {
    name: "Koregaon Park (KP)",
    pincode: "411001",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "East Pune & Kharadi",
    responseTime: "45–60 Mins",
    landmarks: "North Main Road, South Main Road, Osho Ashram, Lane 1 to Lane 8, Pingale Vasti",
    popularFor: ["All Premium Brands", "AC Jet Cleaning", "Washer"]
  },
  {
    name: "Kharadi",
    pincode: "411014",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "East Pune & Kharadi",
    responseTime: "45–60 Mins",
    landmarks: "EON Free Zone, World Trade Center, Radisson Blu, Thite Vasti, Rakshak Nagar, Grant Road, Zensar IT Tower",
    popularFor: ["Inverter AC", "Side-by-Side Fridge", "Washer"]
  },
  {
    name: "Wadgaon Sheri & Chandan Nagar",
    pincode: "411014",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "East Pune & Kharadi",
    responseTime: "45–60 Mins",
    landmarks: "Brahma Suncity, Anand Park, Somnath Nagar",
    popularFor: ["AC Repair", "Fridge Gas Refill", "Geyser"]
  },
  {
    name: "Yerawada & Shastrinagar",
    pincode: "411006",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "East Pune & Kharadi",
    responseTime: "45–60 Mins",
    landmarks: "Business Bay, Commerzone IT Park, Gunjan Chowk, Tarnaka",
    popularFor: ["Fridge", "Washing Machine", "AC Repair"]
  },
  {
    name: "Dhanori & Lohgaon",
    pincode: "411015",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "East Pune & Kharadi",
    responseTime: "45–60 Mins",
    landmarks: "Pune International Airport vicinity, Porwal Road, Lohegaon Gaon, Kalwad Wasti, Viman Nagar extension",
    popularFor: ["AC Service", "Washing Machine", "Geyser"]
  },
  {
    name: "Mundhwa & Keshav Nagar",
    pincode: "411036",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "East Pune & Kharadi",
    responseTime: "45–60 Mins",
    landmarks: "Pingale Vasti, Magarpatta North gate, Manjari Road starts here",
    popularFor: ["AC Service", "Washing Machine", "Geyser"]
  },
  {
    name: "Wagholi",
    pincode: "412207",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "East Pune & Kharadi",
    responseTime: "60–90 Mins",
    landmarks: "Nagar Road, Baif Road, Ivy Estate, Ubale Nagar, Bakori Road",
    popularFor: ["AC Repair", "Refrigerator", "Washing Machine"]
  },
  {
    name: "Vishrantwadi & Tingre Nagar",
    pincode: "411015",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "East Pune & Kharadi",
    responseTime: "45–60 Mins",
    landmarks: "Alandi Road, Kalas, Dighi border, Tingre Nagar Airport Road",
    popularFor: ["AC Repair", "Washing Machine", "Fridge"]
  },

  // D. South & South-East Pune
  {
    name: "Hadapsar",
    pincode: "411028",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "South & South-East",
    responseTime: "45–60 Mins",
    landmarks: "Magarpatta City, Amanora Park Town, Gadital, Vaiduwadi, Sadesatara Nali, Sasane Nagar, Kale Padal, Ramtekdi",
    popularFor: ["Washing Machine", "Refrigerator", "AC Service"]
  },
  {
    name: "Wanowrie & Fatima Nagar",
    pincode: "411040",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "South & South-East",
    responseTime: "45–60 Mins",
    landmarks: "Command Hospital area, Kedari Nagar, Sacred Heart Town, SRPF Camp",
    popularFor: ["AC Servicing", "Front Load Washer", "Microwave"]
  },
  {
    name: "Kondhwa",
    pincode: "411048",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "South & South-East",
    responseTime: "45–60 Mins",
    landmarks: "Kondhwa Khurd, Kondhwa Budruk, Lullanagar, Salunke Vihar, NIBM Road, Kamela, Jyoti Restaurant Chowk",
    popularFor: ["All Appliances", "Inverter AC", "Washer"]
  },
  {
    name: "Undri, Mohammedwadi & Pisoli",
    pincode: "411060",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "South & South-East",
    responseTime: "60–90 Mins",
    landmarks: "Delhi Public School area, Corinthians Club, Nyati County",
    popularFor: ["AC Service", "Washing Machine", "Geyser"]
  },
  {
    name: "Bibwewadi & Market Yard",
    pincode: "411037",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "South & South-East",
    responseTime: "45–60 Mins",
    landmarks: "Gangadham, Salisbury Park, Vidyapeeth Marg, Chintamani Nagar",
    popularFor: ["AC Installation", "Refrigerator", "Washer"]
  },
  {
    name: "Dhankawadi, Sahakar Nagar & Padmavati",
    pincode: "411043",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "South & South-East",
    responseTime: "45–60 Mins",
    landmarks: "Taljai Hills, Vasant Baug, Balaji Nagar",
    popularFor: ["Geyser", "Refrigerator", "AC Service"]
  },
  {
    name: "Katraj & Ambegaon",
    pincode: "411046",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "South & South-East",
    responseTime: "45–60 Mins",
    landmarks: "Katraj Snake Park, Bharati Vidyapeeth, Ambegaon Budruk, Ambegaon Khurd, Sukhsagar Nagar, Gokul Nagar, Mangdewadi",
    popularFor: ["Geyser Repair", "Washing Machine", "Fridge"]
  },
  {
    name: "Sinhagad Road Belt",
    pincode: "411041",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "South & South-East",
    responseTime: "45–60 Mins",
    landmarks: "Vadgaon Budruk, Anand Nagar, Manik Baug, Dhayari, Narhe, Nanded City, Khadakwasla, Kirkatwadi, DSK Vishwa, Abhiruchi Mall",
    popularFor: ["AC Repair", "Washing Machine", "Fridge"]
  },
  {
    name: "Fursungi & Uruli Devachi",
    pincode: "412308",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "South & South-East",
    responseTime: "60–90 Mins",
    landmarks: "SP Infocity (IT Park), Bhekrai Nagar, Saswad Road junction",
    popularFor: ["AC Maintenance", "Washing Machine", "Geyser"]
  },
  {
    name: "Handewadi & Yewalewadi",
    pincode: "411028",
    zone: "pmc",
    zoneLabel: "PMC Limits",
    subZone: "South & South-East",
    responseTime: "60–90 Mins",
    landmarks: "Emerging south-eastern residential hubs, Kondhwa-Saswad link",
    popularFor: ["AC Service", "Fridge", "Washing Machine"]
  },

  // ==========================================
  // 4. THE REMAINING IT HUBS & EXTENDED PMRDA LIMITS (Beyond PMC/PCMC)
  // ==========================================
  // A. The Hinjawadi & Western IT Belt
  {
    name: "Hinjawadi Phase 1",
    pincode: "411057",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Hinjawadi & Western IT",
    responseTime: "30–45 Mins",
    landmarks: "Shivaji Chowk, Wipro Circle, Quadron IT Park, Rajiv Gandhi Infotech Park",
    popularFor: ["Inverter AC", "Front Load Washer", "Side-by-Side Fridge"]
  },
  {
    name: "Hinjawadi Phase 2",
    pincode: "411057",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Hinjawadi & Western IT",
    responseTime: "35–50 Mins",
    landmarks: "Infosys Circle, Wipro Phase 2, Embassy TechZone campus",
    popularFor: ["AC Deep Clean", "Washing Machine", "Microwave"]
  },
  {
    name: "Hinjawadi Phase 3",
    pincode: "411057",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Hinjawadi & Western IT",
    responseTime: "40–55 Mins",
    landmarks: "Megapolis Circle, TCS, Tech Mahindra, Blue Ridge, Megapolis township",
    popularFor: ["Split AC", "Washing Machine", "Geyser"]
  },
  {
    name: "Marunji",
    pincode: "411057",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Hinjawadi & Western IT",
    responseTime: "40–55 Mins",
    landmarks: "Direct connection to Hinjawadi Phase 2/3, Life Republic area",
    popularFor: ["AC Installation", "Fridge", "Washer"]
  },
  {
    name: "Maan & Mulshi Highway",
    pincode: "411057",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Hinjawadi & Western IT",
    responseTime: "40–55 Mins",
    landmarks: "Maan village, Blue Ridge township, Megapolis approach",
    popularFor: ["AC Servicing", "Front Load Washer", "Fridge"]
  },
  {
    name: "Pirangut & Bhugaon",
    pincode: "412115",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Hinjawadi & Western IT",
    responseTime: "50–65 Mins",
    landmarks: "Lavasa Link Road, Manas Lake, Paud Road extensions",
    popularFor: ["Geyser", "Refrigerator", "AC Service"]
  },
  {
    name: "Lavale",
    pincode: "412115",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Hinjawadi & Western IT",
    responseTime: "45–60 Mins",
    landmarks: "Symbiosis International University Main Campus corridor",
    popularFor: ["AC Repair", "Washing Machine", "Fridge"]
  },
  {
    name: "Gahunje & Shirgaon",
    pincode: "412101",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Hinjawadi & Western IT",
    responseTime: "45–60 Mins",
    landmarks: "MCA International Cricket Stadium, Somatne Phata bypass",
    popularFor: ["AC Servicing", "Washing Machine", "Geyser"]
  },

  // B. Industrial & Peripheral Towns
  {
    name: "Chakan & Khed (North Auto Hub)",
    pincode: "410501",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Industrial & Peripheral",
    responseTime: "60–90 Mins",
    landmarks: "Chakan MIDC Phase 1 & 2, Mahalunge Ingle, Khed, Talegaon Chowk",
    popularFor: ["Industrial AC", "Appliance AMC", "Water Coolers"]
  },
  {
    name: "Talegaon Dabhade & Urse",
    pincode: "410506",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Industrial & Peripheral",
    responseTime: "60–90 Mins",
    landmarks: "General Motors / Urse industrial corridor, Old Pune-Mumbai Highway",
    popularFor: ["AC Servicing", "Refrigerator", "Geyser"]
  },
  {
    name: "Alandi & Dehu",
    pincode: "412105",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Industrial & Peripheral",
    responseTime: "60–90 Mins",
    landmarks: "Sant Tukaram Nagar, Indrayani River pilgrimage & residential zones",
    popularFor: ["Washing Machine", "Fridge", "Geyser"]
  },
  {
    name: "Shikrapur & Ranjangaon (East Industrial)",
    pincode: "412208",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Industrial & Peripheral",
    responseTime: "60–90 Mins",
    landmarks: "Ranjangaon MIDC (LG, Whirlpool, Fiat), Sanaswadi, Uruli Kanchan",
    popularFor: ["Commercial AC", "Appliance AMC", "Fridge"]
  },
  {
    name: "Saswad & Shirwal (South Emerging)",
    pincode: "412801",
    zone: "pmrda",
    zoneLabel: "IT Hubs & PMRDA",
    subZone: "Industrial & Peripheral",
    responseTime: "60–90 Mins",
    landmarks: "Khandala MIDC, Khed Shivapur, Pune-Satara Highway corridor",
    popularFor: ["AC Servicing", "Fridge Repair", "Washing Machine"]
  }
];

export default function AreasPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedZone, setSelectedZone] = useState<string>("all");
  const { openBookingModal } = useBookingModal();

  const filteredLocalities = useMemo(() => {
    return puneLocalities.filter((item) => {
      const matchesZone = selectedZone === "all" || item.zone === selectedZone;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        item.name.toLowerCase().includes(query) ||
        item.pincode.includes(query) ||
        item.landmarks.toLowerCase().includes(query) ||
        item.zoneLabel.toLowerCase().includes(query) ||
        item.subZone.toLowerCase().includes(query);
      return matchesZone && matchesSearch;
    });
  }, [searchQuery, selectedZone]);

  const zoneTabs = [
    { id: "all", label: "All Areas", count: puneLocalities.length },
    { id: "balewadi", label: "1. Balewadi Core", count: puneLocalities.filter((p) => p.zone === "balewadi").length },
    { id: "pcmc", label: "2. PCMC Limits", count: puneLocalities.filter((p) => p.zone === "pcmc").length },
    { id: "pmc", label: "3. PMC Limits", count: puneLocalities.filter((p) => p.zone === "pmc").length },
    { id: "pmrda", label: "4. IT Hubs & PMRDA", count: puneLocalities.filter((p) => p.zone === "pmrda").length }
  ];

  return (
    <main id="top" className="min-h-screen font-sans bg-slate-50 text-slate-900 flex flex-col">
      {/* Top Header Bar */}
      <TopBar />

      {/* Sticky Navbar */}
      <Navbar />

      {/* Hero Header - 16:4 Aspect Ratio */}
      <section
        className="relative text-white w-full aspect-[16/7] xs:aspect-[16/6] sm:aspect-[16/5] lg:aspect-[16/4] min-h-[420px] md:min-h-[360px] lg:min-h-0 flex items-center overflow-hidden bg-[#020712]"
        style={{ aspectRatio: "16 / 4" }}
      >
        {/* Background Image: hero_img_04.png */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/area/hero_img_04.png"
            alt="KK Multi Services Pune Coverage Map"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Left side background shadow till the text - rich deep contrast for crystal-clear readability */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[58%] lg:w-[48%] bg-gradient-to-r from-[#020712] via-[#020712]/95 via-[#020712]/75 to-transparent pointer-events-none z-[1]" />
          <div className="absolute inset-y-0 left-0 w-72 sm:w-[44%] bg-[#020712]/70 blur-3xl pointer-events-none z-[1]" />
        </div>

        {/* Location Pins Overlay directly on the map */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="relative w-full h-full max-w-[2172px] mx-auto">
            {heroMapPins.map((pin) => (
              <button
                key={pin.name}
                type="button"
                onClick={() => {
                  setSearchQuery(pin.name);
                  const el = document.getElementById("areas-list");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="absolute z-20 pointer-events-auto flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-[#041126]/90 hover:bg-[#08224d] border border-cyan-400/80 hover:border-cyan-300 text-white shadow-[0_0_12px_rgba(6,182,212,0.55)] hover:shadow-[0_0_22px_rgba(6,182,212,0.95)] transition-all duration-300 cursor-pointer group active:scale-95"
                style={{
                  left: `${pin.x}%`,
                  top: `${pin.y}%`,
                  animation: `pin-popup 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${pin.delay}s both, pin-pulse-random ${pin.pulsePeriod}s ease-in-out ${pin.delay + 0.6}s infinite`,
                }}
                title={`Click to view ${pin.name} doorstep service coverage`}
              >
                {/* Pin Icon with Radar Ripple */}
                <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-tr from-cyan-400 to-teal-300 text-slate-950 flex items-center justify-center shrink-0 shadow-xs">
                  <span
                    className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75 pointer-events-none"
                    style={{ animationDuration: `${pin.pulsePeriod}s`, animationDelay: `${pin.delay}s` }}
                  />
                  <MapPin className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-slate-950 fill-current relative z-10" />
                </div>
                {/* Location Name */}
                <span className="text-[9px] sm:text-[11px] lg:text-xs font-bold text-white tracking-tight whitespace-nowrap drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                  {pin.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Container (Left Column) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full py-5 sm:py-6 lg:py-6 pointer-events-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content (5 Cols) */}
            <div className="lg:col-span-5 max-w-lg pointer-events-auto">
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-200 mb-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-3.5 h-3.5 text-kk-teal" />
                <span className="text-kk-teal">Areas We Serve</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/15 border border-white/20 text-xs font-bold text-white mb-2 backdrop-blur-md shadow-sm">
                <Navigation className="w-3.5 h-3.5 text-kk-teal" />
                <span>80+ Localities: Balewadi, PCMC, PMC &amp; PMRDA</span>
              </div>

              <h1 className="text-xl xs:text-2xl sm:text-2xl md:text-3xl lg:text-[30px] xl:text-[34px] font-black text-white tracking-tight leading-[1.15] mb-2 sm:mb-2.5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                Doorstep Repair In <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-kk-teal via-cyan-300 to-white">
                  Every Corner of Pune
                </span>
              </h1>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium mb-3 sm:mb-3.5 max-w-md drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                Specialized mobile technician units stationed across Balewadi, PCMC twin cities, PMC central zones, and the Hinjawadi IT corridor. 30–60 min express arrival with transparent pricing.
              </p>

              {/* Quick search input in hero */}
              <div className="relative max-w-md shadow-2xl">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search locality, landmark or PIN (e.g. Balewadi High Street, Wakad)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-16 py-2.5 sm:py-3 rounded-xl bg-white text-slate-900 placeholder-slate-400 text-xs sm:text-sm font-medium focus:outline-none shadow-lg shadow-black/25"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-700 bg-slate-100 px-2 py-1 rounded cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: 7 Cols Spacer so the background map & KK service van shine through unobstructed */}
            <div className="lg:col-span-7 hidden lg:block pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Zone Filters Bar */}
      <section className="py-4 sm:py-5 bg-white border-b border-slate-200 sticky top-[68px] md:top-[76px] z-40 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">

            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {zoneTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedZone(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                    selectedZone === tab.id
                      ? "bg-kk-blue text-white shadow-md shadow-kk-blue/20"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                      selectedZone === tab.id ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            <div className="text-xs font-bold text-slate-500 shrink-0">
              Showing <span className="text-kk-blue font-extrabold">{filteredLocalities.length}</span> of {puneLocalities.length} serviced locations
            </div>

          </div>
        </div>
      </section>

      {/* Localities Grid */}
      <section id="areas-list" className="py-12 md:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">
        {filteredLocalities.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 max-w-lg mx-auto shadow-sm">
            <MapPin className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">No exact locality match for "{searchQuery}"</h3>
            <p className="text-xs text-slate-500 mb-5 leading-relaxed">
              Don't worry! KK Multi Services covers all gated societies and townships across Pune, PCMC &amp; PMRDA limits. Call our direct dispatch desk for express assignment.
            </p>
            <a
              href="tel:+917823038645"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-kk-teal text-white font-bold text-sm shadow-md hover:bg-kk-teal-light transition-all active:scale-95"
            >
              <Phone className="w-4 h-4" /> Call +91 78230 38645
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredLocalities.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-md shadow-slate-900/5 hover:shadow-xl hover:border-kk-teal/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Badges: Zone & Response Time */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md bg-kk-blue/5 text-kk-blue border border-kk-blue/10">
                        {item.zoneLabel}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
                        {item.subZone}
                      </span>
                    </div>

                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full shrink-0">
                      <Clock className="w-3 h-3" /> {item.responseTime}
                    </span>
                  </div>

                  {/* Title & Pin */}
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 group-hover:text-kk-blue transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-xs font-bold text-slate-400 shrink-0">
                      PIN {item.pincode}
                    </span>
                  </div>

                  {/* Landmarks */}
                  <p className="text-xs text-slate-600 mb-4 flex items-start gap-1.5 leading-relaxed">
                    <MapPin className="w-3.5 h-3.5 text-kk-teal shrink-0 mt-0.5" />
                    <span>{item.landmarks}</span>
                  </p>

                  {/* Popular Services Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.popularFor.map((srv, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-bold text-slate-600 bg-slate-100 hover:bg-slate-200 px-2 py-0.5 rounded transition-colors"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2">
                  <a
                    href="tel:+917823038645"
                    className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-kk-blue transition-colors"
                    aria-label={`Call technician for ${item.name}`}
                    title="Direct Call Dispatch"
                  >
                    <Phone className="w-4 h-4" />
                  </a>

                  <button
                    type="button"
                    onClick={() => openBookingModal(undefined, item)}
                    className="flex-1 text-center py-2.5 px-3 sm:px-4 rounded-xl bg-kk-teal hover:bg-kk-teal-light text-white text-xs font-bold transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-1.5 cursor-pointer active:scale-95 min-w-0"
                    title={`Book technician in ${item.name}`}
                  >
                    <span className="truncate">Book in {item.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </button>
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
                  Technicians are stationed directly within Balewadi, PCMC, and PMC zones, cutting commute delays and guaranteeing 30–60 min doorstep arrival.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-kk-blue/10 flex items-center justify-center text-kk-blue shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-base mb-1">Zero Distance Surcharges</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Whether you reside in Balewadi High Street, Kothrud, Moshi, or Hinjawadi Phase 3, our standard nominal inspection fee applies equally.
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

      {/* Footer */}
      <Footer />
    </main>
  );
}
