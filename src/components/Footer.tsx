import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, ArrowRight, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <>
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

              {/* Social Media Icons */}
              <div className="flex items-center gap-3 pt-1">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#1877F2] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200" 
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#E4405F] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200" 
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-[#0A66C2] text-slate-600 hover:text-white flex items-center justify-center transition-all duration-200" 
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Column 2: Services & Links */}
            <div>
              <h4 className="text-slate-900 font-extrabold mb-6 uppercase tracking-wider text-sm">Services & Links</h4>
              <ul className="space-y-3">
                <li><Link href="/#services" className="text-slate-600 hover:text-kk-blue font-medium transition-colors text-sm flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-kk-red" /> Refrigerator Repair</Link></li>
                <li><Link href="/#services" className="text-slate-600 hover:text-kk-blue font-medium transition-colors text-sm flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-kk-red" /> AC Repair & Service</Link></li>
                <li><Link href="/#services" className="text-slate-600 hover:text-kk-blue font-medium transition-colors text-sm flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-kk-red" /> Washing Machine Repair</Link></li>
                <li className="pt-2"><Link href="/#about" className="text-slate-600 hover:text-kk-blue font-medium transition-colors text-sm flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-kk-teal" /> About Us</Link></li>
                <li><Link href="/contact" className="text-slate-600 hover:text-kk-blue font-medium transition-colors text-sm flex items-center gap-2"><ArrowRight className="w-3.5 h-3.5 text-kk-teal" /> Contact Us</Link></li>
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
                <span>123 Repair Street, Sector 45, Pune, Maharashtra</span>
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
    </>
  );
}
