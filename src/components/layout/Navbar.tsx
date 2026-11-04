"use client";

import { useState } from "react";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Agenda", href: "/agenda" },
    { name: "Galeria", href: "/galeria" },
    { name: "Ministérios", href: "/ministerios" },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-6">
      <nav className="max-w-7xl mx-auto bg-white/90 backdrop-blur-md rounded-full border border-stone-200/80 shadow-lg px-6 py-3 flex items-center justify-between">
        
        {/* LOGO E NOME */}
        <TransitionLink href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 relative rounded-full overflow-hidden border border-stone-200 bg-stone-100 shrink-0">
            <Image 
              src="/logo.png" 
              alt="2IBA Logo" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform" 
            />
          </div>
          <span className="font-heading font-extrabold text-lg text-[#1c2618] tracking-tight">
            2IBA
          </span>
        </TransitionLink>

        {/* LINKS DE NAVEGAÇÃO (DESKTOP) */}
        <div className="hidden md:flex items-center gap-8 text-xs font-tech font-bold uppercase tracking-widest text-stone-700">
          {navLinks.map((link) => (
            <TransitionLink
              key={link.name}
              href={link.href}
              className="hover:text-iba-green transition-colors py-1"
            >
              {link.name}
            </TransitionLink>
          ))}
        </div>

        {/* BOTÃO VISITAR / AÇÃO + BOTÃO HAMBURGUER (MOBILE) */}
        <div className="flex items-center gap-3">
          <TransitionLink
            href="/sobre"
            className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-iba-ochre hover:bg-iba-ochre/90 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-sm"
          >
            Visitar
            <ArrowUpRight className="w-3.5 h-3.5" />
          </TransitionLink>

          {/* BOTÃO DO MENU MOBILE */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full text-stone-800 hover:bg-stone-100 transition-colors focus:outline-none"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* MENU DROPDOWN MOBILE (ABRE AO CLICAR NO HAMBURGUER) */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-3xl border border-stone-200 shadow-2xl p-6 flex flex-col gap-4 animate-fadeIn z-50">
          <div className="flex flex-col gap-3 text-center">
            {navLinks.map((link) => (
              <TransitionLink
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 px-4 rounded-xl text-sm font-tech font-bold uppercase tracking-widest text-stone-800 hover:bg-iba-green/10 hover:text-iba-green transition-all"
              >
                {link.name}
              </TransitionLink>
            ))}
          </div>

          <div className="pt-4 border-t border-stone-200 flex flex-col gap-3">
            <TransitionLink
              href="/sobre"
              onClick={() => setIsOpen(false)}
              className="w-full py-3.5 rounded-xl bg-iba-ochre text-white font-bold text-xs uppercase tracking-wider text-center shadow-md flex items-center justify-center gap-2"
            >
              Visitar a 2IBA
              <ArrowUpRight className="w-4 h-4" />
            </TransitionLink>
          </div>
        </div>
      )}
    </header>
  );
}