import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne, JetBrains_Mono, Lora } from "next/font/google";
import { TransitionProvider } from "@/context/TransitionContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "2IBA • Segunda Igreja Batista de Areias",
  description: "Crescendo em Cristo, acolhendo e servindo em amor. Areias, Recife - PE.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${syne.variable} ${mono.variable} ${lora.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col selection:bg-iba-green selection:text-white">
        <TransitionProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </TransitionProvider>
      </body>
    </html>
  );
}