import Image from "next/image";
import { 
  Phone, 
  Wrench, 
  Clock, 
  CreditCard, 
  CheckCircle2, 
  Home, 
  Users, 
  Wallet, 
  Headset,
  ArrowRight,
  Settings,
  ThumbsUp,
  Building2,
  Building,
  ShoppingBag,
  Users2,
  Landmark,
  Calendar,
  Tv,
  Thermometer,
  Mail,
  MapPin,
  Award,
  Star,
  ShieldCheck,
  Search,
  FileText,
  Quote,
  MessageSquare,
  ArrowUp
} from "lucide-react";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import Navbar from "@/components/Navbar";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen font-sans bg-white text-slate-900 flex flex-col">
      {/* Top Bar */}
      <TopBar />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSlider />

      {/* Services Section */}
      <section id="services" className="py-14 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-kk-teal/5 rounded-full blur-[80px] sm:blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-kk-blue/5 rounded-full blur-[80px] sm:blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

        <div className="max-w-7xl xl:max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Layout */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6 sm:gap-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-3 sm:mb-5">
                <div className="h-0.5 w-8 sm:w-10 bg-kk-teal"></div>
                <h4 className="text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase">Our Services</h4>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b1c3d] leading-[1.2] sm:leading-[1.15] mb-3 sm:mb-6">
                We Repair All Major <br className="hidden sm:inline" />Home <span className="text-kk-teal">Appliances</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
                From your kitchen to your laundry room, our expert technicians are equipped to keep your home running smoothly with fast, reliable, and affordable repair solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 pb-2 shrink-0 w-full sm:w-auto">
              <div className="flex items-center gap-3.5 bg-white/80 sm:bg-white/60 backdrop-blur-sm p-2 sm:p-2.5 pr-4 rounded-full border border-slate-200/60 shadow-xs">
                <div className="flex -space-x-3 ml-1">
                   {[1,2,3].map((i) => (
                      <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative">
                          <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400"></div>
                      </div>
                    ))}
                </div>
                <div className="text-xs font-bold text-slate-700 leading-tight pr-2">
                  Trusted by<br/><span className="text-kk-teal">5000+ Families</span>
                </div>
              </div>
              <Link href="/services" className="group inline-flex items-center justify-center gap-3 bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-kk-teal text-slate-800 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-bold transition-all text-sm sm:text-base active:scale-95">
                View All Services 
                <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-kk-teal/10 flex items-center justify-center group-hover:bg-kk-teal transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-kk-teal group-hover:text-white transition-colors" />
                </span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-5 xl:gap-7">
            
            {/* Service 1: Air Conditioner */}
            <Link href="/services#ac" className="group relative bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer overflow-hidden border border-slate-100 flex flex-col h-full hover:-translate-y-2 active:scale-[0.99]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-kk-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative w-full h-56 sm:h-64 lg:h-72 xl:h-80 mb-5 sm:mb-6 bg-slate-50/80 rounded-2xl overflow-hidden group-hover:bg-white transition-colors duration-500 flex items-center justify-center border border-slate-100/60">
                <Image 
                  src="/images/appliance_ac_1789636637732.jpg" 
                  alt="Air Conditioner" 
                  fill 
                  className="object-contain p-2 sm:p-3 mix-blend-multiply group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              
              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 mb-2 group-hover:text-kk-teal transition-colors">Air Conditioner</h3>
                <p className="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed">Premium AC service & repair for ultimate comfort.</p>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-sm sm:text-base font-bold text-kk-blue group-hover:text-kk-teal transition-colors flex items-center gap-1.5">
                    Book Now <ArrowRight className="w-4 h-4" />
                  </span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-kk-teal group-hover:text-white text-slate-400 transition-all duration-300 shadow-xs">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Service 2: Refrigerator */}
            <Link href="/services#refrigerator" className="group relative bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer overflow-hidden border border-slate-100 flex flex-col h-full hover:-translate-y-2 active:scale-[0.99]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-kk-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative w-full h-56 sm:h-64 lg:h-72 xl:h-80 mb-5 sm:mb-6 bg-slate-50/80 rounded-2xl overflow-hidden group-hover:bg-white transition-colors duration-500 flex items-center justify-center border border-slate-100/60">
                <Image 
                  src="/images/appliance_fridge_1789636595538.jpg" 
                  alt="Refrigerator" 
                  fill 
                  className="object-contain p-2 sm:p-3 mix-blend-multiply group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              
              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 mb-2 group-hover:text-kk-teal transition-colors">Refrigerator</h3>
                <p className="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed">Fast cooling solutions for all major brands and models.</p>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-sm sm:text-base font-bold text-kk-blue group-hover:text-kk-teal transition-colors flex items-center gap-1.5">
                    Book Now <ArrowRight className="w-4 h-4" />
                  </span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-kk-teal group-hover:text-white text-slate-400 transition-all duration-300 shadow-xs">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Service 3: Washing Machine */}
            <Link href="/services#washing-machine" className="group relative bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer overflow-hidden border border-slate-100 flex flex-col h-full hover:-translate-y-2 active:scale-[0.99]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-kk-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative w-full h-56 sm:h-64 lg:h-72 xl:h-80 mb-5 sm:mb-6 bg-slate-50/80 rounded-2xl overflow-hidden group-hover:bg-white transition-colors duration-500 flex items-center justify-center border border-slate-100/60">
                <Image 
                  src="/images/appliance_washing_machine_1789636610541.jpg" 
                  alt="Washing Machine" 
                  fill 
                  className="object-contain p-2 sm:p-3 mix-blend-multiply group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              
              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 mb-2 group-hover:text-kk-teal transition-colors">Washing Machine</h3>
                <p className="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed">Reliable repairs for front and top load machines.</p>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-sm sm:text-base font-bold text-kk-blue group-hover:text-kk-teal transition-colors flex items-center gap-1.5">
                    Book Now <ArrowRight className="w-4 h-4" />
                  </span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-kk-teal group-hover:text-white text-slate-400 transition-all duration-300 shadow-xs">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Service 4: Microwave */}
            <Link href="/services#microwave" className="group relative bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer overflow-hidden border border-slate-100 flex flex-col h-full hover:-translate-y-2 active:scale-[0.99]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-kk-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative w-full h-56 sm:h-64 lg:h-72 xl:h-80 mb-5 sm:mb-6 bg-slate-50/80 rounded-2xl overflow-hidden group-hover:bg-white transition-colors duration-500 flex items-center justify-center border border-slate-100/60">
                <Image 
                  src="/images/appliance_microwave_1789636624228.jpg" 
                  alt="Microwave" 
                  fill 
                  className="object-contain p-2 sm:p-3 mix-blend-multiply group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              
              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 mb-2 group-hover:text-kk-teal transition-colors">Microwave</h3>
                <p className="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed">Quick and secure fixes for all heating issues.</p>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-sm sm:text-base font-bold text-kk-blue group-hover:text-kk-teal transition-colors flex items-center gap-1.5">
                    Book Now <ArrowRight className="w-4 h-4" />
                  </span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-kk-teal group-hover:text-white text-slate-400 transition-all duration-300 shadow-xs">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Service 5: Geyser */}
            <Link href="/services#geyser" className="group relative bg-white rounded-3xl p-6 sm:p-7 shadow-sm hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer overflow-hidden border border-slate-100 flex flex-col h-full hover:-translate-y-2 active:scale-[0.99]">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-kk-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative w-full h-56 sm:h-64 lg:h-72 xl:h-80 mb-5 sm:mb-6 bg-slate-50/80 rounded-2xl overflow-hidden group-hover:bg-white transition-colors duration-500 flex items-center justify-center border border-slate-100/60">
                <Image 
                  src="/images/appliance_geyser.jpg" 
                  alt="Geyser" 
                  fill 
                  className="object-contain p-2 sm:p-3 mix-blend-multiply group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              
              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 mb-2 group-hover:text-kk-teal transition-colors">Geyser</h3>
                <p className="text-sm text-slate-500 mb-6 line-clamp-2 leading-relaxed">Safe, efficient water heater services.</p>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-sm sm:text-base font-bold text-kk-blue group-hover:text-kk-teal transition-colors flex items-center gap-1.5">
                    Book Now <ArrowRight className="w-4 h-4" />
                  </span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-kk-teal group-hover:text-white text-slate-400 transition-all duration-300 shadow-xs">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* Why Choose Us & How It Works Combined Section */}
      <section id="about" className="py-14 sm:py-20 lg:py-24 bg-kk-blue text-white relative z-0 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-center">
            
            {/* Left Column: Text & Features */}
            <div className="lg:col-span-1">
              <h4 className="text-xs font-bold tracking-wider text-kk-teal uppercase mb-3 sm:mb-4">Why Choose Us</h4>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.2] mb-4 sm:mb-6">
                More Than Just a Repair Service
              </h2>
              <p className="text-slate-300 text-sm lg:text-base mb-6 sm:mb-8 leading-relaxed">
                We're not just technicians — we're your trusted appliance care partners. Our focus is on quality service, honest pricing and your complete satisfaction.
              </p>
              
              <div className="space-y-3.5 sm:space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-kk-teal rounded-full flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">Skilled & background-verified technicians</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-kk-teal rounded-full flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">Genuine spare parts</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-kk-teal rounded-full flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">Quick response & on-time service</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-kk-teal rounded-full flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">Clean, safe and professional service</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-kk-teal rounded-full flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-slate-200">Service for homes, offices, shops & institutions</span>
                </div>
              </div>
            </div>
            
            {/* Middle Column: Video (Responsive on all screen sizes) */}
            <div className="lg:col-span-1 flex justify-center w-full my-4 lg:my-0">
               <div className="relative w-full max-w-md lg:max-w-none lg:w-[120%] lg:h-[120%] lg:ml-[-10%] z-10 rounded-2xl sm:rounded-3xl overflow-hidden aspect-video sm:aspect-[4/3] lg:aspect-auto lg:h-[480px] shadow-2xl border border-white/10">
                 <video
                   autoPlay
                   loop
                   muted
                   playsInline
                   className="w-full h-full object-cover opacity-85"
                 >
                   <source src="/images/wasching_masching_repair.mp4" type="video/mp4" />
                 </video>
                 <div className="absolute inset-0 bg-gradient-to-t from-kk-blue/80 via-transparent to-transparent"></div>
               </div>
            </div>
            
            {/* Right Column: How It Works */}
            <div className="lg:col-span-1 lg:pl-8">
              <h4 className="text-xs font-bold tracking-wider text-kk-teal uppercase mb-3 sm:mb-4">How It Works</h4>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-[1.2] mb-6 sm:mb-10">
                Simple Steps to Get Your Appliance Fixed
              </h2>
              
              <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                {/* Step 1 */}
                <div className="flex gap-4 sm:gap-6 items-start">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0">
                    <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5 sm:mb-2">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-kk-teal rounded-full flex items-center justify-center text-xs font-bold text-white">1</div>
                      <h4 className="font-bold text-white text-lg sm:text-xl">Book</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Choose your service and schedule a convenient time.</p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex gap-4 sm:gap-6 items-start">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0">
                    <Search className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5 sm:mb-2">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-kk-teal rounded-full flex items-center justify-center text-xs font-bold text-white">2</div>
                      <h4 className="font-bold text-white text-lg sm:text-xl">Inspect</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">Our technician checks the issue and suggests the best solution.</p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex gap-4 sm:gap-6 items-start">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-white/20 bg-white/5 flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2.5 sm:gap-3 mb-1.5 sm:mb-2">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-kk-teal rounded-full flex items-center justify-center text-xs font-bold text-white">3</div>
                      <h4 className="font-bold text-white text-lg sm:text-xl">Repair</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">We fix it with genuine parts and ensure it works perfectly.</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section id="areas" className="py-14 sm:py-20 lg:pt-24 lg:pb-28 bg-white relative overflow-hidden flex flex-col">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 hidden lg:block">
          <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" alt="Buildings Background" fill className="object-cover object-center" />
          
          {/* Elegant sweeping white background using SVG for precise curvature and drop-shadow */}
          <svg className="absolute inset-y-0 left-[-5%] w-[65%] h-[105%] text-white drop-shadow-[20px_0_40px_rgba(150,200,220,0.5)] z-10" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0,0 L65,0 C95,45 80,85 50,100 L0,100 Z" fill="currentColor"/>
          </svg>
          
          {/* Subtle dot pattern on the left */}
          <div className="absolute top-12 left-12 w-24 h-48 opacity-[0.15] z-20" style={{ backgroundImage: 'radial-gradient(#0b1c3d 2px, transparent 2px)', backgroundSize: '16px 16px' }}></div>
          
          {/* Teal wave at the bottom right */}
          <div className="absolute bottom-[-15%] right-0 w-[40%] h-[30%] bg-gradient-to-tr from-kk-teal to-kk-blue/80 blur-[80px] opacity-40 z-0"></div>
        </div>

        {/* Right side floating elements */}
        <div className="absolute top-20 right-20 z-20 hidden lg:flex gap-4 items-start text-white">
          <div className="w-[1.5px] h-32 bg-white/40 mt-1"></div>
          <div className="flex flex-col gap-4 text-[11px] font-bold tracking-[0.25em] uppercase opacity-90">
            <span>Comfort</span>
            <span>Safety</span>
            <span>Efficiency</span>
            <span>Always</span>
          </div>
        </div>

        <div className="absolute top-24 left-[55%] z-20 hidden lg:block -rotate-[10deg]">
          <div className="text-[2.5rem] text-[#0b1c3d] font-serif italic leading-none" style={{ fontFamily: 'cursive' }}>Spaces<br/>We Keep<br/>Running</div>
          <div className="w-24 h-[2px] bg-kk-teal mt-3"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full flex flex-col justify-between">
          
          <div className="mb-10 sm:mb-16 lg:mb-24 max-w-xl lg:pr-8">
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#0b1c3d] uppercase mb-4 sm:mb-6 relative inline-block pb-2.5">
              Who We Serve
              <span className="absolute bottom-0 left-0 w-10 h-[2.5px] bg-kk-teal"></span>
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-[3.5rem] font-extrabold text-[#0b1c3d] leading-[1.15] lg:leading-[1.05] tracking-tight mb-4 sm:mb-5">
              Serving Homes, <br className="hidden sm:inline" />Businesses & <br className="hidden sm:inline" /><span className="text-kk-teal">Communities</span>
            </h2>
            <p className="text-[#334155] text-sm sm:text-base lg:text-lg mb-6 sm:mb-10 leading-relaxed max-w-lg">
              Reliable appliance repair and maintenance services for every space, keeping your world running smoothly.
            </p>
            
            <div className="grid grid-cols-3 sm:flex sm:flex-wrap items-center gap-3 sm:gap-8 text-xs sm:text-[13px] font-extrabold text-[#0b1c3d]">
              <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2 sm:gap-3 p-2 sm:p-0 rounded-xl bg-slate-50 sm:bg-transparent">
                <ShieldCheck className="w-7 h-7 sm:w-9 sm:h-9 text-kk-teal sm:text-[#0b1c3d] stroke-[1.5]" />
                <span className="leading-tight">Trusted<br className="hidden sm:inline"/> Service</span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
              <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2 sm:gap-3 p-2 sm:p-0 rounded-xl bg-slate-50 sm:bg-transparent">
                <Users className="w-7 h-7 sm:w-9 sm:h-9 text-kk-teal sm:text-[#0b1c3d] stroke-[1.5]" />
                <span className="leading-tight">5000+<br className="hidden sm:inline"/> Families</span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
              <div className="flex flex-col sm:flex-row items-center sm:items-center text-center sm:text-left gap-2 sm:gap-3 p-2 sm:p-0 rounded-xl bg-slate-50 sm:bg-transparent">
                <Settings className="w-7 h-7 sm:w-9 sm:h-9 text-kk-teal sm:text-[#0b1c3d] stroke-[1.5]" />
                <span className="leading-tight">Expert<br className="hidden sm:inline"/> Team</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl sm:rounded-[1.5rem] p-4 sm:p-6 lg:py-8 lg:px-10 shadow-lg sm:shadow-[0_15px_40px_rgba(0,0,0,0.08)] w-full border border-slate-100 relative lg:translate-y-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 justify-between items-stretch gap-3 sm:gap-4 lg:gap-0 lg:divide-x divide-slate-100 text-center">
              
              <div className="flex flex-col items-center gap-1.5 w-full p-3 sm:px-2 rounded-xl bg-slate-50/70 sm:bg-transparent border border-slate-100 sm:border-0 hover:bg-slate-50 transition-colors group cursor-pointer">
                <Home className="w-7 h-7 sm:w-9 sm:h-9 text-[#0b1c3d] group-hover:text-kk-teal transition-colors stroke-[1.5] mb-1 sm:mb-2" />
                <span className="font-extrabold text-[#0b1c3d] text-sm sm:text-[15px]">Residential</span>
                <p className="text-xs sm:text-[13px] text-[#64748b] leading-tight">Comfort for<br/>every home</p>
                <div className="w-6 sm:w-8 h-[2px] bg-kk-teal mt-2 sm:mt-3"></div>
              </div>
              
              <div className="flex flex-col items-center gap-1.5 w-full p-3 sm:px-2 rounded-xl bg-slate-50/70 sm:bg-transparent border border-slate-100 sm:border-0 hover:bg-slate-50 transition-colors group cursor-pointer">
                <Building2 className="w-7 h-7 sm:w-9 sm:h-9 text-[#0b1c3d] group-hover:text-kk-teal transition-colors stroke-[1.5] mb-1 sm:mb-2" />
                <span className="font-extrabold text-[#0b1c3d] text-sm sm:text-[15px]">Commercial</span>
                <p className="text-xs sm:text-[13px] text-[#64748b] leading-tight">Reliable support<br/>for business</p>
                <div className="w-6 sm:w-8 h-[2px] bg-slate-200 group-hover:bg-kk-teal transition-colors mt-2 sm:mt-3"></div>
              </div>
              
              <div className="flex flex-col items-center gap-1.5 w-full p-3 sm:px-2 rounded-xl bg-slate-50/70 sm:bg-transparent border border-slate-100 sm:border-0 hover:bg-slate-50 transition-colors group cursor-pointer">
                <Building className="w-7 h-7 sm:w-9 sm:h-9 text-[#0b1c3d] group-hover:text-kk-teal transition-colors stroke-[1.5] mb-1 sm:mb-2" />
                <span className="font-extrabold text-[#0b1c3d] text-sm sm:text-[15px]">Offices</span>
                <p className="text-xs sm:text-[13px] text-[#64748b] leading-tight">Minimal downtime,<br/>high output</p>
                <div className="w-6 sm:w-8 h-[2px] bg-slate-200 group-hover:bg-kk-teal transition-colors mt-2 sm:mt-3"></div>
              </div>
              
              <div className="flex flex-col items-center gap-1.5 w-full p-3 sm:px-2 rounded-xl bg-slate-50/70 sm:bg-transparent border border-slate-100 sm:border-0 hover:bg-slate-50 transition-colors group cursor-pointer">
                <ShoppingBag className="w-7 h-7 sm:w-9 sm:h-9 text-[#0b1c3d] group-hover:text-kk-teal transition-colors stroke-[1.5] mb-1 sm:mb-2" />
                <span className="font-extrabold text-[#0b1c3d] text-sm sm:text-[15px]">Retail</span>
                <p className="text-xs sm:text-[13px] text-[#64748b] leading-tight">Uninterrupted<br/>service always</p>
                <div className="w-6 sm:w-8 h-[2px] bg-slate-200 group-hover:bg-kk-teal transition-colors mt-2 sm:mt-3"></div>
              </div>
              
              <div className="flex flex-col items-center gap-1.5 w-full p-3 sm:px-2 rounded-xl bg-slate-50/70 sm:bg-transparent border border-slate-100 sm:border-0 hover:bg-slate-50 transition-colors group cursor-pointer">
                <Users2 className="w-7 h-7 sm:w-9 sm:h-9 text-[#0b1c3d] group-hover:text-kk-teal transition-colors stroke-[1.5] mb-1 sm:mb-2" />
                <span className="font-extrabold text-[#0b1c3d] text-sm sm:text-[15px]">Societies</span>
                <p className="text-xs sm:text-[13px] text-[#64748b] leading-tight">Trusted by housing<br/>societies</p>
                <div className="w-6 sm:w-8 h-[2px] bg-slate-200 group-hover:bg-kk-teal transition-colors mt-2 sm:mt-3"></div>
              </div>
              
              <div className="flex flex-col items-center gap-1.5 w-full p-3 sm:px-2 rounded-xl bg-slate-50/70 sm:bg-transparent border border-slate-100 sm:border-0 hover:bg-slate-50 transition-colors group cursor-pointer">
                <Landmark className="w-7 h-7 sm:w-9 sm:h-9 text-[#0b1c3d] group-hover:text-kk-teal transition-colors stroke-[1.5] mb-1 sm:mb-2" />
                <span className="font-extrabold text-[#0b1c3d] text-sm sm:text-[15px]">Institutions</span>
                <p className="text-xs sm:text-[13px] text-[#64748b] leading-tight">Safe & efficient<br/>environments</p>
                <div className="w-6 sm:w-8 h-[2px] bg-slate-200 group-hover:bg-kk-teal transition-colors mt-2 sm:mt-3"></div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* What Our Clients Say (Testimonials) */}
      <section className="py-14 sm:py-20 lg:py-24 bg-slate-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-kk-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-kk-blue/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h4 className="text-xs sm:text-sm font-bold tracking-wider text-slate-700 uppercase mb-3 relative inline-block">
              What Our Clients Say
              <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-kk-teal"></span>
            </h4>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b1c3d] leading-[1.2] mt-3">
              Trusted by Thousands.<br/><span className="text-kk-teal">Loved for Our Service.</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 relative pt-6">
            
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm sm:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 relative group hover:-translate-y-1.5 transition-transform duration-300">
              <div className="absolute -top-5 sm:-top-6 left-6 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 bg-kk-teal rounded-full flex items-center justify-center shadow-md text-white group-hover:scale-110 transition-transform">
                <Quote className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              </div>
              <div className="flex items-center gap-1 mb-4 sm:mb-6 mt-1 sm:mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                "Excellent service! My AC broke down in the middle of summer. KK Multi Services sent a technician the same day, and it was fixed in an hour. Very professional."
              </p>
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center font-bold text-slate-500 text-base sm:text-lg">
                  R
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Rahul Sharma</h4>
                  <p className="text-xs text-slate-500 font-medium">Pune, Maharashtra</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm sm:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 relative group hover:-translate-y-1.5 transition-transform duration-300 md:-translate-y-4">
              <div className="absolute -top-5 sm:-top-6 left-6 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 bg-kk-teal rounded-full flex items-center justify-center shadow-md text-white group-hover:scale-110 transition-transform">
                <Quote className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              </div>
              <div className="flex items-center gap-1 mb-4 sm:mb-6 mt-1 sm:mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                "Their pricing is very transparent. No hidden charges for spare parts. The technician explained the issue with my washing machine clearly before fixing it."
              </p>
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center font-bold text-slate-500 text-base sm:text-lg">
                  P
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Priya Desai</h4>
                  <p className="text-xs text-slate-500 font-medium">Hinjewadi, Pune</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm sm:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 relative group hover:-translate-y-1.5 transition-transform duration-300">
              <div className="absolute -top-5 sm:-top-6 left-6 sm:left-8 w-10 h-10 sm:w-12 sm:h-12 bg-kk-teal rounded-full flex items-center justify-center shadow-md text-white group-hover:scale-110 transition-transform">
                <Quote className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              </div>
              <div className="flex items-center gap-1 mb-4 sm:mb-6 mt-1 sm:mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                "I run a small restaurant and my commercial fridge stopped working. These guys understood the urgency and repaired it immediately. Highly recommend them for businesses!"
              </p>
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center font-bold text-slate-500 text-base sm:text-lg">
                  V
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base">Vikram Singh</h4>
                  <p className="text-xs text-slate-500 font-medium">Balewadi, Pune</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-14 sm:py-20 lg:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10 sm:gap-12 lg:gap-16">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <div className="h-0.5 w-8 sm:w-10 bg-kk-teal"></div>
                <h4 className="text-xs sm:text-sm font-bold tracking-wider text-slate-700 uppercase">Contact Us</h4>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0b1c3d] leading-[1.2] sm:leading-[1.15] mb-4 sm:mb-6">
                Get In Touch With <br/><span className="text-kk-teal">Our Experts.</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 leading-relaxed max-w-xl">
                Have a question or need to schedule a repair? Fill out the form, and our team will get back to you promptly.
              </p>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-kk-teal/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-kk-teal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-0.5">Call Us Directly</h4>
                    <p className="text-slate-500 text-xs sm:text-sm mb-1">Available 24/7 for emergencies</p>
                    <a href="tel:+919876543210" className="text-kk-blue hover:text-kk-teal text-sm sm:text-base font-bold transition-colors">+91 98765 43210</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-kk-teal/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-kk-teal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-0.5">Email Us</h4>
                    <p className="text-slate-500 text-xs sm:text-sm mb-1">For general queries</p>
                    <a href="mailto:support@kkmulti.com" className="text-kk-blue hover:text-kk-teal text-sm sm:text-base font-bold transition-colors break-all">support@kkmulti.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-kk-teal/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-kk-teal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm sm:text-base mb-0.5">Visit Our Office</h4>
                    <p className="text-slate-500 text-xs sm:text-sm">123 Repair Street, Sector 45<br/>Pune, Maharashtra 411045</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-lg sm:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-5 sm:mb-6">Send Us A Message</h3>
                <form className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-1.5 sm:space-y-2">
                      <label htmlFor="name" className="text-xs sm:text-sm font-bold text-slate-700">Full Name</label>
                      <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-kk-teal focus:ring-2 focus:ring-kk-teal/20 transition-all bg-slate-50 focus:bg-white text-base" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <label htmlFor="phone" className="text-xs sm:text-sm font-bold text-slate-700">Phone Number</label>
                      <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-kk-teal focus:ring-2 focus:ring-kk-teal/20 transition-all bg-slate-50 focus:bg-white text-base" placeholder="+91 98765 43210" />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="service" className="text-xs sm:text-sm font-bold text-slate-700">Service Required</label>
                    <select id="service" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-kk-teal focus:ring-2 focus:ring-kk-teal/20 transition-all bg-slate-50 focus:bg-white text-base text-slate-700">
                      <option value="">Select a service</option>
                      <option value="ac">AC Repair & Service</option>
                      <option value="refrigerator">Refrigerator Repair</option>
                      <option value="washing-machine">Washing Machine Repair</option>
                      <option value="microwave">Microwave Repair</option>
                      <option value="geyser">Geyser Repair</option>
                      <option value="other">Other Appliance</option>
                    </select>
                  </div>
                  
                  <div className="space-y-1.5 sm:space-y-2">
                    <label htmlFor="message" className="text-xs sm:text-sm font-bold text-slate-700">Your Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-kk-teal focus:ring-2 focus:ring-kk-teal/20 transition-all bg-slate-50 focus:bg-white resize-none text-base" placeholder="Describe the issue you are facing..."></textarea>
                  </div>
                  
                  <button type="button" className="w-full bg-kk-blue hover:bg-[#08152e] text-white font-bold py-3.5 sm:py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 active:scale-[0.99] text-sm sm:text-base">
                    Send Request <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-kk-blue text-white py-12 sm:py-16 relative overflow-hidden">
        {/* Abstract Wrench watermark */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
           <Wrench className="w-[300px] sm:w-[500px] h-[300px] sm:h-[500px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 text-center md:text-left">
            <div>
              <h4 className="text-kk-teal-light font-bold text-xs sm:text-sm tracking-widest uppercase mb-2">Need Appliance Repair?</h4>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-3 sm:mb-4 leading-tight">Get Fast & Reliable Service Today!</h2>
              <p className="text-slate-300 text-sm sm:text-base lg:text-lg">Book a service request now and let our experts take care of the rest.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 shrink-0 w-full md:w-auto">
              <Link href="/contact#book" className="bg-kk-teal hover:bg-kk-teal-light text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-md font-bold transition-all flex items-center justify-center gap-2.5 shadow-md active:scale-95 text-sm sm:text-base">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" /> Book a Service
              </Link>
              <a href="tel:+919876543210" className="bg-white/10 border border-white/30 hover:bg-white/20 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-md font-bold transition-all flex items-center justify-center gap-2.5 backdrop-blur-xs active:scale-95 text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-kk-teal-light" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
