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

export default function HomePage() {
  return (
    <main id="top" className="min-h-screen font-sans bg-white text-slate-900">
      {/* Top Bar */}
      <div className="bg-kk-teal text-white text-xs py-2 hidden md:block">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 font-medium"><Clock className="w-3.5 h-3.5" /> 24/7 Emergency Service</span>
            <span className="flex items-center gap-1.5 font-medium"><Mail className="w-3.5 h-3.5" /> support@kkmulti.com</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
            <span className="w-px h-3 bg-white/20"></span>
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <span className="w-px h-3 bg-white/20"></span>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSlider />



      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-kk-teal/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-kk-blue/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Layout */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-0.5 w-10 bg-kk-teal"></div>
                <h4 className="text-sm font-bold tracking-widest text-slate-500 uppercase">Our Services</h4>
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0b1c3d] leading-[1.15] mb-6">
                We Repair All Major<br/>Home <span className="text-kk-teal">Appliances</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed max-w-xl">
                From your kitchen to your laundry room, our expert technicians are equipped to keep your home running smoothly with fast, reliable, and affordable repair solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-2 shrink-0">
              <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm p-2 pr-4 rounded-full border border-slate-200/60 shadow-sm">
                <div className="flex -space-x-3 ml-1">
                   {[1,2,3].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative">
                          <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400"></div>
                      </div>
                    ))}
                </div>
                <div className="text-xs font-bold text-slate-700 leading-tight pr-2">
                  Trusted by<br/><span className="text-kk-teal">5000+ Families</span>
                </div>
              </div>
              <a href="#" className="group inline-flex items-center gap-3 bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-kk-teal text-slate-800 px-6 py-3.5 rounded-full font-bold transition-all">
                View All Services 
                <span className="w-8 h-8 rounded-full bg-kk-teal/10 flex items-center justify-center group-hover:bg-kk-teal transition-colors">
                  <ArrowRight className="w-4 h-4 text-kk-teal group-hover:text-white transition-colors" />
                </span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            
            {/* Service 1 */}
            <div className="group relative bg-white rounded-3xl p-6 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 cursor-pointer overflow-hidden border border-slate-100 flex flex-col h-full hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-kk-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative w-full h-48 lg:h-52 mb-6 bg-slate-50/50 rounded-2xl overflow-hidden group-hover:bg-white transition-colors duration-500 flex items-center justify-center">
                <Image src="/images/appliance_ac_1789636637732.jpg" alt="Air Conditioner" fill className="object-contain p-6 mix-blend-multiply group-hover:scale-110 transition-transform duration-700" />
              </div>
              
              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-kk-teal transition-colors">Air Conditioner</h3>
                <p className="text-sm text-slate-500 mb-6 line-clamp-2">Premium AC service & repair for ultimate comfort.</p>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-sm font-bold text-kk-blue group-hover:text-kk-teal transition-colors flex items-center gap-1">
                    Book Now <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-kk-teal group-hover:text-white text-slate-400 transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-white rounded-3xl p-6 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 cursor-pointer overflow-hidden border border-slate-100 flex flex-col h-full hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-kk-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative w-full h-48 lg:h-52 mb-6 bg-slate-50/50 rounded-2xl overflow-hidden group-hover:bg-white transition-colors duration-500 flex items-center justify-center">
                <Image src="/images/appliance_fridge_1789636595538.jpg" alt="Refrigerator" fill className="object-contain p-6 mix-blend-multiply group-hover:scale-110 transition-transform duration-700" />
              </div>
              
              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-kk-teal transition-colors">Refrigerator</h3>
                <p className="text-sm text-slate-500 mb-6 line-clamp-2">Fast cooling solutions for all major brands and models.</p>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-sm font-bold text-kk-blue group-hover:text-kk-teal transition-colors flex items-center gap-1">
                    Book Now <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-kk-teal group-hover:text-white text-slate-400 transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-white rounded-3xl p-6 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 cursor-pointer overflow-hidden border border-slate-100 flex flex-col h-full hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-kk-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative w-full h-48 lg:h-52 mb-6 bg-slate-50/50 rounded-2xl overflow-hidden group-hover:bg-white transition-colors duration-500 flex items-center justify-center">
                <Image src="/images/appliance_washing_machine_1789636610541.jpg" alt="Washing Machine" fill className="object-contain p-6 mix-blend-multiply group-hover:scale-110 transition-transform duration-700" />
              </div>
              
              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-kk-teal transition-colors">Washing Machine</h3>
                <p className="text-sm text-slate-500 mb-6 line-clamp-2">Reliable repairs for front and top load machines.</p>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-sm font-bold text-kk-blue group-hover:text-kk-teal transition-colors flex items-center gap-1">
                    Book Now <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-kk-teal group-hover:text-white text-slate-400 transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="group relative bg-white rounded-3xl p-6 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 cursor-pointer overflow-hidden border border-slate-100 flex flex-col h-full hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-kk-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative w-full h-48 lg:h-52 mb-6 bg-slate-50/50 rounded-2xl overflow-hidden group-hover:bg-white transition-colors duration-500 flex items-center justify-center">
                <Image src="/images/appliance_microwave_1789636624228.jpg" alt="Microwave" fill className="object-contain p-6 mix-blend-multiply group-hover:scale-110 transition-transform duration-700" />
              </div>
              
              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-kk-teal transition-colors">Microwave</h3>
                <p className="text-sm text-slate-500 mb-6 line-clamp-2">Quick and secure fixes for all heating issues.</p>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-sm font-bold text-kk-blue group-hover:text-kk-teal transition-colors flex items-center gap-1">
                    Book Now <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-kk-teal group-hover:text-white text-slate-400 transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* Service 5 */}
            <div className="group relative bg-white rounded-3xl p-6 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 cursor-pointer overflow-hidden border border-slate-100 flex flex-col h-full hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-kk-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative w-full h-48 lg:h-52 mb-6 bg-slate-50/50 rounded-2xl overflow-hidden group-hover:bg-white transition-colors duration-500 flex items-center justify-center">
                <Image src="/images/appliance_geyser.jpg" alt="Geyser" fill className="object-contain p-6 mix-blend-multiply group-hover:scale-110 transition-transform duration-700" />
              </div>
              
              <div className="relative z-10 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-kk-teal transition-colors">Geyser</h3>
                <p className="text-sm text-slate-500 mb-6 line-clamp-2">Safe, efficient water heater services.</p>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
                  <span className="text-sm font-bold text-kk-blue group-hover:text-kk-teal transition-colors flex items-center gap-1">
                    Book Now <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-kk-teal group-hover:text-white text-slate-400 transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us & How It Works Combined Section */}
      <section id="about" className="py-16 lg:py-24 bg-kk-blue text-white relative z-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Text & Features */}
            <div className="lg:col-span-1">
              <h4 className="text-xs font-bold tracking-wider text-kk-teal uppercase mb-4">Why Choose Us</h4>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-[1.2] mb-6">
                More Than Just a Repair Service
              </h2>
              <p className="text-slate-300 text-sm lg:text-base mb-8 leading-relaxed">
                We're not just technicians — we're your trusted appliance care partners. Our focus is on quality service, honest pricing and your complete satisfaction.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-kk-teal rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-200">Skilled & background-verified technicians</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-kk-teal rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-200">Genuine spare parts</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-kk-teal rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-200">Quick response & on-time service</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-kk-teal rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-200">Clean, safe and professional service</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-kk-teal rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-slate-200">Service for homes, offices, shops & institutions</span>
                </div>
              </div>
            </div>
            
            {/* Middle Column: Video */}
            <div className="lg:col-span-1 hidden lg:flex justify-center h-full">
               <div className="relative w-[120%] h-[120%] ml-[-10%] z-10 rounded-3xl overflow-hidden">
                 <video
                   autoPlay
                   loop
                   muted
                   playsInline
                   className="w-full h-full object-cover opacity-80"
                 >
                   <source src="/images/wasching_masching_repair.mp4" type="video/mp4" />
                 </video>
                 <div className="absolute inset-0 bg-gradient-to-t from-kk-blue via-transparent to-transparent"></div>
               </div>
            </div>
            
            {/* Right Column: How It Works */}
            <div className="lg:col-span-1 lg:pl-8">
              <h4 className="text-xs font-bold tracking-wider text-kk-teal uppercase mb-4">How It Works</h4>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-white leading-[1.2] mb-10">
                Simple Steps to Get Your Appliance Fixed
              </h2>
              
              <div className="space-y-10">
                {/* Step 1 */}
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full border border-white/20 bg-transparent flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 bg-kk-teal rounded-full flex items-center justify-center text-xs font-bold text-white">1</div>
                      <h4 className="font-bold text-white text-xl">Book</h4>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">Choose your service and schedule a convenient time.</p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full border border-white/20 bg-transparent flex items-center justify-center shrink-0">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 bg-kk-teal rounded-full flex items-center justify-center text-xs font-bold text-white">2</div>
                      <h4 className="font-bold text-white text-xl">Inspect</h4>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">Our technician checks the issue and suggests the best solution.</p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full border border-white/20 bg-transparent flex items-center justify-center shrink-0">
                    <Wrench className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-6 h-6 bg-kk-teal rounded-full flex items-center justify-center text-xs font-bold text-white">3</div>
                      <h4 className="font-bold text-white text-xl">Repair</h4>
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed">We fix it with genuine parts and ensure it works perfectly.</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section id="areas" className="pt-24 pb-12 lg:pb-28 bg-white relative overflow-hidden flex flex-col">
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
          
          <div className="mb-16 lg:mb-24 max-w-xl lg:pr-8">
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#0b1c3d] uppercase mb-6 relative inline-block pb-3">
              Who We Serve
              <span className="absolute bottom-0 left-0 w-10 h-[2.5px] bg-kk-teal"></span>
            </h4>
            <h2 className="text-4xl lg:text-[3.5rem] font-extrabold text-[#0b1c3d] leading-[1.05] tracking-tight mb-5">
              Serving Homes,<br/>Businesses &<br/><span className="text-kk-teal">Communities</span>
            </h2>
            <p className="text-[#334155] text-lg mb-10 leading-relaxed max-w-lg">
              Reliable appliance repair and maintenance services for every space, keeping your world running smoothly.
            </p>
            
            <div className="flex flex-wrap items-center gap-8 text-[13px] font-extrabold text-[#0b1c3d]">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-9 h-9 text-[#0b1c3d] stroke-[1.5]" />
                <span className="leading-tight">Trusted<br/>Service</span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
              <div className="flex items-center gap-3">
                <Users className="w-9 h-9 text-[#0b1c3d] stroke-[1.5]" />
                <span className="leading-tight">5000+<br/>Happy Customers</span>
              </div>
              <div className="hidden sm:block w-px h-10 bg-slate-200"></div>
              <div className="flex items-center gap-3">
                <Settings className="w-9 h-9 text-[#0b1c3d] stroke-[1.5]" />
                <span className="leading-tight">Expert<br/>Technicians</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-[1.5rem] p-6 lg:py-8 lg:px-10 shadow-[0_15px_40px_rgba(0,0,0,0.08)] w-full border border-slate-50 relative lg:translate-y-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:flex justify-between items-stretch gap-6 lg:gap-0 lg:divide-x divide-slate-100 text-center">
              
              <div className="flex flex-col items-center gap-1.5 w-full px-2 group cursor-pointer">
                <Home className="w-9 h-9 text-[#0b1c3d] group-hover:text-kk-teal transition-colors stroke-[1.5] mb-2" />
                <span className="font-extrabold text-[#0b1c3d] text-[15px]">Residential</span>
                <p className="text-[13px] text-[#64748b] leading-snug">Comfort for<br/>every home</p>
                <div className="w-8 h-[2px] bg-kk-teal mt-3"></div>
              </div>
              
              <div className="flex flex-col items-center gap-1.5 w-full px-2 group cursor-pointer">
                <Building2 className="w-9 h-9 text-[#0b1c3d] group-hover:text-kk-teal transition-colors stroke-[1.5] mb-2" />
                <span className="font-extrabold text-[#0b1c3d] text-[15px]">Commercial</span>
                <p className="text-[13px] text-[#64748b] leading-snug">Reliable support<br/>for your business</p>
                <div className="w-8 h-[2px] bg-slate-200 group-hover:bg-kk-teal transition-colors mt-3"></div>
              </div>
              
              <div className="flex flex-col items-center gap-1.5 w-full px-2 group cursor-pointer">
                <Building className="w-9 h-9 text-[#0b1c3d] group-hover:text-kk-teal transition-colors stroke-[1.5] mb-2" />
                <span className="font-extrabold text-[#0b1c3d] text-[15px]">Offices</span>
                <p className="text-[13px] text-[#64748b] leading-snug">Minimal downtime,<br/>maximum productivity</p>
                <div className="w-8 h-[2px] bg-slate-200 group-hover:bg-kk-teal transition-colors mt-3"></div>
              </div>
              
              <div className="flex flex-col items-center gap-1.5 w-full px-2 group cursor-pointer">
                <ShoppingBag className="w-9 h-9 text-[#0b1c3d] group-hover:text-kk-teal transition-colors stroke-[1.5] mb-2" />
                <span className="font-extrabold text-[#0b1c3d] text-[15px]">Retail</span>
                <p className="text-[13px] text-[#64748b] leading-snug">Uninterrupted<br/>service always</p>
                <div className="w-8 h-[2px] bg-slate-200 group-hover:bg-kk-teal transition-colors mt-3"></div>
              </div>
              
              <div className="flex flex-col items-center gap-1.5 w-full px-2 group cursor-pointer">
                <Users2 className="w-9 h-9 text-[#0b1c3d] group-hover:text-kk-teal transition-colors stroke-[1.5] mb-2" />
                <span className="font-extrabold text-[#0b1c3d] text-[15px]">Societies</span>
                <p className="text-[13px] text-[#64748b] leading-snug">Trusted by housing<br/>communities</p>
                <div className="w-8 h-[2px] bg-slate-200 group-hover:bg-kk-teal transition-colors mt-3"></div>
              </div>
              
              <div className="flex flex-col items-center gap-1.5 w-full px-2 group cursor-pointer">
                <Landmark className="w-9 h-9 text-[#0b1c3d] group-hover:text-kk-teal transition-colors stroke-[1.5] mb-2" />
                <span className="font-extrabold text-[#0b1c3d] text-[15px]">Institutions</span>
                <p className="text-[13px] text-[#64748b] leading-snug">Safe & efficient<br/>environments</p>
                <div className="w-8 h-[2px] bg-slate-200 group-hover:bg-kk-teal transition-colors mt-3"></div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* What Our Clients Say (Testimonials) */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-kk-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-kk-blue/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h4 className="text-sm font-bold tracking-wider text-slate-700 uppercase mb-4 relative inline-block">
              What Our Clients Say
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-kk-teal"></span>
            </h4>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0b1c3d] leading-[1.1] mt-4">
              Trusted by Thousands.<br/><span className="text-kk-teal">Loved for Our Service.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10 md:gap-8 relative pt-6">
            
            {/* Testimonial 1 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-kk-teal rounded-full flex items-center justify-center shadow-lg text-white group-hover:scale-110 transition-transform">
                <Quote className="w-5 h-5 fill-current" />
              </div>
              <div className="flex items-center gap-1 mb-6 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                "Excellent service! My AC broke down in the middle of summer. KK Multi Services sent a technician the same day, and it was fixed in an hour. Very professional."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center font-bold text-slate-500 text-lg">
                  R
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Rahul Sharma</h4>
                  <p className="text-xs text-slate-500 font-medium">Pune, Maharashtra</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300 md:-translate-y-4">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-kk-teal rounded-full flex items-center justify-center shadow-lg text-white group-hover:scale-110 transition-transform">
                <Quote className="w-5 h-5 fill-current" />
              </div>
              <div className="flex items-center gap-1 mb-6 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                "Their pricing is very transparent. No hidden charges for spare parts. The technician explained the issue with my washing machine clearly before fixing it."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center font-bold text-slate-500 text-lg">
                  P
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Priya Desai</h4>
                  <p className="text-xs text-slate-500 font-medium">Hinjewadi, Pune</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-3xl p-8 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-slate-100 relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute -top-6 left-8 w-12 h-12 bg-kk-teal rounded-full flex items-center justify-center shadow-lg text-white group-hover:scale-110 transition-transform">
                <Quote className="w-5 h-5 fill-current" />
              </div>
              <div className="flex items-center gap-1 mb-6 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 mb-8 leading-relaxed">
                "I run a small restaurant and my commercial fridge stopped working. These guys understood the urgency and repaired it immediately. Highly recommend them for businesses!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center font-bold text-slate-500 text-lg">
                  V
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Vikram Singh</h4>
                  <p className="text-xs text-slate-500 font-medium">Balewadi, Pune</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <h4 className="text-sm font-bold tracking-wider text-slate-700 uppercase mb-4 relative inline-block">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-kk-teal"></span>
              </h4>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0b1c3d] leading-[1.1] mt-4 mb-6">
                Get In Touch With<br/><span className="text-kk-teal">Our Experts.</span>
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Have a question or need to schedule a repair? Fill out the form, and our team will get back to you promptly.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-kk-teal/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-kk-teal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Call Us Directly</h4>
                    <p className="text-slate-500 mb-1">Available 24/7 for emergencies</p>
                    <a href="tel:+919876543210" className="text-kk-blue font-bold">+91 98765 43210</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-kk-teal/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-kk-teal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                    <p className="text-slate-500 mb-1">For general queries</p>
                    <a href="mailto:support@kkmulti.com" className="text-kk-blue font-bold">support@kkmulti.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-kk-teal/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-kk-teal" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Visit Our Office</h4>
                    <p className="text-slate-500">123 Repair Street, Sector 45<br/>City, State 123456</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us A Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-slate-700">Full Name</label>
                      <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-kk-teal focus:ring-2 focus:ring-kk-teal/20 transition-all bg-slate-50 focus:bg-white" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-slate-700">Phone Number</label>
                      <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-kk-teal focus:ring-2 focus:ring-kk-teal/20 transition-all bg-slate-50 focus:bg-white" placeholder="+91 98765 43210" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="service" className="text-sm font-bold text-slate-700">Service Required</label>
                    <select id="service" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-kk-teal focus:ring-2 focus:ring-kk-teal/20 transition-all bg-slate-50 focus:bg-white text-slate-600">
                      <option value="">Select a service</option>
                      <option value="ac">AC Repair & Service</option>
                      <option value="refrigerator">Refrigerator Repair</option>
                      <option value="washing-machine">Washing Machine Repair</option>
                      <option value="microwave">Microwave Repair</option>
                      <option value="other">Other Appliance</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-700">Your Message</label>
                    <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-kk-teal focus:ring-2 focus:ring-kk-teal/20 transition-all bg-slate-50 focus:bg-white resize-none" placeholder="Describe the issue you are facing..."></textarea>
                  </div>
                  
                  <button type="button" className="w-full bg-kk-blue hover:bg-[#08152e] text-white font-bold py-4 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2">
                    Send Request <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-kk-blue text-white py-16 relative overflow-hidden">
        {/* Abstract Wrench watermark */}
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
           <Wrench className="w-[500px] h-[500px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <h4 className="text-slate-300 font-bold text-sm tracking-widest uppercase mb-2">Need Appliance Repair?</h4>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">Get Fast & Reliable Service Today!</h2>
              <p className="text-slate-300 text-lg">Book a service request now and let our experts take care of the rest.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full md:w-auto">
              <a href="#" className="bg-kk-teal hover:bg-kk-teal-light text-white px-8 py-4 rounded-md font-bold transition-all flex items-center justify-center gap-3">
                <Calendar className="w-5 h-5" /> Book a Service
              </a>
              <a href="tel:+919876543210" className="bg-transparent border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-md font-bold transition-all flex items-center justify-center gap-3">
                <Phone className="w-5 h-5" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
      <footer 
        className="pt-20 pb-10 border-t border-slate-200 bg-cover bg-center bg-no-repeat relative bg-[url('/images/footer_img_background.png')] md:bg-[url('/images/footer-01.png')]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            
            {/* Column 1: Brand & Contact */}
            <div className="space-y-6">
              <Link href="/" className="inline-block">
                <Image src="/images/logo_footer.png" alt="KK Multi Services Logo" width={200} height={60} className="h-12 md:h-14 w-auto object-contain" priority />
              </Link>
              <p className="text-slate-600 text-sm leading-relaxed">
                Your trusted partner for professional home appliance repair services. Fast, efficient, and reliable solutions across the region.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-kk-red mt-0.5 shrink-0" />
                  <a href="tel:+919876543210" className="text-slate-600 hover:text-kk-red text-sm font-bold">+91 98765 43210</a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-kk-blue mt-0.5 shrink-0" />
                  <a href="mailto:support@kkmulti.com" className="text-slate-600 hover:text-kk-blue text-sm font-bold">support@kkmulti.com</a>
                </div>
              </div>
            </div>

            {/* Column 2: Services & Links */}
            <div>
              <h4 className="text-slate-900 font-extrabold mb-6 uppercase tracking-wider text-sm">Services & Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-slate-600 hover:text-kk-blue font-medium transition-colors text-sm flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-kk-red" /> Refrigerator Repair</a></li>
                <li><a href="#" className="text-slate-600 hover:text-kk-blue font-medium transition-colors text-sm flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-kk-red" /> AC Repair & Service</a></li>
                <li><a href="#" className="text-slate-600 hover:text-kk-blue font-medium transition-colors text-sm flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-kk-red" /> Washing Machine Repair</a></li>
                <li className="pt-2"><a href="#" className="text-slate-600 hover:text-kk-blue font-medium transition-colors text-sm flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-kk-teal" /> About Us</a></li>
                <li><a href="#" className="text-slate-600 hover:text-kk-blue font-medium transition-colors text-sm flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-kk-teal" /> Contact Us</a></li>
              </ul>
            </div>

            {/* Column 3: Google Reviews */}
            <div>
              <h4 className="text-slate-900 font-extrabold mb-6 uppercase tracking-wider text-sm">Customer Reviews</h4>
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm relative mt-2">
                <div className="absolute -top-4 -right-2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center border border-slate-100">
                  <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#EA4335" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#4285F4" d="M23.64 12.2c0-.79-.07-1.54-.19-2.2H12v4.16h6.51c-.28 1.39-1.04 2.56-2.22 3.36l3.57 2.77C21.95 18.36 23.64 15.61 23.64 12.2z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#34A853" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                </div>
                <div className="flex items-center gap-1 text-yellow-400 mb-3">
                  {[1,2,3,4,5].map(i => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                  <span className="text-slate-800 text-xs font-bold ml-1">4.9/5</span>
                </div>
                <p className="text-slate-600 text-xs italic mb-3 leading-relaxed">"Excellent service! The technician arrived on time and fixed our AC within an hour. Highly recommended."</p>
                <div className="text-slate-400 font-bold text-[10px] uppercase tracking-wider">- Rahul Sharma</div>
              </div>
            </div>

            {/* Column 4: Google Map */}
            <div>
              <h4 className="text-slate-900 font-extrabold mb-6 uppercase tracking-wider text-sm">Find Us</h4>
              <div className="w-full h-32 bg-slate-200 rounded-xl overflow-hidden shadow-inner relative border border-slate-200">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0921705646447!2d73.7721601!3d18.5698829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf1ba5c42d25%3A0xae3383c823833690!2sKK%20Multi%20Services!5e0!3m2!1sen!2sin!4v1789969080377!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
              <div className="mt-4 flex items-start gap-2 text-slate-500 text-xs font-medium">
                <MapPin className="w-4 h-4 shrink-0 text-kk-teal" />
                <span>123 Repair Street, Sector 45, City 123456</span>
              </div>
            </div>

          </div>

          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-medium">
            <p>&copy; {new Date().getFullYear()} KK Multi Services. All Rights Reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-kk-blue transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-kk-blue transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">
        {/* Call Button */}
        <a href="tel:+917276748645" className="w-14 h-14 bg-kk-blue hover:bg-kk-blue-light text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(11,28,61,0.4)] hover:scale-110 transition-all duration-300 relative group">
          <Phone className="w-6 h-6" />
          <span className="absolute right-16 bg-white text-slate-800 text-xs font-bold px-3 py-2 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-slate-100 translate-x-4 group-hover:translate-x-0">
            Call Us Now
          </span>
        </a>
        
        {/* WhatsApp Button */}
        <a href="https://wa.me/917276748645" target="_blank" rel="noreferrer" className="w-14 h-14 bg-[#25D366] hover:bg-[#1DA851] text-white rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:scale-110 transition-all duration-300 relative group">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span className="absolute right-16 bg-white text-slate-800 text-xs font-bold px-3 py-2 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-slate-100 translate-x-4 group-hover:translate-x-0">
            WhatsApp Us
          </span>
        </a>
        
        {/* Scroll to Top Button */}
        <a href="#top" className="w-14 h-14 bg-white border-[1.5px] border-slate-200 hover:border-kk-teal text-slate-600 hover:text-kk-teal rounded-full flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.05)] hover:scale-110 transition-all duration-300 relative group mt-2">
          <ArrowUp className="w-6 h-6 stroke-[2.5]" />
          <span className="absolute right-16 bg-white text-slate-800 text-xs font-bold px-3 py-2 rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.1)] opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap border border-slate-100 translate-x-4 group-hover:translate-x-0">
            Back to Top
          </span>
        </a>
      </div>
    </main>
  );
}
