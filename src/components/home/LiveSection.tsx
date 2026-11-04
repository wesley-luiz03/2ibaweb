import React from "react";
import { Video, Radio, ExternalLink } from "lucide-react";

export function LiveSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* ETIQUETA / BADGE */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-iba-green/10 text-iba-green text-xs font-tech font-bold uppercase tracking-widest mb-6 border border-iba-green/20">
          <span className="w-2 h-2 rounded-full bg-iba-green animate-pulse"></span>
          Cultos Online
        </div>

        {/* TÍTULO PRINCIPAL */}
        <h2 className="font-heading text-4xl sm:text-6xl font-extrabold text-[#1c2618] tracking-tight leading-tight mb-6">
          Conectados na Palavra, onde quer que você esteja.
        </h2>

        {/* DESCRIÇÃO */}
        <p className="text-stone-700 text-base sm:text-lg font-sans leading-relaxed mb-12 max-w-2xl">
          Não pôde estar presente no templo? Participe conosco da transmissão ao vivo dos nossos cultos dominicais e cultos de oração. Assista à última transmissão ou acompanhe pelo nosso canal.
        </p>

        {/* PLAYER DO YOUTUBE COM A ÚLTIMA TRANSMISSÃO */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-xl border border-stone-200 bg-stone-900 mb-10 relative">
          <iframe
            className="w-full h-full absolute inset-0"
            src="https://www.youtube.com/embed/KNIatm_A6HA?si=BX2GaDFZ83frrE2r"
            title="Última Transmissão 2IBA"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* BOTÕES DE AÇÃO */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="https://www.youtube.com/watch?v=KNIatm_A6HA"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105"
          >
            <Radio className="w-4 h-4 animate-pulse" />
            ASSISTIR AO VIVO NO YOUTUBE
            <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
          </a>

          <a
            href="https://www.youtube.com/@SegundaIgrejaBatistadeAreias" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-iba-ochre hover:bg-iba-ochre/90 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105"
          >
            <Video className="w-4 h-4" />
            INSCREVER-SE NO CANAL
            <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
          </a>
        </div>

      </div>
    </section>
  );
}