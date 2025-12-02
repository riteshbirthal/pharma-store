import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medical Store | 24x7 Pharmacy & Medical Store",
  description: "24x7 medical store with home delivery, doctor on call, and full range of medicines and health products",
  metadataBase: "https://localhost:3000"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="min-h-screen flex flex-col bg-slate-80 text-slate-900"
      >
        <Header />
        <main className="flex-1 max-w-6xl mx-auto w-full px-4 py-6 md:py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
