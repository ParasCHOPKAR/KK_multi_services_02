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
      </head>
      <body className="font-sans min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <ThemeProvider>
          <BookingModalProvider>
            {children}
          </BookingModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
