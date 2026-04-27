import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL('https://strikava.com'),
  title: {
    template: '%s | Strikava',
    default: 'Strikava Cyber Security | Cloud & DevOps Training',
  },
  description: "Enterprise IT training company helping professionals build cloud and DevOps careers. Mentor-led programs in Cybersecurity, AWS, Azure, and more.",
  openGraph: {
    title: 'Strikava Cyber Security | Cloud & DevOps Training',
    description: "Enterprise IT training company helping professionals build cloud and DevOps careers.",
    url: 'https://strikava.com',
    siteName: 'Strikava',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
