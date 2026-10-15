"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="rounded-full bg-white/90 backdrop-blur-md border border-stone-200/80 shadow-md max-w-5xl mx-auto px-6 py-3 flex items-center justify-between w-full">
        {/* Lado Esquerdo: Logo e Marca */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
          <img
            src="/logo.png"
            alt="2iba Logo"
            className="w-8 h-8 object-contain rounded-full bg-white shadow-sm transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLElement).style.display = "none";
            }}
          />
          <span className="font-heading font-bold text-sm tracking-wider text-[#1c2618] uppercase">2IBA</span>
        </Link>

        {/* Centro: Links de Navegação estritamente CENTRALIZADOS */}
        <div className="hidden md:flex items-center gap-6 justify-center flex-1 mx-4 text-xs font-semibold text-stone-600">
          <Link
            href="/"
            className={`transition-colors duration-200 hover:text-iba-ochre ${pathname === "/" ? "text-iba-ochre font-bold" : ""}`}
          >
            Início
          </Link>
          <Link
            href="/sobre"
            className={`transition-colors duration-200 hover:text-iba-ochre ${pathname.startsWith("/sobre") ? "text-iba-ochre font-bold" : ""}`}
          >
            Sobre
          </Link>
          <Link
            href="/agenda"
            className={`transition-colors duration-200 hover:text-iba-ochre ${pathname === "/agenda" ? "text-iba-ochre font-bold" : ""}`}
          >
            Agenda
          </Link>
          <Link
            href="/galeria"
            className={`transition-colors duration-200 hover:text-iba-ochre ${pathname === "/galeria" ? "text-iba-ochre font-bold" : ""}`}
          >
            Galeria
          </Link>
          <Link
            href="/ministerios"
            className={`transition-colors duration-200 hover:text-iba-ochre ${pathname === "/ministerios" ? "text-iba-ochre font-bold" : ""}`}
          >
            Ministérios
          </Link>
        </div>

        {/* Lado Direito: Botão de Ação VISITAR */}
        <Link
          href="/#localizacao"
          className="px-5 py-2.5 rounded-full bg-iba-ochre hover:bg-iba-ochre-hover text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-105 shadow-[0_4px_15px_rgba(191,139,22,0.3)] shrink-0"
        >
          Visitar
        </Link>
      </nav>
    </header>
  );
}
