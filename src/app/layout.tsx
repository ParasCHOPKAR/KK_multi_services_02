import type { Metadata } from "next";
import { Inter, Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { BookingModalProvider } from "@/context/BookingModalContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KK Multi Services | Professional AC & Appliance Repair",
  description: "Expert AC, Refrigerator, Washing Machine, Microwave Repair, Installation, and Maintenance services. Reliable, fast, and affordable solutions for your home and business.",
  openGraph: {
    title: "KK Multi Services | Professional Home Appliance Services",
    description: "Expert AC, Refrigerator, and Appliance Repair, Installation, and Maintenance services.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable} scroll-smooth antialiased`} data-theme="current" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var t = localStorage.getItem('kk_theme');
                  if (t === 'logo') t = 'light';
                  if (t === 'light' || t === 'current') {
                    document.documentElement.setAttribute('data-theme', t);
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script type="text/javascript" dangerouslySetInnerHTML={{
          __html: `
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({
                pageLanguage: 'en',
                includedLanguages: 'en,hi,mr',
                autoDisplay: false
              }, 'google_translate_element');
            }
          `
        }} />
        <script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
        <style dangerouslySetInnerHTML={{
          __html: `
            .goog-te-banner-frame { display: none !important; }
            iframe.skiptranslate { display: none !important; }
            .goog-te-menu-value { display: none !important; }
            .goog-tooltip { display: none !important; }
            .goog-tooltip:hover { display: none !important; }
            .goog-text-highlight { background-color: transparent !important; border: none !important; box-shadow: none !important; }
            body { top: 0 !important; position: static !important; }
            #google_translate_element { display: none !important; }
            .VIpgJd-ZVi9od-aZ2wEe-wOHMyf { display: none !important; }
            .VIpgJd-ZVi9od-ORHb-OEVmcd { display: none !important; }
          `
        }} />
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <div id="google_translate_element"></div>
        <ThemeProvider>
          <BookingModalProvider>
            {children}
          </BookingModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
