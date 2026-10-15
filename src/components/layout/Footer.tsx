import Link from "next/link";
import { MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#FAF8F5] pt-16 pb-12 px-6 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-stone-200">
        {/* Coluna 1: Identidade Institucional */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="2IBA Logo" className="w-10 h-10 object-contain rounded-full bg-white shadow-sm border border-stone-200" />
            <div>
              <span className="font-serif font-bold text-[#1c2618] text-lg tracking-tight block">2IBA Areias</span>
              <span className="text-[10px] font-tech text-iba-green font-bold uppercase tracking-widest block">Recife - PE</span>
            </div>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed font-sans">
            Crescendo em Cristo, acolhendo e servindo em amor. Uma comunidade bíblica viva e acolhedora no coração de Areias.
          </p>
        </div>

        {/* Coluna 2: Navegação */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm font-bold text-[#1c2618] uppercase tracking-wider">Navegação</h4>
          <ul className="space-y-2 text-xs font-tech text-stone-600">
            <li><Link href="/" className="hover:text-iba-green transition">Início</Link></li>
            <li><Link href="/sobre" className="hover:text-iba-green transition">Sobre a 2IBA</Link></li>
            <li><Link href="/agenda" className="hover:text-iba-green transition">Agenda de Cultos</Link></li>
            <li><Link href="/galeria" className="hover:text-iba-green transition">Galeria de Fotos</Link></li>
            <li><Link href="/oracao" className="hover:text-iba-green transition">Pedidos de Oração</Link></li>
          </ul>
        </div>

        {/* Coluna 3: Acolhimento & Redes */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm font-bold text-[#1c2618] uppercase tracking-wider">Acolhimento</h4>
          <ul className="space-y-2 text-xs font-tech text-stone-600">
            <li><Link href="/ministerios" className="hover:text-iba-green transition">Ministérios</Link></li>
            <li><Link href="/sobre" className="hover:text-iba-green transition">Missão & Visão</Link></li>
            <li><Link href="/agenda" className="hover:text-iba-green transition">2IBA Kids</Link></li>
            <li>
              <a
                href="https://www.instagram.com/2ibareias/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-iba-green transition inline-flex items-center gap-1"
              >
                Instagram Oficial <ExternalLink className="w-3 h-3" />
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 4: Contato & Localização */}
        <div className="space-y-3">
          <h4 className="font-serif text-sm font-bold text-[#1c2618] uppercase tracking-wider">Contato & Local</h4>
          <p className="text-xs text-stone-600 leading-relaxed flex items-start gap-2">
            <MapPin className="w-4 h-4 text-iba-green shrink-0 mt-0.5" />
            <span>R. Dona Ana Aurora, 203 - Areias, Recife - PE</span>
          </p>
          <div className="pt-2">
            <a
              href="https://maps.app.goo.gl/bE1DeU3WRcTgM8Fa9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-stone-200 hover:border-iba-green hover:text-iba-green text-xs font-tech font-bold text-stone-700 transition shadow-sm"
            >
              <ExternalLink className="w-3.5 h-3.5" /> Ver no Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Direitos Reservados e Assinatura do Desenvolvedor */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-tech text-stone-500">
        <p className="text-center md:text-left">
          © 2026 Segunda Igreja Batista de Areias - 2IBA. Todos os direitos reservados.
        </p>
        <p className="text-center md:text-right">
          Desenvolvido por{" "}
          <a
            href="https://github.com/wesleyluizms"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#1c2618] hover:text-iba-green transition underline underline-offset-2"
          >
            Wesley Luiz Moreira da Silva
          </a>
        </p>
      </div>
    </footer>
  );
}
